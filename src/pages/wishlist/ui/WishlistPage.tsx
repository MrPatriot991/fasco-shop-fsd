import { Section } from "@/shared/ui";

interface WishlistPageProps {
  headerSlot: React.ReactNode;
  toolbarSlot?: React.ReactNode;

  contentSlot: React.ReactNode;
  emptySlot: React.ReactNode;

  isEmpty: boolean;
  className?: string;
}

export const WishlistPage = ({
  headerSlot,
  toolbarSlot,
  contentSlot,
  emptySlot,
  isEmpty,
  className,
}: WishlistPageProps) => {
  return (
    <div className={className}>
      {headerSlot}

      {toolbarSlot ? <div>{toolbarSlot}</div> : null}

      <Section spacing="none" className="pb-8 md:pb-12 lg:pb-16">
        {isEmpty ? emptySlot : contentSlot}
      </Section>
    </div>
  );
};
