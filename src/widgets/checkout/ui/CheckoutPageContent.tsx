import { Link } from "react-router-dom";
import { useAppSelector } from "@/shared/lib/hooks";
import { Section, SectionTitle, CheckoutDiscount, CheckboxGiftWrap } from "@/shared/ui";
import { selectCartDetails, selectCartSubtotal } from "@/entities/cart";
import { CheckoutOrderSummary, CheckoutContact, CheckoutDelivery } from "@/widgets/checkout";

const SHIPPING_COST = 40;

export const CheckoutPageContent = () => {
  const cartItems = useAppSelector(selectCartDetails);
  const subtotal = useAppSelector(selectCartSubtotal);
  const total = subtotal + SHIPPING_COST;

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
        <form className="flex flex-col gap-6 md:gap-10 lg:gap-14">
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
          <CheckoutDelivery
            saveInfoSlot={
              <CheckboxGiftWrap
                id="saveDelivery"
                label="Save This Info for future"
                className="col-span-2"
              />
            }
          />
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
