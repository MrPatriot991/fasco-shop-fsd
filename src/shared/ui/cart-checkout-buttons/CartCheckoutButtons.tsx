import { Link } from "react-router-dom";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/lib/utils";

interface CartCheckoutButtonsProps {
  checkoutPath: string;
  checkoutLabel?: string;
  viewCartButton?: React.ReactNode;
  onClose?: () => void;
  className?: string;
  state?: unknown;
}

export const CartCheckoutButtons = ({
  checkoutLabel = "Checkout",
  checkoutPath,
  viewCartButton,
  onClose,
  state,
  className,
}: CartCheckoutButtonsProps) => {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <Button asChild size="widthFull" onClick={onClose}>
        <Link to={checkoutPath} state={state}>
          {checkoutLabel}
        </Link>
      </Button>
      {viewCartButton}
    </div>
  );
};
