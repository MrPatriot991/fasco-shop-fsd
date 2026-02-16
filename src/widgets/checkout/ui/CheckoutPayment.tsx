import { useState } from "react";
import { Dropdown, Input, SectionTitle } from "@/shared/ui";

interface CheckoutPaymentProps {
  saveInfoSlot?: React.ReactNode;
  submitSlot: React.ReactNode;
}

const cards = [
  { label: "Mastercard", value: "mastercard" },
  { label: "Visa", value: "visa" },
  { label: "Amex", value: "amex" },
];

export const CheckoutPayment = ({ saveInfoSlot, submitSlot }: CheckoutPaymentProps) => {
  const [selectedCard, setSelectedCard] = useState(cards[0]);

  return (
    <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
      <SectionTitle variant="section" as="h2" align="left" className="font-bold">
        Payment
      </SectionTitle>

      <div>
        <div className="overflow-hidden">
          <Dropdown
            items={cards}
            label={selectedCard.label}
            onSelect={(card) => setSelectedCard(card)}
            className="border border-gray-300"
            buttonClassName="justify-between w-full px-4 py-3 md:py-4"
            dropdownClassName="w-full"
          >
            <div className="flex items-center gap-[-0.75rem]">
              <div className="w-6 h-4 rounded-full bg-red-500 opacity-90" />
              <div className="w-6 h-4 rounded-full bg-yellow-400 -ml-3 opacity-90" />
            </div>
          </Dropdown>

          {/* Card Fields */}
          <div className="grid md:grid-cols-2 gap-2 p-4 bg-gray-50">
            {/* Card Number */}
            <div className="relative border-gray-300 col-span-2">
              <Input variant="outline" type="text" placeholder="Card Number" maxLength={19} />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">🔒</span>
            </div>

            {/* Expiration & Security */}
            <Input
              variant="outline"
              type="text"
              placeholder="Expiration Date"
              className="col-span-1"
            />
            <Input
              variant="outline"
              type="text"
              placeholder="Security Code"
              className="col-span-1"
            />

            {/* Card Holder Name */}
            <Input
              variant="outline"
              type="text"
              placeholder="Card Holder Name"
              className="col-span-2"
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
