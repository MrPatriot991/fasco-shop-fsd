import { NavLink } from "react-router-dom";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Dropdown } from "@/shared/ui/dropdown";
import { useAppSelector } from "@/shared/lib/hooks";
import { LANDING_NAV, AUTH_NAV, FOOTER_NAV } from "@/shared/config";
import { selectIsAuthenticated } from "@/features/auth/model";

type NavListProps = {
  variant: "desktop" | "mobile";
  onItemClick?: () => void;
};

export const NavList = ({ variant, onItemClick }: NavListProps) => {
  const isAuth = useAppSelector(selectIsAuthenticated);
  const navItems = isAuth ? AUTH_NAV : LANDING_NAV;
  const isDesktop = variant === "desktop";

  return (
    <ul className={cn("flex", isDesktop ? "gap-6 lg:gap-12" : "flex-col gap-6")}>
      {navItems.map((item) => {
        if (item.path === "/pages") {
          return (
            <li key={item.path} className="flex items-center">
              <Dropdown
                label="Pages"
                items={FOOTER_NAV}
                dropdownClassName="w-56"
                portal={!isDesktop}
                onSelect={() => onItemClick?.()}
              />
            </li>
          );
        }

        return (
          <li key={item.path} className="py-1">
            {item.type === "route" ? (
              <NavLink
                to={item.path}
                onClick={onItemClick}
                className={({ isActive }) =>
                  cn(
                    "font-medium transition-colors",
                    isDesktop
                      ? isActive
                        ? "text-brand-black border-b-2 border-brand-black"
                        : "text-brand-gray hover:text-brand-black"
                      : isActive
                        ? "text-brand-dark border-l-4 pl-3"
                        : "text-brand-gray pl-4"
                  )
                }
              >
                {item.label}
              </NavLink>
            ) : (
              <Button asChild variant="link" size="none">
                <a href={item.path} onClick={onItemClick}>
                  {item.label}
                </a>
              </Button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

