import { formatCurrency } from "@/shared/lib/format";
import type { Product } from "../model/schema";

export const ProductCard = ({ product }: { product: Product }) => {
  const { title, brand, price, image, rating } = product;

  return (
    <article className="flex space-y-5 flex-col p-4 h-full bg-white w-full  md:min-w-1/2 rounded-2xl shadow overflow-hidden hover:shadow-lg cursor-pointer transition-shadow duration-200">
      <figure>
        <img src={image} alt={brand} className="h-60 w-full object-contain" />
      </figure>
      <div className="flex space-y-4 justify-between w-full flex-col flex-1">
        <header className="flex justify-between items-start gap-4">
          <div className="min-w-0">
            <h3 className="text-xl text-stone-700 font-medium line-clamp-1">{title}</h3>
            <p className="text-xs text-gray-400 font-medium">{brand}</p>
          </div>
          <span className="text-yellow-400">{"★".repeat(Math.round(rating.rate))}</span>
        </header>
        <span className="text-xs text-stone-700 font-medium">
          ({rating.count}k) Customer Reviews
        </span>
        <footer className="flex justify-between items-center">
          <strong className="text-xl">{formatCurrency(price)}</strong>
          {rating.count > 200 && <span className="text-xs text-red-500">Almost Sold Out</span>}
        </footer>
      </div>
    </article>
  );
};
