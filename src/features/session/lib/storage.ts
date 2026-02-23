import { z } from "zod";
import { emailRule } from "@/shared/lib/validation";

const STORAGE_KEY = "fasco.session";
const storage: Storage = sessionStorage;

export const demoSessionSchema = z.object({
  mode: z.literal("demo"),
  email: emailRule,
  issuedAt: z.number().int().nonnegative(),
  expiresAt: z.number().int().nonnegative(),
});

export type DemoSession = z.infer<typeof demoSessionSchema>;

export const sessionStorageApi = {
  read(): DemoSession | null {
    const raw = storage.getItem(STORAGE_KEY);
    if (!raw) return null;

    try {
      const parsed = JSON.parse(raw);
      const session = demoSessionSchema.parse(parsed);

      if (Date.now() > session.expiresAt) {
        storage.removeItem(STORAGE_KEY);
        return null;
      }

      return session;
    } catch {
      storage.removeItem(STORAGE_KEY);
      return null;
    }
  },
  write(session: DemoSession) {
    storage.setItem(STORAGE_KEY, JSON.stringify(session));
  },
  clear() {
    storage.removeItem(STORAGE_KEY);
  },
};
