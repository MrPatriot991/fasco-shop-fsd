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
    <section className="bg-brand-white py-6 sm:py-8 lg:py-12">
      <Container>
        <div className="flex flex-col items-center space-y-12">
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
