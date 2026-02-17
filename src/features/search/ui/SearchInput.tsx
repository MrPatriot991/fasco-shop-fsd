import { useState, useMemo } from "react";
import { X, Search } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { useDebounce, useAppSelector } from "@/shared/lib/hooks";
import { Input, Button } from "@/shared/ui";
import { selectAllProducts } from "@/entities/product";
import { QuickResults } from "@/features/search";

interface SearchInputProps {
  variant?: "header" | "mobile";
  onClose?: () => void;
}

export const SearchInput = ({ variant = "header", onClose }: SearchInputProps) => {
  const [query, setQuery] = useState("");
  const debounceQuery = useDebounce(query, 300);
  const products = useAppSelector(selectAllProducts);

  const filterProducts = useMemo(() => {
    if (debounceQuery.length < 3) return [];

    return products.filter((product) =>
      product.title.toLowerCase().includes(debounceQuery.toLowerCase())
    );
  }, [debounceQuery, products]);

  return (
    <div
      className={cn(
        "relative w-full flex items-center",
        variant === "header" ? "gap-2  max-w-md" : "max-w-none"
      )}
    >
      <Input
        variant="underline"
        autoFocus
        className={cn(
          variant === "header"
            ? "md:py-2"
            : "w-full py-3 pl-10 pr-4 bg-brand-surface/50 border border-transparent focus:border-brand-dark focus:bg-brand-white outline-none transition-colors duration-300 rounded-lg"
        )}
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      {onClose && variant === "header" && (
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X size={20} />
        </Button>
      )}
      {variant === "mobile" && (
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-dark/50" size={20} />
      )}

      {query.length > 2 && (
        <QuickResults results={filterProducts} isLoading={false} onClose={onClose} />
      )}
    </div>
  );
};
