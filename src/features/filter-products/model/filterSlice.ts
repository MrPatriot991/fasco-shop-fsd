import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
// import { categorySchema } from "./schema";
import type { Collection, Brand, Color, Sizes, Tags, Category } from "@/shared/lib/constants";

interface ActiveFilter {
  sizes: Sizes[];
  colors: Color[];
  priceRange: number[];
  brands: Brand[];
  collection: Collection;
  tags: Tags[];
  currentCategory: Category;
}

type ArrayKey = keyof Pick<ActiveFilter, "sizes" | "colors" | "brands" | "tags">;

const initialState: ActiveFilter = {
  sizes: [],
  colors: [],
  priceRange: [0, 99999],
  brands: [],
  collection: "All products",
  tags: [],
  currentCategory: "all",
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    toggleArrayFilter: <K extends ArrayKey>(
      state: ActiveFilter,
      action: PayloadAction<{ key: K; value: string }>
    ) => {
      const { key, value } = action.payload;
      const currentArray = state[key] as string[];

      if (currentArray.includes(value)) {
        state[key] = currentArray.filter((item) => item !== value) as ActiveFilter[K];
      } else {
        currentArray.push(value);
      }
    },
    setPriceRange: (state, action: PayloadAction<number[]>) => {
      state.priceRange = action.payload;
    },
    setCollection: (state, action: PayloadAction<Collection>) => {
      state.collection = action.payload;
    },
    setCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
    resetFilters: () => initialState,
  },
});

export const { toggleArrayFilter, setPriceRange, setCollection, setCategory, resetFilters } =
  filterSlice.actions;
export default filterSlice.reducer;
