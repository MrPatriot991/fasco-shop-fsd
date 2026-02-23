import { cn } from "@/shared/lib/utils";
import { Section } from "@/shared/ui/section";

interface ProfileLayoutProps {
  headerSlot: React.ReactNode;
  sidebarSlot: React.ReactNode;
  contentSlot: React.ReactNode;
  className?: string;
}

export const ProfileLayout = ({
  headerSlot,
  sidebarSlot,
  contentSlot,
  className,
}: ProfileLayoutProps) => {
  return (
    <div className={className}>
      <Section spacing="compact">
        {headerSlot}
        <div className={cn("grid gap-6 md:gap-8 lg:grid-cols-[18rem_minmax(0,1fr)]")}>
          <aside>{sidebarSlot}</aside>
          <div>{contentSlot}</div>
        </div>
      </Section>
    </div>
  );
};
