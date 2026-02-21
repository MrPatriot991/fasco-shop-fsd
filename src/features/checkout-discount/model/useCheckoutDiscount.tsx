import { useState } from "react";

const DISCOUNT_CODE = "FASCO20";
const DISCOUNT_VALUE = 20;

export const useCheckoutDiscount = () => {
  const [discountCode, setDiscountCode] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const [discountError, setDiscountError] = useState("");

  const applyDiscount = () => {
    const code = discountCode.trim().toUpperCase();

    if (!code) {
      setDiscountAmount(0);
      setDiscountError("Enter discount code");
      return;
    }

    if (code === DISCOUNT_CODE) {
      setDiscountAmount(DISCOUNT_VALUE);
      setDiscountError("");
      return;
    }

    setDiscountAmount(0);
    setDiscountError("Invalid discount code");
  };

  return {
    discountCode,
    discountAmount,
    discountError,
    setDiscountCode,
    applyDiscount,
  };
};
