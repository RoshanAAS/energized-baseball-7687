import React from 'react'
import Sidebar from '../Components/Sidebar'
import TeacherList from '../Components/TeacherList'
import { Stack ,Box} from '@chakra-ui/react'

export const Hire = () => {
  return (
      <Box style={{width:'90%',margin:'auto'}}>
        <Stack  spacing={5}  direction='row' >
        <Box style={{border:'1px solid red',width:'15%'}}>
        <Sidebar/>
        </Box>
        <Box style={{border:'1px solid red',width:'80%'}}>
        <TeacherList/>
        </Box>
        </Stack>
        </Box>
  
  )
}
