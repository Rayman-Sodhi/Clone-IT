import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Button } from "react-bootstrap";
import "./Carousel.scss";
import RouterLink from "./../link/RouterLink";

const SharedCarousel = ({ title, imgs, alt, linkInfo,id }) => {
 
  let slidesToShow 
  const width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
if (width > 768) {
 slidesToShow = 5
} else if(width ===768) {
  slidesToShow = 4
} else {
  slidesToShow =1
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
  };

  
  return (
    <Card className="carousel">
      <Card.Body>
        <div className="carousel__title">
          <Card.Title>{title}</Card.Title>
          <RouterLink to="/shop">
            <Button variant="link" className="carousel__title__link">
              {linkInfo}
            </Button>
          </RouterLink>
        </div>
        <Slider {...settings}>
          {imgs.map((el, index) => (
            <div key={index}>
              <RouterLink to={`/product/${el.id}`}>
                <img
                  src={el.imgUrl}
                  alt={alt}
                  className="carousel__item__img"
                />
              </RouterLink>
            </div>
          ))}
        </Slider>
      </Card.Body>
    </Card>
  );
};

export default SharedCarousel;
