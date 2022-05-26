import React from "react";
import "./recommendedVideos.css";
import VideoCard from "./videoCard";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <VideoCard
        courseTitle={"100 Days of Code: The Complete Python Pro Bootcamp"}
        imgSrc={"..//python-yu.jpeg"}
        instructor={"Dr. Angela Yu"}
        rating={4.7}
        noOfStudents={"(106,203)"}
        price={"₹385"}
      />

      <VideoCard
        courseTitle={"AWS Certified Solutions Architect Associate 2022"}
        imgSrc={"..//awscourse.jpeg"} 
        instructor={"Stephane Maarek | AWS Certified Cloud Practitioner"}
        rating={4.6}
        noOfStudents={"(98,768)"}
        price={"₹385"}
      />

      <VideoCard
        courseTitle={
          "iOS 13 & Swift 5 - The Complete iOS App Development Bootcamp"
        }
        imgSrc={"https://img-a.udemycdn.com/course/240x135/1778502_f4b9_11.jpg"}
        instructor={"Dr. Anglea Yu"}
        rating={4.8}
        noOfStudents={"(49,923)"}
        price={"₹385"}
      />
      <VideoCard
        courseTitle={
          "Cisco CCNA 200-301 – The Complete Guide to Getting Certified"
        }
        imgSrc={"https://img-a.udemycdn.com/course/240x135/1203374_6d6f_3.jpg"}
        instructor={"Neil Anderson"}
        rating={4.8}
        noOfStudents={"(25,489)"}
        price={"₹1,280"}
      />
      <VideoCard
        courseTitle={
          "Advanced CSS and Sass: Flexbox, Grid, Animations and More!"
        }
        imgSrc={"https://img-a.udemycdn.com/course/240x135/1026604_790b_2.jpg"}
        instructor={"Jonas Schmedtmann"}
        rating={4.8}
        noOfStudents={"(25,064)"}
        price={"₹385"}
      />
    </div>
  );
}

export default RecommendedVideos;
