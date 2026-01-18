import { productAdapter, type ProductState } from "./slice";

const selectProductState = (state: { products: ProductState }) => state.products;
export const selectProductStatus = (state: { products: ProductState }) => state.products.status;

export const productSelectors = productAdapter.getSelectors(selectProductState);

export const {
  selectAll: selectAllProducts,
  selectById: selectProductById,
  selectTotal: selectTotalProduct,
} = productSelectors;
