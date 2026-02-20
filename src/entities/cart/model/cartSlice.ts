import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { loadCartFromLocalStorage } from "./cartPersist";
import type { CartState } from "./cartTypes";
import type { CartItem } from "./cartSchema";
import { checkoutSubmitted } from "@/features/checkout/model/checkoutActions";

type AddManyPayload = CartItem[];

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
    addManyToCart: (state, action: PayloadAction<AddManyPayload>) => {
      for (const item of action.payload) {
        const existing = state.items.find((x) => x.id === item.id);

        if (existing) {
          existing.quantity += item.quantity;
        } else {
          state.items.push(item);
        }
      }
    },
    updateCartItem: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = Math.max(1, action.payload.quantity);
      }
    },
    toggleGiftWrap: (state) => {
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
  extraReducers: (builder) => {
    builder.addCase(checkoutSubmitted, (state) => {
      state.items = [];
      state.lastAddedId = null;
      state.isGlobalGiftWrap = false;
    });
  },
});

export const {
  addToCart,
  addManyToCart,
  openCart,
  closeCart,
  updateCartItem,
  removeFromCart,
  toggleGiftWrap,
} = cartSlice.actions;
export default cartSlice.reducer;
