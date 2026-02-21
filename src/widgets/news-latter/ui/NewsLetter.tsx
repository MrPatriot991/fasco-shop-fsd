import { Section } from "@/shared/ui/section";
import { SectionTitle } from "@/shared/ui/section-title";
import { SubscribeForm } from "@/features/subscribe-newsletter";
import guyImg from "@/shared/assets/images/sub-img-1.png";
import girlImg from "@/shared/assets/images/sub-img-2.png";

export const NewsLetter = () => {
  return (
    <Section containerSize="3xl" className="bg-white border-b">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_minmax(0,500px)_1fr]">
        {/* Left image */}
        <div className="hidden lg:block">
          <img src={guyImg} aria-hidden="true" alt="" className="h-full w-full object-cover" />
        </div>

        {/* Content */}
        <div className="flex flex-col items-center gap-6 text-center ">
          <SectionTitle
            as="h2"
            variant="section"
            align="center"
            subJustify="center"
            subContent={
              <p className="font-volkhov max-w-4/5 sm:w-2/3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices
                sollicitudin aliquam sem.
              </p>
            }
          >
            Subscribe To Our Newsletter
          </SectionTitle>

          <div className="w-full">
            <SubscribeForm />
          </div>
        </div>

        {/* Right image */}
        <div className="hidden lg:block">
          <img src={girlImg} aria-hidden="true" alt="" className="h-full w-full object-cover" />
        </div>
      </div>
    </Section>
  );
};
