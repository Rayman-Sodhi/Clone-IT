import React from "react";
import ShopPage from "../../components/shop/ShopPage";
import { useSelector } from "react-redux";
import {
  selectProducts,
  selectDepartments,
} from "../../redux/productsSlice.js";

const Shop = () => {
  const products = useSelector(selectProducts);
  const departments = useSelector(selectDepartments);
  return (
    <div className="shop">
      <ShopPage products={products} departments={departments} />
    </div>
  );
};

export default Shop;
