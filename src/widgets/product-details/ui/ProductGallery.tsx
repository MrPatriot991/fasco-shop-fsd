import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/lib/utils";
import type { Color } from "@/shared/lib/constants";
import { ToggleWishlistButton } from "@/features/wishlist";

interface ProductGalleryProps {
  id: string;
  colors: Color[];
  image: string;
  title: string;
}

export const ProductGallery = ({ id, colors, image, title }: ProductGalleryProps) => {
  return (
    <div className="flex gap-4 flex-1 flex-col-reverse lg:flex-row">
      <div className="flex lg:flex-col gap-3">
        {colors.map((color) => (
          <Button
            key={color}
            variant="ghost"
            size="none"
            className="w-10 h-10 md:w-20 md:h-20 border-2 border-gray-300 rounded-lg overflow-hidden hover:border-gray-800"
          >
            <div className="w-full h-full" style={{ backgroundColor: color }}></div>
          </Button>
        ))}
      </div>
      <div className="relative flex-1 rounded-lg overflow-hidden w-full lg:max-w-lg max-h-[654px]">
        <div className="absolute flex top-5 right-5 lg:hidden">
          <ToggleWishlistButton
            productId={id}
            colorStar="text-black"
            className="active:bg-transparent"
          />
        </div>
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
      </div>
    </div>
  );
};

