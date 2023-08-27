import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image,Stack,Text,Heading,Divider,ButtonGroup,Button, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,useDisclosure,
    ModalCloseButton, } from '@chakra-ui/react'
export const LoanCard = ({id, name,img,lpDate, amt,status,emiAmt}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
  return (
    <>
    <Card maxW='sm'>
  <CardBody textAlign="left">
    <Image
      src={img}
      alt='credit card'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{name}</Heading>
      <Text>
       EMI Per Month: {emiAmt}
      </Text>
      <Text>
        Loan Amount: {amt}
      </Text>
      <Text color='blue.600' fontSize='xl'>
        Status: {status ? "Active" : "Dormant"}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue' onClick={onOpen}>
        View Details
      </Button>
      
    </ButtonGroup>
  </CardFooter>
</Card>
<Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
        />
        <ModalContent>
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>You have an {name} with a principal amount of ₹{amt}. The last payment was made on {lpDate} and the monthly EMI is ₹{emiAmt}. The loan account is currently {(status) ? "active" : "inactive"}</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
</>
  )
}
