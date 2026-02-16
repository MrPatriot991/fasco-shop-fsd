import { cn } from "@/shared/lib/utils";
import { forwardRef, type InputHTMLAttributes } from "react";

type InputVariant = "outline" | "underline" | "ghost";
interface InputProp extends InputHTMLAttributes<HTMLInputElement> {
  variant: InputVariant;
  error?: string;
  className?: string;
}

const variantMap: Record<InputVariant, string> = {
  outline: "border border-neutral-300 focus:border-brand-black",
  underline: "border-b border-neutral-300 focus:border-brand-dark",
  ghost: "border border-transparent focus:ring-2 focus:ring-neutral-300/40 shadow-around/8",
};

const errorMap: Record<InputVariant, string> = {
  outline: "border-accent-red focus:border-accent-red",
  underline: "border-accent-red focus:border-accent-red",
  ghost: "focus:ring-accent-red/40",
};

export const Input = forwardRef<HTMLInputElement, InputProp>(
  ({ error, variant = "outline", className, ...props }, ref) => {
    return (
      <>
        <input
          ref={ref}
          className={cn(
            "w-full px-4 py-3 md:py-4 text-base outline-none transition-colors duration-300 placeholder:text-neutral-300",
            variantMap[variant],
            error && errorMap[variant],
            className
          )}
          {...props}
        />
        {error && <span className="mt-1 text-accent-red">{error}</span>}
      </>
    );
  }
);

Input.displayName = "Input";
