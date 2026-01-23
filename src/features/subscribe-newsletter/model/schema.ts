import { z } from "zod";

export const subscribeSchema = z.object({
  email: z.string().email("Please enter a valide email address"),
});

export type SubscribeSchema = z.infer<typeof subscribeSchema>;
