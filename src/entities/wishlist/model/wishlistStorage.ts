import { z } from "zod";

const wishlistSchema = z.array(z.string());

export const loadWishlistFromLocalStorage = (): string[] => {
  try {
    const raw = localStorage.getItem("wishlist");
    if (!raw) return [];
    const parse = JSON.parse(raw);
    return wishlistSchema.parse(parse);
  } catch {
    return [];
  }
};
