import { z } from "zod";

export const passwordSchema = z
  .string()
  .min(8, "The password is too short (minimum 8 characters)")
  .max(64, "The password is too long")
  .refine((val) => /[0-9]/.test(val), {
    message: "The password must contain at least one number.",
  })
  .refine((val) => /[A-Z]/.test(val), {
    message: "At least one capital letter is required",
  })
  .refine((val) => /[!@#$%^&*]/.test(val), {
    message: "Add a special character (!@#$%^&*)",
  });

export const loginSchema = z.object({
  email: z.string().email("Please enter a valide email address"),
  password: passwordSchema,
});

export type LoginSchema = z.infer<typeof loginSchema>;
