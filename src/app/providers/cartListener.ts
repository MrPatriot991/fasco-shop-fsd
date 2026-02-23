import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import {
  addToCart,
  addManyToCart,
  updateCartItem,
  toggleGiftWrap,
  removeFromCart,
} from "@/entities/cart";
import { checkoutSubmitted } from "@/features/checkout/model/checkoutActions";
import type { RootState } from "./StoreProvider";

export const cartListener = createListenerMiddleware();

cartListener.startListening({
  matcher: isAnyOf(
    addToCart,
    addManyToCart,
    updateCartItem,
    toggleGiftWrap,
    removeFromCart,
    checkoutSubmitted
  ),
  effect: (_, api) => {
    const state = api.getState() as RootState;
    const { items, isGlobalGiftWrap } = state.cart;
    localStorage.setItem(
      "cart",
      JSON.stringify({
        items,
        isGlobalGiftWrap,
      })
    );
  },
});
