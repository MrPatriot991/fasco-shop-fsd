export const PATHS = {
  PROFILE: "/user",
  FAVORITES: "/star",
  CART: "/shopping",
};

export const AUTH_ACTIONS = [
  { to: PATHS.PROFILE, id: "profile" },
  { to: PATHS.FAVORITES, id: "favorites" },
  { to: PATHS.CART, id: "cart" },
] as const;
