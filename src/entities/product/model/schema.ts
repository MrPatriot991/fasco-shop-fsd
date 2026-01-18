import { z } from "zod";

export const rawProductSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  description: z.string(),
  category: z.string(),
  image: z.string().url(),
  rating: z
    .object({
      rate: z.number(),
      count: z.number(),
    })
    .optional(),
});

export const productSchema = rawProductSchema.extend({
  rating: z.object({
    rate: z.number(),
    count: z.number(),
  }),
  size: z.array(z.enum(["s", "m", "l", "xl"])).catch(["s", "m", "l"]),
  brand: z.string().catch("Generic Brand"),
});

export type RawProduct = z.infer<typeof rawProductSchema>;
export type Product = z.infer<typeof productSchema>;
