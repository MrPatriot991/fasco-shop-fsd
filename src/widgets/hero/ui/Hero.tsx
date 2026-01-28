import { Button } from "@/shared/ui";
import { Container } from "@/shared/ui";
import { BrandMarquee } from "./BrandMarquee";

import heroImgLeft from "@/shared/assets/images/ban-left.avif";
import heroImgRight from "@/shared/assets/images/ban-right.avif";
import heroImgTop from "@/shared/assets/images/ban-top.avif";
import heroImgBottom from "@/shared/assets/images/ban-bottom.avif";

export const Hero = () => {
  return (
    <section className="bg-brand-white py-6 sm:py-8 lg:py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-4">
          <div className="hidden md:block w-full h-full">
            <img
              src={heroImgLeft}
              alt="Fasco fashion look left"
              className="object-cover w-full h-full rounded-sm"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <div className="flex flex-col items-center justify-between h-full gap-6 md:gap-9 md:max-w-[768px]">
            <div className="w-full h-32 md:h-auto overflow-hidden">
              <img
                src={heroImgTop}
                alt="Fasco fashion look top"
                className="object-cover w-full h-full"
                fetchPriority="high"
              />
            </div>

            <header className="flex flex-col items-center text-center">
              <h1 className="text-brand-dark leading-[0.8] flex flex-col items-center">
                <span className="text-[12vw] md:text-[84px] font-bold -tracking-[0.04em]">
                  ULTIMATE
                </span>
                <span className="text-[25vw] md:text-[180px] font-black -tracking-[0.05em]">
                  SALE
                </span>
                <span className="text-lg md:text-xl mt-4 font-medium">NEW COLLECTION</span>
              </h1>
              <div className="mt-8">
                <Button size="lg-1">SHOP NOW</Button>
              </div>
            </header>

            <div className="w-full h-32 md:h-auto overflow-hidden">
              <img
                src={heroImgBottom}
                alt="Fasco fashion look bottom"
                className="object-cover w-full h-full"
                fetchPriority="high"
              />
            </div>
          </div>
          <div className="hidden md:block w-full h-full">
            <img
              src={heroImgRight}
              alt="Fasco fashion look right"
              className="object-cover w-full h-full rounded-sm"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <div className="col-span-full">
            <BrandMarquee />
          </div>
        </div>
      </Container>
    </section>
  );
};
