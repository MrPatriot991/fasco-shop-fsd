import { cn } from "@/shared/lib/utils";

type ContainerSize = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "full";

interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: ContainerSize | string;
}

const maxWidthMap: Record<string, string> = {
  sm: "w-full max-w-xl",
  md: "w-full max-w-3xl",
  lg: "w-full max-w-5xl",
  xl: "w-full max-w-7xl",
  "2xl": "w-full max-w-[1320px]",
  "3xl": "w-full max-w-[1440px]",
  "4xl": "w-full max-w-[1920px]",
  full: "max-w-full",
};

export const Container = ({ maxWidth = "2xl", children }: ContainerProps) => {
  const maxWidthClass = maxWidthMap[maxWidth] || maxWidth;

  return <div className={cn("mx-auto px-5", maxWidthClass)}>{children}</div>;
};
