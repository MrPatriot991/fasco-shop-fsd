import { CartItem } from "@/shared/ui/cart-item";
import { ErrorBoundary } from "@/shared/ui/error-boundary";
import type { Color, Sizes } from "@/shared/lib/constants";

interface CartModalItemProps {
  id: string;
  productId: number;
  title: string;
  image?: string;
  price: number;
  color: Color;
  size: Sizes;
  quantity: number;
  onQuantityChange: (id: string, quantity: number) => void;
}

export const CartModalItem = (props: CartModalItemProps) => {
  return (
    <ErrorBoundary>
      <CartItem {...props} variant="compact" />
    </ErrorBoundary>
  );
};
