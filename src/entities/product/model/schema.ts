import { z } from "zod";

export const productSchema = z.object({
  id: z.number(),
  title: z.string().min(1),
  price: z.number().positive(),
  description: z.string(),
  category: z.string(),
  image: z.string().url(),
  size: z.array(z.enum(["s", "m", "l", "xl"])).catch(["s", "m", "l"]),
  brand: z.string().catch("Generic Brand"),
});

export type Product = z.infer<typeof productSchema>;
