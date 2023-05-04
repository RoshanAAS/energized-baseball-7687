import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import SignIn from '../Pages/SignIn';
import About from '../Pages/About';
import SignUp from '../Pages/SingUp';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
        </Routes>
    )
}

export default MainRoutes
