import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";
import { z } from "zod";
import { baseApi } from "@/shared/api";
import { mapProduct } from "@/entities/product/lib/mapProduct";
import { categorySchema, productSchema, type Product, type RawProduct } from "./schema";
import { MOCK_PRODUCTS } from "./moks";
import type { ProductStatus } from "./types";

export const productAdapter = createEntityAdapter<Product>({});

export const fetchProducts = createAsyncThunk<Product[], void, { rejectValue: string }>(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await baseApi.get<RawProduct[]>("/products");

      const allRawData = [...MOCK_PRODUCTS, ...response.data];

      const products = allRawData.map(mapProduct);
      const result = z.array(productSchema).safeParse(products);

      if (!result.success) {
        console.error("Validation error:", result.error);
        return rejectWithValue("Data validation failed");
      }

      return result.data;
    } catch {
      return rejectWithValue("Network or Server error");
    }
  }
);

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
      const result = categorySchema.safeParse(action.payload);

      state.currentCategory = result.success ? result.data : "all";
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
