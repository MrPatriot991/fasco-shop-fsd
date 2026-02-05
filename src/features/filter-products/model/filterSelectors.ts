import { createSelector } from "@reduxjs/toolkit";
import { selectAllProducts } from "@/entities/product";
import type { RootState } from "@/app/providers";
import type { Color, Sizes, Brand, Collection, Tags } from "@/shared/lib/constants";

export const selectFilterState = (state: RootState) => state.filters;
export const selectActiveSize = (state: RootState) => state.filters.sizes;
export const selectActiveColors = (state: RootState) => state.filters.colors;
export const selectPricePicker = (state: RootState) => state.filters.priceRange;
export const selectBrandFilter = (state: RootState) => state.filters.brands;
export const selectCollectionFilter = (state: RootState) => state.filters.collection;
export const selectTagsFilter = (state: RootState) => state.filters.tags;
export const selectCategoryFilter = (state: RootState) => state.filters.currentCategory;

export const selectFilteredProducts = createSelector(
  [selectAllProducts, selectFilterState],
  (products, filter) => {
    return products.filter((product) => {
      const matchesCategory =
        filter.currentCategory === "all" ||
        (filter.currentCategory === "discount-deals"
          ? product.isDiscount
          : product.category === filter.currentCategory);
      const matchesSize =
        filter.sizes.length === 0 || product.size.some((s) => filter.sizes.includes(s as Sizes));
      const matchesPrice =
        product.price >= filter.priceRange[0] && product.price <= filter.priceRange[1];
      const matchesColor =
        filter.colors.length === 0 ||
        product.colors.some((c) => filter.colors.includes(c as Color));
      const matchesBrand =
        filter.brands.length === 0 || filter.brands.includes(product.brand as Brand);
      const matchesCollection =
        filter.collection === "All products" ||
        product.collection.includes(filter.collection as Collection);
      const matchesTags =
        filter.tags.length === 0 || product.tags.some((t) => filter.tags.includes(t as Tags));

      return (
        matchesCategory &&
        matchesSize &&
        matchesPrice &&
        matchesColor &&
        matchesBrand &&
        matchesCollection &&
        matchesTags
      );
    });
  }
);
