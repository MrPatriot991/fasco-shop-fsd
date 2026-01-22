import { useEffect, useState, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import {
  fetchProducts,
  ProductCardSkeleton,
  selectAllProducts,
  selectProductStatus,
  type Product,
} from "@/entities/product";
import { ProductCard } from "@/entities/product/ui/ProductCard";
import { MOCK_PRODUCTS } from "@/entities/product";
import { Button } from "@/shared/ui/Button";
import { Container } from "@/shared/ui";

interface Buttons {
  id: number;
  label: string;
}

const buttons: Buttons[] = [
  { id: 1, label: "Men’s Fashion" },
  { id: 2, label: "Women’s Fashion" },
  { id: 3, label: "Women Accessories" },
  { id: 4, label: "Men Accessories" },
  { id: 5, label: "Discount Deals" },
];

export const ProductList = () => {
  const dispatch = useAppDispatch();
  const apiProducts = useAppSelector<Product[]>(selectAllProducts);
  const status = useAppSelector(selectProductStatus);

  const [visibleCount, setVisibleCount] = useState(6);

  const allAvalibleProducts = useMemo(() => {
    return [...MOCK_PRODUCTS, ...apiProducts];
  }, [apiProducts]);

  const displayProducts = useMemo(() => {
    return allAvalibleProducts.slice(0, visibleCount);
  }, [allAvalibleProducts, visibleCount]);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  return (
    <section className="bg-brand-white pt-16 lg:pt-36">
      <Container>
        <div className="flex flex-col items-center space-y-12">
          <h2 className="text-section-titel font-volkhov text-brand-dark">New Arrivals</h2>
          <p className="text-center text-brand-gray lg:w-2/3 w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices
            sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin{" "}
          </p>
          <div className="w-full overflow-hidden">
            <div className="flex overflow-x-auto md:justify-between gap-3 md:gap-7 scrollbar-hide">
              {buttons.map((button) => (
                <Button key={button.id} variant="secondary" className="whitespace-nowrap shrink-0">
                  {button.label}
                </Button>
              ))}
            </div>
          </div>
          <ul className="grid grid-cols-1 w-full sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayProducts.map((product) => (
              <li key={`mock-${product.id}`}>
                <ProductCard product={product} />
              </li>
            ))}

            {status === "loading" &&
              apiProducts.length === 0 &&
              Array.from({ length: 3 }).map((_, i) => (
                <li key={`skeleton-${i}`}>
                  <ProductCardSkeleton />
                </li>
              ))}
          </ul>

          {visibleCount < allAvalibleProducts.length && (
            <Button onClick={handleShowMore}>
              {status === "loading" ? "Loading..." : "View more"}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
};
