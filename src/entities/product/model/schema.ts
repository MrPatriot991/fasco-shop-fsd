import { z } from "zod";
import { SIZES, COLLECTIONS, TAGS } from "@/shared/lib/constants";

export const rawProductSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  description: z.string(),
  category: z.string(),
  image: z.string(),
  isDiscount: z.boolean().optional(),
});

export const productSchema = rawProductSchema.extend({
  rating: z.object({
    rate: z.number(),
    count: z.number(),
  }),
  size: z.array(z.enum(SIZES)),
  brand: z.string(),
  colors: z.array(z.string()),
  collection: z.array(z.enum(COLLECTIONS)),
  tags: z.array(z.enum(TAGS)),
  isDiscount: z.boolean(),
  isSoldOut: z.boolean(),
  isAlmostSoldOut: z.boolean(),
});

export type RawProduct = z.infer<typeof rawProductSchema>;
export type Product = z.infer<typeof productSchema>;
