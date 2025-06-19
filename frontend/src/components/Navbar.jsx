import { Button, Container, Flex, HStack, Link, Text,ClientOnly, IconButton, Skeleton  } from '@chakra-ui/react'
import React from 'react'
import { useColorMode } from "./ui/color-mode"
import { LuMoon, LuSun } from "react-icons/lu"



const Navbar = () => {
  const { toggleColorMode, colorMode } = useColorMode()
  return (
    <Container maxW={'1140px'} px={4} >
     <Flex h={'16'}
      alignItems={'center'} 
      justifyContent={'space-between'}
      flexDir={{
        base:'column',
        md:'row'
      }}
      >
       <Text 
       fontSize={{base:'22',sm:'28'}}
      //  fontWeight={bold}
       textTransform={'uppercase'}
       textAlign={'center'}
       bgGradient={'linear(to-r),cyn.400, blue.500'}
       bgClip={"text"}
       >
        <Link to={'/'}>Prodact store</Link>

       

       </Text>

       <HStack spacing={2} alignItems={'center'}>
            <Link>
            <Button>
              +
              {/* <FaPlus/> */}
            </Button>
            </Link>
            <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <IconButton onClick={toggleColorMode} variant="outline" size="sm">
        {colorMode === "light" ? <LuSun /> : <LuMoon />}
      </IconButton>
    </ClientOnly>
        </HStack>
     </Flex>
    </Container>
  )
}

export default Navbar
