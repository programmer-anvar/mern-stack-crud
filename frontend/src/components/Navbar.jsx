import { Container, Flex } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <Container maxW={'1140px'}>
     <Flex h={'16'}
      alignItems={'center'} 
      justifyContent={'space-between'}
      flexDir={{
        base:'column',
        md:'row'
      }}
      >
       
     </Flex>
    </Container>
  )
}

export default Navbar
