import { Link } from "react-router-dom";
import { formatCurrency } from "@/shared/lib/format";
import type { Product } from "@/entities/product";
import { Button } from "@/shared/ui/button";

interface QuickResultsProps {
  results: Product[];
  isLoading?: boolean;
  onClose?: () => void;
  onViewAll?: () => void;
}

export const QuickResults = ({ results, isLoading, onClose, onViewAll }: QuickResultsProps) => {
  if (isLoading)
    return (
      <div className="absolute top-full left-0 w-full bg-white shadow-xl rounded-b-xl p-4 text-center text-brand-dark/50">
        Searching...
      </div>
    );

  if (results.length === 0) return null;

  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-2xl rounded-b-xl border-t border-brand-surface overflow-hidden z-60">
      <ul className="max-h-100 overflow-y-auto">
        {results.map((product) => (
          <li key={product.id}>
            <Link
              to={`/shop/${product.id}`}
              className="flex items-center gap-4 p-4 hover:bg-brand-surface/30 transition-colors"
              onClick={onClose}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-12 h-12 object-cover rounded"
              />
              <div className="flex flex-col">
                <span className="font-medium text-brand-dark">{product.title}</span>
                <span className="text-sm text-brand-dark/60">{formatCurrency(product.price)}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Button
        variant="ghost"
        size="widthFull"
        onClick={onViewAll}
        className="block p-3 text-center text-sm font-semibold bg-brand-dark text-white hover:bg-brand-dark/90"
      >
        View all results
      </Button>
    </div>
  );
};
