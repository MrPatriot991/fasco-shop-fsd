import type { CartItem } from "./cartSchema";

export type CartStorage = {
  items: CartItem[];
  isGlobalGiftWrap: boolean;
};

export interface CartState {
  items: CartItem[];
  lastAddedId: string | null;
  isCartModalOpen: boolean;
  isGlobalGiftWrap: boolean;
}

export type CartDetailsItem = CartItem & {
  title: string;
  price: number;
  image?: string;
};
