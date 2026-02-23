import { useEnumSearchParam } from "@/shared/lib/hooks";
import { isInfoType, DEFAULT_INFO_TYPE, type InfoType } from "@/entities/info";

export const useInfoType = () => {
  const { value, setValue } = useEnumSearchParam<InfoType>({
    paramName: "type",
    fallback: DEFAULT_INFO_TYPE,
    isValid: isInfoType,
  });

  return {
    type: value,
    setInfoType: setValue,
  };
};
