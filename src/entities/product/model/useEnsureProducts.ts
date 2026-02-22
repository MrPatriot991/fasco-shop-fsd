import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import { fetchProducts } from "./productThunks";
import { selectProductStatus } from "./productSelectors";

export const useEnsureProducts = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectProductStatus);

  useEffect(() => {
    if (status === "idle" || status === "error") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  return { status };
};
