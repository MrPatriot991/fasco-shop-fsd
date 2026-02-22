import { ErrorBoundary } from "@/shared/ui/error-boundary";
import { Section } from "@/shared/ui/section";
import { Packages } from "@/widgets/packages";
import { Benefits } from "@/widgets/benefits";
import { Deals } from "@/widgets/deals";
import { NewsLetter } from "@/widgets/news-latter";
import { Footer } from "@/widgets/footer";

interface ProductPageProps {
  gallerySlot: React.ReactNode;
  headerSlot: React.ReactNode;
  priceSlot: React.ReactNode;
  viewersSlot: React.ReactNode;
  timerSlot?: React.ReactNode;
  stockSlot: React.ReactNode;
  variantsSlot: React.ReactNode;
  purchaseSlot: React.ReactNode;
  actionsSlot: React.ReactNode;
  deliverySlot: React.ReactNode;
  guaranteesSlot: React.ReactNode;
  emptySlot?: React.ReactNode;
  isEmpty?: boolean;
  className?: string;
}

export const ProductPage = ({
  gallerySlot,
  headerSlot,
  priceSlot,
  viewersSlot,
  timerSlot,
  stockSlot,
  variantsSlot,
  purchaseSlot,
  actionsSlot,
  deliverySlot,
  guaranteesSlot,
  emptySlot = null,
  isEmpty = false,
  className,
}: ProductPageProps) => {
  if (isEmpty) return <>{emptySlot}</>;

  return (
    <>
      <Section spacing="compact" className={className}>
        <ErrorBoundary>
          <div className="flex flex-col lg:flex-row gap-10 md:gap-20">
            {gallerySlot}

            <div className="flex-1 lg:max-w-2xl">
              {headerSlot}
              {priceSlot}
              {viewersSlot}
              {timerSlot}
              {stockSlot}
              {variantsSlot}
              {purchaseSlot}
              {actionsSlot}
              {deliverySlot}
              {guaranteesSlot}
            </div>
          </div>
        </ErrorBoundary>
      </Section>
      <Packages />
      <Benefits />
      <Deals />
      <NewsLetter />
      <Footer />
    </>
  );
};
