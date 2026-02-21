import type { ChangeEvent } from "react";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

interface CheckoutDiscountProps {
  code: string;
  error?: string;
  onCodeChange: (value: string) => void;
  onApply: () => void;
}

export const CheckoutDiscount = ({ code, error, onCodeChange, onApply }: CheckoutDiscountProps) => {
  return (
    <>
      <div className="flex gap-4">
        <Input
          variant="ghost"
          type="text"
          placeholder="Discount code"
          value={code}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onCodeChange(e.target.value)}
        />
        <Button variant="primary" size="medium" onClick={onApply}>
          Apply
        </Button>
      </div>
      {error ? <p className="mt-2 text-sm text-red-500">{error}</p> : null}
    </>
  );
};
