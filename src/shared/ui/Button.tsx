import clsx from "clsx";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "xs" | "sm" | "md-1" | "md-2" | "lg-1" | "lg-2" | "xl-1" | "xl-2" | "xxl";

interface ButtonProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  leftIcon?: ReactNode;
  children?: ReactNode;
  onClick?: () => void;
}

export const Button = ({
  variant = "primary",
  size = "lg-1",
  leftIcon,
  onClick,
  children,
  ...props
}: ButtonProps) => {
  const baseStyles = `relative overflow-hidden rounded-xl transition-colors
  before:absolute before:-inset-1 before:z-0 before:transition-transform  before:duration-500 duration-300 cursor-pointer hover:before:translate-x-0 before:translate-x-full flex items-center justify-center shadow-2xs`;

  const sizeClasses = {
    xs: "min-w-4 h-4 p-1", // 18x18
    sm: "min-w-10 h-10 p-2", // 42x42
    "md-1": "min-w-14 h-14 px-4 py-4", // 56x56, padding ~18-16
    "md-2": "min-w-[152px] h-14 px-6 py-4", // 152x56, padding ~20-45
    "lg-1": "min-w-[207px] h-14 px-6 py-4", // 207x56, padding ~20-22
    "lg-2": "min-w-[294px] h-14 px-6 py-4", // 294x56, padding ~20-32
    "xl-1": "min-w-[442px] h-14 px-6 py-4", // 442x56,
    "xl-2": "min-w-[575px] h-15 px-6 py-4", // 575x60
    xxl: "min-w-[610px] h-16 px-6 py-4", // 610x66
  };

  const variantClasses = {
    primary: `bg-brand-black text-brand-white border border-brand-black
    before:bg-brand-secondary hover:text-brand-gray`,
    secondary: `bg-brand-secondary text-brand-gray hover:text-brand-white
    before:bg-brand-black `,
    outline: `border border-brand-blue text-brand-blue before:bg-brand-blue hover:text-brand-white`,
  };

  const buttonClasses = clsx(baseStyles, sizeClasses[size], variantClasses[variant]);

  return (
    <button className={buttonClasses} onClick={onClick} {...props}>
      {leftIcon && <span>{leftIcon}</span>}
      <span className="relative z-10">{children}</span>
    </button>
  );
};
