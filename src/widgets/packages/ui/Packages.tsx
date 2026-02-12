import { Link } from "react-router-dom";
import { Button } from "@/shared/ui";
import { formatCurrency } from "@/shared/lib/format";
import peakyBlindersImg from "@/shared/assets/images/bg-packages.png";

interface PackagesProps {
  onActionClick?: () => void;
}

export const Packages = ({ onActionClick }: PackagesProps) => {
  return (
    <section id="packages" className="overflow-hidden pt-16 lg:pt-36">
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
          <div className="p-10  lg:px-20 space-y-5 max-w-137.5">
            <div className="space-y-5">
              <p className="text-brand-gray tracking-widest text-sm uppercase">Women Collection</p>
              <h2 className="text-section-title  font-volkhov text-brand-dark leading-tight">
                Peaky Blinders
              </h2>
              <p className="text-brand-black underline">DESCRIPTION</p>
              <p className="text-brand-gray">
                Explore the latest trends in our Peaky Blinders collection. High-quality fabrics and
                timeless designs for the modern woman.
              </p>
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
    </section>
  );
};
