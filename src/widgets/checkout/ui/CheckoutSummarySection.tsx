import { CheckoutDiscount } from "@/features/checkout-discount";
import { CheckoutOrderSummary } from "./CheckoutOrderSummary";
import type { CartDetailsItem } from "@/entities/cart";

interface CheckoutSummarySectionProps {
  cartItems: CartDetailsItem[];
  total: number;
  subtotal: number;
  shippingCost: number;
}

export const CheckoutSummarySection = ({
  cartItems,
  total,
  subtotal,
  shippingCost,
}: CheckoutSummarySectionProps) => {
  return (
    <div>
      <CheckoutOrderSummary
        items={cartItems}
        total={total}
        subtotal={subtotal}
        shippingCost={shippingCost}
        discountSlot={<CheckoutDiscount />}
      />
    </div>
  );
};
