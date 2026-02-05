export const COLOR_MAP = {
  Red: "#FF6C6C",
  Orange: "#FF7629",
  Black: "#000000",
  White: "#FFFFFF",
  Yellow: "#FFF06C",
  Purple: "#9D55FF",
  Blue: "#55ADFF",
  Green: "#55FF89",
} as const;

export const SIZES = ["s", "m", "l", "xl"] as const;
export const MOCK_COLORS = Object.keys(COLOR_MAP) as Array<keyof typeof COLOR_MAP>;
export const MOCK_BRANDS = ["FASCO", "Zara", "Gucci", "Nike", "Prada"] as const;
export const COLLECTIONS = ["All products", "best-sellers", "new-arrivals", "accessories"] as const;
export const CATEGORY = [
  "all",
  "men's clothing",
  "women's clothing",
  "jewelery",
  "electronics",
  "discount-deals",
] as const;

export const TAGS = [
  "Fashion",
  "Hats",
  "Sandal",
  "Belt",
  "Bags",
  "Snacker",
  "Denim",
  "Minimog",
  "Vagabond",
  "Sunglasses",
  "Beachwear",
] as const;

export type Tags = (typeof TAGS)[number];
export type Sizes = (typeof SIZES)[number];
export type Color = (typeof MOCK_COLORS)[number];
export type Brand = (typeof MOCK_BRANDS)[number];
export type Collection = (typeof COLLECTIONS)[number];
export type Category = (typeof CATEGORY)[number];
