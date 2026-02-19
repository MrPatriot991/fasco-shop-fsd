import { useState } from "react";
import { useAppSelector } from "@/shared/lib/hooks";
import { selectWishlistCount, selectWishlistProducts } from "@/entities/wishlist";
import { WishlistToolbar, type WishlistSortValue } from "@/features/wishlist-toolbar";
import { WishlistHeader } from "@/widgets/wishlist-header";
import { WishlistPage } from "./WishlistPage";

export const Wishlist = () => {
  const products = useAppSelector(selectWishlistProducts);
  const count = useAppSelector(selectWishlistCount);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<WishlistSortValue>("default");

  return (
    <WishlistPage
      isEmpty={count === 0}
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
      contentSlot={<pre>{JSON.stringify(products, null, 2)}</pre>}
      emptySlot={<div />}
    />
  );
};
