import React, { useState } from 'react';
import { Box, Button, Flex, useMediaQuery } from '@chakra-ui/react';
import { HomeLoan } from './HomeLoan';
import { CarLoan } from './CarLoan';
import { PersonalLoan } from './PersonalLoan';
import { OtherLoan } from './OtherLoan';

export const CalculateEMI = () => {
  const [isSmallerThan600] = useMediaQuery('(max-width: 600px)');
  const [curEmi, setEmi] = useState("home")
  const handleEmi = (name)=>{
    setEmi(name)
}
  return (
    <Box h="100%">
      {/* Top Section */}
      <Box h="30%" bg="gray.200" p="4">
        <Flex justify="space-around">
          <Button onClick={()=> handleEmi("home")} colorScheme="blue">Home Loan</Button>
          <Button onClick={()=> handleEmi("car")} colorScheme="green">Car Loan</Button>
          <Button onClick={()=> handleEmi("personal")} colorScheme="red">Personal Loan</Button>
          <Button onClick={()=> handleEmi("other")} colorScheme="facebook">Other Loan</Button>
        </Flex>
      </Box>

      {/* Bottom Section */}
      <Box h="45%"  p="4">
        {
          (curEmi === "home") && <HomeLoan />
        }
        {
          (curEmi === "car") && <CarLoan />
        }
        {
          (curEmi === "personal" && <PersonalLoan /> )
        }
        {
          (curEmi === "other" && <OtherLoan />)
        }
      </Box>
      
    </Box>
  );
};
