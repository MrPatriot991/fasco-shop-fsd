import { Star } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import { selectWishlistIds, toggleWishlist } from "@/features/wishlist";

interface ToggleWishlistProps {
  productId: string;
  colorStar?: string;
  className?: string;
}

export const ToggleWishlistButton = ({ productId, colorStar, className }: ToggleWishlistProps) => {
  const dispatch = useAppDispatch();

  const wishlistIds = useAppSelector(selectWishlistIds);
  const isFavorite = wishlistIds.includes(productId);

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(toggleWishlist(productId));
  };

  return (
    <div className={"flex items-center justify-center size-12 shadow-lg rounded-full bg-white/70"}>
      <Button
        variant="ghost"
        size="none"
        onClick={handleToggle}
        className={cn("p-3 rounded-full", isFavorite ? "text-yellow-400" : colorStar, className)}
      >
        <Star size={30} fill={isFavorite ? "currentColor" : "none"} strokeWidth={2} />
      </Button>
    </div>
  );
};
