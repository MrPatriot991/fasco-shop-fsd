import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/shared/ui";
import { useAppSelector } from "@/shared/lib/hooks";
import { selectCartItemCount } from "@/entities/cart";

export const FloatingCartButton = () => {
  const count = useAppSelector(selectCartItemCount);

  return (
    <Button
      asChild
      variant="primary"
      size="icon"
      className="fixed bottom-6 right-6 z-40 h-12 w-12 p-3 shadow-2xl"
    >
      <Link to="/cart">
        <div className="relative">
          <ShoppingCart size={28} className="text-white" />
          {count > 0 && (
            <span className="absolute -top-2 -right-2 flex items-center justify-center w-4 h-4 bg-white text-black font-bold text-[10px] rounded-full">
              {count > 9 ? "9+" : count}
            </span>
          )}
        </div>
      </Link>
    </Button>
  );
};
