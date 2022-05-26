import React from "react";
import "./featureCard.css";

function FeatureCard(props) {
  return (
    <div className="featureCard">
      <div className="iconDiv">{props.icon}</div>
      <div className="aboutDiv">
        <h4>{props.heading}</h4>
        <p>{props.para}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
