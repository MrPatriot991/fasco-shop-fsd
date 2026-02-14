import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap transition-[colors_shadow] duration-300 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0 cursor-pointer rounded-xl transition-colors duration-300",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-black text-brand-white hover:bg-brand-dark hover:shadow-brand-black/20 shadow-lg",
        secondary:
          "bg-brand-secondary text-brand-dark border border-brand-surface hover:bg-brand-black hover:text-brand-white hover:shadow-brand-secondary/20 shadow-lg",
        outlineDark:
          "border-2 border-brand-black bg-transparent text-brand-black hover:bg-brand-black hover:text-brand-white ",
        outlineBlue:
          "border-2 border-brand-blue/70 bg-transparent text-brand-blue hover:bg-brand-blue hover:text-brand-white shadow-lg",
        link: cn(
          "relative p-0 h-auto text-brand-dark",
          "after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-brand-dark after:transition-transform after:duration-300",
          "hover:text-brand-black hover:after:origin-left hover:after:scale-x-100"
        ),
        linkPlain: "relative p-0 h-auto text-brand-dark hover:text-brand-black",
        ghost:
          "bg-transparent text-brand-dark hover:bg-surface-muted active:bg-surface-muted hover:text-brand-black",
        surface:
          "border border-gray-200 bg-white text-brand-dark hover:border-brand-black hover:text-brand-black shadow-sm",
        active: "bg-brand-black text-brand-white border border-brand-black shadow-md",
      },
      size: {
        none: "",
        xs: "min-w-4 h-4 p-1",
        sm: "min-w-10 h-10 p-2",
        "md-1": "min-w-14 h-14 px-4 py-3",
        "md-2": "min-w-[152px] h-14 px-6 py-3",
        "lg-1": "min-w-[220px] h-12 px-4 py-2 md:min-w-[294px] md:h-14 md:px-6 md:py-4",
        "lg-2": "min-w-[294px] h-14 px-6 py-4",
        "xl-1": "w-full md:max-w-[442px] h-14 px-6 py-4",
        "xl-2": "w-full md:max-w-[575px] h-15 px-6 py-4",
        xxl: "w-full md:max-w-[610px] h-16 px-6 py-4",
        widthFull: "w-full h-16 px-6 py-4",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg-1",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";
