import { useAppDispatch } from "@/shared/lib/hooks";
import { toggleArrayFilter } from "@/features/filter-products";
import { Button } from "@/shared/ui";
import { setFilterValue } from "../model/filterSlice";
import { SIZES, type Sizes } from "@/shared/lib/constants";
import { cn } from "@/shared/lib/utils";

interface SizeSelectorProps {
  sizes?: readonly Sizes[];
  isMult?: boolean;
  className?: string;
  selectedSize?: Sizes[];
}

export const SizeSelector = ({
  sizes = SIZES,
  isMult = true,
  selectedSize,
  className,
}: SizeSelectorProps) => {
  const dispatch = useAppDispatch();

  const handleSizeClick = (size: Sizes) => {
    if (isMult) {
      dispatch(toggleArrayFilter({ key: "sizes", value: size }));
    } else {
      dispatch(setFilterValue({ key: "sizes", value: [size] }));
    }
  };

  if (!selectedSize) return null;

  return (
    <div className={cn("flex flex-wrap gap-3 px-3 py-4", className)}>
      {sizes.map((size) => {
        const isActive = selectedSize.includes(size);

        return (
          <Button
            key={size}
            type="button"
            size="icon"
            aria-pressed={isActive}
            aria-label={`Filter by size ${size}`}
            variant={isActive ? "active" : "surface"}
            onClick={() => handleSizeClick(size)}
            className="w-12 h-12 uppercase rounded-lg text-sm"
          >
            {size}
          </Button>
        );
      })}
    </div>
  );
};
