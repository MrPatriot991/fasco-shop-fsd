import { createSelector } from "@reduxjs/toolkit";
import { productAdapter, type ProductState } from "./slice";

export const selectProductState = (state: { products: ProductState }) => state.products;
export const selectProductStatus = (state: { products: ProductState }) => state.products.status;
export const selectCategory = (state: { products: ProductState }) => state.products.currentCategory;

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

export const selectCategoryFilter = createSelector(
  [selectAllProducts, selectCategory],
  (products, category) => {
    switch (category) {
      case "all":
        return products;
      case "discount-deals":
        return products.filter((p) => p.isDiscount);
      default:
        return products.filter((product) => product.category === category);
    }
  }
);
