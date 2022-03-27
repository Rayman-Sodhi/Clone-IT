import React from "react";
import { Result, Button } from "antd";
import { useParams, useNavigate } from 'react-router-dom'


const Success = () => {
    const { orderId } = useParams()
    const navigate = useNavigate()

    const handleOrders = () => {
        navigate('/orders')
    }
    const handleShopping = () => {
        navigate('/shop')
    }
  return (
    <Result
      status="success"
      title="Your payment has been processed successfully"
      subTitle= {`Your order number is : ${orderId}`}
      extra={[
        <Button key="orders" className="checkout__subtotal__button" onClick={handleOrders}>
          See all orders
        </Button>,
        <Button key="shopping" onClick={handleShopping}>Continue Shopping</Button>,
      ]}
    />
  );
};

export default Success;
