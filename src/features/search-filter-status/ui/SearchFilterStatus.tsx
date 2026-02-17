import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { useAppDispatch } from "@/shared/lib/hooks";
import { Button } from "@/shared/ui";
import { resetFilters } from "@/features/filter-products";

interface SearchFilterStatusProps {
  searchTerm: string | null;
}

export const SearchFilterStatus = ({ searchTerm }: SearchFilterStatusProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  if (!searchTerm) return null;

  const handleResetAll = () => {
    dispatch(resetFilters());
    navigate("/shop", { replace: true });
  };

  return (
    <div className="flex items-center gap-3 py-2 px-4 bg-brand-surface/30 rounded-lg border border-brand-surface w-fit">
      <span className="text-sm text-brand-dark/70">
        Results for: <b className="text-brand-dark">"{searchTerm}"</b>
      </span>
      <Button
        variant="ghost"
        size="none"
        onClick={handleResetAll}
        className="flex items-center gap-1 text-xs text-red-500 hover:text-red-600 transition-colors font-medium underline uppercase tracking-wider"
      >
        <X size={14} />
        Reset all
      </Button>
    </div>
  );
};
