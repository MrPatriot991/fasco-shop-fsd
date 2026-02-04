import { createSelector } from "@reduxjs/toolkit";
import { productAdapter, type ProductState } from "./slice";

export const selectProductState = (state: { products: ProductState }) => state.products;
export const selectProductStatus = (state: { products: ProductState }) => state.products.status;

export const productSelectors = productAdapter.getSelectors(selectProductState);

export const { selectAll: selectAllProducts } = productSelectors;

export const selectOnlyDeals = createSelector([productSelectors.selectAll], (products) =>
  products.filter((p) => p.isDiscount)
);
