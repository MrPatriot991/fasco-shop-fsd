import { useEffect, useState, useMemo, useRef } from "react";
import { useAppSelector, useAppDispatch } from "@/shared/lib/hooks";
import { fetchProducts } from "@/entities/product/model/slice";
import { selectProductStatus } from "@/entities/product/model/selector";
import { selectFilteredProducts } from "@/features/filter-products";
import { Button, Pagination } from "@/shared/ui";
import { ProductCard } from "@/entities/product/ui/ProductCard/ProductCard";
import { ProductCardSkeleton } from "@/entities/product/ui/ProductCardSkeleton/ProductCardSkeleton";

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
