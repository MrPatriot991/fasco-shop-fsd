import { Input, SectionTitle } from "@/shared/ui";

interface CheckoutContactProps {
  accountPrompt?: React.ReactNode;
}

export const CheckoutContact = ({ accountPrompt }: CheckoutContactProps) => {
  return (
    <>
      <SectionTitle
        variant="section"
        as="h2"
        align="left"
        subContent={accountPrompt}
        classNameWrapper="flex-row items-center justify-between gap-0"
        className="leading-11"
      >
        Contact
      </SectionTitle>
      <Input type="email" variant="outline" className="lg:py-6" placeholder="Email Address" />
    </>
  );
};
