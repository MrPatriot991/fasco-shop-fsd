import type { RawProduct } from "../model/schema";

export const mapProduct = (item: RawProduct) => {
  const generatedSize = ["s", "m", "l", "xl"].filter(() => Math.random() > 0.5);
  const finalSize = generatedSize.length > 0 ? generatedSize : ["m"];

  const brand = ["FASCO", "Zara", "Gucci", "Nike"];
  const randomBrand = brand[Math.floor(Math.random() * brand.length)];

  return {
    ...item,
    rating: item.rating || {
      rate: parseFloat((Math.random() * (5 - 3) + 3).toFixed(1)),
      count: Math.floor(Math.random() * 200) + 1,
    },
    size: finalSize,
    brand: randomBrand,
  };
};
