import { Link } from "react-router-dom";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/lib/utils";

interface CartCheckoutButtonsProps {
  checkoutLabel?: string;
  viewCartButton?: React.ReactNode;
  onClose?: () => void;
  className?: string;
}

export const CartCheckoutButtons = ({
  checkoutLabel = "Checkout",
  viewCartButton,
  onClose,
  className,
}: CartCheckoutButtonsProps) => {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <Button asChild size="widthFull" onClick={onClose}>
        <Link to="/checkout">{checkoutLabel}</Link>
      </Button>
      {viewCartButton}
    </div>
  );
};
