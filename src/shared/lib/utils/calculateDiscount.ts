interface DiscountResult {
  currentPrice: number;
  oldPrice: number;
  percent: number;
  savings: number;
  hasDiscount: boolean;
}

export const getDiscountData = (price: number, discount?: number): DiscountResult => {
  const hasDiscount = !!(discount && discount > 0);

  if (!hasDiscount) {
    return {
      currentPrice: price,
      oldPrice: price,
      percent: 0,
      savings: 0,
      hasDiscount: false,
    };
  }

  const savings = (price * (discount || 0)) / 100;
  const currentPrice = price - savings;

  return {
    currentPrice: Math.round(currentPrice),
    oldPrice: price,
    percent: discount || 0,
    savings: Math.round(savings),
    hasDiscount: true,
  };
};
