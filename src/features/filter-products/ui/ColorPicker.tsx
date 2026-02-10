import { MOCK_COLORS, COLOR_MAP, type Color } from "@/shared/lib/constants";
import { useAppDispatch } from "@/shared/lib/hooks";
import { toggleArrayFilter } from "@/features/filter-products";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui";
import { setFilterValue } from "../model/filterSlice";

interface ColorPickerProps {
  colors?: Color[];
  isMult?: boolean;
  className?: string;
  selectedColor?: Color[];
}

export const ColorPiaker = ({
  colors = MOCK_COLORS,
  isMult = true,
  selectedColor,
  className,
}: ColorPickerProps) => {
  const dispatch = useAppDispatch();

  const handleColorClick = (color: Color) => {
    if (isMult) {
      dispatch(toggleArrayFilter({ key: "colors", value: color }));
    } else {
      dispatch(setFilterValue({ key: "colors", value: [color] }));
    }
  };

  if (!selectedColor) return null;

  return (
    <div className={cn("flex flex-wrap gap-3 px-3 py-4", className)}>
      {colors.map((color) => {
        const hex = COLOR_MAP[color];
        const isActive = selectedColor.includes(color);

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
