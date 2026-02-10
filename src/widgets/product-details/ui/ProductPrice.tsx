import { formatCurrency } from "@/shared/lib/format";
import { getDiscountData } from "@/shared/lib/utils";

interface ProductPriceProps {
  price: number;
  salePercent: number;
}

export const ProductPrice = ({ price, salePercent }: ProductPriceProps) => {
  const { currentPrice, oldPrice, percent, hasDiscount } = getDiscountData(price, salePercent);

  return (
    <div className="flex flex-wrap items-center gap-4 mb-5">
      <div className="text-2xl md:text-3xl font-bold text-gray-900">
        {formatCurrency(currentPrice)}
      </div>
      {hasDiscount && (
        <div className="flex gap-4">
          <div className="text-xl text-gray-400 line-through">{formatCurrency(oldPrice)}</div>
          <div className="bg-red-500 text-white px-3 py-2 rounded text-xs font-bold">
            SAVE {percent}%
          </div>
        </div>
      )}
    </div>
  );
};
