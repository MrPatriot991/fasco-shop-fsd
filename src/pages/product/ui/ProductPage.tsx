import { ErrorBoundary } from "@/shared/ui/error-boundary";
import { Benefits } from "@/widgets/benefits";
import { Deals } from "@/widgets/deals";
import { Footer } from "@/widgets/footer";
import { NewsLetter } from "@/widgets/news-latter";
import { Packages } from "@/widgets/packages";
import { ProductDetails } from "@/widgets/product-details";

export const ProductPage = () => {
  return (
    <>
      <ErrorBoundary>
        <ProductDetails />
      </ErrorBoundary>
      <Packages />
      <Benefits />
      <Deals />
      <NewsLetter />
      <Footer />
    </>
  );
};
