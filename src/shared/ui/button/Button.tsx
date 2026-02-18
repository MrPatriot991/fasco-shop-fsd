import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl cursor-pointer transition-colors duration-300 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-black text-brand-white hover:bg-brand-dark hover:shadow-brand-black/20 shadow-sm",
        secondary:
          "bg-brand-secondary text-brand-dark border border-brand-surface hover:bg-brand-black hover:text-brand-white hover:shadow-brand-secondary/20 shadow-sm",
        outlineDark:
          "border-2 border-brand-black bg-transparent text-brand-black hover:bg-brand-black hover:text-brand-white ",
        outlineBlue:
          "border-2 border-brand-blue/70 bg-transparent text-brand-blue hover:bg-brand-blue hover:text-brand-white shadow-sm",
        link: "relative p-0 h-auto text-brand-dark hover:text-brand-black",
        linkPlain: "relative p-0 h-auto text-brand-dark hover:text-brand-black",
        ghost:
          "bg-transparent text-brand-dark hover:bg-surface-muted active:bg-surface-muted hover:text-brand-black",
        surface:
          "border border-gray-200 bg-white text-brand-dark hover:border-brand-black hover:text-brand-black shadow-sm",
        active: "bg-brand-black text-brand-white border border-brand-black shadow-sm",
      },
      size: {
        none: "",
        medium: "h-11 px-4 text-sm md:h-12 md:px-5 md:text-base",
        large: "h-12 px-5 text-sm md:h-14 md:px-7 md:text-base",
        widthFull: "w-full h-12 px-5 text-sm md:h-14 md:px-6 md:text-base",
        icon: "size-10 md:size-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "large",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, type, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...(!asChild && { type: type ?? "button" })}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
