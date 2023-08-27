import React, { useEffect, useState } from 'react';
import { Box,Select, Button,Text, Flex, useMediaQuery,SimpleGrid  } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { store } from '../../Redux/store';
import { CreditCard } from './CreditCard';
import { LoanCard } from './LoanCard';

const creditCard=[
    {
        id:1,
        limit:40000,
        name:"YES Bank Cashback Plus",
        img:"https://www.yesbank.in/content/published/api/v1.1/assets/CONT3B2FEC28787241D58F0F0EFA32E93C17/native?cb=_cache_835d&channelToken=21f7ccfa2fc3401091938f541a6f8f2a",
        lpDate:"21 May 2021",
        lpAmt: 7000,
        pdue:0,
        status:false,
    },
    {
        id:2,
        limit:70000,
        name:"Axis Bank Freecharge",
        img:"https://cdn.zeebiz.com/sites/default/files/2019/08/28/99259-firstdigital-credit-card.png",
        lpDate:"10 March 2020",
        lpAmt: 20000,
        pdue:15000,
        status:true,
    },
    {
        id:3,
        limit:80000,
        name:"ICICI Bank Amazon Pay",
        img:"https://cardinsider.com/wp-content/uploads/2021/06/Icici-coral-card.png",
        lpDate:"30 January 2023",
        lpAmt: 8000,
        pdue:6000,
        status:true,
    },
   
    {
        id:4,
        limit:50000,
        name:"HDFC Bank Millennia",
        img:"https://v.hdfcbank.com/content/dam/hdfc-aem-microsites/new-credit-card-amp/cards/Card-Front-Back_71122_Millennia_MC.jpg",
        lpDate:"20 June 2021",
        lpAmt: 10000,
        pdue:2000,
        status:true,
    },
    
]
const  loanData=[
    {
        id:1,
        amt:5000000,
        name:"Home Loan",
        img:"https://cdnblog.etmoney.com/wp-content/uploads/2021/12/best-practices-for-home-loans.jpg",
        lpDate:"10 March 2028",
        emiAmt: 20000,
        status:true,
    },
    {
        id:2,
        amt:70000,
        name:"Education Loan",
        img:"https://www.bankofbaroda.in/-/media/project/bob/countrywebsites/india/blogs/loansborrowings/images/heres-how-to-successfully-repay-your-student-loan-debt.jpg",
        lpDate:"15 April 2020",
        emiAmt: 6000,
        status:false,
    },
    {
        id:3,
        amt:800000,
        name:"Car Loan",
        img:"https://www.indusind.com/iblogs/wp-content/uploads/Best-Car-Loan-Online-IndusInd-Bank.jpg",
        lpDate:"23 June 2028",
        emiAmt: 5000,
        status:true,
    }
]
export const Account = () => {
    const [isSmallerThan600] = useMediaQuery('(max-width: 600px)');
    const [acType, setAcType] = useState("CREDIT CARD")
    const [data, setData] = useState([])
    const [order, setOrder]=useState("")
    const [acStatus, setAcStatus] = useState("")
    
    const handleData = ()=>{
        
         if(order !== "" && acStatus !== ""){
            let newData 
        if(acType === "CREDIT CARD"){
            newData = [...creditCard]
        }else{
            newData = [...loanData]
        }
            console.log(acStatus)
            if(acStatus === "ACTIVE"){
                newData = newData.filter((item)=> item.status === true)
                console.log("active",newData)
            }else
            if(acStatus === "DORMANT"){
                newData = newData.filter((item)=> item.status === false)
                console.log("dorma",newData)
            }
            if(acType === "CREDIT CARD"){
               if(order === "asc"){
                newData.sort(function(a,b){
                    return  a.limit - b.limit
                 })
                 console.log("sort data asc", newData)
                 setData(newData)
               }else{
                newData.sort(function(a,b){
                    return  b.limit - a.limit
                 })
                 setData(newData)
               }
            }else
            if(acType === "LOAN"){
                if(order === "asc"){
                    newData.sort(function(a,b){
                        return  a.amt - b.amt
                     })
                     console.log("sort data asc", newData)
                     setData(newData)
                   }else{
                    newData.sort(function(a,b){
                        return  b.amt - a.amt
                     })
                     setData(newData)
                   }
            }
            
        }else
        if(order !== "" && acStatus === ""){
            let newData = [...data]
            if(acType === "LOAN"){
            if(order === "asc"){
                newData.sort(function(a,b){
                    return  a.amt - b.amt
                    })
                    console.log("sort data asc", newData)
                    setData(newData)
                }else{
                    newData.sort(function(a,b){
                    return  b.amt - a.amt
                    })
                    console.log("sort data asc", newData)
                    setData(newData)
                }
            }else{
                if(order === "asc"){
                    newData.sort(function(a,b){
                        return  a.limit - b.limit
                        })
                        console.log("sort data asc", newData)
                        setData(newData)
                    }else{
                        newData.sort(function(a,b){
                        return  b.limit - a.limit
                        })
                        console.log("sort data asc", newData)
                        setData(newData)
                    }
            }
        }else
        if(order === "" && acStatus !== ""){
            let newData 
            if(acType === "CREDIT CARD"){
                newData = [...creditCard]
            }else{
                newData = [...loanData]
            }
            console.log(acStatus)
            if(acStatus === "ACTIVE"){
                newData = newData.filter((item)=> item.status === true)
                console.log("active",newData)
                setData(newData)
            }else
            if(acStatus === "DORMANT"){
                newData = newData.filter((item)=> item.status === false)
                console.log("dorma",newData)
                setData(newData)
            }
        }
    }

    const handleAccount = (name)=>{
        setAcType(name)
        setOrder("")
        setAcStatus("")
    }

    
    useEffect(()=>{
        if(acType === "CREDIT CARD"){
            setData(creditCard)
        }else
        if(acType === "LOAN"){
            setData(loanData)
        }else{
            setData([])
        }
       
    },[acType])
    useEffect(()=>{
        handleData()
        console.log(acStatus,order)
    },[acStatus, order])
    console.log(data)

  return (
    <Box h="100%">
      {/* Top Section */}
      <Box h="30%" bg="gray.200" p="4">
        <Flex justify="space-around">
          <Button colorScheme="blue" onClick={()=> handleAccount("CREDIT CARD")} >CREDIT CARD</Button>
          <Button colorScheme="green" onClick={()=> handleAccount("LOAN")}>LOAN</Button>
          <Button colorScheme="red">POSTPAID</Button>
        </Flex>
      </Box>

      {/* Bottom Section */}
      <Box h="70%"  p="4">
      <Flex direction={isSmallerThan600 ? 'column' : 'row'} h="100%">
      {/* Left Section */}
      <Box
        w={isSmallerThan600 ? '100%' : '30%'}
        
        p="4"
        mb={isSmallerThan600 ? '4' : '0'} // Add margin bottom on mobile
      >
       <Text textAlign="left" fontSize="18px">Filter By Account Status</Text>
        <Select  bg='tomato'
        borderColor='tomato'
        placeholder='Select option' value={acStatus} onChange={(e)=> setAcStatus(e.target.value)}>
        <option value='ACTIVE'>ACTIVE</option>
        <option value='DORMANT'>DORMANT</option>
      </Select>
      <br />
      <Text textAlign="left" fontSize="18px">Sort By Credit Limit</Text>
      <Select  bg='tomato'
      borderColor='tomato'
      placeholder='Select option' value={order} onChange={(e)=> setOrder(e.target.value)}>
      <option value='asc'>Ascending</option>
      <option value='desc'>Descending</option>
    </Select>
      </Box>

      {/* Right Section */}
      <Box w={isSmallerThan600 ? '100%' : '70%'}  p="4">
      <Text fontSize="20px" margin="10px">{acType} INFORMATION</Text>
        <SimpleGrid columns={isSmallerThan600 ? 1 : 2} spacing={4}>
        {
            (acType === "CREDIT CARD") ?
            data.map((item)=> <CreditCard key={item.id} {...item} /> ):
            data.map((item)=> <LoanCard key={item.id} {...item} /> )
        }
        </SimpleGrid>
      </Box>
    </Flex>
      </Box>
    </Box>
  );
};
