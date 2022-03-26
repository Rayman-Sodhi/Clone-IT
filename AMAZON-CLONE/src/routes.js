import React from "react";
import { Navigate } from "react-router-dom";
import Home from "./views/home/home";
import Shop from "./views/shop/shop";
import NotFoundView from "./views/errors/NotFoundView";
import MainLayout from "./layouts/MainLayout";
import Register from "./views/auth/Register";
import Login from "./views/auth/Login";
import AuthLayout from "./layouts/AuthLayout";
import Checkout from "./views/checkout/Checkout";
import Product from "./views/product/Product";
import Payment from "./views/payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./views/orders/Orders";
import Mockup from "./mockup";
import Success from "./views/payment/Success";

const promise = loadStripe(
  "pk_test_51HeTtQImEgmfO9dx3rV5DTtE8sIiZOUG8KZbdXdfOEAzOG54ej7Xivl2kXmgMrHGV8dLRSlLioJ56v4KbB0bkMnP00UWd0uuAL"
);


const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path:'checkout',
        element: <Checkout/>
      },
      {
        path: 'payment',
        element: <Elements stripe={promise}><Payment/></Elements>
      },
      {
        path: 'orders',
        element:<Orders/>
      },
      {
        path: 'success/:orderId',
        element:<Success/>
      },
      {
        path: 'mockup',
        element: <Mockup/>
      },
      {
        path: 'product/:productId',
        element: <Product/>
      },
      {
        path: "404",
        element: <NotFoundView />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <Navigate to="/404" />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "/",
        element: <Login />,
      },
    ],
  },
];

export default routes;
