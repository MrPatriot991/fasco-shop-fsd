import { StarRating } from "@/shared/ui";
import { ToggleWishlistButton } from "@/features/wishlist";

interface ProductHeaderProps {
  id: string;
  brand: string;
  title: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const ProductHeader = ({ id, brand, title, rating }: ProductHeaderProps) => {
  return (
    <>
      <div className="uppercase text-sm text-brand-gray  mb-3">{brand}</div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg md:text-3xl text-brand-black font-volkhov">{title}</h1>
        <div className="hidden lg:flex">
          <ToggleWishlistButton productId={id} colorStar="text-gray-300" />
        </div>
      </div>

      <div className="flex items-center gap-3 mb-5">
        <StarRating rate={rating.rate} />
        <span>({rating.count})</span>
      </div>
    </>
  );
};
