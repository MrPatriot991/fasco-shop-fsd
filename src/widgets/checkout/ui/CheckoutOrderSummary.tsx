import { formatCurrency } from "@/shared/lib/format";

interface OrderItem {
  id: string;
  title: string;
  price: number;
  color: string;
  image?: string;
  quantity: number;
}

interface CheckoutOrderSummaryProps {
  items: OrderItem[];
  subtotal: number;
  shippingCost: number;
  discountAmount?: number;
  total: number;
  discountSlot?: React.ReactNode;
}

export const CheckoutOrderSummary = ({
  items,
  subtotal,
  shippingCost,
  discountAmount = 0,
  total,
  discountSlot,
}: CheckoutOrderSummaryProps) => {
  return (
    <div className="bg-gray-50 p-6 rounded-md">
      {/* Items */}
      <div className="flex flex-col gap-4 mb-6">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            {/* Image with quantity badge */}
            <div className="relative shrink-0">
              <div className="w-32 h-32 rounded-md overflow-hidden bg-gray-200">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top"
                  />
                ) : null}
              </div>
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-semibold">
                {item.quantity}
              </span>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="font-volkhov text-brand-black max-w-2/3 truncate">{item.title}</p>
              <p className="text-xs text-brand-gray">{item.color}</p>
            </div>

            {/* Price */}
            <div className=" text-brand-gray shrink-0">
              {formatCurrency(item.price * item.quantity)}
            </div>
          </div>
        ))}
      </div>

      {discountSlot && <div className="mb-4">{discountSlot}</div>}

      <div className="flex flex-col gap-3 border-t border-gray-200 pt-4">
        <div className="flex items-center justify-between text-brand-gray">
          <span>Subtotal</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex items-center justify-between text-brand-gray">
          <span>Shipping</span>
          <span>{formatCurrency(shippingCost)}</span>
        </div>
        {discountAmount > 0 ? (
          <div className="flex items-center justify-between text-brand-gray">
            <span>Discount</span>
            <span>-{formatCurrency(discountAmount)}</span>
          </div>
        ) : null}
        <div className="flex items-center justify-between text-brand-gray">
          <span>Total</span>
          <span>{formatCurrency(total)}</span>
        </div>
      </div>
    </div>
  );
};
