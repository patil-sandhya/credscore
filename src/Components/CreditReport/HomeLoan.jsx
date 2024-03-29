import React,{useState} from 'react'
import { Box, Heading, Flex, useMediaQuery, UnorderedList, ListItem, FormControl,
    FormLabel,
    Input,
  Button,
  Text,
  VStack,
  Alert,
  AlertIcon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton } from '@chakra-ui/react';


export const HomeLoan = () => {
    const [isSmallerThan600] = useMediaQuery('(max-width: 600px)');
    const [amount, setAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [years, setYears] = useState('');
  const [errorAmount, setErrorAmount] = useState(false);
  const [errorInterest, setErrorInterest] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
    setErrorAmount(false);
  };

  const handleInterestChange = (event) => {
    setInterestRate(event.target.value);
    setErrorInterest(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const loanAmount = Number(amount);
    if (loanAmount <= 500000) {
      setErrorAmount(true);
      return;
    }

    const interest = Number(interestRate);
    if (interest < 6 || interest > 9) {
      setErrorInterest(true);
      return;
    }

    const loanYears = Number(years);
    const totalInterest = (loanAmount * interest) / 100 * loanYears;
    const totalAmount = loanAmount + totalInterest;
    const emi = totalAmount / (loanYears * 12);

    setEmi(emi);
    setTotalInterest(totalInterest);
    setTotalAmount(totalAmount);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  
    
  
  return (
    <Flex direction={isSmallerThan600 ? 'column' : 'row'} h="100%">
    {/* Left Section */}
    <Box
      w={isSmallerThan600 ? '100%' : '40%'}
      bg="#90cdc3"
      p="4"
      mb={isSmallerThan600 ? '4' : '0'} // Add margin bottom on mobile
    >
    <Heading as='h4' size='md'>
    Home Loan
  </Heading>
  <br />
  <UnorderedList textAlign="left">
  <ListItem>A home loan offers you the chance of owning a residential property and building an asset while at the same time enjoying tax benefits. You have to pay a certain percentage of the property cost, usually up to 20%, out of your funds. The loan amount can be repaid over a fixed period as per your convenience. Both the principal loan amount and the interest repayment are eligible for tax deduction under Income Tax laws. A home loan application can be done at the bank branch, loan processing centre or online. Let us look at some tips to keep in mind while applying for a home loan</ListItem>
</UnorderedList>
    </Box>

    {/* Right Section */}
    <Box
      w={isSmallerThan600 ? '100%' : '60%'}
      bg="white"
      p="4"
    >
      Calculate EMI
      <Box p={4}>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isInvalid={errorAmount}>
            <FormLabel>Amount</FormLabel>
            <Input
              type="number"
              value={amount}
              onChange={handleAmountChange}
            />
            {errorAmount && (
              <Alert status="error">
                <AlertIcon />
                Home Loan below 500000 are rare.
              </Alert>
            )}
          </FormControl>

          <FormControl isInvalid={errorInterest}>
            <FormLabel>Interest Rate</FormLabel>
            <Input
              type="number"
              value={interestRate}
              onChange={handleInterestChange}
            />
            {errorInterest && (
              <Alert status="error">
                <AlertIcon />
                Rate of interest for Home Loan is typically between 6% to 9%
              </Alert>
            )}
          </FormControl>

          <FormControl>
            <FormLabel>Years</FormLabel>
            <Input
              type="number"
              value={years}
              onChange={(event) => setYears(event.target.value)}
            />
          </FormControl>

          <Button type="submit" colorScheme="blue">
            Calculate
          </Button>
        </VStack>
      </form>

      <Modal isOpen={showModal} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Home Loan</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Your EMI per month is {emi.toFixed(2)}</Text>
            <Text>Total interest is {totalInterest.toFixed(2)}</Text>
            <Text>Total amount is {totalAmount.toFixed(2)}</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </Box>
      </Box>
  </Flex>
  )
}
