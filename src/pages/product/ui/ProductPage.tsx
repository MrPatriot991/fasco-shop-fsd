import { Benefits } from "@/widgets/benefits";
import { Deals } from "@/widgets/deals";
import { Footer } from "@/widgets/footer";
import { NewsLetter } from "@/widgets/news-latter";
import { Packages } from "@/widgets/packages";

export const ProductPage = () => {
  return (
    <>
      <Packages />
      <Benefits />
      <Deals />
      <NewsLetter />
      <Footer />
    </>
  );
};
