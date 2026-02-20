import { Search } from "lucide-react";
import { Container } from "@/shared/ui/container";
import { Dropdown } from "@/shared/ui/dropdown";
import { Input } from "@/shared/ui/input";
import type { WishlistSortValue } from "../model/types";

interface SortOptions {
  label: string;
  value: WishlistSortValue;
}

const SORT_OPTIONS: SortOptions[] = [
  { label: "Defaut", value: "default" },
  { label: "Price: Low to High", value: "price-low" },
  { label: "Price: High to Low", value: "price-high" },
];

interface WishlistToolbarProps {
  search: string;
  sort: WishlistSortValue;
  onSearchChange: (search: string) => void;
  onSortChange: (sort: WishlistSortValue) => void;
  className?: string;
}

export const WishlistToolbar = ({
  search,
  sort,
  onSearchChange,
  onSortChange,
  className,
}: WishlistToolbarProps) => {
  const currentLabel = SORT_OPTIONS.find((option) => option.value === sort)?.label ?? "default";

  return (
    <div className={className}>
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-md">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500">
              <Search size={18} />
            </span>

            <Input
              variant="outline"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search in wishlist..."
              className="pl-11"
              aria-label="Search wishlist"
            />
          </div>

          <div className="flex items-center justify-between gap-3 md:justify-end">
            <Dropdown
              label={currentLabel}
              items={SORT_OPTIONS}
              onSelect={(item) => onSortChange(item.value)}
              className="w-48"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

