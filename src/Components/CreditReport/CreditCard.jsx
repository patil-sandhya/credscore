import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image,Stack,Text,Heading,Divider,ButtonGroup,Button, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,useDisclosure,
    ModalCloseButton, } from '@chakra-ui/react'
export const CreditCard = ({id, name,limit,img,lpDate, lpAmt,pdue,status}) => {
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
        Credit Limit: {limit}
      </Text>
      <Text>
        Payment Due: {pdue}
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
            <Text>Your credit card has a maximum spending limit of ₹{limit}. The most recent payment of ₹{lpAmt} was made on {lpDate}. Currently, there is a remaining payment due of ₹{pdue}.</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
</>
  )
}
