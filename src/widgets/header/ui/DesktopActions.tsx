import { NavLink, Link } from "react-router-dom";
import { selectIsAuthenticated } from "@/features/auth/model";
import { useAppSelector } from "@/shared/lib/hooks";
import { Button } from "@/shared/ui";
import { AUTH_ACTIONS } from "@/widgets/header/model";
import { ShoppingBag, Star, User } from "lucide-react";

const iconMap = {
  profile: User,
  favorites: Star,
  cart: ShoppingBag,
};

export const DesktopActions = () => {
  const isAuth = useAppSelector(selectIsAuthenticated);

  if (!isAuth) {
    return (
      <div className="hidden lg:flex items-center ml-auto mr-6 lg:mr-0 lg:ml-0 gap-6 lg:gap-8">
        <Button asChild variant="link" size="none">
          <NavLink to="/sign-in">Sign In</NavLink>
        </Button>
        <Button size="md-2" asChild>
          <NavLink to="sign-up">Sign Up</NavLink>
        </Button>
      </div>
    );
  }

  return (
    <div className="hidden lg:flex gap-4">
      {AUTH_ACTIONS.map(({ to, id }) => {
        const Icon = iconMap[id];

        return (
          <Button key={id} asChild size="icon" variant="ghost">
            <Link to={to}>
              <Icon />
            </Link>
          </Button>
        );
      })}
    </div>
  );
};
