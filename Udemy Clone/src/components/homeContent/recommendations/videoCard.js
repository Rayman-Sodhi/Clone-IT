import React from "react";
import "./videoCard.css";
import StarIcon from "@material-ui/icons/Star";
// import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";

function VideoCard(props) {
  return (
    <div className="videoCard">
      <img className="courseImg" src={props.imgSrc} alt="courseImg"></img>
      <h3>{props.courseTitle}</h3>
      <p>{props.instructor}</p>
      <div className="ratingDiv">
        <span className="rating">{props.rating}</span>
        <span className="stars">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarHalfIcon />
        </span>
        <span className="noOfStudents">{props.noOfStudents}</span>
      </div>
      <h3 className="price">{props.price}</h3>
      <div className="bestsellerBadge">Bestseller</div>
    </div>
  );
}

export default VideoCard;
