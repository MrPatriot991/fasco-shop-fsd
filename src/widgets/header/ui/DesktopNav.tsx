import { useAppSelector } from "@/shared/lib/hooks";
import { selectIsAuthenticated } from "@/features/auth/model";
import { cn } from "@/shared/lib/utils";
import { NavList } from "./NavList";

export const DesktopNav = () => {
  const isAuth = useAppSelector(selectIsAuthenticated);

  return (
    <nav className={cn("hidden lg:flex mr-10", isAuth ? "ml-0" : "ml-auto")}>
      <NavList variant="desktop" />
    </nav>
  );
};
