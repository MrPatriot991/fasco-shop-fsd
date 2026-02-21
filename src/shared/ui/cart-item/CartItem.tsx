import { Button } from "@/shared/ui/button";
import { QuantityPicker } from "@/shared/ui/quantityPicker";
import { formatCurrency } from "@/shared/lib/format";
import { cn } from "@/shared/lib/utils";
import type { Color, Sizes } from "@/shared/lib/constants";

interface CartItemProps {
  id: string;
  productId: number;
  image?: string;
  title: string;
  color: Color;
  size: Sizes;
  price: number;
  quantity: number;
  variant?: "compact" | "detailed";
  showRemove?: boolean;
  showTotal?: boolean;
  onQuantityChange: (id: string, quantity: number) => void;
  onRemove?: (id: string) => void;
  className?: string;
}

export const CartItem = ({
  id,
  image,
  title,
  color,
  size,
  price,
  quantity,
  variant = "compact",
  showRemove = false,
  showTotal = false,
  onQuantityChange,
  onRemove,
  className,
}: CartItemProps) => {
  const total = price * quantity;
  const isCompact = variant === "compact";

  const quantityControl = (
    <QuantityPicker value={quantity} onChange={(newQty) => onQuantityChange(id, newQty)} />
  );

  return (
    <div className={cn("border-b py-6 border-gray-200", className)}>
      <div
        className={cn(
          "grid gap-6",
          isCompact ? "grid-cols-[auto_1fr]" : "grid-cols-1 md:grid-cols-12"
        )}
      >
        <div className={cn("flex gap-6", !isCompact && "md:col-span-5")}>
          <div className="shrink-0 overflow-hidden w-24 h-32 md:w-40 md:h-64 bg-gray-100">
            {image ? (
              <img
                src={image}
                alt={title}
                className={cn(
                  "w-full h-full p-4",
                  image.includes("https://fakestoreapi.com")
                    ? "object-contain object-center"
                    : "object-cover object-top"
                )}
              />
            ) : null}
          </div>

          <div className="flex flex-col justify-between flex-1">
            <div className="space-y-1">
              <h3
                className={cn(
                  "font-semibold text-brand-black line-clamp-1",
                  isCompact ? "text-base" : "text-base md:text-lg"
                )}
              >
                {title}
              </h3>
              <div className="text-sm text-brand-gray space-y-0.5">
                <p>Color: {color}</p>
                <p>
                  Size: <span className="capitalize text-brand-black">{size}</span>
                </p>
              </div>

              <div className={cn("font-bold text-brand-black mt-2", !isCompact && "md:hidden")}>
                {formatCurrency(price)}
              </div>
            </div>

            <div className="flex items-center gap-4 mt-2">
              {showRemove && onRemove && (
                <Button
                  variant="linkPlain"
                  size="none"
                  onClick={() => onRemove(id)}
                  className="text-sm text-brand-gray underline hover:text-red-500"
                >
                  Remove
                </Button>
              )}
              {isCompact && quantityControl}
            </div>
          </div>
        </div>

        {!isCompact && (
          <div className="grid grid-cols-2 items-center md:col-span-7 md:grid-cols-7 md:items-start">
            <div className="hidden md:flex col-span-2 items-center h-14 text-lg font-bold text-brand-black">
              {formatCurrency(price)}
            </div>

            <div className="col-span-1 md:col-span-3">{quantityControl}</div>

            {showTotal && (
              <div className="col-span-1 md:col-span-2 flex items-center md:h-14 justify-self-end font-volkhov text-lg md:text-xl font-bold text-brand-black">
                {formatCurrency(total)}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
