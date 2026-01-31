import { setCategory } from "@/entities/product";
import { useAppDispatch } from "@/shared/lib/hooks";
import { Button } from "@/shared/ui";

import type { Category } from "@/entities/product";

interface Buttons {
  id: number;
  label: string;
  category: Category;
}

const buttons: Buttons[] = [
  { id: 1, label: "Women’s Fashion", category: "women's clothing" },
  { id: 2, label: "Men’s Fashion", category: "men's clothing" },
  { id: 3, label: "Women Accessories", category: "jewelery" },
  { id: 4, label: "Men Accessories", category: "electronics" },
  { id: 5, label: "Discount Deals", category: "discount-deals" },
];

export const CategoryTabs = () => {
  const dispatch = useAppDispatch();

  const handleCategoryClick = (category: Category) => {
    dispatch(setCategory(category));
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="relative z-10 flex overflow-x-auto px-1 py-3 md:justify-between gap-3 md:gap-7 scrollbar-hide">
        {buttons.map((button) => (
          <Button
            key={button.id}
            variant="secondary"
            onClick={() => handleCategoryClick(button.category)}
          >
            {button.label}
          </Button>
        ))}
      </div>
    </div>
  );
};
