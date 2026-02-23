import { useEnumSearchParam } from "@/shared/lib/hooks";
import { DEFAULT_PROFILE_SECTION, isProfileSection, type ProfileSection } from "@/entities/profile";

export const useProfileSection = () => {
  const { value, setValue } = useEnumSearchParam<ProfileSection>({
    paramName: "section",
    fallback: DEFAULT_PROFILE_SECTION,
    isValid: isProfileSection,
  });

  return {
    section: value,
    setProfileSection: setValue,
  };
};
