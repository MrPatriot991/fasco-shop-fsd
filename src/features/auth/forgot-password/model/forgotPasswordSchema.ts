import { z } from "zod";
import {
  passwordRule,
  emailRule,
  firstNameRule,
  lastNameRule,
  phoneRule,
} from "@/shared/lib/validation";

// Step 1
export const forgotStep1Schema = z.object({
  firstName: firstNameRule,
  lastName: lastNameRule,
  email: emailRule,
  phone: phoneRule,
});

// Step 2
export const forgotStep2Schema = z.object({
  code: z.string().min(6, "The code must be 6 digits"),
});

// Step 3
export const forgotStep3Schema = z
  .object({
    password: passwordRule,
    confirmPassword: passwordRule,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ["confirmPassword"],
  });

export type ForgotStep1Schema = z.infer<typeof forgotStep1Schema>;
export type ForgotStep2Schema = z.infer<typeof forgotStep2Schema>;
export type ForgotStep3Schema = z.infer<typeof forgotStep3Schema>;
