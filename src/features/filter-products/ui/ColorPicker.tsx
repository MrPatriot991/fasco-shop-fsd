import { MOCK_COLORS, COLOR_MAP, type Color } from "@/shared/lib/constants";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import { selectActiveColors } from "@/features/filter-products";
import { toggleArrayFilter } from "@/features/filter-products";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui";
import { setFilterValue } from "../model/filterSlice";

interface ColorPickerProps {
  colors?: Color[];
  isMult?: boolean;
  className?: string;
}

export const ColorPiaker = ({
  colors = MOCK_COLORS,
  isMult = true,
  className,
}: ColorPickerProps) => {
  const dispatch = useAppDispatch();
  const activeColors = useAppSelector(selectActiveColors);

  const handleColorClick = (color: Color) => {
    if (isMult) {
      dispatch(toggleArrayFilter({ key: "colors", value: color }));
    } else {
      dispatch(setFilterValue({ key: "colors", value: [color] }));
    }
  };

  return (
    <div className={cn("flex flex-wrap gap-3 px-3 py-4", className)}>
      {colors.map((color) => {
        const hex = COLOR_MAP[color];
        const isActive = activeColors.includes(color);

        return (
          <Button
            key={color}
            type="button"
            size="none"
            title={color}
            aria-pressed={isActive}
            aria-label={`Filter by ${color} color`}
            onClick={() => handleColorClick(color)}
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
