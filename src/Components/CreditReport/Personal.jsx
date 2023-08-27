import React from 'react'
import { Box,Heading,Stack,StackDivider, Text, Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { useSelector } from 'react-redux';

export const Personal = () => {
  const userData = useSelector((store)=> store.reducer.Register)
  //console.log(userData)

  function formatDate(inputDate) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(inputDate);
    return date.toLocaleDateString(undefined, options);
  }
const formattedDOB = formatDate(userData.dob);
const formattedPan = formatDate(userData.pan_issue_date);

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
          {userData.first_name} {userData.last_name}
        </Text>
      </Box>
      <Box>
        <Heading size='sm' textTransform='uppercase'>
          Email
        </Heading>
        <Text pt='2' fontSize='lg'>
          {userData.email}
        </Text>
      </Box>
      <Box>
        <Heading size='sm' textTransform='uppercase'>
          DOB
        </Heading>
        <Text pt='2' fontSize='lg'>
          {formattedDOB}
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
        <Td>{userData.pan}</Td>
        <Td>{formattedPan}</Td>
        <Td>{formattedDOB}</Td>
        <Td>{userData.gender}</Td>
      </Tr>
      
    </Tbody>
    
  </Table>
</TableContainer>
</>
  )
}
