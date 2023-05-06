import React from 'react'
import Sidebar from '../Components/Sidebar'
import TeacherList from '../Components/TeacherList'
import { Stack ,Box} from '@chakra-ui/react'
import styled from '@emotion/styled'

export const Hire = () => {
  return (
     

        <Box   style={{display:'flex',gap:'10px'}}>
        <Box className='sidebar' style={{border:'1px solid red',}}>
        <Sidebar/>
        </Box>
        <Box style={{border:'1px solid red', width:"85%"}}>
           <TeacherList/>
        </Box>
        </Box>


       
  
  )
}
// spacing={0} gap={10}  direction='row'

const DIV=styled.div`
   /* width: 90%; */
   /* margin: auto; */
   
     @media screen and (max-width:480px) and (min-width:200px){
/*      
       .sidebar{
         width:50%;
         background-color:black;
       } */
      

    }

 
`