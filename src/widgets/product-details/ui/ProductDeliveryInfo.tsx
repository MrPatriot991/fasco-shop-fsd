import { Van, Package2 } from "lucide-react";
import { formatCurrency } from "@/shared/lib/format";

interface ProductDeliveryProps {
  estimatedStart: string;
  estimatedEnd: string;
  freeShippingThreshold: number;
}

export const ProductDeliveryInfo = ({
  estimatedStart,
  estimatedEnd,
  freeShippingThreshold,
}: ProductDeliveryProps) => {
  return (
    <div className="flex flex-col gap-2 mb-8">
      <div className="flex flex-wrap items-center gap-2">
        <Van size={20} />
        <p>
          <span className="font-volkhov font-bold">Estimated Delivery:</span>{" "}
          <time dateTime={estimatedStart}>Jul 30</time> –<time dateTime={estimatedEnd}>Aug 03</time>
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Package2 size={20} />
        <p className="font-volkhov font-medium">
          <strong className="font-volkhov font-bold">Free Shipping & Returns:</strong> On all orders
          over {formatCurrency(freeShippingThreshold)}
        </p>
      </div>
    </div>
  );
};
