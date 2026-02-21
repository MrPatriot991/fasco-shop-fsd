import { ErrorBoundary } from "@/shared/ui/errorBoundary";
import { CartItem } from "@/shared/ui/cartItem";
import { CartTableHeader } from "./CartTableHeader";
import type { CartDetailsItem } from "@/entities/cart/model/cartSchema";

interface CartItemProps {
  cartItems: CartDetailsItem[];
  onQuantityChange: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export const CartItemsSection = ({ cartItems, onQuantityChange, onRemove }: CartItemProps) => {
  return (
    <>
      <CartTableHeader />
      <div>
        {cartItems.map((item) => (
          <ErrorBoundary key={item.id}>
            <CartItem
              {...item}
              variant="detailed"
              showRemove
              showTotal
              onQuantityChange={onQuantityChange}
              onRemove={onRemove}
            />
          </ErrorBoundary>
        ))}
      </div>
    </>
  );
};
