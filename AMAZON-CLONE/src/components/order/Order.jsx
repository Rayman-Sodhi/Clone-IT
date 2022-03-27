import React from "react";
import moment from "moment";
import CheckoutCard from "./../card/CheckoutCard";
import CurrencyFormat from "react-currency-format";

const Order = ({ order }) => {
 
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY,h:mma")}</p>
      <p className="order__id">
        <small>Order ID: {order.id}</small>
      </p>
      {order.data.cartItems &&
        order.data.cartItems.map(({ productId, ...props }) => (
          <div key={productId}>
            <CheckoutCard productId={productId} hiddenAction {...props} />
            <div className="checkout__cart__card" />
          </div>
        ))}
      <CurrencyFormat
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        decimalScale={2}
        prefix={"$"}
        renderText={(value) => (
          <div className='order__total'>
            <h3>Order Total : {value}</h3>
          </div>
        )}
      />
    </div>
  );
};

export default Order;
