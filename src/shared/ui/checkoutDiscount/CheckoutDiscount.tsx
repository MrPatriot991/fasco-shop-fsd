import { useState } from "react";
import { Button } from "../button/Button";
import { Input } from "../input/Input";

interface CheckoutDiscountProps {
  onApply?: (code: string) => void;
}

export const CheckoutDiscount = ({ onApply }: CheckoutDiscountProps) => {
  const [code, setCode] = useState("");

  const handleApply = () => {
    if (code.trim()) {
      onApply?.(code.trim());
    }
  };

  return (
    <div className="flex gap-4">
      <Input
        variant="ghost"
        type="text"
        placeholder="Discount code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <Button variant="primary" size="medium" onClick={handleApply}>
        Apply
      </Button>
    </div>
  );
};
