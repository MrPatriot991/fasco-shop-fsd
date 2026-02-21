import { CheckboxGiftWrap } from "@/shared/ui/checkboxGiftWrap";
import { CartSummaryBlock } from "@/shared/ui/cartSummaryBlock";
import { CartCheckoutButtons } from "@/shared/ui/cart-checkout-buttons";
import { formatCurrency } from "@/shared/lib/format";
import { FreeShippingMessage } from "@/entities/cart";

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
      <CartCheckoutButtons />
      <FreeShippingMessage className="mt-2" />
    </div>
  );
};
