import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { sessionEstablished, sessionCleared } from "@/entities/session";
import { sessionStorageApi } from "@/entities/session/lib/storage";

export const sessionListener = createListenerMiddleware();

sessionListener.startListening({
  matcher: isAnyOf(sessionEstablished, sessionCleared),
  effect: async (action) => {
    if (sessionEstablished.match(action)) {
      sessionStorageApi.write(action.payload);
      return;
    }

    if (sessionCleared.match(action)) {
      sessionStorageApi.clear();
    }
  },
});
