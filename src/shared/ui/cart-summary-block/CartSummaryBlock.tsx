import { formatCurrency } from "@/shared/lib/format";
import { cn } from "@/shared/lib/utils";

interface CartSummaryBlockProps {
  subtotal: number;
  variant?: "modal" | "page";
  className?: string;
}

export const CartSummaryBlock = ({
  subtotal,
  variant = "modal",
  className,
}: CartSummaryBlockProps) => {
  const isModal = variant === "modal";

  return (
    <div
      className={cn(
        "flex items-center py-4",
        isModal ? "justify-between mb-4" : "justify-between md:justify-end gap-12 md:gap-20",
        className
      )}
    >
      <span
        className={cn(
          "font-semibold font-volkhov text-brand-black",
          isModal ? "text-lg" : "text-lg md:text-xl"
        )}
      >
        Subtotal
      </span>
      <span
        className={cn(
          "font-bold font-volkhov text-brand-black",
          isModal ? "text-2xl" : "text-2xl md:text-3xl"
        )}
      >
        {formatCurrency(subtotal)}
      </span>
    </div>
  );
};
