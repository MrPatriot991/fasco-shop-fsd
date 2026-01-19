export type NavigationItem = {
  label: string;
  path: string;
};

export const navigation: NavigationItem[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Deals",
    path: "/deals",
  },
  { label: "New Arrivals", path: "/new-arrivals" },
  {
    label: "Packages",
    path: "/Packages",
  },
];
