import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartState, CartItem } from "./types";

const loadCartFromLS = (): CartItem[] => {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const loadGiftWrapFromLS = (): boolean => {
  return localStorage.getItem("giftWrap") === "true";
};

const initialState: CartState = {
  cart: loadCartFromLS(),
  lastAddedId: null,
  isCartModalOpen: false,
  isGlobalGiftWrap: loadGiftWrapFromLS(),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existing = state.cart.find((item) => item.id === action.payload.id);
      
      if (existing) {
        existing.quantity += action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }
      
      state.lastAddedId = action.payload.id;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    updateCartItem: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.cart.find((item) => item.id === action.payload.id);

      if (item) {
        item.quantity = Math.max(1, action.payload.quantity);
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    toggleGifWrap: (state) => {
      state.isGlobalGiftWrap = !state.isGlobalGiftWrap;
      localStorage.setItem("giftWrap", String(state.isGlobalGiftWrap));
    },
    openCart: (state) => {
      state.isCartModalOpen = true;
    },
    closeCart: (state) => {
      state.isCartModalOpen = false;
    },
  },
});

export const { addToCart, openCart, closeCart, updateCartItem, removeFromCart, toggleGifWrap } =
  cartSlice.actions;
export default cartSlice.reducer;
