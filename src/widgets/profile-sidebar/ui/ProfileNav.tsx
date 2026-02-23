import { PROFILE_SECTIONS } from "@/entities/profile";
import { useProfileSection } from "@/features/profile-navigation";
import { Button } from "@/shared/ui/button";
import { PROFILE_ICON_MAP } from "./iconMap";

interface ProfileNavProps {
  className?: string;
}

export const ProfileNav = ({ className }: ProfileNavProps) => {
  const { section, setProfileSection } = useProfileSection();

  return (
    <nav className={className} aria-label="Profile navigation">
      <ul className="space-y-1">
        {PROFILE_SECTIONS.map((item) => {
          const Icon = PROFILE_ICON_MAP[item.id];
          const isActive = section === item.id;

          return (
            <li key={item.id}>
              <Button
                variant={isActive ? "active" : "ghost"}
                className="w-full justify-start rounded-lg px-3 py-2.5"
                onClick={() => setProfileSection(item.id)}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </Button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
