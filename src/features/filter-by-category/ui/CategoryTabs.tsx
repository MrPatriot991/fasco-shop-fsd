import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import { Button } from "@/shared/ui/button";
import { selectCategory, setCategory } from "@/entities/product";
import type { Category } from "@/shared/lib/constants";

interface Buttons {
  id: number;
  label: string;
  category: Category;
}

const buttons: Buttons[] = [
  { id: 1, label: "Women's Fashion", category: "women's clothing" },
  { id: 2, label: "Men's Fashion", category: "men's clothing" },
  { id: 3, label: "Women Accessories", category: "jewelery" },
  { id: 4, label: "Men Accessories", category: "electronics" },
  { id: 5, label: "Discount Deals", category: "discount-deals" },
];

export const CategoryTabs = () => {
  const dispatch = useAppDispatch();
  const activeCategory = useAppSelector(selectCategory);

  const handleCategoryClick = (category: Category) => {
    dispatch(setCategory(category));
  };

  return (
    <div className="w-full">
      <div className="relative z-10 flex gap-3 overflow-x-auto px-1 py-3 scrollbar-hide md:justify-between md:gap-7">
        {buttons.map((button) => {
          const isActive = activeCategory === button.category;

          return (
            <Button
              key={button.id}
              variant={isActive ? "primary" : "secondary"}
              size="medium"
              onClick={() => handleCategoryClick(button.category)}
            >
              <span className="block min-w-0 truncate">{button.label}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

