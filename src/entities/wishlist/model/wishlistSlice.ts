import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { loadWishlistFromLocalStorage } from "./storage";

interface WishlistState {
  ids: Record<string, true>;
}

const persistedIds = loadWishlistFromLocalStorage();

const initialState: WishlistState = {
  ids: Object.fromEntries(persistedIds.map((id) => [id, true])),
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlist: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state.ids[id]) delete state.ids[id];
      else state.ids[id] = true;
    },
    removeFromWhislist: (state, action: PayloadAction<string>) => {
      delete state.ids[action.payload];
    },
    clearWishlist: (state) => {
      state.ids = {};
    },
  },
});

export const { toggleWishlist, removeFromWhislist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
