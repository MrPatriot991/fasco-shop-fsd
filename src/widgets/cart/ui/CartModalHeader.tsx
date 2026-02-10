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
          title="Shopping Cart"
          as="h2"
          className="items-start"
          subContent={<FreeShippingMessage threshold={freeShippingThreshold} />}
        />
        <Button type="button" variant="ghost" size="none" onClick={onClick}>
          <X />
        </Button>
      </div>
    </div>
  );
};
