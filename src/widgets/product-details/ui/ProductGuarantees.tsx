import { cn } from "@/shared/lib/utils";

const PAYMENT_METHODS = [
  { label: "VISA", bg: "bg-blue-900" },
  { label: "MC", bg: "bg-red-600" },
  { label: "AMEX", bg: "bg-blue-600" },
  { label: "JCB", bg: "bg-blue-400" },
  { label: "DISC", bg: "bg-orange-500" },
  { label: "DC", bg: "bg-blue-700" },
  { label: "UP", bg: "bg-blue-900" },
];

export const ProductGuarantees = () => {
  return (
    <div className="flex flex-col items-center p-5 gap-5 bg-brand-secondary rounded-sm">
      <div className="flex flex-wrap gap-3">
        {PAYMENT_METHODS.map((card) => (
          <div
            key={card.label}
            className={cn(
              "h-8 w-12 rounded flex items-center justify-center text-white text-xs font-bold",
              card.bg
            )}
          >
            {card.label}
          </div>
        ))}
      </div>
      <p className="font-volkhov text-black">Guarantee safe & secure checkout</p>
    </div>
  );
};
