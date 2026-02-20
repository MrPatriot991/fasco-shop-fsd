import { Link } from "react-router-dom";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/lib/utils";

interface CartCheckoutButtonsProps {
  onCheckout: () => void;
  checkoutLabel?: string;
  viewCartButton?: React.ReactNode;
  className?: string;
}

export const CartCheckoutButtons = ({
  onCheckout,
  checkoutLabel = "Checkout",
  viewCartButton,
  className,
}: CartCheckoutButtonsProps) => {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <Button asChild size="widthFull" type="button" onClick={onCheckout}>
        <Link to="/checkout">{checkoutLabel}</Link>
      </Button>
      {viewCartButton}
    </div>
  );
};

