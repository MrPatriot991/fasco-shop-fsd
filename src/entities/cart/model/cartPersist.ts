import { z } from "zod";
import { cartItemSchema } from "./cartSchema";
import type { CartStorage } from "./cartTypes";

export const loadCartFromLocalStorage = (): CartStorage => {
  try {
    const data = localStorage.getItem("cart");

    if (!data) {
      return {
        items: [],
        isGlobalGiftWrap: false,
      };
    }

    const parsed = JSON.parse(data);
    return {
      items: parsed ? z.array(cartItemSchema).parse(parsed.items ?? []) : [],
      isGlobalGiftWrap: parsed.isGlobalGiftWrap === true,
    };
  } catch {
    return {
      items: [],
      isGlobalGiftWrap: false,
    };
  }
};
