import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartState } from "./types";

const initialState: CartState = {
  cart: [],
  lastAddedId: null,
  isCartModalOpen: false,
  isGlobalGiftWrap: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.lastAddedId = action.payload.id;
      const existing = state.cart.find((item) => item.id === action.payload.id);

      if (existing) {
        existing.quantity += action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }
    },
    updateCartItem: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      state.lastAddedId = action.payload.id;
      const item = state.cart.find((item) => item.id === action.payload.id);

      if (item) {
        item.quantity = Math.max(1, action.payload.quantity);
      }
    },
    toggleGifWrap: (state) => {
      state.isGlobalGiftWrap = !state.isGlobalGiftWrap;
    },
    openCart: (state) => {
      state.isCartModalOpen = true;
    },
    closeCart: (state) => {
      state.isCartModalOpen = false;
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, openCart, closeCart, updateCartItem, removeFromCart, toggleGifWrap } =
  cartSlice.actions;
export default cartSlice.reducer;
