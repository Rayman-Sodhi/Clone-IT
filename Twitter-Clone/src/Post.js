import React from 'react';
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Post({displayName, username, verified, text, image, avatar}) {
  return ( <div className="post">
      <div className="post__avatar">
          <Avatar src="https://i.pravatar.cc/300"/>
      </div>
      <div className="post__body">
        <div className="post__header">
            <div className="post__headerText">
                <h3>
                    Evan Le {" "}
                    <span className="post__headerSpecial">
                    <VerifiedUserIcon className="post__badge" /> @evanle
                    </span>
                </h3>
            </div>
            <div className="post__headerDescription">
                <p>I challenge you to build a Twitter Clone with React!</p>
            </div>
        </div>
        <img src="https://media.giphy.com/media/gFUKNtpfBVmLI4N1UI/giphy.gif" alt="" />
        <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
    );
}

export default Post;