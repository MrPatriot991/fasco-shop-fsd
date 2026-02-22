import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchProducts } from "./productThunks";
import type { Product } from "./productSchema";
import type { ProductStatus } from "./productTypes";

export const productAdapter = createEntityAdapter<Product>({});

fetchProducts();

const initialState = productAdapter.getInitialState<ProductStatus>({
  status: "idle",
  error: null,
  currentCategory: "all",
});

export type ProductState = typeof initialState;

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "success";
        productAdapter.setAll(state, action.payload);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload ?? "Error";
      });
  },
});

export const { setCategory } = productSlice.actions;
export default productSlice.reducer;
