import React from 'react';
import { Menu } from 'semantic-ui-react';
import UserInfo from "./UserInfo/UserInfo";
import  Channels  from './Channels/Channels';

import "./sidebar.css";
import PrivateChat from './privateChat/PrivateChat';
import FavouriteChannel from './Favourites/FavouriteChannel';

export const Sidebar = () => {
    return (<Menu vertical fixed="left" borderless size="large" className="side_bar">
        <UserInfo />
        <FavouriteChannel/>
        <Channels/>
        <PrivateChat/>
    </Menu>
    )
   
}