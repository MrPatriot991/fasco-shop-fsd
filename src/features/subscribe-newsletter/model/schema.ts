import { z } from "zod";
import { emailRule } from "@/shared/lib/validation";

export const subscribeSchema = z.object({
  email: emailRule,
});

export type SubscribeSchema = z.infer<typeof subscribeSchema>;
