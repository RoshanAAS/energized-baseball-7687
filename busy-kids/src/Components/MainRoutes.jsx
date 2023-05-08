import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../Pages/About";
// import SignupCard from "./authcom/signup/Signup";
import { Hire } from "../Pages/Hire";
import Home from '../Pages/Home'
import { CarLoanPage } from "../Pages/CarLoanPage";
import {HomeLoanPage} from '../Pages/HomeLoanPage';
import {GoldLoanPage} from '../Pages/GoldLoanPage';
import SignupCard from "./authcom/signup/Signup";
import SigninCard from './authcom/signin/SigninCard'
import { Game } from "../Pages/Game";
import { Calculator } from "./calculator";
import Checkoutpage from "../Pages/Checkoutpage";
import PrivateRoute from "./PrivateRoute";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/signup' element={<SignupCard/>} />
      <Route path='/signin' element={<SigninCard/>}/> 
      <Route path='/hire' element={
     
         <Hire/>
  
      
      
      } />
      <Route path='/car-loan' element={<CarLoanPage/>} />
      <Route path='/home-loan' element={<HomeLoanPage/>} />
      <Route path='/gold-loan' element={<GoldLoanPage/>} />
      <Route path='/play-game' element={<Game/>} />
       <Route path="/checkout" element={<Checkoutpage />} />
        <Route path="/caluculator" element={<Calculator />} />
    </Routes>
  );
};

export default MainRoutes;
