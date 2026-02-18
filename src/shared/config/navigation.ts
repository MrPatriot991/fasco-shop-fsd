import { INFO_SECTIONS } from "@/entities/info";

type NavigationType = "anchor" | "route";

export type NavigationItem = {
  label: string;
  path: string;
  type: NavigationType;
  authRequired?: boolean;
};

export const LANDING_NAV: NavigationItem[] = [
  {
    label: "Home",
    path: "/",
    type: "route",
  },
  {
    label: "Deals",
    path: "/#deals",
    type: "anchor",
  },
  { label: "New Arrivals", path: "/#new-arrivals", type: "anchor" },
  {
    label: "Packages",
    path: "/#packages",
    type: "anchor",
  },
];

export const AUTH_NAV: NavigationItem[] = [
  { label: "Home", path: "/", type: "route" },
  { label: "Shop", path: "/shop", type: "route" },
  { label: "Pages", path: "/pages", type: "route" },
];

export const FOOTER_NAV = INFO_SECTIONS.map((s) => ({
  label: s.label,
  path: `/info?type=${s.id}`,
  type: "route",
}));
