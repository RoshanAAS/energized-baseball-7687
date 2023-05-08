
import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const location= useLocation();

    return !isAuth? <Navigate state={location.pathname} to="/login" replace />:children
  

}

export default PrivateRoute