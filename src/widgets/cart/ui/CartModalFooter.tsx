import { Link } from "react-router-dom";
import { Button } from "@/shared/ui/button";
import { CartSummaryBlock } from "@/shared/ui/cartSummaryBlock";
import { CartCheckoutButtons } from "@/shared/ui/cartCheckoutButtons";

interface CartModalFooterProps {
  subtotal: number;
  onClose: () => void;
}

export const CartModalFooter = ({ subtotal, onClose }: CartModalFooterProps) => {
  return (
    <div className="border-t border-gray-200 py-6">
      <CartSummaryBlock subtotal={subtotal} variant="modal" />

      <CartCheckoutButtons
        onClose={onClose}
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
