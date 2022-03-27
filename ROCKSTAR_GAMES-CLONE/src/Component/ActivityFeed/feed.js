import React, { useState, useEffect } from "react";
import Navbar from "../Navigationbar/Navbar";
import {
    Banner,
    ProfileSection,
    SimpleNav,
    RecentActivitySection,
    WallActivitySection,
    FriendNotification,
    CompareStats,
    SnapmaticPhotos,
    StyledButton,
} from './styleFeed';
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";

export default function Feed() {
    const history = useHistory();
    const handleSubmit = (evt) => {
        evt.preventDefault();
        history.push('/settings')
    }
    return(
        <>
            <Navbar/>
            <Banner className="col-md-12">
                <ProfileSection>
                    <div className="profile-img">
                        <img src="./assets/Josiah-Tralawny-icon.png" alt="Profile img" height="100" />
                    </div>
                    <div className="mini-profile">
                        <h3><b>emmanz95</b></h3>
                        <div style={{display: "flex"}}>
                            <a style={{marginRight: "5px"}} href="#"><i className="fab fa-playstation" /></a>
                            <p>emmanz95</p>
                        </div>
                    </div>
                    <div className="edit-btn">
                        <button className="edit" onClick={handleSubmit}>Edit</button>
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
                <RecentActivitySection>
                    <h4 className="activity-title">Recent Activity</h4>
                    <a className="filter" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height="16" width="16"
                             className="UI__Icon__icon" title="Show Filters" data-ui-name="filter_icon"
                             aria-hidden="false" id="ui-icon-filter-2445">
                            <path
                                d="M29.7 6.2H19c-.7 0-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3h10.7c.7 0 1.3.6 1.3 1.3s-.6 1.3-1.3 1.3zM11.5 9.7c-2.2 0-4-1.5-4.6-3.5H2.3C1.6 6.2 1 5.6 1 4.9s.6-1.3 1.3-1.3H8c.7 0 1.3.6 1.3 1.3 0 1.2 1 2.2 2.2 2.2.6 0 1.1-.2 1.5-.6.4-.4.7-1 .7-1.6 0-1.2-1-2.2-2.2-2.2h-.4c-.7.1-1.4-.3-1.5-1-.1-.7.3-1.4 1-1.5.3-.1.6-.1.9-.1 2.6 0 4.8 2.1 4.8 4.8 0 1.3-.5 2.6-1.5 3.5-.9.8-2.1 1.3-3.3 1.3zM13 18.1H2.3c-.7 0-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3H13c.7 0 1.3.6 1.3 1.3s-.6 1.3-1.3 1.3zM20.5 21.6c-2.6 0-4.8-2.1-4.8-4.8 0-1.3.5-2.6 1.5-3.5.9-.8 2.1-1.3 3.3-1.3 2.2 0 4 1.5 4.6 3.5h4.6c.7 0 1.3.6 1.3 1.3s-.6 1.3-1.3 1.3H24c-.7 0-1.3-.6-1.3-1.3 0-1.2-1-2.2-2.2-2.2-.6 0-1.1.2-1.5.6-.5.4-.7 1-.7 1.6 0 1.2 1 2.2 2.2 2.2h.4c.7-.1 1.4.3 1.5 1 .1.7-.3 1.4-1 1.5-.2.1-.5.1-.9.1z" />
                            <g>
                                <path
                                    d="M29.7 28.4H19c-.7 0-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3h10.7c.7 0 1.3.6 1.3 1.3s-.6 1.3-1.3 1.3zM11.5 31.9c-2.2 0-4-1.5-4.6-3.5H2.3c-.7 0-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3H8c.7 0 1.3.6 1.3 1.3 0 1.2 1 2.2 2.2 2.2.6 0 1.1-.2 1.5-.6.4-.4.7-1 .7-1.6 0-1.2-1-2.2-2.2-2.2h-.4c-.7.1-1.4-.3-1.5-1-.1-.7.3-1.4 1-1.5.3-.1.6-.1.9-.1 2.6 0 4.8 2.1 4.8 4.8 0 1.3-.5 2.6-1.5 3.5-.9.8-2.1 1.3-3.3 1.3z" />
                            </g>
                        </svg>
                    </a>
                </RecentActivitySection>
                <br/><br />
            </Banner>
            <div className="col-md-12" style={{ maxWidth: '1535px', margin: '0 auto', position: 'relative', bottom: '40px' }}>
                <div className="row">
                    <div className="col-md-4">
                        <WallActivitySection body className="activity-card">
                            <input name="title" type="text" placeholder="Enter your Title" /><br />
                            <img className="img-card" src="./assets/Josiah-Tralawny-icon.png" alt="Profile" height="30"/>
                            <textarea type="text" maxLength="200" height="52" placeholder="What's up, emmanz95?" />
                            <div className="text-btn">
                                <p>Post a message to your wall</p>
                                <button className="btn-post">Post</button>
                            </div>
                        </WallActivitySection>
                        <br/>
                        <CompareStats>
                            <Card.Body className="card-body-section" />
                            <Card.Footer>
                                <p>There's nothing like having the hard evidence to back up your braggadocio. Keep a record of your criminal exploits with rich personal stats and leverage our extensive checklists to achieve that elusive 100% completion.</p>
                                <StyledButton>Compare Stats</StyledButton>
                            </Card.Footer>
                        </CompareStats>
                    </div>
                    <div className="col-md-4">
                        <FriendNotification body className="activity-card">
                            <div className="main-img">
                                <img className="img-card" src="./assets/Josiah-Tralawny-icon.png" alt="Profile" height="50"/>
                                <div className="username-detail">
                                    <a href="#">emmanz95</a>
                                    <p>Became friends with <a href="#">Janis2295</a></p>
                                </div>
                                <div className="friends-icon">
                                    <i className="fas fa-user-friends" />
                                </div>
                            </div>
                            <div className="request-tab">
                                <img className="img-card" src="./assets/arthur-morgan-icon.png" alt="Profile" height="52" style={{marginRight: '15px'}}/>
                                <a href="#">Janis2295</a>
                            </div>
                            <hr />
                            <div className="update-section">
                                <div className="icon-section">
                                    <i className="far fa-star" />{' '}
                                    <i className="far fa-comment" />
                                </div>
                                <div className="options-section">
                                    <p>1 month ago</p>
                                </div>
                            </div>
                        </FriendNotification>
                        <br/>
                        <SnapmaticPhotos>
                            <Card.Body className="card-body-section"/>
                            <Card.Footer>
                                Discover photos taken and shared by emmanz95.
                                <StyledButton>View Photos</StyledButton>
                            </Card.Footer>
                        </SnapmaticPhotos>
                    </div>
                    <div className="col-md-4">
                        <FriendNotification body className="activity-card">
                            <div className="main-img">
                                <img className="img-card" src="./assets/Josiah-Tralawny-icon.png" alt="Profile" height="50"/>
                                <div className="username-detail">
                                    <a href="#">emmanz95</a>
                                    <p>Became friends with <a href="#">Jasmine97</a></p>
                                </div>
                                <div className="friends-icon">
                                    <i className="fas fa-user-friends" />
                                </div>
                            </div>
                            <div className="request-tab">
                                <img className="img-card" src="./assets/hosea-matthews-icon.png" alt="Profile" height="52" style={{marginRight: '15px'}}/>
                                <a href="#">Jasmine97</a>
                            </div>
                            <hr />
                            <div className="update-section">
                                <div className="icon-section">
                                    <i className="far fa-star" />{' '}
                                    <i className="far fa-comment" />
                                </div>
                                <div className="options-section">
                                    <p>1 month ago</p>
                                </div>
                            </div>
                        </FriendNotification>
                    </div>
                </div>
            </div>
        </>
    );
}

