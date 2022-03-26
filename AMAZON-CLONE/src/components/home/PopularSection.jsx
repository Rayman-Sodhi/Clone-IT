import React from "react";
import SharedCarousel from "../carousel/Carousel";
import { v4 as uuid } from "uuid";
import { selectProducts } from "../../redux/productsSlice";
import { useSelector } from "react-redux";


const PopularSection = () => {
  const products = useSelector(selectProducts);
  const imgs = products
    .slice(8, 16)
    .map((img) => ({ id: img.id, alt: img.title, imgUrl: img.imgUrl }));
  const topSellers = [{
    id: uuid(),
    title: "Amazon Top Sellers",
    linkInfo: "Shop now",
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

export default PopularSection;
