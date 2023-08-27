import React from 'react'
import { Box,Heading,Stack,StackDivider, Text, Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
export const Personal = () => {
  return (
    <>
    <Card>
  <CardBody>
    <Text textAlign="left">CIBIL score, also known as a credit score, is a numerical representation of an individual's creditworthiness. It is based on credit history and financial behavior, reflecting how likely a person is to repay loans and credit obligations.A higher CIBIL score indicates better creditworthiness, increasing the likelihood of loan approvals and favorable terms.</Text>
  </CardBody>
</Card>
<br />
    <Card>
  <CardHeader>
    <Heading size='lg'>Personal Information</Heading>
  </CardHeader>

  <CardBody textAlign="left">
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='sm' textTransform='uppercase'>
          Name
        </Heading>
        <Text pt='2' fontSize='lg'>
          Luffy Doe
        </Text>
      </Box>
      <Box>
        <Heading size='sm' textTransform='uppercase'>
          Email
        </Heading>
        <Text pt='2' fontSize='lg'>
          luffy@gmail.com
        </Text>
      </Box>
      <Box>
        <Heading size='sm' textTransform='uppercase'>
          DOB
        </Heading>
        <Text pt='2' fontSize='lg'>
          January 10, 2001
        </Text>
      </Box>
    </Stack>
  </CardBody>
</Card>
<br />
<TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>The form of identification used is PAN.</TableCaption>
    <Thead>
      <Tr>
        <Th>PAN No</Th>
        <Th>Issue Date</Th>
        <Th>DOB</Th>
        <Th>Gender</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>ETRCC7857</Td>
        <Td>30/05/2015</Td>
        <Td>10, January, 2001</Td>
        <Td>Male</Td>
      </Tr>
      
    </Tbody>
    
  </Table>
</TableContainer>
</>
  )
}
