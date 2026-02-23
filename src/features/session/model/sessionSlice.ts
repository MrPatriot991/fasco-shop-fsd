import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { sessionStorageApi } from "../lib/storage";
import type { DemoSession } from "../lib/storage";

export interface SessionState {
  isAuthenticated: boolean;
  session: DemoSession | null;
}

const boot = sessionStorageApi.read();

const initialState: SessionState = {
  isAuthenticated: !!boot,
  session: boot,
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    sessionEstablished: {
      reducer: (state, action: PayloadAction<DemoSession>) => {
        state.session = action.payload;
        state.isAuthenticated = true;
      },
      prepare: (email: string) => {
        const issuedAt = Date.now();
        return {
          payload: {
            mode: "demo" as const,
            email,
            issuedAt,
            expiresAt: issuedAt + 60 * 60_000,
          },
        };
      },
    },
    sessionCleared: (state) => {
      state.session = null;
      state.isAuthenticated = false;
    },
  },
});

export const { sessionEstablished, sessionCleared } = sessionSlice.actions;
export default sessionSlice.reducer;
