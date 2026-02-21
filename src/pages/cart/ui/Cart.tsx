import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import { Button } from "@/shared/ui/button";
import { EmptyState } from "@/shared/ui/empty-state";
import {
  selectCartDetails,
  selectIsGiftWrapEnabled,
  selectCartSubtotal,
  toggleGiftWrap,
  updateCartItem,
  removeFromCart,
} from "@/entities/cart";
import { CartHeader, CartItemsSection, CartSummarySection } from "@/widgets/cart";
import { Footer } from "@/widgets/footer";
import { NewsLetter } from "@/widgets/news-latter";
import { CartPage } from "./CartPage";

export const Cart = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartDetails);
  const isGiftWrap = useAppSelector(selectIsGiftWrapEnabled);
  const subtotal = useAppSelector(selectCartSubtotal);

  const onQuantityChange = (id: string, quantity: number) => {
    dispatch(updateCartItem({ id, quantity }));
  };

  const onRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const onToggleGiftWrap = () => dispatch(toggleGiftWrap());

  const isEmpty = cartItems.length === 0;

  return (
    <>
      <CartPage
        isEmpty={isEmpty}
        headerSlot={<CartHeader />}
        itemsSlot={
          <CartItemsSection
            cartItems={cartItems}
            onQuantityChange={onQuantityChange}
            onRemove={onRemove}
          />
        }
        summarySlot={
          <CartSummarySection
            isGiftWrap={isGiftWrap}
            subtotal={subtotal}
            onToggleGiftWrap={onToggleGiftWrap}
          />
        }
        emptySlot={
          <EmptyState
            icon={<ShoppingCart size={22} className="text-neutral-700" />}
            title="Your cart is empty"
            description="Looks like your cart is still empty. Explore products and add your favorites."
            action={
              <Button asChild variant="outlineDark">
                <Link to="/shop">Continue shopping</Link>
              </Button>
            }
          />
        }
      />
      <NewsLetter />
      <Footer />
    </>
  );
};
