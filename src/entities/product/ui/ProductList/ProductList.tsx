import { useEffect, useState, useMemo } from "react";
import { useAppSelector, useAppDispatch } from "@/shared/lib/hooks";
import { fetchProducts } from "@/entities/product/model/slice";
import { selectFilteredProducts, selectProductStatus } from "@/entities/product/model/selector";
import { Button } from "@/shared/ui";
import { ProductCard } from "@/entities/product/ui/ProductCard/ProductCard";
import { ProductCardSkeleton } from "@/entities/product/ui/ProductCardSkeleton/ProductCardSkeleton";

import type { Product } from "@/entities/product/model/schema";

export const ProductList = () => {
  const dispatch = useAppDispatch();
  const apiProducts = useAppSelector<Product[]>(selectFilteredProducts);
  const status = useAppSelector(selectProductStatus);

  const [visibleCount, setVisibleCount] = useState(6);

  const displayProducts = useMemo(() => {
    return apiProducts.slice(0, visibleCount);
  }, [apiProducts, visibleCount]);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  if (status === "success") {
    throw new Error("Error Products")
  }

  return (
    <>
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

      {visibleCount < apiProducts.length && (
        <Button onClick={handleShowMore}>
          {status === "loading" ? "Loading..." : "View more"}
        </Button>
      )}
    </>
  );
};
