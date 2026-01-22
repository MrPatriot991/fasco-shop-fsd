import { Deals } from "@/widgets/deals";
import { Hero } from "@/widgets/hero";
import { ProductList } from "@/widgets/product-list";
import { Packages } from "@/widgets/packages";
import { Benefits } from "@/widgets/benefits";
import { InstagramFeed } from "@/widgets/instagram-feed";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Deals />
      <ProductList />
      <Packages />
      <Benefits />
      <InstagramFeed />
    </>
  );
};
