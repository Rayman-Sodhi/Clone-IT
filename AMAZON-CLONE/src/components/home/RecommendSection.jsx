import React from "react";
import SharedCard from "../card/Card";
import { v4 as uuid } from 'uuid';

const recommend = [
  {id:uuid(),
    title: "Find unique gifts",
    imgUrl:
      "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2019/img/Social_Shopping/B00YBC17FK_260._CB442485249_SY260_.jpg",
    linkInfo: "See more gift ideas",
  },
  {id:uuid(),
    title: "Inexpensive finds",
    imgUrl:
      "https://images-na.ssl-images-amazon.com/images/G/01/xba/BTF_US_All_Sep2019_1x._CB440956261_SY260_.jpg",
    linkInfo: "See more",
  },
  {id:uuid(),
    title: "New gift card designs",
    imgUrl:
      "https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2019/NewGCs/New/NewGCs_catcard_260x260_amazon_egc_1._CB438911828_SY260_.jpg",
    linkInfo: "Shop the collection",
    },
    {id:uuid(),
        title: "Renewed electronics",
        imgUrl:
          "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2019/img/Certified_Refurbished/XCM_Manual_1170890_desktop_tiles_260x260_Certified_Refurbished_XCM_Manual_1170890_us_certified_refurbished_desktop_tiles_260x260_2_1557752691_jpg._CB464246644_SY260_.jpg",
        linkInfo: "See more from Renewed",
      },
];

const RecommendSection = () => {
  return (
    <div className="shop-by-section">
      {recommend.map(({ id, ...props }) => (
        <SharedCard key={id}  {...props} />
      ))}
    </div>
  );
};

export default RecommendSection;
