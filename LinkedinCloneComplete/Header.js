import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from "./HeaderOption";
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
// import { logout } from "./features/userSlice";
import { logout } from "./features/userSlice";

function Header() {
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    };

    return (
        <div className="Header">

            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="logo" />

                <div className="header__search">
                    <SearchIcon />
                    <input placeholder="Search" type="text" />
                </div>
            </div>
            
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" className="home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" className="Super" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" className="Biz" />
                <HeaderOption Icon={ChatIcon} title="Messaging" className="Chat"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications" className="Notif"/>
                <HeaderOption avatar={true} title='me' onClick={logoutOfApp}/>
            </div>
        </div>
    )
}
export default Header;