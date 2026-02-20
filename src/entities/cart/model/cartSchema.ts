import { z } from "zod";
import { SIZES, MOCK_COLORS } from "@/shared/lib/constants";

export const cartItemSchema = z.object({
  id: z.string(),
  productId: z.number(),
  size: z.enum(SIZES),
  color: z.enum(MOCK_COLORS),
  quantity: z.number().min(1),
});
export type CartItem = z.infer<typeof cartItemSchema>;
