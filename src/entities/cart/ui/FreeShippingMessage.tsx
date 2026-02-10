import { useAppSelector } from "@/shared/lib/hooks";
import { formatCurrency } from "@/shared/lib/format";
import { selectItemTotal } from "@/entities/cart";
import { cn } from "@/shared/lib/utils";

interface FreeShippingProps {
  threshold?: number;
  className?: string;
}

export const FreeShippingMessage = ({ threshold = 75, className }: FreeShippingProps) => {
  const subtotal = useAppSelector(selectItemTotal);
  const remaining = threshold - subtotal;

  if (remaining <= 0) {
    return (
      <span className={cn("text-green-600 font-medium text-end", className)}>
        You've got free shipping!
      </span>
    );
  }

  return (
    <p className={cn("mt-1 text-sm text-brand-gray text-end", className)}>
      Buy <span className="font-semibold text-brand-black">{formatCurrency(remaining)}</span> More
      And Get <span className="font-semibold text-brand-black">Free Shipping</span>
    </p>
  );
};
