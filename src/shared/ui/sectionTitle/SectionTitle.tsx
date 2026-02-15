import { cn } from "@/shared/lib/utils";
import type { ElementType, ReactNode } from "react";

type TitleTag = ElementType;
type Variant = "hero" | "section";
type Align = "left" | "center" | "right" | "leftCenter";

interface SectionTitleProps {
  children: ReactNode;
  as?: TitleTag;
  variant?: Variant;
  align?: Align;
  alignLg?: Align;
  subContent?: ReactNode;
  subJustify?: Align;
  className?: string;
  classNameWrapper?: string;
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
  alignLg,
  variant = "section",
  subContent,
  subJustify,
  className,
  classNameWrapper,
  classNameSubContent,
}: SectionTitleProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 md:gap-6 lg:gap-8",
        align === "left" && "items-start text-start",
        align === "center" && "items-center text-center",
        align === "right" && "items-end text-right",
        alignLg === "left" && "lg:items-start lg:text-start",
        alignLg === "center" && "lg:items-center lg:text-center",
        alignLg === "right" && "lg:items-end lg:text-right",
        classNameWrapper
      )}
    >
      <Tag className={cn("font-volkhov", variantStyles[variant], className)}>{children}</Tag>
      {subContent && (
        <div
          className={cn(
            "flex text-base text-brand-gray",
            subJustify === "left" && "justify-start text-left",
            subJustify === "center" && "justify-center text-center",
            subJustify === "right" && "justify-end text-right",
            classNameSubContent
          )}
        >
          {subContent}
        </div>
      )}
    </div>
  );
};
