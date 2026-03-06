import { Link } from "react-router-dom";
import { selectIsAuthenticated } from "@/entities/session";
import { useAppSelector } from "@/shared/lib/hooks";
import { Button } from "@/shared/ui/button";
import { CartSummaryBlock } from "@/shared/ui/cart-summary-block";
import { CartCheckoutButtons } from "@/shared/ui/cart-checkout-buttons";

interface CartModalFooterProps {
  subtotal: number;
  onClose: () => void;
}

export const CartModalFooter = ({ subtotal, onClose }: CartModalFooterProps) => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  return (
    <div className="border-t border-gray-200 py-6">
      <CartSummaryBlock subtotal={subtotal} variant="modal" />

      <CartCheckoutButtons
        onClose={onClose}
        checkoutLabel="Checkout"
        checkoutPath={isAuthenticated ? "/checkout" : "/sign-in"}
        state={!isAuthenticated ? { from: "/checkout" } : undefined}
        viewCartButton={
          <Button asChild variant="linkPlain" size="none" onClick={onClose}>
            <Link
              to="/cart"
              className="text-center text-base md:text-2xl font-volkhov underline underline-offset-4"
            >
              View Cart
            </Link>
          </Button>
        }
      />
    </div>
  );
};
