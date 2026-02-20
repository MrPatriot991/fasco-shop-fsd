import { Menu, Tally4, Tally2, Tally3 } from "lucide-react";
import { useAppDispatch } from "@/shared/lib/hooks";
import { Button } from "@/shared/ui/button";
import { Dropdown } from "@/shared/ui/dropdown";
import { setSortBy } from "@/features/filter-products";
import type { SortOption } from "@/shared/lib/constants";
import { SearchFilterStatus } from "@/features/search-filter-status";

const SORT_OPTIONS: {
  label: string;
  value: SortOption;
}[] = [
  { label: "Default", value: "default" },
  { label: "Price: Low to High", value: "price-low" },
  { label: "Price: High to Low", value: "price-high" },
];

const views = [
  { cols: 1, icon: <Menu className="h-3 w-3" /> },
  { cols: 2, icon: <Tally2 className="h-3 w-3" /> },
  { cols: 3, icon: <Tally3 className="h-3 w-3" /> },
  { cols: 4, icon: <Tally4 className="h-3 w-3" /> },
];

interface CatalogHeaderProps {
  setCols: (col: number) => void;
  cols: number;
  searchTerm?: string | null;
}

export const CatalogHeader = ({ setCols, cols, searchTerm }: CatalogHeaderProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-1 items-center justify-between ">
      <div className="flex items-center gap-4">
        <Dropdown
          label="Sort by"
          items={SORT_OPTIONS}
          onSelect={(item: { label: string; value: SortOption }) => dispatch(setSortBy(item.value))}
          dropdownClassName="w-56"
        />
        {searchTerm && <SearchFilterStatus searchTerm={searchTerm} />}
      </div>
      <div className="flex gap-2">
        {views.map((view) => (
          <Button
            key={view.cols}
            variant="ghost"
            size="icon"
            onClick={() => setCols(view.cols)}
            className={
              view.cols === cols
                ? "rounded-xs bg-brand-dark text-white hover:bg-brand-dark/90"
                : "rounded-xs bg-gray-200/50 hover:bg-gray-200"
            }
          >
            {view.icon}
          </Button>
        ))}
      </div>
    </div>
  );
};

