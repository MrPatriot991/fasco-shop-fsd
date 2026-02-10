import { cn } from "@/shared/lib/utils";

type Title = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";

interface SectionTitleProps {
  title: string;
  subContent?: React.ReactNode;
  as?: Title;
  className?: string;
  classNameTitle?: string;
}

export const SectionTitle = ({
  title,
  subContent,
  as: Tag = "h1",
  className,
  classNameTitle,
}: SectionTitleProps) => {
  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <Tag
        className={cn(
          "text-2xl md:text-[44px] font-volkhov font-bold text-brand-black",
          classNameTitle
        )}
      >
        {title}
      </Tag>
      {subContent && <div>{subContent}</div>}
    </div>
  );
};
