import { useSearchParams } from "react-router-dom";
import { Packages } from "@/widgets/packages";
import { Benefits } from "@/widgets/benefits";
import { InstagramFeed } from "@/widgets/instagram-feed";
import { NewsLetter } from "@/widgets/news-latter";
import { Footer } from "@/widgets/footer";
import { ProductCatalog } from "@/widgets/product-catalog";

export const ShopPage = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const scrollToCatalog = () => {
    document.getElementById("catalog-top")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <ProductCatalog searchTerm={searchQuery} />
      <Packages onActionClick={scrollToCatalog} />
      <Benefits />
      <InstagramFeed />
      <NewsLetter />
      <Footer />
    </>
  );
};
