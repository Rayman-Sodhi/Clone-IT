import React, { useEffect, useState } from "react";
import Navbar from '../Navigationbar/Navbar';
import Banner from "../../Layout/Banner";
import { MainWrapper, FriendCard } from "./FriendsTabStyles";
import axios from "axios";

const FriendsTab = () => {
    const [friends, setFriends] = useState([])
    useEffect(() => {
        function getFriends() {
            axios.get('friends.json')
                .then((response) => {
                    if(response.status === 200) {
                        console.log('Retrieved data!');
                        setFriends(response.data);
                    } else if (response.status === 404) {
                        console.log('Failed to retrieve data!');
                    }
                })
                .catch((error) =>{
                    console.log(error);
                })
        }
        return getFriends();
    }, [])

    const friendsList = friends?.friends?.length > 0 ? friends?.friends?.map(friend => (
        <FriendCard key={friend.id}>
            <div className="profile-flex">
                <img src={friend.profileImg} alt="" height="60" width="60" />
                <p>{friend.displayName}</p>
            </div>
            <div className="crew-flex">
                <p>{friend.crewTag}</p>
                {/*<i className="fas fa-ellipsis-v" />*/}
            </div>
        </FriendCard>
    )) : <p>You have no friends, that's sad, sorry!</p>
    return(
        <MainWrapper>
            <Navbar />
            <Banner />
                <div className="friends-wrapper">
                    <div className="friends-card">
                        <div className="find-friends">
                            <h4>My Friends</h4>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height="16" width="16"
                                     className="UI__Icon__icon" data-ui-name="friend_icon" aria-hidden="false"
                                     id="ui-icon-friend-291">
                                    <path d="M15.6 32s-.1 0 0 0h-.8c-2.7 0-5.6 0-8.4-.8-3-.9-4.6-2.4-4.7-4.7-.1-1.1.3-2.2 1-3.1 1.1-1.5 2.7-2.4 4.1-3.1.5-.3 1-.5 1.5-.8.6-.4 2-1.4 2.1-2.7 0-.6-.2-1.3-.8-2.1l-.6-.9c-.4-.6-.8-1.2-1.2-1.9-1.2-2.5-1-5.6.4-7.9.2-.3.4-.6.7-.9 1.8-2 4.3-3.1 7-3.1 2.7-.1 5.3 1.1 7.2 3 .3.3.6.7.8 1 1.4 2.3 1.5 5.4.3 7.9-.4.7-.8 1.3-1.2 1.9l-.6.9c-.5.8-.8 1.5-.8 2.1.1 1.3 1.5 2.3 2.1 2.7.5.3 1 .6 1.5.8 1.4.7 3 1.5 4.1 3.1.7.9 1 2.1 1 3.1-.1 2.2-1.7 3.8-4.7 4.7-.7.2-1.4.3-2 .5-.7.1-1.5-.4-1.6-1.1-.1-.7.4-1.5 1.1-1.6.6-.1 1.2-.2 1.7-.4 2.4-.7 2.7-1.5 2.7-2.2 0-.5-.1-.9-.5-1.4-.7-1-1.9-1.6-3.1-2.3-.6-.3-1.1-.6-1.7-.9-2.1-1.3-3.3-3-3.4-4.9-.1-1.2.3-2.4 1.2-3.8.2-.3.4-.7.7-1 .4-.5.7-1 1-1.5.8-1.6.7-3.6-.2-5.2-.1-.1-.2-.2-.4-.5-1.3-1.4-3.2-2.2-5.2-2.2-1.9 0-3.7.8-5 2.2-.2.2-.3.4-.4.5-.9 1.6-1 3.6-.2 5.2.3.5.6 1 1 1.5.2.3.5.6.7 1 .9 1.3 1.3 2.6 1.2 3.8-.1 1.9-1.3 3.6-3.4 4.9-.5.3-1.1.6-1.7.9C6.9 23.4 5.7 24 5 25c-.3.4-.5.9-.5 1.4 0 .7.4 1.5 2.7 2.2 2.4.7 4.9.7 7.6.7h.8c.4 0 .8.2 1 .5.3.3.4.7.3 1.1 0 .6-.6 1.1-1.3 1.1z" />
                                </svg>
                                {' '}<b>Find Friends</b>
                            </button>
                        </div>
                        <div className="search-friends">
                            <div className="friends-searchbar">
                                <div className="dropdown-ui">
                                    <select>
                                        <option value="sc">Social Club</option>
                                    </select>
                                </div>
                            </div>
                            <div className="search-input">
                                <input type="text" name="search-friend" placeholder="Search your Friends List"/>
                            </div>
                        </div>
                        <div className="friends-list">
                            {friendsList}
                        </div>
                    </div>
                </div>
        </MainWrapper>
    )
}

export default FriendsTab;
