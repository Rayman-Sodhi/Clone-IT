import React from 'react';
import './Widgets.css';
import {
TwitterTimelineEmbed,
TwitterShareButton,
TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
  return (
    <div className="widgets">
        <div className="widgets__input">
            <SearchIcon className="widgets__searchIcon" />
            <input placeholder="Search Twitter" type="text" />
        </div>

        <div className="widgets__widgetContainer">
        <h2>What's Happening</h2>

        <TwitterTweetEmbed tweetId={"1510450205556379652"}/>

        <TwitterTimelineEmbed
            sourceType="profile"
            screenName="prodbyelevan"
            optioons={{ height: 400}}
            />

        <TwitterShareButton
            url={"https://facebook.com/cleverprogammer"}
            options={{ text: "#react.js is awesome", via: "prodbyelevan" }}
        />
        </div>
    </div>
  )
}

export default Widgets;