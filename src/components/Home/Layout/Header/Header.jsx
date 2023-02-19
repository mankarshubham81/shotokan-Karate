import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, useDisclosure } from '@chakra-ui/react';
import React from 'react'
import { ColorModeSwitcher } from './../../../../ColorModeSwitcher';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import { VStack } from '@chakra-ui/react';
import { Link} from 'react-router-dom';

const LinkButton = ({url="/",title="Home"}) => (
  <Link to={url}>
    <Button variant={'ghost'} >{title}</Button>
  </Link>
)

function Header() {

  const { isOpen, onOpen, onClose } = useDisclosure();

  let isAuthenticated = true;
  const user = {
    role: "admin",
  }
  const logoutHandler = () => {
    console.log('Logout log');
  };

  return <>
    <ColorModeSwitcher/>
    <Button onClick={onOpen} bg={'red.500'} width="12" height={'12'} rounded="full" position={'fixed'} top='6' left='6'>
      <RiMenu5Fill/>
    </Button>
    <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay backdropFilter={"blur(3px)"} />
      <DrawerContent>
        <DrawerHeader>Open Resource</DrawerHeader>
        <DrawerBody>
          <VStack spacing={'4'} alignItems={'flex-start'}>
          <LinkButton url="/" title="Home" />
          <LinkButton url="/courses" title="Browse All Courses" />
          <LinkButton url="/request" title="Request a Course" />
          <LinkButton url="/contact" title="Contact" />
          <LinkButton url="/about" title="About" />
          <HStack justifyContent={'space-evenly'} position={'absolute'} bottom='2rem' width="80%">
          { isAuthenticated ? 
          (<>
            <VStack>
              <HStack>
                <Link to={'/profile'} >
                  <Button variant={'ghost'} backgroundColor={'purple.400'} colorScheme={'white'} >Profile</Button>
                </Link>
                  <Button variant={'ghost'} backgroundColor={'red.400'} colorScheme={'white'} paddingX={"2"} onClick={logoutHandler} > <RiLogoutBoxLine/> Logout</Button>
              </HStack>

              {
                user && user.role === "admin" && <Link to="/admin/dashboard">
                  <Button variant={'ghost'} backgroundColor={'teal.300'}  colorScheme={'white'}  paddingX={"2"} >
                    <RiDashboardFill/>
                    DashBoard
                  </Button>
                </Link>
              }
            </VStack>
          </>)
          : 
          (<>
            <Link to={'/login'} >
              <Button colorScheme={'purple'} >Login</Button>
            </Link>
            <p>OR</p>
            <Link to={'/register'} >
              <Button colorScheme={'purple'} >Sign Up</Button>
            </Link>
          </>)

          }
          </HStack>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  </>
}

export default Header;

