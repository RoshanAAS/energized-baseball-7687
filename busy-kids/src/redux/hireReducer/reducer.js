import { GET_TEACHER_FAILURE, GET_TEACHER_REQUEST, GET_TEACHER_SUCCESS } from "./actionType"



const initState={
    teacherData:[],
    isLoading:false,
    isError:false
}

  export const reducer=(state=initState,{type,payload})=>{

       switch(type){

           case GET_TEACHER_REQUEST:{
              return {...state,isLoading:true}
           }
           case GET_TEACHER_SUCCESS:{
              return {...state, teacherData:payload,isLoading:false}
           }
           case GET_TEACHER_FAILURE:{
               return {...state,isError:true,isLoading:false}
           }
          default:{
            return state
          }
       }

  }