import { useEffect, useState, useMemo, useRef } from "react";
import { Button, Pagination } from "@/shared/ui";
import { useAppSelector, useAppDispatch } from "@/shared/lib/hooks";
import {
  fetchProducts,
  selectProductStatus,
  ProductCard,
  ProductCardSkeleton,
} from "@/entities/product";
import { selectFilteredProducts } from "@/features/filter-products";

import type { Product } from "@/entities/product/model/schema";

export const ProductList = ({ mode = "shop" }: { mode?: "home" | "shop" }) => {
  const dispatch = useAppDispatch();
  const apiProducts = useAppSelector<Product[]>(selectFilteredProducts);
  const status = useAppSelector(selectProductStatus);
  const [visibleCount, setVisibleCount] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(apiProducts.length / itemsPerPage);
  const catalogRef = useRef<HTMLUListElement | null>(null);

  const displayProducts = useMemo(() => {
    if (mode === "home") {
      return apiProducts.slice(0, visibleCount);
    }

    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    return apiProducts.slice(firstIndex, lastIndex);
  }, [apiProducts, visibleCount, mode, currentPage]);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    requestAnimationFrame(() => {
      catalogRef.current?.scrollIntoView({ behavior: "smooth" });
    });
  };

  return (
    <div className="flex flex-col w-full items-center justify-center flex-1 gap-5">
      {displayProducts.length === 0 && (
        <span className="text-brand-dark">Products do not exist.</span>
      )}
      <ul ref={catalogRef} className="grid grid-cols-1 w-full sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {status === "loading" && apiProducts.length === 0
          ? Array.from({ length: 6 }).map((_, i) => (
              <li key={`skeleton-${i}`}>
                <ProductCardSkeleton />
              </li>
            ))
          : displayProducts.map((product) => (
              <li key={`product-${product.id}`}>
                <ProductCard product={product} />
              </li>
            ))}
      </ul>

      {mode === "home" ? (
        visibleCount < apiProducts.length && (
          <Button onClick={handleShowMore}>
            {status === "loading" ? "Loading..." : "View more"}
          </Button>
        )
      ) : (
        <div>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};
