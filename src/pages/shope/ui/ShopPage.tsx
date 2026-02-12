import { Packages } from "@/widgets/packages";
import { Benefits } from "@/widgets/benefits";
import { InstagramFeed } from "@/widgets/instagram-feed";
import { NewsLetter } from "@/widgets/news-latter";
import { Footer } from "@/widgets/footer";
import { ProductCatalog } from "@/widgets/product-catalog";

export const ShopPage = () => {
  const scrollToCatalog = () => {
    document.getElementById("catalog-top")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <ProductCatalog />
      <Packages onActionClick={scrollToCatalog} />
      <Benefits />
      <InstagramFeed />
      <NewsLetter />
      <Footer />
    </>
  );
};
