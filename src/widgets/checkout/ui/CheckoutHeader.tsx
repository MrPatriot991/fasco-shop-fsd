import { SectionTitle } from "@/shared/ui/section-title";

export const CheckoutHeader = () => {
  return (
    <SectionTitle
      variant="hero"
      as="h1"
      align="center"
      classNameWrapper="py-6 lg:py-11 border-b border-gray-200"
    >
      FASCO Checkout
    </SectionTitle>
  );
};
