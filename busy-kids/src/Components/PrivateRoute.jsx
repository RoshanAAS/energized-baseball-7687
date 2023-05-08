
import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
   
    const isAuth  = useSelector((state) => state.authReducer.isAuth);

       
    if(!isAuth) {

          console.log(isAuth)
            return <Navigate to="/signin" />
        }
        
       return children;
}

export default PrivateRoute