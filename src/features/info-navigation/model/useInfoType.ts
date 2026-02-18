import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { isInfoType, DEFAULT_INFO_TYPE, type InfoType } from "@/entities/info";

const parseInfoType = (value: string | null): InfoType => {
  if (!value) {
    return DEFAULT_INFO_TYPE;
  }

  return isInfoType(value) ? value : DEFAULT_INFO_TYPE;
};

export const useInfoType = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const type = parseInfoType(searchParams.get("type"));

  const setInfoType = useCallback(
    (nextType: InfoType) => {
      const nextParams = new URLSearchParams(searchParams);
      nextParams.set("type", nextType);
      setSearchParams(nextParams);
    },
    [searchParams, setSearchParams]
  );

  const handleNav = useCallback(
    (path: string) => {
      const nextType = path.replace(/^\//, "");
      if (!isInfoType(nextType)) {
        setInfoType(DEFAULT_INFO_TYPE);
        return;
      }
      setInfoType(nextType);
    },
    [setInfoType]
  );

  return {
    type,
    setInfoType,
    handleNav,
  };
};
