import { createSelector } from "@reduxjs/toolkit";
import { productAdapter, type ProductState } from "./slice";
import { MOCK_PRODUCTS } from "./moks";

export const selectProductState = (state: { products: ProductState }) => state.products;
export const selectProductStatus = (state: { products: ProductState }) => state.products.status;
export const selectCurrentCategory = createSelector(
  [selectProductState],
  (state) => state.currentCategory
)

export const productSelectors = productAdapter.getSelectors(selectProductState);

export const {
  selectAll: selectAllProducts,
  selectById: selectProductById,
  selectTotal: selectTotalProduct,
} = productSelectors;

export const selectFilteredProducts = createSelector(
  [selectAllProducts, selectCurrentCategory],
  (products, currentCategory) => {

    const all = [...MOCK_PRODUCTS, ...products];
    
    if (currentCategory === 'all') return all;
    return all.filter(p => p.category === currentCategory);
    }
)