import React from 'react';
import "./deliveryCollection.css";
import Slider from "react-slick";
import NextArrows from './../../carousel/NextArrow';
import PrevArrows from './../../carousel/prevArrows';
import DeliveryItem from './delivery-items';

const deliveryItems = [
    {
        id:1,
        title: "Pizza",
        cover:
        "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
    },
    {
        id:2,
        title: "Kachori",
        cover: 
        "https://b.zmtcdn.com/data/o2_assets/f9d277eb1668d7abf9235302402b06001632716602.png",
    },
    {
        id:3,
        title: "Idli",
        cover:
        "https://b.zmtcdn.com/data/dish_images/d9766dd91cd75416f4f65cf286ca84331634805483.png"
    }, {
        id: 4,
        title: "Cake",
        cover:
          "https://b.zmtcdn.com/data/o2_assets/9694b563c793ea7bddf49f619dd4b7751632716697.png",
      },
      {
        id: 5,
        title: "Biryani",
        cover:
          "https://b.zmtcdn.com/data/o2_assets/7e83ad932f340bacd71bd7e891ede6541632716696.png",
      },
      {
        id: 6,
        title: "Chaat",
        cover:
          "https://b.zmtcdn.com/data/o2_assets/3d902eb4bb267efea010ade87bcb1f3f1632716698.png",
      },
      {
        id: 7,
        title: "Momos",
        cover:
          "https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png",
      },
      {
        id: 8,
        title: "Paneer",
        cover:
          "https://b.zmtcdn.com/data/o2_assets/9428a39fba2a97f7470b8f3f26af86af1632716606.png",
      },
      {
        id: 9,
        title: "Samosa",
        cover:
          "https://b.zmtcdn.com/data/o2_assets/bc0cc8557a06fcd3aacdd7b241cf9db71632716547.png",
      },
      {
        id: 10,
        title: "Paratha",
        cover:
          "https://b.zmtcdn.com/data/dish_images/49a62bf16f88e7d22994e387626292161632717505.png",
      },
      {
        id: 11,
        title: "Pastry",
        cover:
          "https://b.zmtcdn.com/data/homepage_dish_data/4/f06d9a57b0847677e36f163a7b7fe54a.png",
      },
]

const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrows />,
    prevArrow: <PrevArrows/>
  };

const DeliveryCollection = () => {
  return (
    <div className='delivery-collection'>
        <div className='max-width'>
            <div className='collection-title'>Eat What makes you happy</div>
        <Slider {...settings}>
            {deliveryItems.map((item)=>{
                return <div><DeliveryItem item={item}></DeliveryItem></div>
            })}
        </Slider>
        </div>
    </div>
  );
};

export default DeliveryCollection;