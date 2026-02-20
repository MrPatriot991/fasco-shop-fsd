import { forwardRef } from "react";
import { cn } from "@/shared/lib/utils";
import { Container } from "@/shared/ui/container";

type ContainerMaxWidth = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "full";
type Spacing = "compact" | "default" | "none";

const spacingMap = {
  none: "",
  compact: "py-8 md:py-12 lg:py-16",
  default: "py-12 md:py-20 lg:py-28",
};
interface Props {
  id?: string;
  spacing?: Spacing;
  children: React.ReactNode;
  className?: string;
  containerSize?: ContainerMaxWidth;
  headerSlot?: React.ReactNode;
  footerSlot?: React.ReactNode;
}

export const Section = forwardRef<HTMLElement, Props>(
  (
    { id, children, className, containerSize = "2xl", spacing = "default", headerSlot, footerSlot },
    ref
  ) => {
    return (
      <section id={id} ref={ref} className={cn(spacingMap[spacing], className)}>
        {headerSlot}
        <Container maxWidth={containerSize}>{children}</Container>
        {footerSlot}
      </section>
    );
  }
);

Section.displayName = "Section";

