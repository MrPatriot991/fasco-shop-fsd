import { Provider } from "react-redux";
import { configureStore, createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { productSlice } from "@/entities/product";
import { authSlice } from "@/features/auth/model";
import { filterSlice } from "@/features/filter-products";
import { cartSlice } from "@/entities/cart";
import { wishlistSlice } from "@/entities/wishlist";
import { checkoutSubmitted } from "@/features/checkout";

const cartListener = createListenerMiddleware();

cartListener.startListening({
  matcher: isAnyOf(
    cartSlice.actions.addToCart,
    cartSlice.actions.addManyToCart,
    cartSlice.actions.updateCartItem,
    cartSlice.actions.toggleGifWrap,
    cartSlice.actions.removeFromCart,
    checkoutSubmitted
  ),
  effect: (_, listenerApi) => {
    const state = listenerApi.getState() as RootState;
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

const wishlistListener = createListenerMiddleware();

wishlistListener.startListening({
  matcher: isAnyOf(
    wishlistSlice.actions.toggleWishlist,
    wishlistSlice.actions.removeFromWhislist,
    wishlistSlice.actions.clearWishlist
  ),
  effect: (_, api) => {
    const state = api.getState() as RootState;
    const ids = Object.keys(state.wishlist.ids);
    localStorage.setItem("wishlist", JSON.stringify(ids));
  },
});

const store = configureStore({
  reducer: {
    [productSlice.name]: productSlice.reducer,
    [authSlice.name]: authSlice.reducer,
    [filterSlice.name]: filterSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [wishlistSlice.name]: wishlistSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(cartListener.middleware, wishlistListener.middleware),
});

export function StoreProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
