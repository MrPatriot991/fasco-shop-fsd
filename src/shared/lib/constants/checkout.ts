export const CARDS = [
  { label: "Mastercard", value: "mastercard" },
  { label: "Visa", value: "visa" },
  { label: "Amex", value: "amex" },
  { label: "Discover", value: "discover" },
] as const;

export const COUNTRIES = [
  { label: "United States", value: "us" },
  { label: "Ukraine", value: "ua" },
  { label: "Germany", value: "de" },
  { label: "United Kingdom", value: "uk" },
] as const;

export type CountryType = (typeof COUNTRIES)[number]["value"];
export type CardType = (typeof CARDS)[number]["value"];
