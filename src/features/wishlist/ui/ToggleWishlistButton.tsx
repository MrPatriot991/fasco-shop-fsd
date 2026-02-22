import { Star } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import { toggleWishlist } from "@/entities/wishlist/model/wishlistSlice";
import { selectIsInWishlist } from "@/entities/wishlist/model/wishlistSelectors";

interface ToggleWishlistProps {
  productId: string;
  colorStar?: string;
  className?: string;
}

export const ToggleWishlistButton = ({ productId, colorStar, className }: ToggleWishlistProps) => {
  const dispatch = useAppDispatch();
  const isFavorite = useAppSelector(selectIsInWishlist(productId));

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(toggleWishlist(productId));
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full bg-white/70 shadow-lg",
        "size-10"
      )}
    >
      <Button
        variant="ghost"
        size="none"
        onClick={handleToggle}
        className={cn("rounded-full p-2.5", isFavorite ? "text-yellow-400" : colorStar, className)}
      >
        <Star
          className="size-5 sm:size-6 lg:size-7"
          fill={isFavorite ? "currentColor" : "none"}
          strokeWidth={2}
        />
      </Button>
    </div>
  );
};
