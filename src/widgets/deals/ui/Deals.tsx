import { Link } from "react-router-dom";
import { Button, ErrorBoundary, Section, SectionTitle, TimerDisplay, AppSlider } from "@/shared/ui";
import { useAppSelector } from "@/shared/lib/hooks";
import { selectOnlyDeals } from "@/entities/product";
import type { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { loop: true, align: "center" };

export const Deals = () => {
  const discountDeals = useAppSelector(selectOnlyDeals);

  return (
    <Section id="deals" className="bg-brand-secondary">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 overflow-hidden">
        <div className="flex flex-col items-center gap-12 lg:w-2/5">
          <div className="flex flex-col items-center lg:items-start gap-4 md:gap-6 lg:gap-10">
            <SectionTitle
              variant="section"
              align="center"
              alignLg="left"
              subJustify="center"
              subContent={
                <p className="text-center sm:w-2/3 lg:w-full lg:text-start">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices
                  sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin
                </p>
              }
            >
              Deals Of The Month
            </SectionTitle>
            <Button asChild>
              <Link
                to="/shop?collection=discount-deals"
                className="text-[clamp(0.875rem,1vw+0.5rem,1rem)]"
              >
                Buy Now
              </Link>
            </Button>
          </div>
          <div className="flex flex-col gap-6 items-center lg:items-start">
            <p className="font-medium text-[clamp(1.5rem,2vw+1rem,1.75rem)] text-center lg:text-start text-brand-dark">
              Hurry, Before It’s Too Late!
            </p>
            <TimerDisplay targetDate="2026-02-28" />
          </div>
        </div>
        <ErrorBoundary>
          <AppSlider
            slides={discountDeals}
            options={OPTIONS}
            showButtons
            height="36rem"
            maxWidth="lg"
            sliderSize="55%"
          />
        </ErrorBoundary>
      </div>
    </Section>
  );
};
