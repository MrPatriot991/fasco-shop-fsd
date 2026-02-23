import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { DEFAULT_PROFILE_SECTION, isProfileSection, type ProfileSection } from "@/entities/profile";

const parseProfileSection = (value: string | null): ProfileSection => {
  if (!value) {
    return DEFAULT_PROFILE_SECTION;
  }

  return isProfileSection(value) ? value : DEFAULT_PROFILE_SECTION;
};

export const useProfileSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const section = parseProfileSection(searchParams.get("section"));

  const setProfileSection = useCallback(
    (nextSection: ProfileSection) => {
      const nextParams = new URLSearchParams(searchParams);
      nextParams.set("section", nextSection);
      setSearchParams(nextParams);
    },
    [searchParams, setSearchParams]
  );

  return {
    section,
    setProfileSection,
  };
};
