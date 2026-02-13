import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import { selectFilterState, resetFilters, setFilterValue } from "@/features/filter-products";
import type { Collection } from "@/shared/lib/constants";

export const useCatalogFilters = () => {
  const dispatch = useAppDispatch();
  const activeFilters = useAppSelector(selectFilterState);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(resetFilters());
  }, [dispatch]);

  useEffect(() => {
    const collection = searchParams.get("collection");
    if (collection) {
      dispatch(setFilterValue({ key: "collection", value: collection as Collection }));
    }
  }, [searchParams, dispatch]);

  return {
    activeFilters,
  };
};
