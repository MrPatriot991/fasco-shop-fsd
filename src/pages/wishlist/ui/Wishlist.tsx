import { WishlistHeader } from "@/widgets/wishlist-header";
import { WishlistPage } from "./WishlistPage";

export const Wishlist = () => {
  const count = 0;

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
      isEmpty={true}
      contentSlot={<></>}
      emptySlot={<div />}
    />
  );
};
