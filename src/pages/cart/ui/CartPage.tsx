import { Section } from "@/shared/ui/section";

interface CartPageProps {
  headerSlot: React.ReactNode;
  itemsSlot: React.ReactNode;
  summarySlot: React.ReactNode;
  emptySlot?: React.ReactNode;
  isEmpty?: boolean;
}

export const CartPage = ({
  headerSlot,
  itemsSlot,
  summarySlot,
  emptySlot,
  isEmpty,
}: CartPageProps) => {
  return (
    <Section spacing="compact">
      {headerSlot}
      <div className="mt-8 md:mt-20">
        {isEmpty ? (
          emptySlot
        ) : (
          <>
            {itemsSlot}
            <div className="flex justify-end">{summarySlot}</div>
          </>
        )}
      </div>
    </Section>
  );
};
