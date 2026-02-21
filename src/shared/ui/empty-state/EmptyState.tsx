import { cn } from "@/shared/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { SectionTitle } from "../section-title/SectionTitle";

const wrapVariants = cva("mx-auto flex max-w-xl flex-col items-center gap-4 text-center", {
  variants: {
    size: {
      sm: "py-10 md:py-14",
      md: "py-14 md:py-20",
    },
  },
  defaultVariants: { size: "md" },
});

const descVariants = cva("text-neutral-600", {
  variants: {
    size: {
      sm: "text-sm md:text-base",
      md: "text-sm md:text-base",
    },
  },
  defaultVariants: { size: "md" },
});

const iconWrapVariants = cva(
  "flex items-center justify-center rounded-full border border-neutral-200 bg-white shadow-around/8",
  {
    variants: {
      size: {
        sm: "h-12 w-12",
        md: "h-14 w-14",
      },
    },
    defaultVariants: { size: "md" },
  }
);

type EmptyStateProps = {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  clasName?: string;
} & VariantProps<typeof wrapVariants>;

export const EmptyState = ({
  title,
  description,
  size,
  icon,
  action,
  clasName,
}: EmptyStateProps) => {
  return (
    <div className={cn(wrapVariants({ size }), clasName)}>
      {icon ? <div className={iconWrapVariants({ size })}>{icon}</div> : null}
      <SectionTitle
        variant="section"
        as="h2"
        subContent={description ? <p className={descVariants({ size })}>{description}</p> : null}
      >
        {title}
      </SectionTitle>
      {action ? <div className="pt-2">{action}</div> : null}
    </div>
  );
};
