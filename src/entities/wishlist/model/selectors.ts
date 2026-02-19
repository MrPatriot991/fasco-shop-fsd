import { createSelector } from "@reduxjs/toolkit";
import { selectProductEntities, type Product } from "@/entities/product";
import type { RootState } from "@/app/providers";

export const selectWishlistIdsMap = (state: RootState) => state.wishlist.ids;

export const selectWishlistIds = createSelector([selectWishlistIdsMap], (idsMap): string[] =>
  Object.keys(idsMap)
);

export const selectWishlistCount = createSelector(
  [selectWishlistIdsMap],
  (idsMap): number => Object.keys(idsMap).length
);

export const selectIsInWishlist =
  (id: string) =>
  (state: RootState): boolean =>
    Boolean(state.wishlist.ids[id]);

export const selectWishlistProducts = createSelector(
  [selectWishlistIds, selectProductEntities],
  (ids, entities: Record<string | number, Product>): Product[] =>
    ids.map((id) => entities[id]).filter(Boolean)
);
