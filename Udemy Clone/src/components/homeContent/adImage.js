import React from "react";
import "../../components/homeContent/adImage.css";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

function AdImage() {
  return (
    <div className="adImageDiv">
      <div className="offerDiv">
        <h2>Learn on your schedule</h2>
        <p>
          Study any topic, anytime. Explore thousands of courses starting at
          ₹385 each.
        </p>
        <div className="searchBarDiv">
          <input
            className="searchBar"
            placeholder="What do you want to learn?"
          ></input>
          <div className="searchIconDiv">
            <SearchOutlinedIcon className="searchIcon" />
          </div>
        </div>
      </div>
      <br></br>
      <img
        className="adImage"
        src="https://img-c.udemycdn.com/notices/web_banner/slide_1_image_udlite/9e38995a-0b01-49fa-b474-e9d73787e4a4.png"
        alt="AdImage"
      />
    </div>
  );
}

export default AdImage;
