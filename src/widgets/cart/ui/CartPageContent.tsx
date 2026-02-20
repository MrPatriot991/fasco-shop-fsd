import { ChevronRight } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import { formatCurrency } from "@/shared/lib/format";
import { CartCheckoutButtons } from "@/shared/ui/cartCheckoutButtons";
import { CartItem } from "@/shared/ui/cartItem";
import { CartSummaryBlock } from "@/shared/ui/cartSummaryBlock";
import { CheckboxGiftWrap } from "@/shared/ui/checkboxGiftWrap";
import { ErrorBoundary } from "@/shared/ui/errorBoundary";
import { Section } from "@/shared/ui/section";
import { SectionTitle } from "@/shared/ui/sectionTitle";
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
    <Section spacing="compact" className="bg-brand-white">
      <SectionTitle
        as="h1"
        align="center"
        className="md:gap-4 lg:gap-6"
        subContent={
          <p className="font-volkhov text-black hidden md:flex items-center gap-2">
            Home <ChevronRight className="w-4 h-4" /> Your Shopping Cart
          </p>
        }
      >
        Shopping Cart
      </SectionTitle>

      <div className="mt-8 md:mt-20">
        <CartTableHeader />
        <div>
          {cartItems.map((item) => (
            <ErrorBoundary key={item.id}>
              <CartItem
                {...item}
                variant="detailed"
                showRemove
                showTotal
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemove}
              />
            </ErrorBoundary>
          ))}
        </div>

        <div className="flex justify-end">
          <div className="flex flex-col w-full md:max-w-1/2">
            <CheckboxGiftWrap
              label={
                <>
                  For <span className="font-semibold text-brand-black">{formatCurrency(10)}</span>{" "}
                  Please Wrap The Product
                </>
              }
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
    </Section>
  );
};

