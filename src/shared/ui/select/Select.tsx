import { forwardRef } from "react";
import { cn } from "@/shared/lib/utils";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  error?: string;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, children, ...props }, ref) => {
    return (
      <>
        <select
          ref={ref}
          className={cn(
            "w-full px-4 py-3 md:py-4 lg:py-6 border border-gray-300 text-base text-gray-400 bg-white appearance-none focus:outline-none focus:ring-1 focus:ring-brand-black cursor-pointer",
            className
          )}
          {...props}
        >
          {children}
        </select>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </>
    );
  }
);

Select.displayName = "Select";
