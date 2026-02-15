import { Check } from "lucide-react";
import { cn } from "@/shared/lib/utils";

interface CartGiftWrapProps {
  id?: string;
  checked?: boolean;
  label?: React.ReactNode;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export const CartGiftWrap = ({
  id = "giftWrap",
  label,
  checked,
  onChange,
  className,
}: CartGiftWrapProps) => {
  return (
    <div className={cn("flex items-start gap-3 border-b border-gray-200 py-8", className)}>
      <label htmlFor={id} className="flex items-center gap-3 cursor-pointer group">
        <div className="relative flex items-center justify-center">
          <input
            id={id}
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange?.(e.target.checked)}
            className="peer appearance-none  h-6 w-6 border-2 rounded border-gray-300 group-hover:border-brand-black checked:bg-brand-black checked:border-brand-black transition-colors duration-300"
          />
          <Check className="absolute w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
        </div>
        {label && (
          <span className="text-brand-gray group-hover:text-brand-black transition-colors duration-300">
            {label}
          </span>
        )}
      </label>
    </div>
  );
};
