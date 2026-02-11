import { Link } from "react-router-dom";
import { Button, Container } from "@/shared/ui";
import { useAppSelector } from "@/shared/lib/hooks";
import { AppSlider } from "@/shared/ui";
import { selectOnlyDeals } from "@/entities/product";
import { TimerDisplay } from "@/shared/ui";
import type { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { loop: true, align: "center" };

export const Deals = () => {
  const discountDeals = useAppSelector(selectOnlyDeals);

  return (
    <section id="deals" className="bg-brand-secondary py-16 lg:py-36">
      <Container>
        <div className="flex flex-col lg:flex-row gap-20 overflow-hidden">
          <div className="flex flex-col items-center gap-12 lg:w-2/5">
            <div className="flex flex-col items-center lg:items-start gap-10">
              <h2 className="text-[44px] font-volkhov text-brand-dark">Deals Of The Month</h2>
              <p className="text-center lg:text-start text-brand-gray sm:w-2/3 lg:w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices
                sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin{" "}
              </p>
              <Button asChild>
                <Link to="/shop?collection=discount-deals">Buy Now</Link>
              </Button>
            </div>
            <div className="flex flex-col gap-6 items-center lg:items-start">
              <p className="font-medium text-2xl text-center lg:text-start text-brand-dark">
                Hurry, Before It’s Too Late!
              </p>
              <TimerDisplay targetDate="2026-02-28" />
            </div>
          </div>
          <AppSlider
            slides={discountDeals}
            options={OPTIONS}
            showButtons
            height="36rem"
            maxWidth="lg"
            sliderSize="55%"
          />
        </div>
      </Container>
    </section>
  );
};
