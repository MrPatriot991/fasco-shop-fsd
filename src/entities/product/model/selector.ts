import { createSelector } from "@reduxjs/toolkit";
import { productAdapter, type ProductState } from "./slice";

export const selectProductState = (state: { products: ProductState }) => state.products;
export const selectProductStatus = (state: { products: ProductState }) => state.products.status;
export const selectCurrentCategory = createSelector(
  [selectProductState],
  (state) => state.currentCategory
);

export const productSelectors = productAdapter.getSelectors(selectProductState);

export const {
  selectAll: selectAllProducts,
  selectById: selectProductById,
  selectTotal: selectTotalProduct,
} = productSelectors;

export const selectFilteredProducts = createSelector(
  [selectAllProducts, selectCurrentCategory],
  (products, currentCategory) => {
    if (currentCategory === "all") return products;

    if (currentCategory === "discount-deals") {
      return products.filter((p) => p.isDiscount);
    }

    return products.filter((p) => p.category === currentCategory);
  }
);

export const selectOnlyDeals = createSelector([productSelectors.selectAll], (products) =>
  products.filter((p) => p.isDiscount)
);
