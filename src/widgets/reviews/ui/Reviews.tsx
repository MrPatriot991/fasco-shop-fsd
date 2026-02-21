import { AppSlider } from "@/shared/ui/app-slider";
import { Section } from "@/shared/ui/section";
import { SectionTitle } from "@/shared/ui/section-title";
import { StarRating } from "@/shared/ui/starRating";
import type { EmblaOptionsType } from "embla-carousel";
import type { BaseSlide } from "@/shared/ui/app-slider";

import avatarReview1 from "@/shared/assets/images/reviews-img-1.jpg";
import avatarReview2 from "@/shared/assets/images/reviews-img-2.jpg";
import avatarReview3 from "@/shared/assets/images/reviews-img-3.jpg";

interface ReviewSlider extends BaseSlide {
  id: number;
  userName: string;
  userRole: string;
  comment: string;
  rating: number;
  image: string;
  alt: string;
}

const OPTIONS: EmblaOptionsType = { loop: true, align: "center" };

const reviewsData: ReviewSlider[] = [
  {
    id: 1,
    userName: "James K.",
    userRole: "Traveler",
    comment:
      "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
    rating: 5,
    image: avatarReview1,
    alt: "User comment 1",
  },
  {
    id: 2,
    userName: "Suzan B.",
    userRole: "UI Designer",
    comment:
      "Items That I ordered were the best investment I ever made. I can't say enough about your quality service.",
    rating: 4,
    image: avatarReview2,
    alt: "User comment 2",
  },
  {
    id: 3,
    userName: "Megen W.",
    userRole: "UI Designer",
    comment:
      "Just what I was looking for. Thank you for making it painless, pleasant and most of all hassle free! All products are great.",
    rating: 3,
    image: avatarReview3,
    alt: "User comment 3",
  },
];

export const Reviews = () => {
  return (
    <Section className="bg-brand-gray/10" containerSize="3xl">
      <div className="flex flex-col gap-6 lg:gap-10">
        <SectionTitle
          as="h2"
          variant="section"
          align="center"
          subContent={
            <p className="font-volkhov">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis
            </p>
          }
        >
          This Is What Our Customers Say
        </SectionTitle>
        <AppSlider
          slides={reviewsData}
          options={OPTIONS}
          height="80vh"
          maxWidth="full"
          spacing="0.5rem"
          sliderSize={{ mobile: "80%", desktop: "60%" }}
          showButtons
        >
          {(slide) => (
            <article
              key={slide.id}
              className="embla__slide-img p-6 md:p-10 rounded-xl shadow-around flex flex-col lg:flex-row gap-6 lg:gap-16 max-w-187.5"
            >
              <div className="shrink-0 w-full h-40 lg:w-60 lg:h-60">
                <img src={slide.image} alt={slide.title} className="h-full w-full object-cover" />
              </div>

              <div className="flex flex-col gap-4">
                <blockquote>
                  <p className="text-brand-dark">"{slide.comment}"</p>
                </blockquote>

                <div>
                  <StarRating rate={slide.rating} />
                </div>
                <div>
                  <h3 className="text-brand-dark font-volkhov text-[2rem]">{slide.userName}</h3>
                  <p className="text-brand-dark">{slide.userRole}</p>
                </div>
              </div>
            </article>
          )}
        </AppSlider>
      </div>
    </Section>
  );
};
