import { ErrorBoundary } from "@/shared/ui/errorBoundary";
import { CartItem } from "@/shared/ui/cartItem";
import { CartTableHeader } from "./CartTableHeader";
import type { CartDetailsItem } from "@/entities/cart";

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
              id={item.id}
              productId={item.productId}
              image={item.image ?? ""}
              title={item.title}
              color={item.color}
              size={item.size}
              price={item.price}
              quantity={item.quantity}
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
