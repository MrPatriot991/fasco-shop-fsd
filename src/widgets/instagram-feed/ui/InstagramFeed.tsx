import { Section } from "@/shared/ui/section";
import { SectionTitle } from "@/shared/ui/sectionTitle";
import { AppSlider } from "@/shared/ui/appSlider";
import type { EmblaOptionsType } from "embla-carousel";

import instImg1 from "@/shared/assets/images/inst-img-1.jpg";
import instImg2 from "@/shared/assets/images/inst-img-2.jpg";
import instImg3 from "@/shared/assets/images/inst-img-3.jpg";
import instImg4 from "@/shared/assets/images/inst-img-4.jpg";
import instImg5 from "@/shared/assets/images/inst-img-5.jpg";
import instImg6 from "@/shared/assets/images/inst-img-6.jpg";
import instImg7 from "@/shared/assets/images/inst-img-7.jpg";

interface Instagram {
  id: number;
  image: string;
  alt: string;
}

const instSlides: Instagram[] = [
  { id: 1, image: instImg1, alt: "Happy subscriber in FASCO total look 1" },
  { id: 2, image: instImg2, alt: "Happy subscriber in FASCO total look 2" },
  { id: 3, image: instImg3, alt: "Happy subscriber in FASCO total look 3" },
  { id: 4, image: instImg4, alt: "Happy subscriber in FASCO total look 4" },
  { id: 5, image: instImg5, alt: "Happy subscriber in FASCO total look 5" },
  { id: 6, image: instImg6, alt: "Happy subscriber in FASCO total look 6" },
  { id: 7, image: instImg7, alt: "Happy subscriber in FASCO total look 7" },
];

const OPTIONS: EmblaOptionsType = { loop: true, align: "center" };
const OPTIONS_AUTO_SCROLL = { speed: 0.4, stopOnInteraction: false, stopOnMouseEnter: true };

export const InstagramFeed = () => {
  return (
    <Section className="bg-brand-secondary">
      <div className="flex flex-col items-center gap-6 lg:gap-10">
        <div className="flex flex-col items-center gap-4">
          <SectionTitle
            as="h2"
            variant="section"
            align="center"
            subJustify="center"
            subContent={
              <p className="font-volkhov max-w-4/5 sm:w-2/3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices
                sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin
              </p>
            }
          >
            Follow Us On Instagram
          </SectionTitle>
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
    </Section>
  );
};

