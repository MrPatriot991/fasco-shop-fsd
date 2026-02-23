import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { toggleWishlist, removeFromWishlist, clearWishlist } from "@/entities/wishlist";
import type { RootState } from "./StoreProvider";

export const wishlistListener = createListenerMiddleware();

wishlistListener.startListening({
  matcher: isAnyOf(toggleWishlist, removeFromWishlist, clearWishlist),
  effect: (_, api) => {
    const state = api.getState() as RootState;
    const ids = Object.keys(state.wishlist.ids);
    localStorage.setItem("wishlist", JSON.stringify(ids));
  },
});
