import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, SectionTitle } from "@/shared/ui";
import { checkoutSchema, type CheckoutSchema } from "@/features/checkout";

interface CheckoutContactProps {
  accountPrompt?: React.ReactNode;
}

export const CheckoutContact = ({ accountPrompt }: CheckoutContactProps) => {
  const {
    register,
    formState: { errors },
  } = useForm<CheckoutSchema>({
    resolver: zodResolver(checkoutSchema),
  });

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
        error={errors.email?.message}
      />
    </>
  );
};
