import { createSelector } from "@reduxjs/toolkit";
import { productAdapter, type ProductState } from "./slice";

export const selectProductState = (state: { products: ProductState }) => state.products;
export const selectProductStatus = (state: { products: ProductState }) => state.products.status;

export const productSelectors = productAdapter.getSelectors(selectProductState);

export const { selectAll: selectAllProducts } = productSelectors;

export const selectOnlyDeals = createSelector([selectAllProducts], (products) =>
  products.filter((p) => p.isDiscount)
);

const selectProductId = (_: { products: ProductState }, id: number) => id;

export const selectProductByID = createSelector(
  [selectAllProducts, selectProductId],
  (product, id) => {
    return product.find((p) => p.id === id);
  }
);
