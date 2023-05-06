import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../Pages/About";
import SignupCard from "./authcom/signup/Signup";
import { Hire } from "../Pages/Hire";
import Home from '../Pages/Home'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/signup' element={<SignupCard />} />
      <Route path='/hire' element={<Hire/>} />
    </Routes>
  );
};

export default MainRoutes;
