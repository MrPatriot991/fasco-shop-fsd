import { addManyToCart } from "@/entities/cart";
import { clearWishlist } from "@/entities/wishlist";
import type { AppDispatch } from "@/app/providers";
import type { Product } from "@/entities/product";

export const moveAllToCart = (products: Product[]) => (dispatch: AppDispatch) => {
  const items = products
    .filter((p) => p.sizes?.length && p.colors?.length)
    .map((p) => {
      const size = p.sizes![0];
      const color = p.colors![0];

      return {
        id: `${p.id}-${size}-${color}`,
        productId: Number(p.id),
        size,
        color,
        quantity: 1,
      };
    });

  if (items.length === 0) return;

  dispatch(addManyToCart(items));
  dispatch(clearWishlist());
};
