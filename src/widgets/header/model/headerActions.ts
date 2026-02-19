export const PATHS = {
  PROFILE: "/user",
  FAVORITES: "/wishlist",
  CART: "/cart",
};

export const AUTH_ACTIONS = [
  { to: PATHS.PROFILE, id: "profile" },
  { to: PATHS.FAVORITES, id: "favorites" },
  { to: PATHS.CART, id: "cart" },
] as const;
