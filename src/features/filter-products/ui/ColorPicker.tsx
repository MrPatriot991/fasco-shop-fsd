import { MOCK_COLORS, COLOR_MAP } from "@/shared/lib/constants";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import { selectActiveColors } from "@/features/filter-products";
import { toggleArrayFilter } from "@/features/filter-products";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui";

export const ColorPiaker = () => {
  const dispatch = useAppDispatch();
  const activeColors = useAppSelector(selectActiveColors);

  return (
    <div className="flex flex-wrap gap-3 px-3 py-4">
      {MOCK_COLORS.map((colorName) => {
        const hex = COLOR_MAP[colorName];
        const isActive = activeColors.includes(colorName);

        return (
          <Button
            key={colorName}
            type="button"
            size="none"
            title={colorName}
            aria-pressed={isActive}
            aria-label={`Filter by ${colorName} color`}
            onClick={() => dispatch(toggleArrayFilter({ key: "colors", value: colorName }))}
            className={cn(
              "group relative w-8 h-8 rounded-full",
              "hover:scale-110",
              "border border-gray-200",
              isActive && "ring-2 ring-brand-black ring-offset-2"
            )}
            style={{ backgroundColor: hex }}
          ></Button>
        );
      })}
    </div>
  );
};
