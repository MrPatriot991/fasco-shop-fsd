import { useFormContext, Controller } from "react-hook-form";
import { ChevronDown } from "lucide-react";
import { Input, SectionTitle, Select } from "@/shared/ui";
import { COUNTRIES } from "@/shared/lib/constants";

interface CheckoutDeliveryProps {
  saveInfoSlot?: React.ReactNode;
}

export const CheckoutDelivery = ({ saveInfoSlot }: CheckoutDeliveryProps) => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
      <SectionTitle variant="section" as="h2" align="left" className="font-bold">
        Delivery
      </SectionTitle>
      <div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative col-span-2 md:col-span-2">
            <Controller
              control={control}
              name="country"
              render={({ field }) => (
                <Select {...field}>
                  <option value="" disabled>
                    Country / Region
                  </option>
                  {COUNTRIES.map((c) => (
                    <option key={c.label} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </Select>
              )}
            />
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 transition-transform duration-200" />
          </div>
          <Input
            {...register("firstName")}
            type="text"
            variant="outline"
            className="lg:py-6 col-span-2 md:col-span-1"
            placeholder="First Name"
            error={errors.firstName?.message as string}
          />
          <Input
            {...register("lastName")}
            type="text"
            variant="outline"
            className="lg:py-6 col-span-2 md:col-span-1"
            placeholder="Last Name"
            error={errors.lastName?.message as string}
          />
          <Input
            {...register("address")}
            type="text"
            variant="outline"
            className="lg:py-6 col-span-2 md:col-span-2"
            placeholder="Address"
            error={errors.address?.message as string}
          />
          <Input
            {...register("city")}
            type="text"
            variant="outline"
            className="lg:py-6 col-span-2 md:col-span-1"
            placeholder="City"
            error={errors.city?.message as string}
          />
          <Input
            {...register("postCode")}
            type="text"
            variant="outline"
            className="lg:py-6 col-span-2 md:col-span-1"
            placeholder="Postal Code"
            error={errors.postCode?.message as string}
          />
        </div>
        {saveInfoSlot}
      </div>
    </div>
  );
};
