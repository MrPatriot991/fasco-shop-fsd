import { cn } from "@/shared/lib/utils";
import { Section } from "@/shared/ui/section";
import { NewsLetter } from "@/widgets/news-latter";
import { Footer } from "@/widgets/footer";

interface CheckoutPageProps {
  isEmpty: boolean;
  headerSlot: React.ReactNode;
  formSlot: React.ReactNode;
  summarySlot: React.ReactNode;
  emptySlot: React.ReactNode;
}

export const CheckoutPage = ({
  isEmpty,
  headerSlot,
  formSlot,
  summarySlot,
  emptySlot,
}: CheckoutPageProps) => {
  return (
    <>
      <Section spacing="none" className="pb-6 md:pb-8 lg:pb-10 border-b border-gray-200">
        {headerSlot}
        <div
          className={cn(
            "grid grid-cols-1 gap-8 pt-6 md:pt-10 lg:pt-16",
            isEmpty ? "grid-cols-1" : "lg:grid-cols-2"
          )}
        >
          {isEmpty ? (
            emptySlot
          ) : (
            <>
              {formSlot}
              {summarySlot}
            </>
          )}
        </div>
      </Section>
      <NewsLetter />
      <Footer />
    </>
  );
};
