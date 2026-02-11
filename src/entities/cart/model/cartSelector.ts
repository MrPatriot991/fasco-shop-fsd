import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "@/app/providers";

export const selectCartItems = (state: RootState) => state.cart.cart;
export const selectLastAddedId = (state: RootState) => state.cart.lastAddedId;
export const selectIsCartModalOpen = (state: RootState) => state.cart.isCartModalOpen;
export const selectIsGiftWrapEnabled = (state: RootState) => state.cart.isGlobalGiftWrap;

export const selectItemTotal = createSelector(
  [selectCartItems, selectLastAddedId],
  (cartItems, id) => {
    const item = cartItems.find((el) => el.id === id);

    if (!item) return 0;
    return item.price * item.quantity;
  }
);

export const selectItemTotalWithWrap = createSelector(
  [selectItemTotal, selectIsGiftWrapEnabled],
  (itemTotal, isGiftWrap) => {
    return itemTotal + (isGiftWrap ? 10 : 0);
  }
);

export const selectCartSubtotal = createSelector(
  [selectCartItems, selectIsGiftWrapEnabled],
  (cart, isGiftWrap) => {
    const itemsTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    return itemsTotal + (isGiftWrap ? 10 : 0);
  }
);

export const selectCartItemCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((count, item) => count + item.quantity, 0)
);
