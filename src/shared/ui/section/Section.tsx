import { cn } from "@/shared/lib/utils";
import { Container } from "@/shared/ui";

type ContainerMaxWidth = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "full";

interface Props {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerSize?: ContainerMaxWidth;
}

export const Section = ({ id, children, className, containerSize = "2xl" }: Props) => {
  return (
    <section id={id} className={cn("py-12 md:py-20 lg:py-28", className)}>
      <Container maxWidth={containerSize}>{children}</Container>
    </section>
  );
};
