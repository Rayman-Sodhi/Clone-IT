import React from "react";
import { ReactComponent as Star } from "../../assets/star.svg";
import { ReactComponent as StarBorder } from "../../assets/star_border.svg";
import { ReactComponent as StarHalf } from "../../assets/start_half.svg";
import RouterLink from '../link/RouterLink'


const ProductCard = ({ title, price, count, imgUrl, rate, productId}) => {


  const formatedPrice = price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  const splitPrice = formatedPrice.split('.')

  const link = `/product/${productId}`
  
  const renderStar = (rate) => {
    switch (rate) {
      case 1:
        return (
          <span>
            <Star className="productCard__body__star" />
            <StarBorder className="productCard__body__star" />
            <StarBorder className="productCard__body__star" />
            <StarBorder className="productCard__body__star" />
            <StarBorder className="productCard__body__star" />
          </span>
        );
        case 1.5:
        return (
          <span>
            <Star className="productCard__body__star" />
            <StarHalf className="productCard__body__star" />
            <StarBorder className="productCard__body__star" />
            <StarBorder className="productCard__body__star" />
            <StarBorder className="productCard__body__star" />
          </span>
        );
        case 2:
        return (
          <span>
            <Star className="productCard__body__star" />
            <Star className="productCard__body__star" />
            <StarBorder className="productCard__body__star" />
            <StarBorder className="productCard__body__star" />
            <StarBorder className="productCard__body__star" />
          </span>
        );
        case 2.5:
        return (
          <span>
            <Star className="productCard__body__star" />
            <Star className="productCard__body__star" />
            <StarHalf className="productCard__body__star" />
            <StarBorder className="productCard__body__star" />
            <StarBorder className="productCard__body__star" />
          </span>
        );
        case 3:
        return (
          <span>
            <Star className="productCard__body__star" />
            <Star className="productCard__body__star" />
            <Star className="productCard__body__star" />
            <StarBorder className="productCard__body__star" />
            <StarBorder className="productCard__body__star" />
          </span>
        );
        case 3.5:
        return (
          <span>
            <Star className="productCard__body__star" />
            <Star className="productCard__body__star" />
            <Star className="productCard__body__star" />
            <StarHalf className="productCard__body__star" />
            <StarBorder className="productCard__body__star" />
          </span>
        );
        case 4:
        return (
          <span>
            <Star className="productCard__body__star" />
            <Star className="productCard__body__star" />
            <Star className="productCard__body__star" />
            <Star className="productCard__body__star" />
            <StarBorder className="productCard__body__star" />
          </span>
        );
        case 4.5:
        return (
          <span>
            <Star className="productCard__body__star" />
            <Star className="productCard__body__star" />
            <Star className="productCard__body__star" />
            <Star className="productCard__body__star" />
            <StarHalf className="productCard__body__star" />
          </span>
        );
      default:
      return (
        <span>
          <Star className="productCard__body__star" />
          <Star className="productCard__body__star" />
          <Star className="productCard__body__star" />
          <Star className="productCard__body__star" />
          <Star className="productCard__body__star" />
        </span>
      );
    }
  };

  return (
    <div className="productCard">
      <RouterLink to={link}>
      <img variant="top" src={imgUrl} className="productCard__img" alt="alex" />
      <div className="productCard__body">
        <div className="productCard__body__title">{title}</div>
        <div className="productCard__body__text">
          <span>{splitPrice[0]}</span>
          <span className="productCard__body__price">{splitPrice[1]}</span>
          <br />
          <span className="productCard__body__starContainer">
            {renderStar(rate)}
            <span className="productCard__body__count">{`(${count})`}</span>
          </span>
        </div>
      </div>
      </RouterLink>
    </div>
  );
};

export default ProductCard;
