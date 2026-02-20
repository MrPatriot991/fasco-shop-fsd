import { cn } from "@/shared/lib/utils";

interface ProductBadgeProps {
  count: number;
  discountPercent: number;
  className?: string;
}

export const ProductBadge = ({ discountPercent, count, className }: ProductBadgeProps) => {
  return (
    <div
      className={cn(
        "absolute left-10 bottom-6 flex flex-col gap-4 p-8 bg-white text-brand-dark shadow-lg shadow-brand-dark/50",
        className
      )}
    >
      {count && <span>{count} - Spring Sale</span>}
      <span className="text-2xl font-bold">-{discountPercent}% OFF</span>
    </div>
  );
};
