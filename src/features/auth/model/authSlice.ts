import { createSlice } from "@reduxjs/toolkit";

const loadAuthfromLS = (): boolean => {
  return localStorage.getItem("auth") === "true";
};
export interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: loadAuthfromLS(),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state) => {
      state.isAuthenticated = true;
      localStorage.setItem("auth", String(state.isAuthenticated));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.setItem("auth", String(state.isAuthenticated));
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
