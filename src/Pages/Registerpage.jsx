import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { register } from "../Redux/action";
import { useToast,Input,Select } from "@chakra-ui/react";
export function Registerpage() {
  const toast = useToast()
const dispatch=useDispatch()
    
  const user=useSelector((store)=>{
    return store.reducer.Register
  })
    const [data,setData]=useState({email:"",password:"",
  first_name:"",last_name:"",dob:"",mobile:"",gender:"",
  pan:"",pan_issue_date:""
  
  })
   
    
    const handleformsubmit=(e)=>{
        e.preventDefault()
       if(data.email && data.password && data.first_name && data.last_name && data.dob && data.mobile && data.gender && data.pan && data.pan_issue_date){
        dispatch(register(data))
        toast({
          title: 'Register SuccesFull',
          // description: "We've created your account for you.",
          status: 'success',
          position: 'top',
          duration: 3000,
          isClosable: true,
        })
       }else{
        toast({
          title: `Kindely Fill All Details`,
          position: 'top',
          isClosable: true,
          duration: 4000,
        })
       }
      
      
      
      
    }
  
  
 
    return (
      <div >
        <h1 style={{fontWeight:"bold",marginTop:"20px",marginBottom:"10px"}}>Register Page</h1>
       <form onSubmit={handleformsubmit} >
        <Input w={200} mb={3} type="email" placeholder="Enter email" onChange={(e)=>{setData({...data,email:e.target.value})}} />
        <br />
        <Input w={200} mb={3} type="password" placeholder="Create password" onChange={(e)=>{setData({...data,password:e.target.value})}} />
        <br />
        <Input w={200} mb={3}type="text" placeholder="Firstname" onChange={(e)=>{setData({...data,first_name:e.target.value})}} />
        <br />
        <Input w={200} mb={3} type="text" placeholder="Lastname" onChange={(e)=>{setData({...data,last_name:e.target.value})}} />
        <br />
        <Input w={200} mb={3} type="text" placeholder="Pan Number" onChange={(e)=>{setData({...data,pan:e.target.value})}} />
        <br />
        <label htmlFor="">DOB:-</label>
        <Input w={200} mb={3} className="button" type="date" placeholder="Lastname" onChange={(e)=>{setData({...data,dob:e.target.value})}} />
        <br />
        <label htmlFor="">PAN ISSUE:-</label>
        <Input w={200} mb={3} className="button" type="date" placeholder="Lastname" onChange={(e)=>{setData({...data,pan_issue_date:e.target.value})}} />
        <br />
        <Input w={200} mb={3} type="number" placeholder="Phone number" onChange={(e)=>{setData({...data,mobile:e.target.value})}} />
        <br />

        <Select w={200} ml={"45%"} onChange={(e)=>{setData({...data,gender:e.target.value})}} >
         <option value="">Select Gender</option>
         <option value="male">Male</option>
         <option value="female">Female</option>
         <option value="Other">Other</option>
        </Select>
        <br />
        <Input w={200} mb={3} className="button" type="submit" />
       </form>
      </div>
    );
  }
  
 