import React from "react";
import {Box,Center,Text,Heading,Grid,GridItem,Image} from "@chakra-ui/react"
// import { color } from "framer-motion";

export default function Homepage(){
  const bcolor = "#adf7d8"
  const color = "#34eb9b"
  return (
    
    <>
    <Box maxW="100%" height="100vh" 
    backgroundColor={color}  display="flex" 
    flexDirection="column" justifyContent="center" alignItems="center">
      <Box display="flex" flexDirection="column">
     <Heading>Banks Check Your CIBIL Score Before Approving Your Loan*</Heading>   
      </Box>
      <Box display="flex" flexDirection="column">
        
      </Box>
    </Box>
    <Box width="100%" h="150px" display="flex" justifyContent="center">
                <Center >
                    <Text fontSize="30px" fontWeight="600">
                    Learn. Plan. Protect. All in one place. Here’s how.
                    </Text>

                </Center>
            </Box>

            {/* 4 */}
            <Box maxW="100%" display="flex"  alignItems="center" justifyContent="center" margin="auto">

            <Grid width="80%"
                templateColumns='repeat(2, 1fr)'
                templateRows='repeat(auto,1fr)' gap="4"
              >
                <GridItem w='500px' h='200px' bg={bcolor}   paddingTop="35px">
                  <Text fontSize="20px" >24x7 credit monitoring with CIBIL alerts</Text>
                  <Text fontSize="15px" >Safeguard against identity theft with email & SMS notifications.</Text>
                </GridItem>
                <GridItem w='500px' h='200px' bg={bcolor}     paddingTop="35px" >
                  <Text fontSize="20px">Make the right credit decisions with Score Simulator</Text>
                  <Text fontSize="15px">Find out how your credit actions can impact your CIBIL Score.</Text>
                </GridItem>
                <GridItem w='500px' h='200px' bg={bcolor}    paddingTop="35px">
                  <Text fontSize="20px">Unlimited access to your CIBIL dashboard</Text>
                  <Text fontSize="15px">Get regular updates to your CIBIL Score & Report.</Text>
                </GridItem>
                <GridItem w='500px' h='200px'  bg={bcolor}    paddingTop="35px" >
                  <Text fontSize="20px">Get personalized loan offers
</Text>
                  <Text fontSize="16px">Tailored loan offers based on your latest CIBIL Score.</Text>
                </GridItem>
           

            </Grid>
            </Box>
    </>
  )
}