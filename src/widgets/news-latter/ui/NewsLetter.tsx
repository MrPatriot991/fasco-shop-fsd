import { Container } from "@/shared/ui";
import { SubscribeForm } from "@/features/subscribe-newsletter";

import guyImg from "@/shared/assets/images/sub-img-1.png";
import girlImg from "@/shared/assets/images/sub-img-2.png";

export const NewsLetter = () => {
  return (
    <section className="bg-brand-ehite pt-20 md:pt-36 pb-12 border-b">
      <Container maxWidth="xxxl">
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-12
            lg:grid-cols-[1fr_minmax(0,500px)_1fr]
          "
        >
          {/* Left image */}
          <div className="hidden lg:block">
            <img src={guyImg} aria-hidden="true" alt="" className="h-full w-full object-cover" />
          </div>

          {/* Content */}
          <div className="flex flex-col items-center gap-6 text-center ">
            <h2 className="font-volkhov text-section-title leading-tight tracking-tight text-brand-dark">
              Subscribe To Our Newsletter
            </h2>

            <p className="max-w-md text-brand-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices
              sollicitudin aliquam sem.
            </p>

            <div className="w-full">
              <SubscribeForm />
            </div>
          </div>

          {/* Right image */}
          <div className="hidden lg:block">
            <img src={girlImg} aria-hidden="true" alt="" className="h-full w-full object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
};
