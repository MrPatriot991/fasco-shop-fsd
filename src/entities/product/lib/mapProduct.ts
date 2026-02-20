import { SIZES, MOCK_BRANDS, MOCK_COLORS, COLLECTIONS, TAGS } from "@/shared/lib/constants";
import type { Product, RawProduct } from "@/entities/product/model/productSchema";

export const mapProduct = (item: RawProduct & Partial<Product>): Product => {
  const seed = item.id;
  const getStable = <T>(arr: readonly T[], index: number): T => arr[index % arr.length];

  const hasDiscount = item.isDiscount ?? seed % 3 === 0;

  return {
    ...item,
    brand: item.brand ?? getStable(MOCK_BRANDS, seed),
    colors: item.colors ?? [getStable(MOCK_COLORS, seed), getStable(MOCK_COLORS, seed + 1)],
    sizes: item.sizes ?? SIZES.slice(0, (seed % 3) + 1),
    collection: item.collection ?? [getStable(COLLECTIONS, seed)],
    rating: item.rating ?? {
      rate: parseFloat((3 + (seed % 21) / 10).toFixed(1)),
      count: 10 + ((seed * 7) % 200),
    },
    tags: item.tags ?? [getStable(TAGS, seed)],
    isDiscount: hasDiscount,
    salePercent: hasDiscount ? 10 + Math.floor(Math.random() * 41) : 0,
    isSoldOut: item.isSoldOut ?? seed % 10 === 0,
    isAlmostSoldOut: item.isAlmostSoldOut ?? seed % 7 === 0,
  };
};
