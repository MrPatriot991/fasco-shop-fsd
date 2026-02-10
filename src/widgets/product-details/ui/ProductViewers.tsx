import { Eye } from "lucide-react";

export const ProductViewers = () => {
  return (
    <div className="flex items-center gap-3 mb-5">
      <Eye />
      <p className="text-brand-gray/70">24 people are viewing this right now</p>
    </div>
  );
};
