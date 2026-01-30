import { NavLink } from "react-router-dom";
import { useAppSelector } from "@/shared/lib/hooks";
import { selectIsAuthenticated } from "@/features/auth/model";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui";
import { LANDING_NAV, AUTH_NAV } from "@/shared/config";

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
      {navItems.map((item) => (
        <li key={item.path} className="py-1">
          {item.type === "route" ? (
            <NavLink to={item.path} onClick={onItemClick}>
              {({ isActive }) => (
                <Button
                  asChild
                  variant="link"
                  size="none"
                  className={
                    isDesktop
                      ? isActive
                        ? "text-brand-black after:scale-x-100 after:origin-left"
                        : ""
                      : isActive
                        ? "text-brand-dark border-l-4 border-brand-dark px-3 bg-surface-muted/50"
                        : "text-brand-dark/60 pl-4"
                  }
                >
                  <span>{item.label}</span>
                </Button>
              )}
            </NavLink>
          ) : (
            <Button asChild variant="link" size="none">
              <a href={item.path} onClick={onItemClick}>
                {item.label}
              </a>
            </Button>
          )}
        </li>
      ))}
    </ul>
  );
};
