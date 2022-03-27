import { createSlice } from "@reduxjs/toolkit";
import { db } from "../firebase.utils";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: null,
    departments:null
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setDepartment: (state, action) => {
      state.departments = action.payload
    }
  },
});

export const fetchProducts = () => {
  return (dispatch) => {
    const productsRef = db.collectionGroup("products");
    let products = [];
    productsRef
      // .limit(1)
      .get()
      .then((querySnapShot) => {
        querySnapShot.forEach((doc) => {
          products.push({ ...doc.data(), id: doc.id });
        });
        dispatch(setProducts(products));
      });
  };
};

export const fetchDepartment = () => {
  return (dispatch) => {
    const productsRef = db.collection("amazon");
    let departments = [];
    productsRef
      // .limit(1)
      .get()
      .then((querySnapShot) => {
        querySnapShot.forEach((doc) => {
          departments.push({ ...doc.data(), id: doc.id });
        });
        dispatch(setDepartment(departments));
      });
  };
};


export const { setProducts, setDepartment } = productsSlice.actions;

export const selectProducts = (state) => state.products.products;
export const selectDepartments = (state) => state.products.departments;

export default productsSlice.reducer;
