import { Link } from "react-router-dom";
import { useAppSelector } from "@/shared/lib/hooks";
import { Section, SectionTitle, CheckoutDiscount, CheckboxGiftWrap, Button } from "@/shared/ui";
import { selectCartDetails, selectCartSubtotal } from "@/entities/cart";
import { CheckoutOrderSummary, CheckoutContact, CheckoutDelivery } from "@/widgets/checkout";
import { CheckoutPayment } from "./CheckoutPayment";

const SHIPPING_COST = 40;

export const CheckoutPageContent = () => {
  const cartItems = useAppSelector(selectCartDetails);
  const subtotal = useAppSelector(selectCartSubtotal);
  const total = subtotal + SHIPPING_COST;

  const handlePayNow = () => {
    console.log("Pay now");
  };

  return (
    <Section
      spacing="none"
      headerSlot={
        <SectionTitle
          variant="hero"
          as="h1"
          align="center"
          classNameWrapper="py-6 lg:py-11 border-b border-gray-200"
        >
          FASCO Checkout
        </SectionTitle>
      }
      className="pb-6 md:pb-8 lg:pb-10 border-b border-gray-200"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6 md:pt-10 lg:pt-16">
        <form className="flex flex-col gap-10 md:gap-12 lg:gap-16">
          <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
            <CheckoutContact
              accountPrompt={
                <div className="flex items-center gap-3">
                  <span className="hidden sm:block text-brand-dark">Have an account?</span>
                  <Link
                    to="/sign-up"
                    className="text-blue-600 hover:text-blue-400 transition-colors duration-300"
                  >
                    Create Account
                  </Link>
                </div>
              }
            />
          </div>

          <div>
            <CheckoutDelivery
              saveInfoSlot={
                <CheckboxGiftWrap
                  id="saveDelivery"
                  label="Save This Info for future"
                  className="col-span-2 border-b-0"
                />
              }
            />
          </div>

          <div>
            <CheckoutPayment
              submitSlot={
                <Button variant="primary" size="widthFull" type="submit" onClick={handlePayNow}>
                  Pay Now
                </Button>
              }
              saveInfoSlot={
                <CheckboxGiftWrap
                  id="savePayment"
                  label="Save This Info for future"
                  className="border-b-0 col-span-2"
                />
              }
            />
          </div>

          <p className="hidden lg:block text-center text-xs text-brand-gray">
            Copyright © 2022 FASCO . All Rights Reseved.
          </p>
        </form>
        <div className="">
          <CheckoutOrderSummary
            items={cartItems}
            total={total}
            subtotal={subtotal}
            shippingCost={SHIPPING_COST}
            discountSlot={<CheckoutDiscount />}
          />
        </div>
      </div>
    </Section>
  );
};
