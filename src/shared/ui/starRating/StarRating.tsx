import { cn } from "@/shared/lib/utils";

interface StarRating {
  rate?: number;
  className?: string;
}

export const StarRating = ({ rate, className }: StarRating) => {
  if (!rate) return;
  return <span className={cn("text-yellow-500", className)}>{"★".repeat(Math.round(rate))}</span>;
};
