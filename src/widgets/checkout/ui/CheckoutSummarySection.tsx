import { CheckoutDiscount } from "@/features/checkout-discount";
import { CheckoutOrderSummary } from "./CheckoutOrderSummary";
import type { CartDetailsItem } from "@/entities/cart";

interface CheckoutSummarySectionProps {
  cartItems: CartDetailsItem[];
  total: number;
  subtotal: number;
  shippingCost: number;
  discountCode: string;
  discountAmount: number;
  discountError: string;
  setDiscountCode: (value: string) => void;
  applyDiscount: () => void;
}

export const CheckoutSummarySection = ({
  cartItems,
  total,
  subtotal,
  shippingCost,
  discountCode,
  discountAmount,
  discountError,
  setDiscountCode,
  applyDiscount,
}: CheckoutSummarySectionProps) => {
  return (
    <div>
      <CheckoutOrderSummary
        items={cartItems}
        total={total}
        subtotal={subtotal}
        shippingCost={shippingCost}
        discountAmount={discountAmount}
        discountSlot={
          <CheckoutDiscount
            code={discountCode}
            error={discountError}
            onCodeChange={setDiscountCode}
            onApply={applyDiscount}
          />
        }
      />
    </div>
  );
};
