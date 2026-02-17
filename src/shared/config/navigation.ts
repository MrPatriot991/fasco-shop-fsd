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
  { label: "Support Center", path: "/info?type=support", type: "route" },
  { label: "Invoicing", path: "/info?type=invoicing", type: "route" },
  { label: "Contract", path: "/info?type=contract", type: "route" },
  { label: "Careers", path: "/info?type=careers", type: "route" },
  { label: "Blog", path: "/info?type=blog", type: "route" },
  { label: "FAQ", path: "/info?type=faq", type: "route" },
];
