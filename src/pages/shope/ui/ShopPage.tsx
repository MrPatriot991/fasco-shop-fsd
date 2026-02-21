import { Section } from "@/shared/ui/section";

interface ShopPageProps {
  headerSlot: React.ReactNode;
  mobileToolbarSlot?: React.ReactNode;
  toolbarSlot?: React.ReactNode;
  filterSlot: React.ReactNode;
  itemsSlot: React.ReactNode;
  emptySlot?: React.ReactNode;
  isEmpty?: boolean;
}

export const ShopPage = ({
  headerSlot,
  mobileToolbarSlot,
  toolbarSlot,
  filterSlot,
  itemsSlot,
  emptySlot,
  isEmpty = false,
}: ShopPageProps) => {
  return (
    <Section id="catalog-top" spacing="compact" className="bg-brand-white py-10">
      {headerSlot}

      {mobileToolbarSlot ? (
        <div className="flex justify-between items-start sm:items-center flex-col sm:flex-row lg:hidden gap-3 mt-6">
          {mobileToolbarSlot}
        </div>
      ) : null}

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 mt-0 lg:mt-12">
        {filterSlot}

        <div className="flex flex-col items-center gap-4">
          {toolbarSlot ? <div className="hidden lg:flex w-full">{toolbarSlot}</div> : null}
          {isEmpty && emptySlot ? emptySlot : itemsSlot}
        </div>
      </div>
    </Section>
  );
};
