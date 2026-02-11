import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "@/entities/product";
import { authReducer } from "@/features/auth/model";
import { filterReducer } from "@/features/filter-products";
import { cartReducer } from "@/entities/cart";
import { wishlistReducer } from "@/features/wishlist";

const store = configureStore({
  reducer: {
    products: productReducer,
    auth: authReducer,
    filters: filterReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export function StoreProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
