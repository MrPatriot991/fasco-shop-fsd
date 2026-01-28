import { cn } from "@/shared/lib/utils";
import { forwardRef, type InputHTMLAttributes } from "react";

interface InputProp extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProp>(
  ({ error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col w-full gap-2">
        <input
          ref={ref}
          className={cn(
            "w-full py-3 outline-none border-b border-b-border-gray transition-colors duration-300",
            error ? "border-b-accent-red" : "border-b-border-gray",
            className
          )}
          {...props}
        />
        {error && <span className="text-accent-red">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";
