import { Button, Container } from "@/shared/ui";
import { useTimer } from "@/shared/lib/hooks";
import { AppSlider } from "@/shared/ui";
import type { EmblaOptionsType } from "embla-carousel";

import imgSale1 from "@/shared/assets/images/sl-sale-1.webp";
import imgSale2 from "@/shared/assets/images/sl-sale-2.webp";
import imgSale3 from "@/shared/assets/images/sl-sale-3.webp";
import imgSale4 from "@/shared/assets/images/sl-sale-4.webp";
import imgSale5 from "@/shared/assets/images/sl-sale-5.webp";

interface TimerDisplayProp {
  targetDate: string;
}

interface Slides {
  src: string;
  alt: string;
}

interface Items {
  label: string;
  value: number;
}

const slides: Slides[] = [
  { src: imgSale1, alt: "Deal sale 1" },
  { src: imgSale2, alt: "Deal sale 2" },
  { src: imgSale3, alt: "Deal sale 3" },
  { src: imgSale4, alt: "Deal sale 4" },
  { src: imgSale5, alt: "Deal sale 5" },
];

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
  return (
    <section className="bg-brand-secondary py-16 lg:py-36">
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
            slides={slides}
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
