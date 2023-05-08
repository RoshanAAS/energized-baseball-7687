import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../Pages/About";
import SignupCard from "./authcom/signup/Signup";
import { Hire } from "../Pages/Hire";
import Home from '../Pages/Home'
import { CarLoanPage } from "../Pages/CarLoanPage";
import {HomeLoanPage} from '../Pages/HomeLoanPage';
import {GoldLoanPage} from '../Pages/GoldLoanPage';
import  SignUpModal from './authcom/signup/SignupModal'
import SignInModal from './authcom/signin/SigninModal'
import { Game } from "../Pages/Game";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/signup' element={<SignUpModal/>} />
      <Route path='/signin' element={<SignInModal/>}/> 
      <Route path='/hire' element={<Hire/>} />
      <Route path='/car-loan' element={<CarLoanPage/>} />
      <Route path='/home-loan' element={<HomeLoanPage/>} />
      <Route path='/gold-loan' element={<GoldLoanPage/>} />
      <Route path='/play-game' element={<Game/>} />

    </Routes>
  );
};

export default MainRoutes;
