import React from "react";
import CheckoutCard from "../../components/card/CheckoutCard";
import { Button } from "react-bootstrap";
import { selectCartItems } from "../../redux/cartSelector";
import { useSelector } from "react-redux";
import { selectCartItemsCount, selectSubtotal } from "../../redux/cartSelector";
import RouterLink from "../../components/link/RouterLink";
import {useNavigate} from 'react-router-dom';

const Checkout = () => {
  const cartItems = useSelector((state) => selectCartItems(state));
  const cartCount = useSelector((state) => selectCartItemsCount(state));
  const subtotal = useSelector((state) => selectSubtotal(state));

  const navigate = useNavigate();
  const formatedSubtotal = subtotal.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="checkout">
      <div className="checkout__cart">
        <img
          className="checkout__cart__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div className="checkout__cart__title">
          <span>Shopping Cart</span>
          <span>Price</span>
        </div>
        {cartItems.length > 0 ? (
          cartItems.map(({ productId, ...props }) => (
            <div key={productId}>
              <CheckoutCard productId={productId} {...props} />
              <div className="checkout__cart__card" />
            </div>
          ))
        ) : (
          <div className="checkout__cart__message">
            <p>Your Amazon Cart is empty.</p>
            <span>
              Check your Saved for later items below or{" "}
              <RouterLink to="/shop">
                <span>continue shopping</span>
              </RouterLink>
              .
            </span>
          </div>
        )}
        {cartItems.length > 0 && (
          <div className="checkout__cart__subtotal">
            <span>Subtotal({cartCount} items): </span>
            <span>{formatedSubtotal}</span>
          </div>
        )}
      </div>
      <div className="checkout__subtotal">
        <div className="checkout__subtotal__title">
          <span>Subtotal({cartCount} items): </span>
          <span>{formatedSubtotal}</span>
        </div>
        <div>
          <Button block className="checkout__subtotal__button" onClick={() => navigate('/payment')}>
            Proceed to checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
