import { cn } from "@/shared/lib/utils";
import { Container } from "@/shared/ui";

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
}

export const Section = ({
  id,
  children,
  className,
  containerSize = "2xl",
  spacing = "default",
}: Props) => {
  return (
    <section id={id} className={cn(spacingMap[spacing], className)}>
      <Container maxWidth={containerSize}>{children}</Container>
    </section>
  );
};
