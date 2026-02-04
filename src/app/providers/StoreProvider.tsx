import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "@/entities/product/model/slice";
import authReducer from "@/features/auth/model/authSlice";
import filterReducer from "@/features/filter-products/model/filterSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    auth: authReducer,
    filters: filterReducer,
  },
});

export function StoreProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
