import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

interface UseEnumSearchParamOptions<TValue extends string> {
  paramName: string;
  fallback: TValue;
  isValid: (value: string) => value is TValue;
}

export const useEnumSearchParam = <TValue extends string>({
  paramName,
  fallback,
  isValid,
}: UseEnumSearchParamOptions<TValue>) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const rawValue = searchParams.get(paramName);
  const value = rawValue && isValid(rawValue) ? rawValue : fallback;

  const setValue = useCallback(
    (nextValue: TValue) => {
      const nextParams = new URLSearchParams(searchParams);
      nextParams.set(paramName, nextValue);
      setSearchParams(nextParams);
    },
    [paramName, searchParams, setSearchParams]
  );

  return {
    value,
    setValue,
  };
};
