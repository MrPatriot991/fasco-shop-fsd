import type { RootState } from "@/app/providers";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const loadWishlistFromLS = (): number[] => {
  try {
    const data = localStorage.getItem("wishlist");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

interface WisglistState {
  items: number[];
}

const initialState: WisglistState = {
  items: loadWishlistFromLS(),
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlist: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const index = state.items.indexOf(id);

      if (index === -1) {
        state.items.push(id);
      } else {
        state.items.splice(index, 1);
      }

      localStorage.setItem("wishlist", JSON.stringify(state.items));
    },
  },
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
export const selectWishlistIds = (state: RootState) => state.wishlist.items;
