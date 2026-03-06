import { selectIsAuthenticated } from "@/entities/session";
import { useAppSelector } from "@/shared/lib/hooks";
import { CheckboxGiftWrap } from "@/shared/ui/checkbox-gift-wrap";
import { CartSummaryBlock } from "@/shared/ui/cart-summary-block";
import { CartCheckoutButtons } from "@/shared/ui/cart-checkout-buttons";
import { formatCurrency } from "@/shared/lib/format";
import { FreeShippingMessage } from "@/entities/cart/ui/FreeShippingMessage";

interface CartSummarySectionProps {
  isGiftWrap: boolean;
  subtotal: number;
  onToggleGiftWrap: () => void;
}

export const CartSummarySection = ({
  isGiftWrap,
  subtotal,
  onToggleGiftWrap,
}: CartSummarySectionProps) => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  return (
    <div className="flex flex-col w-full md:max-w-1/2">
      <CheckboxGiftWrap
        label={
          <>
            For <span className="font-semibold text-brand-black">{formatCurrency(10)}</span> Please
            Wrap The Product
          </>
        }
        checked={isGiftWrap}
        onChange={onToggleGiftWrap}
        className="w-full md:w-auto mb-6"
      />

      <CartSummaryBlock subtotal={subtotal} className="w-full md:w-auto mb-6" />
      <CartCheckoutButtons
        checkoutLabel="Checkout"
        checkoutPath={isAuthenticated ? "/checkout" : "/sign-in"}
        state={!isAuthenticated ? { from: "/checkout" } : undefined}
      />
      <FreeShippingMessage className="mt-2" />
    </div>
  );
};
