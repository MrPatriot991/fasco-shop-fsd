import { Button, Container } from "@/shared/ui";
import { useAppSelector, useTimer } from "@/shared/lib/hooks";
import { AppSlider } from "@/shared/ui";
import { selectOnlyDeals } from "@/entities/product";
import type { EmblaOptionsType } from "embla-carousel";

interface TimerDisplayProp {
  targetDate: string;
}

interface Items {
  label: string;
  value: number;
}

const OPTIONS: EmblaOptionsType = { loop: true, align: "center" };

const TimerDisplay = ({ targetDate }: TimerDisplayProp) => {
  const { days, hours, minutes, seconds } = useTimer(targetDate);

  const pad = (n: number) => String(n).padStart(2, "0");

  const items: Items[] = [
    { label: "Days", value: days },
    { label: "Hr", value: hours },
    { label: "Mins", value: minutes },
    { label: "Sec", value: seconds },
  ];

  return (
    <div className="grid grid-flow-col w-full sm:w-1/2 gap-3 sm:gap-8">
      {items.map(({ label, value }) => (
        <div
          key={label}
          className="flex flex-col items-center gap-2 sm:gap-3 text-2xl sm:text-[32px] font-medium leading-none text-brand-dark"
        >
          <div className="flex items-center justify-center size-14 sm:size-20 rounded-xl shadow-around">
            {pad(value)}
          </div>
          <span className="text-sm sm:text-xl text-brand-dark">{label}</span>
        </div>
      ))}
    </div>
  );
};

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
              <Button>Buy Now</Button>
            </div>
            <div className="flex flex-col gap-6">
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
