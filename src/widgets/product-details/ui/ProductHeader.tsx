import { StarRating } from "@/shared/ui/star-rating";

interface ProductHeaderProps {
  brand: string;
  title: string;
  rating: {
    rate: number;
    count: number;
  };
  actionsSlot: React.ReactNode;
}

export const ProductHeader = ({ brand, title, rating, actionsSlot }: ProductHeaderProps) => {
  return (
    <>
      <div className="uppercase text-sm text-brand-gray  mb-3">{brand}</div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg md:text-3xl text-brand-black font-volkhov">{title}</h1>
        <div className="hidden lg:flex">{actionsSlot}</div>
      </div>

      <div className="flex items-center gap-3 mb-5">
        <StarRating rate={rating.rate} />
        <span>({rating.count})</span>
      </div>
    </>
  );
};
