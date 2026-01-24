export type Status = "idle" | "loading" | "success" | "error";
export type Category = "women's clothing" | "men's clothing" | "jewelery" | "electronics" | "all";

export interface ProductStatus {
  status: Status;
  error: string | null;
  currentCategory: Category;
}
