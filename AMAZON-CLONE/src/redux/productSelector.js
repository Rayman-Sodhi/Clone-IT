import { createSelector } from "@reduxjs/toolkit";

export const selectProduct = createSelector(
  (state) => state.products.products,
  (_, productId) => productId,
  (products, productId) => products.find((product) => product.id === productId)
);
