import { Star } from "lucide-react";
import { Button, StarRating } from "@/shared/ui";

interface ProductHeaderProps {
  brand: string;
  title: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const ProductHeader = ({ brand, title, rating }: ProductHeaderProps) => {
  return (
    <>
      <div className="uppercase text-sm text-brand-gray  mb-3">{brand}</div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg md:text-3xl text-brand-black font-volkhov">{title}</h1>
        <Button
          type="button"
          variant="ghost"
          size="none"
          className="hidden lg:flex p-2 border border-brand-gray/30 rounded-full cursor-pointer"
        >
          <Star size={19} className="text-black" />
        </Button>
      </div>

      <div className="flex items-center gap-3 mb-5">
        <StarRating rate={rating.rate} />
        <span>({rating.count})</span>
      </div>
    </>
  );
};
