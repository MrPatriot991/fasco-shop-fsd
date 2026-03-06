import { useState, useMemo } from "react";
import { useDebounce } from "@/shared/lib/hooks";
import type { WishlistSortValue } from "./wishlistToolbarTypes";

interface ProductLike {
  title: string;
  price: number;
}

export const useWishlistView = <T extends ProductLike>(products: T[]) => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<WishlistSortValue>("default");

  const debounceQuery = useDebounce(search, 300);

  const viewItems = useMemo(() => {
    const q = debounceQuery.trim().toLowerCase();

    let list = q ? products.filter((p) => p.title.toLowerCase().includes(q)) : products;

    if (sort === "price-low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-high") list = [...list].sort((a, b) => b.price - a.price);

    return list;
  }, [products, debounceQuery, sort]);

  return {
    search,
    sort,
    viewItems,
    setSearch,
    setSort,
  };
};
