import { cn } from "@/shared/lib/utils";
import type { ReactNode } from "react";

interface CartModalContentProps {
  children: ReactNode;
  className?: string;
}

export const CartModalContent = ({ children, className }: CartModalContentProps) => {
  return <div className={cn("flex flex-col flex-1 overflow-y-auto", className)}>{children}</div>;
};
