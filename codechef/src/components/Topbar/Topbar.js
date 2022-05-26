import React from 'react';
import classes from './Topbar.module.css';
import chefLogo from '../../assets/images/chefLogo.jpg';
import UserRating from '../UserRating/UserRating';
import { RiFileListLine } from 'react-icons/ri';
import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';

const Topbar = () => {
    return (
        <section className = {classes.Topbar}>
                <ul className={classes.List}>
                
                    <li className={classes.UserInfo}>
                        
                        <Dropdown>
                            <a href='/'>
                            <img className={classes.ChefLogo} src={chefLogo} alt="chefLogo" />
                            </a>
                            <span className={classes.UserName}>
                                    <span className={classes.Text}>Hello</span>
                                    <UserRating rating="7" />
                                    <strong>Dharmesh177</strong>
                                    
                            </span>
                        </Dropdown>
                    </li>

                    <li className={classes.TodoList}>
                        <a href="/">
                            <RiFileListLine className={classes.TodoIcon} />
                            <span className={classes.TodoNotif}>8</span>
                        </a>
                    </li>

                    <li className={classes.UserLogin}>
                        <div className={classes.GoogleIcon}></div>
                        <div className={classes.GitIcon}></div>
                        <div className={classes.FbIcon}></div>
                    </li>

                    <li>
                        <a href='/'>
                            <Button>Logout</Button>
                        </a>
                    </li>
                </ul>


        </section>
    )
};

export default Topbar;