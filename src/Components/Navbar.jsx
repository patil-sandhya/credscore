import { Link } from "react-router-dom";
import { Image, HStack, Box, Button, Divider } from '@chakra-ui/react';
import logo from '../Images/logo.ico'
import { useState } from "react";

const Navbar = () => {

  const bcolor = "#adf7d8"
  const color = "#34eb9b"

  return (
    <>

      <HStack 
        maxwidth="100%" height="50px"
      >
        <Box width="25%" display="flex" 
          justifyContent="left" alignItems="center">
          <Link to="/">
            <Box width="200px" alignItems="center" paddingTop="10px" >
              <Image src={logo} width="100%" height="100%" />
            </Box>
          </Link>
        </Box>
        <Box width="50%" display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          fontSize="18px"
          fontWeight="600"
        >


          <Link to="home"
          >
            <Button width="100%" padding="8px 15px"
              border="none" borderRadius="30px"
              color="black"
              backgroundColor={bcolor}>Home</Button>
          </Link>
          <Link to="info">

            <Button width="100%" padding="8px 15px"
              border="none" borderRadius="30px"
              color="black"
              backgroundColor={bcolor}> CreditReport</Button>
          </Link>
          <Link to="info">

            <Button width="100%" padding="8px 15px"
              border="none" borderRadius="30px"
              color="black"
              backgroundColor={bcolor}>  CreditEducation</Button>
          </Link>
          <Link to="blog">

            <Button width="100%" padding="8px 15px"
              border="none" borderRadius="30px"
              color="black"
              backgroundColor={bcolor}>Blog</Button>
          </Link>
        </Box>
        <Box width="25%" display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >


          <Button width="20%" height="100%" backgroundColor={bcolor}
            marginRight="10px" border="none"  >Log In</Button>

          <Button width="20%" height="100%"
            border="none"
            backgroundColor={bcolor}>Register</Button>

        </Box>

      </HStack >
      <Divider orientation='horizontal' color={color} />

      
    </>
  )
}

export default Navbar;