export const PATHS = {
  PROFILE: "/profile",
  FAVORITES: "/wishlist",
  CART: "/cart",
  LOGOUT: "/",
};

export const AUTH_ACTIONS = [
  { to: PATHS.PROFILE, id: "profile" },
  { to: PATHS.FAVORITES, id: "favorites" },
  { to: PATHS.CART, id: "cart" },
  { to: PATHS.LOGOUT, id: "logout" },
] as const;
