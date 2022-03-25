import React from "react";
import { Navigation } from "./style";
import { useHistory } from "react-router-dom"

export default function Navbar() {
    const history = useHistory();
    const handleSignout = (evt) => {
        evt.preventDefault();
        history.push('/');
    }
    return(
        <>
            <Navigation>
                <div className="wrapper">
                    <ul>
                        <img src="./assets/sc-logo.jpg" height="50" alt="sc-logo"/>
                        <li><a href="#">Games</a></li>
                        <li><a href="#">Crews</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Photos</a></li>
                        <li><a href="#">Videos</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">News</a></li>
                    </ul>
                    <div className="profile-min-section">
                        <button className="download-btn">Download Launcher</button>
                        <a className="bell-icon" href="#"><i className="far fa-bell" /></a>
                        <a href="#" onClick={handleSignout}><img className="img-profile" src="./assets/Josiah-Tralawny-icon.png" alt="profile-img" height="30"/></a>
                    </div>
                </div>
            </Navigation>
        </>
    );
}
