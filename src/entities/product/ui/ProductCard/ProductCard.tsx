import { formatCurrency } from "@/shared/lib/format";
import { StarRating } from "@/shared/ui";
import { calculateDiscount } from "@/shared/lib/utils/calculateDiscount";
import type { Product } from "@/entities/product/model/schema";
import { cn } from "@/shared/lib/utils";

export const ProductCard = ({ product }: { product: Product }) => {
  const { title, brand, price, image, rating, isDiscount, isSoldOut, isAlmostSoldOut } = product;
  const discountPercent = calculateDiscount(price, 30);

  return (
    <article className="flex space-y-5 flex-col p-4 h-full bg-brand-white w-full  md:min-w-1/2 rounded-2xl shadow-subtle overflow-hidden hover:shadow-lg cursor-pointer transition-shadow duration-200">
      <div className="relative aspect-3/4 overflow-hidden bg-brand-surface/30">
        <img
          src={image}
          alt={title}
          className={cn(
            "w-full h-full",
            image.includes("https://fakestoreapi.com")
              ? "object-contain object-center"
              : "object-cover object-top"
          )}
        />

        {isDiscount && discountPercent > 0 && (
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-brand-dark text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
              -{discountPercent}%
            </span>
          </div>
        )}

        {isSoldOut && (
          <div className="absolute inset-0 bg-white/60 flex items-center justify-center z-20">
            <span className="bg-red-500 text-white px-4 py-2 font-volkhov text-xl rotate-12">
              SOLD OUT
            </span>
          </div>
        )}
      </div>
      <div className="flex space-y-4 justify-between w-full flex-col flex-1">
        <header className="flex justify-between items-start gap-4">
          <div className="min-w-0">
            <h3 className="text-xl text-brand-dark font-medium line-clamp-1">{title}</h3>
            <p className="text-xs text-brand-gray font-medium">{brand}</p>
          </div>
          <StarRating rate={rating.rate} />
        </header>
        <span className="text-xs text-brand-dark font-medium">
          ({rating.count}k) Customer Reviews
        </span>
        <footer className="flex justify-between items-center">
          <strong className="text-xl text-brand-dark">{formatCurrency(price)}</strong>
          {isAlmostSoldOut && <span className="text-xs text-accent-red">Almost Sold Out</span>}
        </footer>
      </div>
    </article>
  );
};
