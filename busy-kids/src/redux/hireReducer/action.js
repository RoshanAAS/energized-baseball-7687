
import axios from 'axios'
import { GET_TEACHER_FAILURE, GET_TEACHER_REQUEST, GET_TEACHER_SUCCESS, POST_HEIRE_STATUS } from './actionType'

  export const getTeacherData=(param)=> async(dispatch)=>{
      
        dispatch({type:GET_TEACHER_REQUEST})
     return  axios.get(`https://renderdatabase.onrender.com/teacher`,param)
      .then((res)=>{
        console.log(res.data)
        dispatch({type:GET_TEACHER_SUCCESS,payload:res.data})
      })
       .catch((err)=>{
          dispatch({type:GET_TEACHER_FAILURE})
       })
  }


  export const updateHire=({id,status})=>async(dispatch)=>{
     
     return await axios.patch(`https://renderdatabase.onrender.com/teacher/${id}`,{status:!status})
       .then((res)=>{
        dispatch({type:POST_HEIRE_STATUS,payload:id})
       })
  }

