export const PROFILE_SECTIONS = [
  { id: "orders", label: "Orders" },
  { id: "wishlist", label: "Wishlist" },
  { id: "settings", label: "Settings" },
  { id: "security", label: "Security" },
] as const;

export type ProfileSection = (typeof PROFILE_SECTIONS)[number]["id"];

export const PROFILE_SECTION_SET: ReadonlySet<ProfileSection> = new Set(
  PROFILE_SECTIONS.map((s) => s.id)
);

export const DEFAULT_PROFILE_SECTION: ProfileSection = "orders";

export const isProfileSection = (v: string): v is ProfileSection =>
  PROFILE_SECTION_SET.has(v as ProfileSection);
