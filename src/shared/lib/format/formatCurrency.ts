const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const formatCurrency = (price: number) => {
  return formatter.format(price);
};
