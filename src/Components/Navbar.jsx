import { Link } from "react-router-dom";
import { Image , HStack, Box, Button} from '@chakra-ui/react';
// import  logo from '../Images/project logo (1).png'
const  Navbar =()=>{

    return (
        <>

          <HStack width="100%" height="90px">
            <Box width="20%"  display="flex"
            justifyContent="center" >
              <Link to="/">
          <Box width="200px"  >
            {/* <Image src={logo} width="100%"  /> */}
          </Box>
              </Link>
            </Box>
            <Box width="40%"  display="flex"
            justifyContent="center"
            alignItems="center"
             fontSize="18px"
             fontWeight="600"
          >

          
          <Link to="home">
            Home
          </Link>
          <Link to="info">
            CreditReport
          </Link>
          <Link to="blog">
            Blog
          </Link>
            </Box>
            <Box width="40%"  display="flex"
            justifyContent="center"
            alignItems="center"
          
            >
           <Box width="70%" 
              fontSize="18px"
              fontWeight="600"
             display="flex"
             alignItems="center"
              justifyContent="space-around">
          <Link to="/" >
            Contact Us
          </Link>
           <Button width="50%" height="30px"  backgroundColor="#01c087">Demo</Button>
           </Box>
            </Box>


          </HStack>
        </>
    )
}

export default Navbar;