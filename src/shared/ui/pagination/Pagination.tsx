import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/shared/ui";
import { cn } from "@/shared/lib/utils";

interface Props {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({ totalPages, currentPage, onPageChange }: Props) => {
  if (totalPages <= 1) return null;

  const getVisiblePages = () => {
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage === 1) {
      return [1, 2, 3];
    }

    if (currentPage === totalPages) {
      return [totalPages - 2, totalPages - 1, totalPages];
    }

    return [currentPage - 1, currentPage, currentPage + 1];
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex justify-center items-center gap-3 mt-10">
      <Button
        variant="ghost"
        size="none"
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-200 hover:border-black disabled:opacity-30 transition-colors"
      >
        <ChevronLeft />
      </Button>

      <div className="flex items-center gap-2">
        {visiblePages.map((page) => (
          <Button
            key={page}
            variant="ghost"
            size="none"
            type="button"
            onClick={() => onPageChange(page)}
            className={cn(
              "w-11 h-11 border rounded-full",
              currentPage === page
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-200 hover:border-black"
            )}
          >
            {page}
          </Button>
        ))}
      </div>

      {currentPage < totalPages && (
        <Button
          variant="ghost"
          size="none"
          type="button"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-200 hover:border-black disabled:opacity-30 transition-colors"
        >
          <ChevronRight />
        </Button>
      )}
    </div>
  );
};
