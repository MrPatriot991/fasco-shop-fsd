import { Deals } from "@/widgets/deals";
import { Hero } from "@/widgets/hero";
import { ProductList } from "@/widgets/product-list";
import { Packages } from "@/widgets/packages";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Deals />
      <ProductList />
      <Packages />
    </>
  );
};
