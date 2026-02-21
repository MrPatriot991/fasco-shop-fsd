import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "@/app/providers";
import type { CartDetailsItem } from "./cartTypes";

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectLastAddedId = (state: RootState) => state.cart.lastAddedId;
export const selectIsCartModalOpen = (state: RootState) => state.cart.isCartModalOpen;
export const selectIsGiftWrapEnabled = (state: RootState) => state.cart.isGlobalGiftWrap;

export const selectCartDetails = createSelector(
  [selectCartItems, (state: RootState) => state.products.entities],
  (cartItems, products): CartDetailsItem[] => {
    if (!products) return [];
    return cartItems.map((item) => {
      const product = products[item.productId];

      return {
        ...item,
        title: product?.title ?? "Unknown Product",
        price: product?.price ?? 0,
        image: product?.image,
      };
    });
  }
);

export const selectItemTotal = createSelector(
  [selectCartDetails, selectLastAddedId],
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
  [selectCartDetails, selectIsGiftWrapEnabled],
  (cart, isGiftWrap) => {
    const itemsTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    return itemsTotal + (isGiftWrap ? 10 : 0);
  }
);

export const selectCartItemCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((count, item) => count + item.quantity, 0)
);
