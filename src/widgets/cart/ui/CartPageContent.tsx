import { ChevronRight } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import {
  CartCheckoutButtons,
  CartGiftWrap,
  SectionTitle,
  CartItem,
  CartSummaryBlock,
  Container,
} from "@/shared/ui";
import {
  updateCartItem,
  removeFromCart,
  selectIsGiftWrapEnabled,
  toggleGifWrap,
  selectCartSubtotal,
  FreeShippingMessage,
  selectCartDetails,
} from "@/entities/cart";
import { CartTableHeader } from "./CartTableHeader";

export const CartPageContent = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartDetails);
  const isGiftWrap = useAppSelector(selectIsGiftWrapEnabled);
  const subtotal = useAppSelector(selectCartSubtotal);

  const handleQuantityChange = (id: string, quantity: number) => {
    dispatch(updateCartItem({ id, quantity }));
  };

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    console.log("Checkout", { cartItems, isGiftWrap });
  };

  return (
    <section className="py-8 md:py-16 bg-brand-white">
      <Container>
        <SectionTitle
          as="h1"
          title="Shopping Cart"
          subContent={
            <p className="text-black hidden lg:flex items-center gap-2">
              Home <ChevronRight className="w-4 h-4" /> Your Shopping Cart
            </p>
          }
        />

        <div className="mt-8 md:mt-20">
          <CartTableHeader />
          <div>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                {...item}
                variant="detailed"
                showRemove
                showTotal
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemove}
              />
            ))}
          </div>

          <div className="flex justify-end">
            <div className="flex flex-col w-full md:max-w-1/2">
              <CartGiftWrap
                price={10}
                checked={isGiftWrap}
                onChange={() => dispatch(toggleGifWrap())}
                className="w-full md:w-auto mb-6"
              />

              <CartSummaryBlock subtotal={subtotal} className="w-full md:w-auto mb-6" />
              <CartCheckoutButtons onCheckout={handleCheckout} />
              <FreeShippingMessage className="mt-2" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
