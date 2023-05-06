


import { Box,Input,InputRightElement,InputGroup } from '@chakra-ui/react'
import {Search2Icon} from '@chakra-ui/icons'
// import styled from '@emotion/styled'
import React from 'react'

const Sidebar = () => {

  const handalsearch=()=>{
     console.log()
  }
  return (
    <Box>
        <Box>
        <InputGroup>
        <Input 
        style={{
            width:'100%',
            border: '1px solid',
            borderColor: 'gray.200',
            background: 'gray.50',
            borderRadius: 'full',
        }}  placeholder='Search Teacher' size='sm'/>
         <InputRightElement children={ <Search2Icon />} />
         
         </InputGroup>
        </Box>
    

    </Box>
  )
}

export default Sidebar

// const DIV=styled.div`
//   @media screen and (min-width:480px){
//      width:550px;
//   }
// `