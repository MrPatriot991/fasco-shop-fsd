import { FormProvider, type SubmitHandler, type UseFormReturn } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "@/shared/ui/button";
import { CheckboxGiftWrap } from "@/shared/ui/checkbox-gift-wrap";
import { CheckoutContact } from "./CheckoutContact";
import { CheckoutDelivery } from "./CheckoutDelivery";
import { CheckoutPayment } from "./CheckoutPayment";
import type { CheckoutSchema } from "@/features/checkout";

interface CheckoutFormSectionProps {
  methods: UseFormReturn<CheckoutSchema>;
  onSubmit: SubmitHandler<CheckoutSchema>;
}

export const CheckoutFormSection = ({ methods, onSubmit }: CheckoutFormSectionProps) => {
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-10 md:gap-12 lg:gap-16"
      >
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
              <Button variant="primary" size="widthFull" type="submit">
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
          Copyright 2022 FASCO. All rights reserved.
        </p>
      </form>
    </FormProvider>
  );
};
