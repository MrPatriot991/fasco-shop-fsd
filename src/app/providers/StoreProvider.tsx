import { Provider } from "react-redux";
import { configureStore, createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { productSlice } from "@/entities/product";
import { authSlice } from "@/features/auth/model";
import { filterSlice } from "@/features/filter-products";
import { cartSlice } from "@/entities/cart";
import { wishlistSlice } from "@/features/wishlist";

const cartListener = createListenerMiddleware();

cartListener.startListening({
  matcher: isAnyOf(
    cartSlice.actions.addToCart,
    cartSlice.actions.updateCartItem,
    cartSlice.actions.toggleGifWrap,
    cartSlice.actions.removeFromCart
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

const store = configureStore({
  reducer: {
    [productSlice.name]: productSlice.reducer,
    [authSlice.name]: authSlice.reducer,
    [filterSlice.name]: filterSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [wishlistSlice.name]: wishlistSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(cartListener.middleware),
});

export function StoreProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
