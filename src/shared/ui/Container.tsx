import { cn } from "@/shared/lib/utils";

type ContainerSize = "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl" | "full";

interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: ContainerSize | string;
}

const maxWidthMap: Record<string, string> = {
  sm: "max-w-xl",
  md: "max-w-3xl",
  lg: "max-w-5xl",
  xl: "max-w-7xl",
  xxl: "max-w-[1320px]",
  xxxl: "max-w-[1440px]",
  full: "max-w-full",
};

export const Container = ({ maxWidth = "xxl", children }: ContainerProps) => {
  const maxWidthClass = maxWidthMap[maxWidth] || maxWidth;

  return <div className={cn("mx-auto px-5", maxWidthClass)}>{children}</div>;
};
