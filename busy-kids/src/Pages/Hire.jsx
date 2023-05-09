import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import TeacherList from '../Components/TeacherList'
import {Box} from '@chakra-ui/react'

import Pagination from '../Components/Pagination'
import { useSearchParams } from 'react-router-dom'


export const Hire = () => {

    const [searchparam]=useSearchParams()

    const initpage=searchparam.get('page')

  const [page,setpage]=useState(initpage||1)
  return (
     
        <Box>
        <Box  style={{display:'flex',gap:'5px',marginTop:'25px'}}>
        <Box style={{boxShadow:
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
              height:'90vh',
              
          }}>
        <Sidebar page={page}/>
        </Box>
      
        <Box style={{width:'85%',margin:'auto',
        boxShadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
      
      }}>
           <TeacherList/>
        </Box>
        </Box>


       <Box style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',margin:'30px auto'}}>
        <Pagination setpage={setpage} page={page} />
      </Box>

    </Box>
       
  
  )
}


// // const DIV=styled.div`
  
// //  /* position: fixed;
// // top: 0;
// // left: 0;
// // width: 250px; //Change this value to adjust the width of the sidebar 
// // height: 100%; /* Change this value to adjust the height of the sidebar */
// // /* background-color: #f1f1f1;
// // padding: 20px;
// // box-sizing: border-box;  */
   
// //      @media screen and (max-width:480px) and (min-width:200px){
// // /*      
// //        .sidebar{
// //          width:50%;
// //          background-color:black;
// //        } */
      

// //     }

 
// `