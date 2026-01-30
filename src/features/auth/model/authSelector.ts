import type { AuthState } from "./authSlice";

export const selectIsAuthenticated = (state: { auth: AuthState }) => state.auth.isAuthenticated;
