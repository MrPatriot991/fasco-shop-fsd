import { createAsyncThunk } from "@reduxjs/toolkit";
import { ordersApi } from "@/shared/api";
import type { OrderDTO } from "./types";

export const createOrder = createAsyncThunk(
  "order/create",
  async (order: OrderDTO, { rejectWithValue }) => {
    try {
      const { data } = await ordersApi.post("/orders", order);
      return data as { orderId: string };
    } catch {
      return rejectWithValue("Order failed");
    }
  }
);
