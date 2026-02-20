import { NavLink, Link } from "react-router-dom";
import { ShoppingBag, Star, User } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { useAppSelector } from "@/shared/lib/hooks";
import { selectIsAuthenticated } from "@/features/auth/model";
import { selectCartItemCount } from "@/entities/cart";
import { AUTH_ACTIONS } from "@/widgets/header/model";

const iconMap = {
  profile: User,
  favorites: Star,
  cart: ShoppingBag,
};

export const DesktopActions = () => {
  const isAuth = useAppSelector(selectIsAuthenticated);
  const cartCount = useAppSelector(selectCartItemCount);

  if (!isAuth) {
    return (
      <div className="hidden lg:flex items-center ml-auto mr-6 lg:mr-0 lg:ml-0 gap-6 lg:gap-8">
        <Button asChild variant="link" size="none">
          <NavLink to="/sign-in">Sign In</NavLink>
        </Button>
        <Button size="medium" asChild>
          <NavLink to="sign-up">Sign Up</NavLink>
        </Button>
      </div>
    );
  }

  return (
    <div className="hidden lg:flex gap-4">
      {AUTH_ACTIONS.map(({ to, id }) => {
        const Icon = iconMap[id];
        const isCart = id === "cart";

        return (
          <Button key={id} asChild size="icon" variant="ghost" className="relative">
            <Link to={to}>
              <Icon />
              {isCart && cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm">
                  {cartCount > 9 ? "9+" : cartCount}
                </span>
              )}
            </Link>
          </Button>
        );
      })}
    </div>
  );
};

