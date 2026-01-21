import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";
import type { ComponentPropsWithRef } from "react";

type PropType = ComponentPropsWithRef<"button">;

export const PrevButton = ({ disabled, className, ...restProps }: PropType) => (
  <button
    type="button"
    disabled={disabled}
    className={clsx(
      "flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300",
      "bg-brand-black/20 backdrop-blur-md border border-brand-white/10 text-brand-white",
      "hover:bg-brand-black/40 hover:scale-110 active:scale-95",
      "disabled:opacity-0 disabled:pointer-events-none", 
      "pointer-events-auto", 
      className
    )}
    {...restProps}
  >
    <ChevronLeft size={28} strokeWidth={1.2} />
  </button>
)

export const NextButton = ({ disabled, children, className, ...restProps }: PropType) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={clsx(
        "flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300",
        "bg-brand-black/20 backdrop-blur-md border border-brand-white/10 text-brand-white",
        "hover:bg-brand-black/40 hover:scale-110 active:scale-95",
        "disabled:opacity-0 disabled:pointer-events-none", 
        "pointer-events-auto", 
        className
      )}
      {...restProps}
    >
      <ChevronRight size={24} strokeWidth={1.5} />
      {children}
    </button>
  );
};
