import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProduct } from "../../redux/productSelector";
import { ReactComponent as AddToCart } from "../../assets/add_shopping_cart.svg";
import { addItem } from "../../redux/cartSlice";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { selectProducts } from "../../redux/productsSlice";
import ProductCard from "../../components/card/ProductCard";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Product = () => {
  //related slider
  let slidesToShow;
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  if (width > 1024) {
    slidesToShow = 7;
  } else if (width > 768) {
    slidesToShow = 5;
  } else if(width === 768) {
    slidesToShow = 4;
  } else {
    slidesToShow = 1;
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productId } = useParams();
  const {
    imgUrl,
    brand,
    title,
    price,
    count,
    rate,
    active,
    description,
    gallery,
  } = useSelector((state) => selectProduct(state, productId));

  const products = useSelector(selectProducts);

  const formatedPrice = price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  const descriptions = description.split(";");
  const handleShopCart = () => {
    dispatch(
      addItem({
        title,
        price,
        count,
        imgUrl,
        rate,
        productId,
        active,
      })
    );
    Modal.confirm({
      title: "Product added to your cart",
      icon: <ExclamationCircleOutlined />,
      content: `You've added the ${title} to your cart`,
      okText: "Continue Shopping",
      cancelText: "Proceed to Checkout",
      onOk: () => navigate("/shop"),
      onCancel: () => navigate("/checkout"),
    });
  };

  return (
    <div>
      <div className="product">
        <div className="product__gallery">
          <ImageGallery
            items={gallery}
            showNav={false}
            thumbnailPosition={"left"}
            showPlayButton={false}
          />
        </div>
        <div className="product__description">
          <div className="product__description__title">{title}</div>
          <div className="product__description__brand">
            <span>Brand: </span>
            {brand}
          </div>
          <div className="product__description__price">
            <span>Price: </span> <span>{formatedPrice}</span>
          </div>
          <div className="product__description__line" />
          <div className="product__description__content">
            <ul>
              {descriptions.map((el, index) => (
                <li key={index}>{el}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="product__cart">
          <div className="product__cart__price">{formatedPrice}</div>
          <div className="product__cart__button">
            <Button
              block
              className="checkout__subtotal__button"
              onClick={handleShopCart}
            >
              <AddToCart /> <span>Add to Cart</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="product__related">
        <h3>Inspired by your recent shopping trends</h3>
        <Slider {...settings}>
          {products.map(({ id, ...props }) => (
            <ProductCard key={id} productId={id} {...props} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Product;
