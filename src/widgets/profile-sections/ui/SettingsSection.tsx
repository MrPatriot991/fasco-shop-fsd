import { Bell, MoonStar, Sun } from "lucide-react";
import { SectionTitle } from "@/shared/ui/section-title";

export const SettingsSection = () => {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8">
      <SectionTitle
        as="h2"
        align="left"
        variant="section"
        subContent={
          <p className="text-sm md:text-base">UI skeleton for future account preferences.</p>
        }
        classNameWrapper="gap-3"
      >
        Settings
      </SectionTitle>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between rounded-xl border border-neutral-200 p-4">
          <div className="flex items-center gap-3">
            <Sun size={18} />
            <span className="text-brand-dark">Theme</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-brand-gray">
            <MoonStar size={16} />
            <span>System</span>
          </div>
        </div>
        <div className="flex items-center justify-between rounded-xl border border-neutral-200 p-4 opacity-65">
          <div className="flex items-center gap-3">
            <Bell size={18} />
            <span className="text-brand-dark">Notifications</span>
          </div>
          <span className="text-sm text-brand-gray">Disabled</span>
        </div>
      </div>
    </div>
  );
};
