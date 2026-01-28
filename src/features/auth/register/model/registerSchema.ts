import { z } from "zod";
import {
  emailRule,
  firstNameRule,
  lastNameRule,
  passwordRule,
  phoneRule,
} from "@/shared/lib/validation";

export const registerSchema = z
  .object({
    firstName: firstNameRule,
    lastName: lastNameRule,
    email: emailRule,
    phone: phoneRule,
    password: passwordRule,
    confirmPassword: passwordRule,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ["confirmPassword"],
  });

export type RegisterSchema = z.infer<typeof registerSchema>;
