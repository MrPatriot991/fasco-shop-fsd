import { z } from "zod";
import { CARDS, COUNTRIES } from "@/shared/lib/constants";
import { emailRule, firstNameRule, lastNameRule } from "@/shared/lib/validation";

export const checkoutSchema = z.object({
  email: emailRule,
  country: z.enum(COUNTRIES, { message: "Please select a valid countr" }),
  firstName: firstNameRule,
  lastName: lastNameRule,
  address: z.string().min(2, "Required field"),
  city: z.string().min(2, "Required field"),
  postCode: z.string().min(2, "Required field"),
  card: z.enum(CARDS, { message: "Please select a valid card" }),
  cardNumber: z
    .string()
    .transform((val) => val.replace(/\s/g, ""))
    .refine((val) => /^\d{16}$/.test(val), { message: "Card number must be 16 digits" }),
  expiryDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Format must be MM/YY")
    .refine((val) => {
      const [month, year] = val.split("/").map(Number);

      const expiryDate = new Date(2000 + year, month, 0);

      const now = new Date();
      const currentMonth = new Date(now.getFullYear(), now.getMonth());

      return expiryDate >= currentMonth;
    }, "Card has expired"),
  cvv: z.string().regex(/\d{3}$/, "CVV must be 3 digits"),
  cardHoldName: z.string().min(2, "Please enter your name"),
});

export type CheckoutSchema = z.infer<typeof checkoutSchema>;
