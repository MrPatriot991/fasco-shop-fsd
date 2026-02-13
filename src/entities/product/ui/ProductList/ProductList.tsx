import { useState, useMemo, useRef } from "react";
import { Button, Pagination } from "@/shared/ui";
import { useAppSelector } from "@/shared/lib/hooks";
import { selectProductStatus, ProductCard } from "@/entities/product";
import type { Product } from "@/entities/product/model/schema";

interface ProductsListProps {
  products: Product[];
  mode?: "home" | "shop";
}

export const ProductList = ({ products, mode = "shop" }: ProductsListProps) => {
  const status = useAppSelector(selectProductStatus);
  const [visibleCount, setVisibleCount] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const catalogRef = useRef<HTMLUListElement | null>(null);

  const displayProducts = useMemo(() => {
    if (mode === "home") {
      return products.slice(0, visibleCount);
    }

    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    return products.slice(firstIndex, lastIndex);
  }, [products, visibleCount, mode, currentPage]);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

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
        {status === "loading" && products.length === 0
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
        visibleCount < products.length && (
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
