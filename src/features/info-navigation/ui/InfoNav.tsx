import { INFO_NAV_ITEMS } from "@/entities/info";
import { cn } from "@/shared/lib/utils";
import { useInfoType } from "@/features/info-navigation/model";

interface InfoNavProps {
  className?: string;
}

export const InfoNav = ({ className }: InfoNavProps) => {
  const { type, handleNav } = useInfoType();

  return (
    <nav aria-label="Info navigation" className={cn("flex flex-col gap-1", className)}>
      {INFO_NAV_ITEMS.map((item) => {
        const itemType = item.path.replace(/^\//, "");
        const isActive = type === itemType;
        const Icon = item.icon;

        return (
          <button
            key={item.path}
            onClick={() => handleNav(item.path)}
            className={cn(
              "flex items-center gap-3 rounded-xl px-4 py-2.5 text-left text-sm font-medium transition-all duration-150",
              isActive
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                : "text-slate-600 hover:bg-white hover:text-slate-900 hover:shadow-sm"
            )}
          >
            <Icon size={16} className={isActive ? "text-indigo-200" : "text-slate-400"} />
            {item.label}
            {isActive ? <span className="ml-auto h-1.5 w-1.5 rounded-full bg-indigo-300" /> : null}
          </button>
        );
      })}
    </nav>
  );
};
