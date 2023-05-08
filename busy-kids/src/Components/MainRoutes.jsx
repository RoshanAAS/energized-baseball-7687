import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../Pages/About";
import SignupCard from "./authcom/signup/Signup";
import { Hire } from "../Pages/Hire";
import Home from "../Pages/Home";
import { CarLoanPage } from "../Pages/CarLoanPage";
import { Calculator } from "./calculator";
import CheckoutModal from "../Pages/Checkoutmodal";
import Checkoutpage from "../Pages/Checkoutpage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<SignupCard />} />
      <Route path="/hire" element={<Hire />} />
      <Route path="/carloan" element={<CarLoanPage />} />
      <Route path="/caluculator" element={<Calculator />} />
      <Route path="/checkout" element={<Checkoutpage />} />
      {/* <Route path="/" element={} />
      <Route path="" element={} /> */}
    </Routes>
  );
};

export default MainRoutes;
