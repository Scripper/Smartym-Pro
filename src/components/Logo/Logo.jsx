import React from 'react';
import './Logo.scss';
import logo from './logo.png';

const Logo = () => {
    return (
        <div className="logo-composition">
            <img src={logo} alt="Logo"/>
            <span>Open Circles</span>
        </div>
    )
}

export default Logo;