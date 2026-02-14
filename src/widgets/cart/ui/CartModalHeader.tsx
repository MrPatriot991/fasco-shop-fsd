import { X } from "lucide-react";
import { Button, SectionTitle } from "@/shared/ui";
import { FreeShippingMessage } from "@/entities/cart";

interface CartModalHeaderProps {
  freeShippingThreshold: number;
  onClick: () => void;
}

export const CartModalHeader = ({ freeShippingThreshold, onClick }: CartModalHeaderProps) => {
  return (
    <div className="border-b border-gray-200 py-6">
      <div className="flex items-start justify-between gap-4">
        <SectionTitle
          as="h2"
          align="left"
          subContent={<FreeShippingMessage threshold={freeShippingThreshold} />}
        >
          Shopping Cart
        </SectionTitle>
        <Button type="button" variant="ghost" size="none" onClick={onClick}>
          <X />
        </Button>
      </div>
    </div>
  );
};
