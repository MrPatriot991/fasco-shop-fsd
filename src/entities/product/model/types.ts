import type { Category } from "@/shared/lib/constants";

export type Status = "idle" | "loading" | "success" | "error";

export interface ProductStatus {
  status: Status;
  error: string | null;
  currentCategory: Category;
}
