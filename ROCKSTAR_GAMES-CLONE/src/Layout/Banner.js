import { BannerContainer, ProfileSection, SimpleNav } from "./BannerStyles";
import React from "react";

function Banner() {
    return (
        <BannerContainer className="col-md-12" style={{backgroundColor: '#fcaf17'}}>
            <ProfileSection>
                <div className="profile-img">
                    <img src="./assets/Josiah-Tralawny-icon.png" alt="Profile img" height="100"/>
                </div>
                <div className="mini-profile">
                    <h3><b>emmanz95</b></h3>
                    <div style={{display: "flex"}}>
                        <a style={{marginRight: "5px"}} href="#"><i className="fab fa-playstation"/></a>
                        <p>emmanz95</p>
                    </div>
                </div>
                <div className="edit-btn">
                    <button className="edit">Edit</button>
                </div>
            </ProfileSection>
            <SimpleNav>
                <ul>
                    <li><a href="/feed">Wall</a></li>
                    <li><a href="/games">Games</a></li>
                    <li><a href="/friends">Friends</a></li>
                    <li><a href="#">Crews</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Photos</a></li>
                    <li><a href="#">Videos</a></li>
                </ul>
            </SimpleNav>
            <br/><br /><br />
        </BannerContainer>
    )
}

export default Banner;
