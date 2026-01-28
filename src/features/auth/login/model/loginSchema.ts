import { z } from "zod";
import { passwordRule, emailRule } from "@/shared/lib/validation";

export const loginSchema = z.object({
  email: emailRule,
  password: passwordRule,
});

export type LoginSchema = z.infer<typeof loginSchema>;
