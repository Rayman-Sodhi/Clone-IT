import React from 'react';
import { Outlet } from "react-router-dom";
import logo from '../../assets/auth-logo.png'


const AuthLayout = () => {
    return (
        <div className="auth-layout">
            <img src={logo} alt="Amazon" className="auth-layout__img"/>
            <Outlet/>
        </div>
    )
}

export default AuthLayout
