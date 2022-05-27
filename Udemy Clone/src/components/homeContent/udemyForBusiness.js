import React from "react";
import "../../components/homeContent/udemyForBusiness.css";

function UdemyForBusiness() {
  return (
    <div className="udemyForBusiness">
      <div className="backgroundColorDiv"></div>
      <div className="contentDiv">
      <img
        src="..//udemy-business-logo.png"
        alt="Udemy business logo"
        className="Img"
      ></img>
        <p className="about">
          Get unlimited access to 8,000+ of Udemy's top courses for your team.
        </p>
        <div className="startTeching button">Get Udemy Business</div>
      </div>
      <img
        src="..//udemybusiness.jpeg"
        alt="instructorImg"
        className="Img"
      ></img>
    </div>
  );
}

export default UdemyForBusiness;
