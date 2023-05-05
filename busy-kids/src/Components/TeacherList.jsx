

import React from 'react'
import {SimpleGrid} from '@chakra-ui/react'
import TeacherCard from './TeacherCard'
const TeacherList = () => {
    const arr= new Array(5).fill("")
  return (
    <SimpleGrid  columns={{sm: 2, md: 3,lg:4,base:1}} spacing='10px'>
        {
            arr.map((el)=>{
              return <TeacherCard/>
            })
        }
  </SimpleGrid>
  )
}

export default TeacherList