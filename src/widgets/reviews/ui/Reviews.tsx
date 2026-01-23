import { Container } from "@/shared/ui/Container/Container";
import { AppSlider, StarRating } from "@/shared/ui";
import type { EmblaOptionsType } from "embla-carousel";

import avatarReview1 from "@/shared/assets/images/reviews-img-1.jpg";
import avatarReview2 from "@/shared/assets/images/reviews-img-2.jpg";
import avatarReview3 from "@/shared/assets/images/reviews-img-3.jpg";

interface ReviewSlider {
  id: number;
  userName: string;
  userRole: string;
  comment: string;
  rating: number;
  src: string;
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
    src: avatarReview1,
    alt: "User comment 1",
  },
  {
    id: 2,
    userName: "Suzan B.",
    userRole: "UI Designer",
    comment:
      "Items That I ordered were the best investment I ever made. I can't say enough about your quality service.",
    rating: 4,
    src: avatarReview2,
    alt: "User comment 2",
  },
  {
    id: 3,
    userName: "Megen W.",
    userRole: "UI Designer",
    comment:
      "Just what I was looking for. Thank you for making it painless, pleasant and most of all hassle free! All products are great.",
    rating: 3,
    src: avatarReview3,
    alt: "User comment 3",
  },
];

export const Reviews = () => {
  return (
    <section className="bg-brand-gray/10 py-16 lg:py-24">
      <Container maxWidth="xxxl">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-5">
            <h2 className="text-center tracking-tight leading-12 text-section-titel font-volkhov text-brand-dark">
              This Is What Our Customers Say
            </h2>
            <p className="text-brand-gray text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis
            </p>
          </div>
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
                className="embla__slide-img p-6 md:p-10 rounded-xl shadow-around flex flex-col lg:flex-row gap-6 lg:gap-16 max-w-[750px]"
              >
                <div className="shrink-0 w-full h-40 lg:w-60 lg:h-60">
                  <img src={slide.src} alt={slide.alt} className="h-full w-full object-cover" />
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
      </Container>
    </section>
  );
};
