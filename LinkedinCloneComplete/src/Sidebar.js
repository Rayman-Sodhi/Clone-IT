import React from 'react';
import { selectUser } from "./features/userSlice";
import { Avatar } from '@material-ui/core';  
import "./Sidebar.css";
import { useSelector } from "react-redux";

function Sidebar() {

    const user = useSelector(selectUser);
    
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
           <span className="sidebar__hash">#</span>
             <p>{topic}</p>
        </div>
    );

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1524946274118-e7680e33ccc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" alt="cover pic" />
                <Avatar src={user.photoURL} className="sidebar__avatar">{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,453</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">7,443</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('Nodejs')}
                {recentItem('MERN')}
                {recentItem('Software')}
                {recentItem('UX/UI')}
                {recentItem('Developer')}
            </div>
        </div>
    )
}

export default Sidebar;