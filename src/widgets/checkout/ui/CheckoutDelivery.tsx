import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Input, SectionTitle, Select } from "@/shared/ui";

interface CheckoutDeliveryProps {
  saveInfoSlot?: React.ReactNode;
}

export const CheckoutDelivery = ({ saveInfoSlot }: CheckoutDeliveryProps) => {
  const [country, setCountry] = useState("");

  return (
    <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
      <SectionTitle variant="section" as="h2" align="left" className="font-bold">
        Delivery
      </SectionTitle>
      <div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative col-span-2 md:col-span-2">
            <Select value={country} onChange={(e) => setCountry(e.target.value)}>
              <option value="" disabled>
                Country / Region
              </option>
              <option value="us">United States</option>
              <option value="ua">Ukraine</option>
              <option value="de">Germany</option>
              <option value="uk">United Kingdom</option>
            </Select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 transition-transform duration-200" />
          </div>
          <Input
            type="text"
            variant="outline"
            className="lg:py-6 col-span-2 md:col-span-1"
            placeholder="First Name"
          />
          <Input
            type="text"
            variant="outline"
            className="lg:py-6 col-span-2 md:col-span-1"
            placeholder="Last Name"
          />
          <Input
            type="text"
            variant="outline"
            className="lg:py-6 col-span-2 md:col-span-2"
            placeholder="Address"
          />
          <Input
            type="text"
            variant="outline"
            className="lg:py-6 col-span-2 md:col-span-1"
            placeholder="City"
          />
          <Input
            type="text"
            variant="outline"
            className="lg:py-6 col-span-2 md:col-span-1"
            placeholder="Postal Code"
          />
        </div>
        {saveInfoSlot}
      </div>
    </div>
  );
};
