import type { Color, Sizes } from "@/shared/lib/constants";

type CartItem = {
  id: string;
  productId: number;
  title: string;
  price: number;
  image: string;
  size: Sizes;
  color: Color;
  quantity: number;
};

export interface CartState {
  cart: CartItem[];
  lastAddedId: string | null;
  isCartModalOpen: boolean;
  isGlobalGiftWrap: boolean;
}
