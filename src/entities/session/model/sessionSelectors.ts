import type { RootState } from "@/app/providers/StoreProvider";

export const selectSessionState = (state: RootState) => state.session;
export const selectSession = (state: RootState) => state.session.session;
export const selectIsAuthenticated = (state: RootState) => state.session.isAuthenticated;
