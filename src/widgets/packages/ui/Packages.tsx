import { Link } from "react-router-dom";
import { Button } from "@/shared/ui/button";
import { Section } from "@/shared/ui/section";
import { SectionTitle } from "@/shared/ui/sectionTitle";
import { formatCurrency } from "@/shared/lib/format";
import peakyBlindersImg from "@/shared/assets/images/bg-packages.png";

interface PackagesProps {
  onActionClick?: () => void;
}

export const Packages = ({ onActionClick }: PackagesProps) => {
  return (
    <Section id="packages" containerSize="full" spacing="none" className="pt-6 md:pt-10 ">
      <div className="relative z-10 bg-surface-muted flex inset-0 lg:min-h-142.5">
        <div
          className="hidden absolute lg:flex inset-0 bg-surface-neutral"
          style={{
            clipPath: "polygon(53% 0, 100% 0, 100% 100%, 47% 100%)",
          }}
        />

        <div className="relative z-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-0 sm:gap-10 lg:gap-20">
          <div className="relative justify-self-end w-full lg:w-auto">
            <img
              src={peakyBlindersImg}
              alt="Peaky Blinders Collection"
              className="object-cover h-full w-full"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/5 lg:hidden" />
          </div>
          <div className="px-0 sm:pl-10 py-10 lg:pl-20 space-y-5 max-w-4/5 md:max-w-1/2">
            <div className="space-y-5">
              <p className="text-brand-gray tracking-widest text-sm uppercase">Women Collection</p>
              <SectionTitle
                as="h2"
                variant="section"
                align="left"
                subContent={
                  <div className="flex flex-col gap-3">
                    <p className="text-brand-black underline">DESCRIPTION</p>
                    <p className="font-volkhov text-brand-gray">
                      Explore the latest trends in our Peaky Blinders collection. High-quality
                      fabrics and timeless designs for the modern woman.
                    </p>
                  </div>
                }
              >
                Peaky Blinders
              </SectionTitle>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-5">
                <span className="text-brand-gray">Size: </span>
                <span className="px-5 py-1 rounded-xl bg-brand-black text-brand-white">M</span>
              </div>
              <div className="text-3xl font-medium tracking-tight text-brand-black">
                {formatCurrency(100)}
              </div>
            </div>
            <div>
              <Button asChild onClick={onActionClick}>
                <Link to="/shop?collection=best-sellers">Buy Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

