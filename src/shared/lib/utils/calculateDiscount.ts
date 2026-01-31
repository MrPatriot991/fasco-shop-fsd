export const calculateDiscount = (price: number, discount?: number) => {
  if (!discount || discount <= 0) return price;

  const finalPrice = price * (1 - discount / 100);
  return Math.round(finalPrice);
};
