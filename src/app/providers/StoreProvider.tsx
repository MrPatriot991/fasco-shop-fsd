import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "@/entities/product";
import { filterSlice } from "@/features/filter-products";
import { sessionSlice } from "@/entities/session";
import { sessionListener } from "./sessionListener";
import { cartSlice } from "@/entities/cart";
import { cartListener } from "./cartListener";
import { wishlistSlice } from "@/entities/wishlist";
import { wishlistListener } from "./wishlistListener";

const store = configureStore({
  reducer: {
    [sessionSlice.name]: sessionSlice.reducer,
    [productSlice.name]: productSlice.reducer,
    [filterSlice.name]: filterSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [wishlistSlice.name]: wishlistSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(
      sessionListener.middleware,
      cartListener.middleware,
      wishlistListener.middleware
    ),
});

export function StoreProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
