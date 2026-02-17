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

export const FOOTER_NAV: NavigationItem[] = [
  { label: "Support Center", path: "/support", type: "route" },
  { label: "Invoicing", path: "/invoicing", type: "route" },
  { label: "Contract", path: "/contract", type: "route" },
  { label: "Careers", path: "/careers", type: "route" },
  { label: "Blog", path: "/blog", type: "route" },
  { label: "FAQ", path: "/faq", type: "route" },
];
