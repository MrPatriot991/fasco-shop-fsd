import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { EmptyState } from "@/shared/ui/empty-state";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import { selectCartDetails, selectCartSubtotal } from "@/entities/cart";
import { checkoutSubmitted, checkoutSchema, type CheckoutSchema } from "@/features/checkout";
import { CheckoutFormSection, CheckoutHeader, CheckoutSummarySection } from "@/widgets/checkout";
import { CheckoutPage } from "./CheckoutPage";

const SHIPPING_COST = 40;

export const Checkout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cartItems = useAppSelector(selectCartDetails);
  const subtotal = useAppSelector(selectCartSubtotal);
  const total = subtotal + SHIPPING_COST;

  const methods = useForm<CheckoutSchema>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
  });

  const onSubmit = (data: CheckoutSchema) => {
    const { cvv, cardNumber, ...safeData } = data;

    if (!cvv || !cardNumber) return;

    console.log("Pay now", {
      ...safeData,
      cardNumber: "**** **** ****" + cardNumber.slice(-4),
      cvv: "***",
    });

    dispatch(checkoutSubmitted());
    methods.reset();
    navigate("/checkout/success", { replace: true });
  };

  const isEmpty = cartItems.length === 0;

  return (
    <CheckoutPage
      isEmpty={isEmpty}
      headerSlot={<CheckoutHeader />}
      formSlot={<CheckoutFormSection methods={methods} onSubmit={onSubmit} />}
      summarySlot={
        <CheckoutSummarySection
          cartItems={cartItems}
          total={total}
          subtotal={subtotal}
          shippingCost={SHIPPING_COST}
        />
      }
      emptySlot={
        <EmptyState
          icon={<ShoppingBag size={22} className="text-neutral-700" />}
          title="Your checkout is empty"
          description="Your cart has no items yet. Add products to proceed with checkout."
          action={
            <Button asChild variant="outlineDark">
              <Link to="/shop">Go to shop</Link>
            </Button>
          }
        />
      }
    />
  );
};
