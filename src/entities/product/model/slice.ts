import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";
import { z } from "zod";
import { baseApi } from "@/shared/api";
import { mapProduct } from "../lib/mapProduct";
import { productSchema, type Product, type RawProduct } from "./schema";
import type { ProductStatus } from "./types";

export const productAdapter = createEntityAdapter<Product>({});

export const fetchProducts = createAsyncThunk<Product[], void, { rejectValue: string }>(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await baseApi.get<RawProduct[]>("/products");

      const validated = response.data.map((item) => {
        const enhancedItem = mapProduct(item);
        return productSchema.safeParse(enhancedItem);
      });

      return validated
        .filter((result): result is z.ZodSafeParseSuccess<Product> => result.success)
        .map((result) => result.data);
    } catch {
      return rejectWithValue("Network or Server error");
    }
  }
);

const initialState = productAdapter.getInitialState<ProductStatus>({
  status: "idle",
  error: null,
});

export type ProductState = typeof initialState;

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
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

export default productSlice.reducer;
