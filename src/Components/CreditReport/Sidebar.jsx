import React from 'react';
import { Box, Flex, Icon,Heading, VStack } from '@chakra-ui/react';

function Sidebar({ onItemClick }) {
  return (
    <Flex height="100%" mt={-1}>
    <Box width="100%" bg="#34eb9b" color="white" p="4" paddingTop="20%">
      <VStack spacing="4" align="flex-start">
        {/* Personal Information */}
        <Box bg='#8be8cc' borderRadius="5px" w='100%' p={4} color='white'>
        <Flex align="center" style={{color:"black"}} onClick={() => onItemClick('personal')}
        cursor="pointer">  <Heading as='h5' size='sm'>
        Personal Information </Heading>
        </Flex>
        </Box>

        {/* Account Information */}
        <Box bg='#8be8cc' borderRadius="5px" w='100%' p={4} color='white'>
        <Flex align="center"  style={{color:"black"}}  onClick={() => onItemClick('account')}
        cursor="pointer">  <Heading as='h5' size='sm'>
          Account Information </Heading>
        </Flex>
        </Box>
        {/* Calculate EMI */}
        <Box bg='#8be8cc' borderRadius="5px" w='100%' p={4} color='white'>
        <Flex align="center"  style={{color:"black"}} onClick={() => onItemClick('calculateEMI')}
        cursor="pointer">  <Heading as='h5' size='sm'>
          Calculate EMI </Heading>
        </Flex>
        </Box>
      </VStack>
    </Box>
    </Flex>
  );
}

export default Sidebar;
