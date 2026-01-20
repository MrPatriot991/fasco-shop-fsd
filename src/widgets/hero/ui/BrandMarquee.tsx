import imgChanel from "@/shared/assets/images/img-brand-chanel.png";
import imgLouis from "@/shared/assets/images/img-brand-louis.png";
import imgPrada from "@/shared/assets/images/img-brand-prada.png";
import imgKlein from "@/shared/assets/images/img-brand-klein.png";
import imgDenim from "@/shared/assets/images/img-brand-denim.png";

const brands = [
  { src: imgChanel, alt: "Chanel" },
  { src: imgLouis, alt: "Louis Vuitton" },
  { src: imgPrada, alt: "Prada" },
  { src: imgKlein, alt: "Calvin Klein" },
  { src: imgDenim, alt: "Denim" },
];

export const BrandMarquee = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="flex items-center py-5 lg:py-10">
        <div
          className="
            flex 
            shrink-0 
            gap-4 sm:gap-8 md:gap-12 lg:gap-16 
            animate-marquee 
            min-w-full 
            items-center 
            justify-around
          "
        >
          {brands.concat(brands).map((brand, i) => (
            <img
              key={`dup-1-${i}`}
              src={brand.src}
              alt={brand.alt}
              className="h-6 md:h-10 w-auto shrink-0"
            />
          ))}
        </div>

        <div
          className="flex shrink-0 gap-4 sm:gap-8 md:gap-12 lg:gap-16  animate-marquee min-w-full items-center justify-around"
          aria-hidden="true"
        >
          {brands.map((brand, i) => (
            <img
              key={`dup-2-${i}`}
              src={brand.src}
              alt={brand.alt}
              className="h-6 md:h-10 w-auto shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
