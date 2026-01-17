import { Provider } from "react-redux";
import {configureStore} from "@reduxjs/toolkit";


const store = configureStore({
  reducer: {
    // slice
  }
});

export function StoreProvider({children}: {children: React.ReactNode}) {
  return <Provider store={store}>{children}</Provider>
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
