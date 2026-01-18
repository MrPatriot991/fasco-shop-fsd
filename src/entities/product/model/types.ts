type Status = "idle" | "loading" | "success" | "error";

export interface ProductStatus {
  status: Status;
  error: string | null;
}
