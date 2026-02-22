import { createAsyncThunk } from "@reduxjs/toolkit";
import { z } from "zod";
import { baseApi } from "@/shared/api/baseApi";
import { MOCK_PRODUCTS } from "./mocks";
import { mapProduct } from "../lib/mapProduct";
import { productSchema } from "./productSchema";
import { selectProductStatus } from "./productSelectors";
import type { Product, RawProduct } from "./productSchema";
import type { RootState } from "@/app/providers";

export const fetchProducts = createAsyncThunk<
  Product[],
  void,
  { state: RootState; rejectValue: string }
>(
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
  },
  {
    condition: (_, { getState }) => {
      const state = getState();
      const status = selectProductStatus(state);

      if (status === "loading" || status === "success") return false;

      return true;
    },
  }
);
