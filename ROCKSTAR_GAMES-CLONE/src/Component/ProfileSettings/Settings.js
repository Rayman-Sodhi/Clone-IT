import React from "react";
import Navbar from "../Navigationbar/Navbar";
import {
    SettingsContainer,
    CurrentUserContainer,
    AccountSettingsContainer
} from './SettingsStyles';

const Settings = () => {
    return(
        <div>
            <Navbar />
            <SettingsContainer>
                <h1>Settings</h1>
                <CurrentUserContainer>
                    <span>
                        <div>
                            <p>Full Name:</p><p>Emmanuel Okuchukwu</p>
                        </div>
                        <a href="#">Edit</a>
                    </span>
                    <span>
                        <div>
                            <p>Nickname:</p><p>emmanz95</p>
                        </div>
                        <a href="#">Edit</a>
                    </span>
                    <span>
                        <div>
                            <p>Email:</p><p>emmanza2@gmail.com</p>
                        </div>
                        <a href="#">Edit</a>
                    </span>
                    {/*<span>*/}
                    {/*    <div>*/}
                    {/*        <p>Member Since:</p><p>{currentUser.user.createdAt}</p>*/}
                    {/*    </div>*/}
                    {/*    <a href="#">Edit</a>*/}
                    {/*</span>*/}
                </CurrentUserContainer>
                {/*<AccountSettingsContainer></AccountSettingsContainer>*/}
            </SettingsContainer>
        </div>
    );
}

export default Settings;
