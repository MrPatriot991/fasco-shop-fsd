import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import { toggleArrayFilter } from "@/features/filter-products";
import { selectActiveSize } from "@/features/filter-products";
import { SIZES } from "@/shared/lib/constants";
import { Button } from "@/shared/ui";

export const SizeSelector = () => {
  const dispatch = useAppDispatch();
  const activeSizes = useAppSelector(selectActiveSize);

  return (
    <div className="flex flex-wrap gap-3 px-3 py-4">
      {SIZES.map((size) => {
        const isActive = activeSizes.includes(size);

        return (
          <Button
            key={size}
            type="button"
            size="icon"
            aria-pressed={isActive}
            aria-label={`Filter by size ${size}`}
            variant={isActive ? "active" : "surface"}
            onClick={() => dispatch(toggleArrayFilter({ key: "sizes", value: size }))}
            className="w-12 h-12 uppercase rounded-lg text-sm"
          >
            {size}
          </Button>
        );
      })}
    </div>
  );
};
