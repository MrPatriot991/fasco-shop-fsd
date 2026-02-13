import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { loadCartFromLocalStorage } from "./cart.persist";
import type { CartState } from "./cart.types";
import type { CartItem } from "./cart.schema";

const persistedState = loadCartFromLocalStorage();

const initialState: CartState = {
  items: persistedState.items || [],
  isGlobalGiftWrap: persistedState.isGlobalGiftWrap,
  lastAddedId: null,
  isCartModalOpen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, "id">>) => {
      const { productId, size, color, quantity } = action.payload;
      const compositeId = `${productId}-${size}-${color}`;
      const existing = state.items.find((item) => item.id === compositeId);

      if (existing) {
        existing.quantity += quantity;
      } else {
        state.items.push({ ...action.payload, id: compositeId });
      }

      state.lastAddedId = compositeId;
    },
    updateCartItem: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = Math.max(1, action.payload.quantity);
      }
    },
    toggleGifWrap: (state) => {
      state.isGlobalGiftWrap = !state.isGlobalGiftWrap;
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
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
