import React, { useState } from "react";
import "../../components/header/headerPopup.css";
import ClearIcon from "@material-ui/icons/Clear";

function HeaderPopup() {
  const [hidePopup, setHidePopup] = useState(false);

  return (
    <div className={`headerPopup ${hidePopup ? "hide" : ""}`}>
      <div className="dialogueBox">
        <span className="title">Sale of the season </span>
        <span className="offer">
          | Courses on practically anything from just ₹385. Ends May 25.<br></br>
          <span className="offer-day"></span>
<b>7 days left!</b>
        </span>
      </div>
      <div
        className="cross"
        onClick={() => {
          setHidePopup(true);
        }}
      >
        <ClearIcon className="popupClearIcon" />
      </div>
    </div>
  );
}

export default HeaderPopup;
