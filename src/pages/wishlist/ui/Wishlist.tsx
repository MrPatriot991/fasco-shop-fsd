import { useState } from "react";
import { Link } from "react-router-dom";
import { HeartOff } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import { Button } from "@/shared/ui/button";
import { ConfirmDialog } from "@/shared/ui/confirm-dialog";
import { EmptyState } from "@/shared/ui/empty-state";
import { ProductCard } from "@/entities/product/ui/product-card/ProductCard";
import { clearWishlist } from "@/entities/wishlist";
import {
  selectWishlistCount,
  selectWishlistProducts,
} from "@/entities/wishlist/model/wishlistSelectors";
import { ToggleWishlistButton } from "@/features/wishlist";
import { WishlistToolbar } from "@/features/wishlist-toolbar";
import { useWishlistView } from "@/features/wishlist-toolbar";
import { moveAllToCart } from "@/features/wishlist-move-all-to-cart";
import { WishlistHeader } from "@/widgets/wishlist-header";
import { WishlistList } from "@/widgets/wishlist-list";
import { WishlistPage } from "./WishlistPage";

export const Wishlist = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectWishlistProducts);
  const count = useAppSelector(selectWishlistCount);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const onClear = () => {
    if (count === 0) return;
    setConfirmOpen(true);
  };

  const { sort, search, viewItems, setSort, setSearch } = useWishlistView(products);

  const confirmClear = () => {
    dispatch(clearWishlist());
    setConfirmOpen(false);
  };

  const onMoveAllToCart = () => {
    if (count === 0) return;
    dispatch(moveAllToCart(products));
  };

  const isWishlistEmpty = count === 0;
  const isSearchEmpty = !isWishlistEmpty && viewItems.length === 0;

  return (
    <>
      <WishlistPage
        isEmpty={isWishlistEmpty || isSearchEmpty}
        headerSlot={
          <WishlistHeader
            title="Wishlist"
            description="Your wishlist of products"
            count={count}
            isMoveAllDisabled={count === 0}
            isClearDisabled={count === 0}
            onMoveAllToCart={onMoveAllToCart}
            onClearWishlist={onClear}
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
            getKey={(product) => product.id}
            renderItem={(product) => (
              <ProductCard
                product={product}
                variant="grid"
                topRightSlot={
                  <ToggleWishlistButton
                    productId={String(product.id)}
                    colorStar="text-black"
                    className="rounded-full bg-white/90 backdrop-blur-sm active:bg-white"
                  />
                }
              />
            )}
          />
        }
        emptySlot={
          isWishlistEmpty ? (
            <EmptyState
              icon={<HeartOff size={22} className="text-neutral-700" />}
              title="Your wishlist is empty"
              description="Save items you love so you can find them quickly later."
              action={
                <Button asChild variant="outlineDark">
                  <Link to="/shop">Continue shopping</Link>
                </Button>
              }
            />
          ) : isSearchEmpty ? (
            <EmptyState
              title="Nothing matched your search"
              description="Try another keyword or clear the search."
              action={
                <Button variant="ghost" onClick={() => setSearch("")}>
                  Clear search
                </Button>
              }
            />
          ) : null
        }
      />
      <ConfirmDialog
        open={confirmOpen}
        title="Clear wishlist?"
        description="This action cannot be undone."
        confirmText="Clear"
        cancelText="Cancel"
        onConfirm={confirmClear}
        onCancel={() => setConfirmOpen(false)}
      />
    </>
  );
};
