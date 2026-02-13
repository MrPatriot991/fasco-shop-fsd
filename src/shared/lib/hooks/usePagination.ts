import { useState, useMemo } from "react";
import type { Product } from "@/entities/product";

export const usePagination = (items: Product[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const displayProducts = useMemo(() => {
    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    return items.slice(firstIndex, lastIndex);
  }, [items, itemsPerPage, currentPage]);

  return { currentPage, totalPages, displayProducts, setCurrentPage };
};
