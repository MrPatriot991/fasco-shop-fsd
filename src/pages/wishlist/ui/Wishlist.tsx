import { WishlistToolbar, type WishlistSortValue } from "@/features/wishlist-toolbar";
import { WishlistHeader } from "@/widgets/wishlist-header";
import { WishlistPage } from "./WishlistPage";
import { useState } from "react";

export const Wishlist = () => {
  const count = 0;

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<WishlistSortValue>("default");

  return (
    <WishlistPage
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
      isEmpty={true}
      contentSlot={<></>}
      emptySlot={<div />}
    />
  );
};
