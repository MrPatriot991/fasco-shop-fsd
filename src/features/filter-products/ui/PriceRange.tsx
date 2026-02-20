import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import { selectPricePicker } from "@/features/filter-products";
import { setPriceRange } from "@/features/filter-products";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";

const PRICE_BUCKETS = [
  { label: "$0 - $50", min: 0, max: 50 },
  { label: "$50 - $100", min: 50, max: 100 },
  { label: "$100 - $150", min: 100, max: 150 },
  { label: "$150 - $250", min: 150, max: 250 },
  { label: "$250 - $500", min: 250, max: 500 },
  { label: "$500 - $1000", min: 500, max: 1000 },
];

export const PriceRange = () => {
  const dispatch = useAppDispatch();
  const priceRange = useAppSelector(selectPricePicker);

  return (
    <div className="flex flex-col items-start gap-1 py-4">
      {PRICE_BUCKETS.map((bucket) => {
        const isActive = priceRange[0] === bucket.min && priceRange[1] === bucket.max;

        return (
          <Button
            key={bucket.label}
            variant="ghost"
            size="none"
            onClick={() => dispatch(setPriceRange([bucket.min, bucket.max]))}
            className={cn(
              "flex items-center justify-between gap-2 px-3 py-2",
              isActive ? "text-brand-black bg-surface-muted" : "text-brand-gray"
            )}
          >
            <span>{bucket.label}</span>
          </Button>
        );
      })}
      {(priceRange[0] !== 0 || priceRange[1] !== 1000) && (
        <Button
          variant="ghost"
          size="none"
          onClick={() => dispatch(setPriceRange([0, 99999]))}
          className="text-xs text-accent-red uppercase font-bold mt-2 text-left px-3 hover:underline"
        >
          Reset Price
        </Button>
      )}
    </div>
  );
};

