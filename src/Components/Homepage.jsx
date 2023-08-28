import React from "react";
import {Box,Button,Text,Heading,Grid,GridItem,Image, Center} from "@chakra-ui/react"
// import { color } from "framer-motion";

export default function Homepage(){
  const bcolor = "#adf7d8"
  const color = "#34eb9b"
  return (
    
    <>
    <Box maxW="100%" height="100vh" 
    backgroundColor={color}  display="flex" 
    flexDirection="row" justifyContent="center" alignItems="center">
      <Box display="flex" flexDirection="column" width="50%"
       justifyContent="center" alignItems="center">
        <Image w="50%"  h="400px" src="https://i.pinimg.com/originals/d2/8b/c6/d28bc645531e5896e813719dbe59775e.png"></Image>
      </Box>
      <Box display="flex" flexDirection="column" width="50%" justifyContent="center" alignItems="center">
     <Heading w="70%">Banks Check Your CIBIL Score Before Approving Your Loan</Heading>   
     <Button width="30%" padding="8px 15px"
              border="none" borderRadius="30px"
              color={bcolor} textAlign="center"
              backgroundColor="black">Get Free Cibil Score & Report</Button>
     <Text w="70%">Already have a CIBIL account?Log In</Text>   
     <Text w="70%">Don't worry. Checking your own credit score won't
      lower it.</Text>   
          
      </Box>
    
    </Box>
    <Box width="100%" h="100px" display="flex" justifyContent="center">
                <Center>

                
                    <Text fontSize="30px" fontWeight="600">
                    Learn. Plan. Protect. All in one place. Here’s how.

                    </Text>
                </Center>

                {/* </Center> */}
            </Box>

            {/* 4 */}
            <Box maxW="100%" display="flex"  alignItems="center" justifyContent="center" margin="auto">

            <Grid width="80%"
                templateColumns='repeat(2, 1fr)'
                templateRows='repeat(auto,1fr)' gap="4"
              >
                <GridItem w='500px' h='100px' bg={bcolor}   >
                  <Text fontSize="20px" >24x7 credit monitoring with CIBIL alerts</Text>
                  <Text fontSize="15px" >Safeguard against identity theft with email & SMS notifications.</Text>
                </GridItem>
                <GridItem w='500px' h='100px' bg={bcolor}    >
                  <Text fontSize="20px">Make the right credit decisions with Score Simulator</Text>
                  <Text fontSize="15px">Find out how your credit actions can impact your CIBIL Score.</Text>
                </GridItem>
                <GridItem w='500px' h='100px' bg={bcolor}  >
                  <Text fontSize="20px">Unlimited access to your CIBIL dashboard</Text>
                  <Text fontSize="15px">Get regular updates to your CIBIL Score & Report.</Text>
                </GridItem>
                <GridItem w='500px' h='100px'  bg={bcolor}     >
                  <Text fontSize="20px">Get personalized loan offers
</Text>
                  <Text fontSize="16px">Tailored loan offers based on your latest CIBIL Score.</Text>
                </GridItem>
           

            </Grid>
            </Box>
            <Box width="100%" h="100px" display="flex" justifyContent="center">
              

            <Center>

                
                    <Text fontSize="30px" fontWeight="600">
                    Everything you need to stay loan-ready, always.

                    </Text>
          
                </Center>
                {/* </Center> */}
            </Box>
            <Box width="100%" h="50px" display="flex" justifyContent="center">
                <Center>

                <Button width="100%" padding="10px 20px"
              border="none" borderRadius="20px"
              color={bcolor} textAlign="center"
              backgroundColor="black">Get Cibil Score </Button>

                 
                </Center> </Box>

                <Box maxW="100%"  h="80vh"
                marginTop="20px" bg="#101010" color="white">
    <Center display="flex" 
                 flexDirection="column" 
                 alignItems="center"
                  justifyContent="center" margin="auto">

               <Heading >Help Center</Heading>
               <Text pb="10px">Learn about CIBIL and how we can help you.</Text>
                 <Box>
                  
            <Grid width="80%"  pt="10px"
                templateColumns='repeat(3, 1fr)'
                templateRows='repeat(1,1fr)' gap="20"
              >
                <GridItem w='300px' 
                h='320px' bg={bcolor} color="grey" pt="10px" 
                  >
                  <Image  pt="10px" w="20%" src="https://creditfolio.netlify.app/static/media/faq.5410d953ed6cb31e1b9a1206726ce751.svg"></Image>
                  <Text pt="10px" fontSize="20px" >FAQs</Text>
                  <Text pt="10px" fontSize="15px" >Get quick answers to your most common questions.</Text>
                  <Button width="30%" height="10%"
            border="none"  borderRadius="30px" mt="10px"
            backgroundColor={color}>Know more</Button>

                </GridItem>
                <GridItem w='300px' 
                h='320px' bg={bcolor} color="grey" pt="10px" 
                  >
                  <Image  pt="10px" w="20%" src="https://creditfolio.netlify.app/static/media/report.9797e116b5c264ead63698cb44c93e12.svg"></Image>
                  <Text pt="10px" fontSize="20px" >Why your CIBIL Score 
</Text>
                  <Text pt="10px" fontSize="15px" >Learn how it matters not only to you, but also to lenders.</Text>
                  <Button width="30%" height="10%"
            border="none"  borderRadius="30px" mt="10px"
            backgroundColor={color}>Know more</Button>

                </GridItem>
                <GridItem w='300px' 
                h='320px' bg={bcolor} color="grey" pt="10px" 
                  >
                  <Image  pt="10px" w="20%" src="https://creditfolio.netlify.app/static/media/approve.d8624af38cc2d3050e9e67e70ac3e6b1.svg"></Image>
                  <Text pt="10px" fontSize="20px" >Loan approval process</Text>
                  <Text pt="10px" fontSize="15px" >Understand how banks evaluate your loan application.</Text>
                  <Button width="30%" height="10%"
            border="none"  borderRadius="30px" mt="10px"
            backgroundColor={color}>Know more</Button>

                </GridItem>
               
                
           

            </Grid>
                 </Box>
                </Center>

                {/* </Center> */}
            </Box>

            <Center >
              <Image w="60%" src="https://creditfolio.netlify.app/static/media/banner.36e8aa3871511aee90a4422d2cf9953f.svg"></Image>
            
            </Center>
            <Center pb="30px">
            <Button width="30%" padding="10px 20px"
              border="none" borderRadius="20px"
              color={bcolor} textAlign="center"
              backgroundColor="black">GET START NOW </Button>

            </Center>
           

      
    </>
  )
}