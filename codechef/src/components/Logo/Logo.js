import React from 'react';
import logoPath from '../../assets/images/logo.svg';
import classes from './Logo.module.css';

const Logo = () => (
    <a href="/" className={classes.LogoContainer}>
        <img src={logoPath} className={classes.Logo} alt="Codechef Logo"/>
    </a>
);

export default Logo;