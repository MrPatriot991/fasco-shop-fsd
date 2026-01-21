import { Deals } from "@/widgets/deals";
import { Hero } from "@/widgets/hero";
import { ProductList } from "@/widgets/product-list";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Deals />
      <ProductList />
    </>
  );
};
