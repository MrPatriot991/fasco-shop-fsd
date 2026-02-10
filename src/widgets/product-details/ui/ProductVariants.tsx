import { SizeSelector } from "@/features/filter-products/ui/SizeSelector";
import { ColorPiaker } from "@/features/filter-products/ui/ColorPicker";
import type { Color, Sizes } from "@/shared/lib/constants";

interface ProductVariantProps {
  sizes: Sizes[];
  colors: Color[];
  selectedSize: Sizes[];
  selectedColor: Color[];
}

export const ProductVariants = ({
  sizes,
  colors,
  selectedSize,
  selectedColor,
}: ProductVariantProps) => {
  return (
    <div className="mb-6">
      <div>
        <div className="text-base font-semibold mb-3 text-gray-900">
          Size: <span className="uppercase">{selectedSize}</span>
        </div>
        <SizeSelector sizes={sizes} isMult={false} selectedSize={selectedSize} className="px-0" />
      </div>
      <div>
        <div className="text-base font-semibold mb-3 text-gray-900">Color: {selectedColor}</div>
        <ColorPiaker
          colors={colors}
          isMult={false}
          selectedColor={selectedColor}
          className="px-0"
        />
      </div>
    </div>
  );
};
