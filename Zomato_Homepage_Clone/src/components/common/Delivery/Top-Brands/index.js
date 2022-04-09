import React from 'react';
import Slider from 'react-slick';
import NextArrows from './../../carousel/NextArrow';
import PrevArrows from './../../carousel/prevArrows';
import TopBrandss from './TopBrand-lists';

const Brands = [
    {
        id:1,
        title: "Mc Donald's",
        cover:
        "https://b.zmtcdn.com/data/brand_creatives/logos/775f928725d1a9dd80422632de22c224_1611376239.png?output-format=webp",
    },
    {
        id:2,
        title: "Pizza Hut",
        cover: 
        "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp",
    },
    {
        id:3,
        title: "Barbeque-Nation",
        cover:
        "https://b.zmtcdn.com/data/dish_images/d9766dd91cd75416f4f65cf286ca84331634805483.png"
    }, {
        id: 4,
        title: "Oven Story Pizza",
        cover:
          "https://b.zmtcdn.com/data/o2_assets/9694b563c793ea7bddf49f619dd4b7751632716697.png",
      },
      {
        id: 5,
        title: " Haldirams ",
        cover:
          "https://b.zmtcdn.com/data/o2_assets/7e83ad932f340bacd71bd7e891ede6541632716696.png",
      },
      {
        id: 6,
        title: " Bikanerwala ",
        cover:
          "https://b.zmtcdn.com/data/brand_creatives/logos/4d016eeff686a88becd56bba073f18cd_1605111085.png?output-format=webp",
      },
      {
        id: 7,
        title: " KFC ",
        cover:
          "https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png",
      },
      {
        id:8,
        title: "Pizza Hut",
        cover: 
        "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp",
    },
    {
        id:9,
        title: "Barbeque-Nation",
        cover:
        "https://b.zmtcdn.com/data/dish_images/d9766dd91cd75416f4f65cf286ca84331634805483.png"
    }, {
        id: 10,
        title: "Oven Story Pizza",
        cover:
          "https://b.zmtcdn.com/data/o2_assets/9694b563c793ea7bddf49f619dd4b7751632716697.png",
      },
      {
        id: 11,
        title: " Haldirams ",
        cover:
          "https://b.zmtcdn.com/data/o2_assets/7e83ad932f340bacd71bd7e891ede6541632716696.png",
      },
      {
        id: 12,
        title: " Bikanerwala ",
        cover:
          "https://b.zmtcdn.com/data/brand_creatives/logos/4d016eeff686a88becd56bba073f18cd_1605111085.png?output-format=webp",
      },
      {
        id: 13,
        title: " KFC ",
        cover:
          "https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png",
      },
]
const settings = {
    infinite: false,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrows />,
    prevArrow: <PrevArrows/>
  };

const TopBrands = () => {
    return (
      <div className='delivery-collection'>
          <div className='max-width'>
              <div className='collection-title'>Top Brands To Order From :)</div>
              <Slider {...settings}>
            {Brands.map((item)=>{
                return <div><TopBrandss item={item}></TopBrandss></div>
            })}
        </Slider>
          </div>
      </div>
    );
  };

export default TopBrands