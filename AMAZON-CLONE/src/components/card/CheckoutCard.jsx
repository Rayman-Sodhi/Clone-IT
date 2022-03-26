import React from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateItemQuantity, removeItem } from "../../redux/cartSlice";
import RouterLink from "../link/RouterLink";

const CheckoutCard = ({
  imgUrl,
  price,
  productId,
  active,
  title,
  quantity,
  hiddenAction
}) => {
  const dispatch = useDispatch();
  const formatedPrice = price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const link = `/product/${productId}`

  const updateQuantity = (e) => {
    const itemQuantity = e.target.value;
    dispatch(
      updateItemQuantity({ productId, quantity: parseInt(itemQuantity) })
    );
  };

  const removeCartItem = () => {
    dispatch(removeItem(productId));
  };

  return (
    <div className="checkout-card">
      <img src={imgUrl} alt="Amazon" className="checkout-card__img" />
      <div className="checkout-card__body">
        <div className="checkout-card__content">
          <div className="checkout-card__title">
            <RouterLink to={link} style={{color:'#0167C0'}}>
              <span>{title}</span>
            </RouterLink>
          </div>
          <div className="checkout-card__status">
            {active ? <span>In stock</span> : <span>Out of stock</span>}
          </div>
          <div className="checkout-card__delivery">
            <span>Enable for FREE Delivery </span>
          </div>
          {
            !hiddenAction &&    <div className="checkout-card__action">
            <div className="checkout-card__action__qty">
              <Form>
                <Form.Group>
                  <Form.Control
                    type="number"
                    size="sm"
                    value={quantity}
                    onChange={updateQuantity}
                  />
                </Form.Group>
              </Form>
            </div>
            <div className="checkout-card__action__delete">
              <span>|</span>
              <span onClick={removeCartItem}> Delete</span>
            </div>
          </div>
}
        </div>
        <div className="checkout-card__price">
          <span>{formatedPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
