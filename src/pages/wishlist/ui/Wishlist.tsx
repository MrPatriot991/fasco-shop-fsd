import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { HeartOff } from "lucide-react";
import { useAppSelector, useDebounce } from "@/shared/lib/hooks";
import { Button, EmptyState } from "@/shared/ui";
import { selectWishlistCount, selectWishlistProducts } from "@/entities/wishlist";
import { WishlistToolbar, type WishlistSortValue } from "@/features/wishlist-toolbar";
import { WishlistHeader } from "@/widgets/wishlist-header";
import { WishlistPage } from "./WishlistPage";
import { WishlistList } from "@/widgets/wishlist-list";
import { ProductCard } from "@/entities/product";

export const Wishlist = () => {
  const products = useAppSelector(selectWishlistProducts);
  const count = useAppSelector(selectWishlistCount);

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

  const isEmpty = viewItems.length === 0;

  return (
    <WishlistPage
      isEmpty={isEmpty}
      headerSlot={
        <WishlistHeader
          title="Wishlist"
          description="Your wishlist of products"
          count={count}
          isMoveAllDisabled={count === 0}
          isClearDisabled={count === 0}
          onMoveAllToCart={() => {}}
          onClearWishlist={() => {}}
        />
      }
      toolbarSlot={
        <WishlistToolbar
          search={search}
          sort={sort}
          onSearchChange={setSearch}
          onSortChange={setSort}
          className="pb-6 md:pb-8"
        />
      }
      contentSlot={
        <WishlistList
          items={viewItems}
          renderItem={(product) => <ProductCard product={product} variant="grid" />}
        />
      }
      emptySlot={
        <EmptyState
          icon={<HeartOff size={22} className="text-neutral-700" />}
          title={search.trim() ? "Nothing matched your search" : "Your wishlist is empty"}
          description={
            search.trim()
              ? "Try a different keyword, or keep browsing to add more items."
              : "Save items you love so you can find them quickly later."
          }
          action={
            <Button asChild variant="outlineDark" size="medium">
              <Link to="/shop">Continue shopping</Link>
            </Button>
          }
        />
      }
    />
  );
};
