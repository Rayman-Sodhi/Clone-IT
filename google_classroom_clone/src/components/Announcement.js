import { IconButton } from "@material-ui/core";
import { Menu, MoreVert } from "@material-ui/icons";
import React from "react";
import "./Announcement.css";

function Announcement({ image, name, date, content, authorId }) {
  return (
    <div className="announcement">
      <div className="announcement__informationContainer">
        <div className="announcement__infoSection">
          <div className="announcement__imageContainer">
            <img src={image} alt="Profile" />
          </div>
          <div className="announcement__nameAndDate">
            <div className="announcement__name">{name}</div>
            <div className="announcement__date">{date}</div>
          </div>
        </div>
        <div className="announcement__infoSection">
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="announcement__content">{content}</div>
    </div>
  );
}

export default Announcement;
