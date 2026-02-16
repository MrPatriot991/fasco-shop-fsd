export const COUNTRIES = ["US", "UA", "DE", "UK"] as const;
export const CARDS = ["Mastercard", "Visa", "Amex", "Discover"] as const;

export type Country = (typeof COUNTRIES)[number];
export type Cards = (typeof CARDS)[number];
