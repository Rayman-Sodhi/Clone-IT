import React from "react";
import "./topCategories.css";
import CategoryCard from "./categoryCard";

function TopCategories() {
  return (
    <div className="topCategories">
      <h2 className="categoryHeading">Top Categories</h2>
      <div className="categories">
        <CategoryCard
          imgSrc={
            "..//design.jpeg"
          }
          title={"Design"}
        />
        <CategoryCard
          imgSrc={
            "..//development.jpeg"
          }
          title={"Development"}
        />
        <CategoryCard
          imgSrc={
            "..//marketing.jpeg"
          }
          title={"Marketing"}
        />
        <CategoryCard
          imgSrc={
            "..//software.jpeg"
          }
          title={"IT and Software"}
        />
        <CategoryCard
          imgSrc={
            "..//personal.jpeg"
          }
          title={"Personal Development"}
        />
        <CategoryCard
          imgSrc={
            "..//business.jpeg"
          }
          title={"Business"}
        />
        <CategoryCard
          imgSrc={
            "..//photography.jpeg"
          }
          title={"Photography"}
        />
        <CategoryCard
          imgSrc={
            "..//music.jpeg"
          }
          title={"Music"}
        />
      </div>
    </div>
  );
}

export default TopCategories;
