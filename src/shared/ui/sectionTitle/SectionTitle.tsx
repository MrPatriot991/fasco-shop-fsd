import { cn } from "@/shared/lib/utils";
import type { ElementType, ReactNode } from "react";

type TitleTag = ElementType;
type Variant = "hero" | "section";

interface SectionTitleProps {
  children: ReactNode;
  as?: TitleTag;
  variant?: Variant;
  align?: "left" | "center" | "right";
  maxWidth?: string;
  subContent?: ReactNode;
  className?: string;
  classNameSubContent?: string;
}

const variantStyles: Record<Variant, string> = {
  hero: "text-[clamp(1.75rem,3vw+1rem,4rem)] text-brand-black leading-tight",
  section: "text-[clamp(1.25rem,2vw+1rem,2.5rem)] text-brand-dark leading-snug",
};

export const SectionTitle = ({
  children,
  as: Tag = "h2",
  align = "center",
  variant = "section",
  subContent,
  maxWidth,
  className,
  classNameSubContent,
}: SectionTitleProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 md:gap-6 lg:gap-8",
        align === "left" && "items-start text-start",
        align === "center" && "items-center text-center",
        align === "right" && "items-end text-right",
        className
      )}
    >
      <Tag className={cn("font-volkhov", variantStyles[variant])}>{children}</Tag>
      {subContent && (
        <div className={cn(`max-w-${maxWidth} text-base text-brand-gray`, classNameSubContent)}>
          {subContent}
        </div>
      )}
    </div>
  );
};
