import React from "react";
import { Route, Routes } from "react-router-dom";
// import About from "../Pages/About";
import SignupCard from "./authcom/signup/Signup";
import SigninCard from "./authcom/signin/SigninCard";
import Home from "../pages/Home";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home/> } />
      {/* <Route path="/about" element={<About />} /> */}
      <Route path="/signin" element={<SigninCard />} />
      <Route path="/signup" element={<SignupCard />} />
    </Routes>
  );
};

export default MainRoutes;
