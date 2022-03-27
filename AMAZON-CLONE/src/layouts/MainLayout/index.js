import React, { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  fetchDepartment,
  selectProducts,
} from "../../redux/productsSlice";

const MainLayout = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  useEffect(() => {
    dispatch(fetchDepartment());
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div>
      <Header />
      {products ? (
        <div>
          <Outlet />
          <Footer />
        </div>
      ) : (
        <Spinner animation="border" role="status" className="main-layout__spainner">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
    </div>
  );
};

export default MainLayout;
