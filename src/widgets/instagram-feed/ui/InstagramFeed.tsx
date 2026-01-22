import { Container } from "@/shared/ui";
import { AppSlider } from "@/shared/ui";
import type { EmblaOptionsType } from "embla-carousel";

import instImg1 from "@/shared/assets/images/inst-img-1.jpg";
import instImg2 from "@/shared/assets/images/inst-img-2.jpg";
import instImg3 from "@/shared/assets/images/inst-img-3.jpg";
import instImg4 from "@/shared/assets/images/inst-img-4.jpg";
import instImg5 from "@/shared/assets/images/inst-img-5.jpg";
import instImg6 from "@/shared/assets/images/inst-img-6.jpg";
import instImg7 from "@/shared/assets/images/inst-img-7.jpg";

interface Instagram {
  src: string;
  alt: string;
}

const instSlides: Instagram[] = [
  { src: instImg1, alt: "Happy subscriber in FASCO total look 1" },
  { src: instImg2, alt: "Happy subscriber in FASCO total look 2" },
  { src: instImg3, alt: "Happy subscriber in FASCO total look 3" },
  { src: instImg4, alt: "Happy subscriber in FASCO total look 4" },
  { src: instImg5, alt: "Happy subscriber in FASCO total look 5" },
  { src: instImg6, alt: "Happy subscriber in FASCO total look 6" },
  { src: instImg7, alt: "Happy subscriber in FASCO total look 7" },
];

const OPTIONS: EmblaOptionsType = { loop: true, align: "center" };
const OPTIONS_AUTO_SCROLL = { speed: 0.4, stopOnInteraction: false, stopOnMouseEnter: true };

export const InstagramFeed = () => {
  return (
    <section className="bg-brand-secondary py-14 lg:py-36">
      <Container>
        <div className="flex flex-col items-center gap-10 lg:gap-14">
          <div className="flex flex-col items-center gap-4 md:max-w-3xl">
            <h2 className="text-center tracking-tight leading-12 text-section-titel font-volkhov text-brand-dark">
              Follow Us On Instagram
            </h2>
            <p className="text-brand-gray text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices
              sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin{" "}
            </p>
          </div>
          <div>
            <AppSlider
              slides={instSlides}
              options={OPTIONS}
              autoScroll={OPTIONS_AUTO_SCROLL}
              height="36rem"
              maxWidth="full"
              sliderSize={{ mobile: "70%", desktop: "25%" }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
