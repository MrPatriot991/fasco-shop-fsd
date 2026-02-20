import { Controller, useFormContext } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import { Dropdown } from "@/shared/ui/dropdown";
import { Input } from "@/shared/ui/input";
import { SectionTitle } from "@/shared/ui/sectionTitle";
import { CARDS } from "@/shared/lib/constants";

interface CheckoutPaymentProps {
  saveInfoSlot?: React.ReactNode;
  submitSlot: React.ReactNode;
}

export const CheckoutPayment = ({ saveInfoSlot, submitSlot }: CheckoutPaymentProps) => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
      <SectionTitle variant="section" as="h2" align="left" className="font-bold">
        Payment
      </SectionTitle>

      <div>
        <div className="overflow-hidden">
          <Controller
            name="card"
            control={control}
            render={({ field }) => (
              <Dropdown
                items={CARDS}
                label={CARDS.find((c) => c.value === field.value)?.label || "Select card"}
                onSelect={(card) => field.onChange(card.value)}
                className="border border-gray-300"
                buttonClassName="justify-between w-full px-4 py-3 md:py-4"
                dropdownClassName="w-full"
              >
                <div className="flex items-center gap-[-0.75rem]">
                  <div className="w-6 h-4 rounded-full bg-red-500 opacity-90" />
                  <div className="w-6 h-4 rounded-full bg-yellow-400 -ml-3 opacity-90" />
                </div>
              </Dropdown>
            )}
          />

          {/* Card Fields */}
          <div className="grid md:grid-cols-2 gap-2 p-4 bg-gray-50">
            {/* Card Number */}
            <div className="relative border-gray-300 col-span-2">
              <Controller
                name="cardNumber"
                control={control}
                render={({ field: { onChange, value, ref } }) => (
                  <PatternFormat
                    format="#### #### #### ####"
                    mask="_"
                    value={value}
                    onValueChange={(values) => {
                      onChange(values.value);
                    }}
                    getInputRef={ref}
                    customInput={Input}
                    variant="outline"
                    type="text"
                    placeholder="Card Number"
                  />
                )}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">🔒</span>
            </div>
            {/* Expiration & Security */}
            <Controller
              control={control}
              name="expiryDate"
              render={({ field: { onChange, value, ref } }) => (
                <PatternFormat
                  format="##/##"
                  placeholder="MM/YY"
                  mask="_"
                  value={value}
                  onValueChange={(values) => onChange(values.formattedValue)}
                  getInputRef={ref}
                  customInput={Input}
                  variant="outline"
                  error={errors.expiryDate?.message as string}
                />
              )}
            />
            <Controller
              control={control}
              name="cvv"
              render={({ field: { onChange, value, ref } }) => (
                <PatternFormat
                  format="###"
                  placeholder="CVV"
                  value={value}
                  onValueChange={(values) => onChange(values.value)}
                  getInputRef={ref}
                  customInput={Input}
                  variant="outline"
                  error={errors.cvv?.message as string}
                />
              )}
            />
            {/* Card Holder Name */}
            <Input
              {...register("cardHoldName")}
              variant="outline"
              type="text"
              placeholder="Card Holder Name"
              className="col-span-2"
              error={errors.cardHoldName?.message as string}
            />
            {/* Save Info Slot */}
            {saveInfoSlot}
          </div>
        </div>

        {/* Submit Slot */}
        <div className="mt-6">{submitSlot}</div>
      </div>
    </div>
  );
};

