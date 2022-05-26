import React from "react";
import "../../components/homeContent/becomeInstructor.css";

function BecomeInstructor() {
  return (
    <div className="becomeInstructorDiv">
      <div className="backgroundColorDiv"></div>
      <img
        src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg"
        alt="instructorImg"
        className="instructorImg"
      ></img>
      <div className="contentDiv">
        <h2 className="heading">Become an instructor</h2>
        <p className="about">
          Top instructors from around the world teach millions of students on
          Udemy. We provide the tools and skills to teach what you love.{" "}
        </p>
        <div className="startTeching button">Start teaching today</div>
      </div>
    </div>
  );
}

export default BecomeInstructor;
