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
    <Link to={`/shop/${id}`} className="group block h-full focus-visible:outline-none">
      <article
        className={cn(
          "flex h-full w-full cursor-pointer overflow-hidden rounded-2xl border border-brand-gray/10 bg-brand-white p-4 shadow-subtle transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl group-focus-visible:ring-2 group-focus-visible:ring-brand-dark/30",
          variant === "grid" ? "flex-col gap-4" : "flex-col gap-4 lg:flex-row lg:items-start"
        )}
      >
        <div
          className={cn(
            "relative aspect-3/4 overflow-hidden rounded-xl bg-brand-surface/30",
            variant === "list" ? "w-full lg:w-1/2" : "w-full"
          )}
        >
          <img
            src={image}
            alt={title}
            className={cn(
              "h-full w-full transition-transform duration-500 ease-out group-hover:scale-105",
              image.includes("https://fakestoreapi.com")
                ? "object-contain object-center"
                : "object-cover object-top"
            )}
          />
          <div className="absolute flex top-5 right-5 z-25">
            <ToggleWishlistButton
              productId={productId}
              colorStar="text-black"
              className="rounded-full bg-white/90 backdrop-blur-sm active:bg-white"
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
            "flex w-full flex-1 flex-col justify-between gap-4",
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
          <span className="text-xs font-medium text-brand-dark">
            ({rating.count.toLocaleString()}) Customer Reviews
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
