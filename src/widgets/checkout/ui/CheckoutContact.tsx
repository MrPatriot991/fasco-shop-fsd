import { useFormContext } from "react-hook-form";
import { Input } from "@/shared/ui/input";
import { SectionTitle } from "@/shared/ui/sectionTitle";

interface CheckoutContactProps {
  accountPrompt?: React.ReactNode;
}

export const CheckoutContact = ({ accountPrompt }: CheckoutContactProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <SectionTitle
        variant="section"
        as="h2"
        align="left"
        subContent={accountPrompt}
        classNameWrapper="flex-row items-center justify-between gap-0"
        className="font-bold leading-11"
      >
        Contact
      </SectionTitle>
      <Input
        {...register("email")}
        type="email"
        variant="outline"
        className="lg:py-6"
        placeholder="Email Address"
        error={errors.email?.message as string}
      />
    </>
  );
};

