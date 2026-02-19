import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { HeartOff } from "lucide-react";
import { useAppDispatch, useAppSelector, useDebounce } from "@/shared/lib/hooks";
import { Button, EmptyState, ConfirmDialog } from "@/shared/ui";
import { ProductCard } from "@/entities/product";
import { addToCart } from "@/entities/cart";
import { clearWishlist, selectWishlistCount, selectWishlistProducts } from "@/entities/wishlist";
import { WishlistToolbar, type WishlistSortValue } from "@/features/wishlist-toolbar";
import { WishlistHeader } from "@/widgets/wishlist-header";
import { WishlistList } from "@/widgets/wishlist-list";
import { WishlistPage } from "./WishlistPage";

export const Wishlist = () => {
  const dispatch = useAppDispatch();

  const products = useAppSelector(selectWishlistProducts);
  const count = useAppSelector(selectWishlistCount);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<WishlistSortValue>("default");
  const [confirmOpen, setConfirmOpen] = useState(false);
  const debounceQuery = useDebounce(search, 300);

  const viewItems = useMemo(() => {
    const q = debounceQuery.trim().toLowerCase();

    let list = q ? products.filter((p) => p.title.toLowerCase().includes(q)) : products;

    if (sort === "price-low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-high") list = [...list].sort((a, b) => b.price - a.price);

    return list;
  }, [products, debounceQuery, sort]);

  const onClear = () => {
    if (count === 0) return;
    setConfirmOpen(true);
  };

  const confirmClear = () => {
    dispatch(clearWishlist());
    setConfirmOpen(false);
  };

  const onMoveAllToCart = () => {
    if (count === 0) return;

    for (const p of products) {
      dispatch(
        addToCart({
          productId: Number(p.id),
          size: p.sizes[0],
          color: p.colors[0],
          quantity: 1,
        })
      );
    }
    dispatch(clearWishlist());
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
            renderItem={(product) => <ProductCard product={product} variant="grid" />}
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
