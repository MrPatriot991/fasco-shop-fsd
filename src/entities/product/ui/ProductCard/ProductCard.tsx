import { Link } from "react-router-dom";
import { cn, getDiscountData } from "@/shared/lib/utils";
import { formatCurrency } from "@/shared/lib/format";
import { StarRating } from "@/shared/ui";
import { ToggleWishlistButton } from "@/features/wishlist";
import type { Product } from "@/entities/product/model/schema";

export const ProductCard = ({
  product,
  variant,
}: {
  product: Product;
  variant: "list" | "grid";
}) => {
  const {
    id,
    title,
    brand,
    price,
    image,
    rating,
    isDiscount,
    isSoldOut,
    isAlmostSoldOut,
    salePercent,
  } = product;
  const { currentPrice, oldPrice, percent, hasDiscount } = getDiscountData(price, salePercent);
  const productId = String(id);

  return (
    <Link to={`/shop/${id}`}>
      <article
        className={cn(
          "flex space-y-5 p-4 h-full bg-brand-white w-full  md:min-w-1/2 rounded-2xl shadow-subtle overflow-hidden hover:shadow-lg cursor-pointer transition-shadow duration-200",
          variant === "grid" ? "flex-col" : "flex-col lg:flex-row items-start"
        )}
      >
        <div
          className={cn(
            "relative aspect-3/4 overflow-hidden bg-brand-surface/30",
            variant === "list" ? "w-full lg:w-1/2" : "w-full"
          )}
        >
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
          <div className="absolute flex top-5 right-5 z-25">
            <ToggleWishlistButton
              productId={productId}
              colorStar="text-black"
              className="active:bg-transparent"
            />
          </div>
          {isDiscount && hasDiscount && (
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-brand-dark text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                -{percent}%
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
        <div
          className={cn(
            "flex space-y-4 justify-between w-full flex-col flex-1",
            variant === "list" ? "px-4 py-2" : "px-0 py-0"
          )}
        >
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
            <div className="flex items-center gap-4">
              {isDiscount && hasDiscount ? (
                <>
                  <strong className="text-xl text-brand-dark">
                    {formatCurrency(currentPrice)}
                  </strong>
                  <span className="text-brand-gray line-through">{formatCurrency(oldPrice)}</span>
                </>
              ) : (
                <strong className="text-xl text-brand-dark">{formatCurrency(oldPrice)}</strong>
              )}
            </div>
            {isAlmostSoldOut && <span className="text-xs text-accent-red">Almost Sold Out</span>}
          </footer>
        </div>
      </article>
    </Link>
  );
};
