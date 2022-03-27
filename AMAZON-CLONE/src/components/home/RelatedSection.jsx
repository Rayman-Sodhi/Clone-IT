import React from "react";
import SharedCarousel from "../carousel/Carousel";
import { v4 as uuid } from "uuid";
import { selectProducts } from "../../redux/productsSlice";
import { useSelector } from "react-redux";


const RelatedSection = () => {
  const products = useSelector(selectProducts);
  const imgs = products
    .slice(1, 7)
    .map((img) => ({ id: img.id, alt: img.title, imgUrl: img.imgUrl }));
  const topSellers = [{
    id: uuid(),
    title: "Related to Items You've Viewed",
    linkInfo: "See more",
    imgs,
  }];

  return (
    <div className="discover">
      {topSellers?.map(({ id, ...props }) => (
        <SharedCarousel key={id}  {...props} />
      ))}
    </div>
  );
};

export default RelatedSection;
