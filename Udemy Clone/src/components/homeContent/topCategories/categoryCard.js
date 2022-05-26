import React from "react";
import "./categoryCard.css";

function CategoryCard(props) {
  return (
    <div className="categoryCard">
      <img
        src={props.imgSrc}
        alt={props.title + " img"}
        className="categoryImg"
      ></img>
      <h3 className="categoryTitle">{props.title}</h3>
    </div>
  );
}

export default CategoryCard;
