import React, {useState, useEffect} from 'react'
import { Box, CircularProgress, CircularProgressLabel, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader,Text, DrawerBody, IconButton, useDisclosure, Grid } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Sidebar from './Sidebar'
import { Account } from './Account';
import { Personal } from './Personal';
import { CalculateEMI } from './CalculateEMI';

export const PersonalInfo = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768); // Adjust the breakpoint as needed
  const [activeSection, setActiveSection] = useState('personal'); // Default to 'personal'

  const handleSidebarItemClick = (section) => {
    setActiveSection(section);
    onClose()
  };
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <Grid
    templateColumns={['1fr', '1fr', '240px 1fr']} // Change the column widths based on your design
    gap={['0', '0', '16px']} // Gap between columns
    height="100vh"
  >
    {/* Desktop Sidebar */}
    {isDesktop && <Sidebar onItemClick={handleSidebarItemClick} />}

    {/* Mobile Toggle Button */}
    {!isDesktop && (
      <IconButton
        aria-label="Open Sidebar"
        icon={<HamburgerIcon />}
        onClick={onOpen}
        position="fixed"
        top="1rem"
        left="1rem"
        zIndex="999"
      />
    )}

    <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader></DrawerHeader>
        <DrawerBody>
          <Sidebar onItemClick={handleSidebarItemClick} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>

    {/* Content */}
    <Box p="8">
      {/* Content for the main section */}
      <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', margin:"10px" }} >
      <CircularProgress value={80} color='green.400' size='100px' >
        <CircularProgressLabel>899</CircularProgressLabel>
        
      </CircularProgress>
      <Text fontSize="20px" paddingLeft="10px">Your CIBIL Score Is 899</Text>
      </div>
      
      {activeSection === 'personal' && (<Box width="100%" padding="30px" bg="gray.200"><Personal /></Box>)}
      {activeSection === 'account' && (<Box width="100%" padding="30px" bg="gray.200"><Account /></Box>)}
      {activeSection === 'calculateEMI' && (<Box width="100%" padding="30px" bg="gray.200"><CalculateEMI /></Box>)}
    </Box>
    </Grid>
  )
}
