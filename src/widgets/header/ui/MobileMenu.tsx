import { Link } from "react-router-dom";
import { User, Star, ShoppingBag } from "lucide-react";
import { useAppSelector, useLockBodyScroll } from "@/shared/lib/hooks";
import { selectIsAuthenticated } from "@/features/auth/model";
import { Button } from "@/shared/ui";
import { SearchInput } from "@/features/search";
import { NavList } from "./NavList";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ onClose, isOpen }: MobileMenuProps) => {
  const isAuth = useAppSelector(selectIsAuthenticated);

  useLockBodyScroll(isOpen);

  return (
    <div className="fixed inset-x-0 top-[97px] h-[calc(100dvh-97px)] lg:hidden bg-brand-white flex flex-col p-6">
      <div className="mb-8">
        <SearchInput variant="mobile" onClose={onClose} />
      </div>

      <nav className="flex-1 overflow-y-auto">
        <NavList variant="mobile" onItemClick={onClose} />
      </nav>

      <div className="mt-auto pt-6 border-t border-brand-surface">
        {isAuth ? (
          <div className="flex justify-between items-center bg-brand-surface/30 p-4 rounded-2xl">
            {/* User data on the left */}
            <Link to="/user" className="flex items-center gap-3" onClick={onClose}>
              <div className="w-12 h-12 bg-brand-dark rounded-full flex items-center justify-center text-white">
                <User size={24} />
              </div>
              <span className="font-medium text-lg">Profile</span>
            </Link>

            {/* Quick buttons on the right */}
            <div className="flex gap-2">
              <Button asChild size="icon" variant="ghost" className="relative">
                <Link to="/star" onClick={onClose}>
                  <Star size={28} />
                  <span className="absolute top-0 right-0 w-2 h-2 bg-brand-dark rounded-full" />
                </Link>
              </Button>
              <Button asChild size="icon" variant="ghost">
                <Link to="/shopping" onClick={onClose}>
                  <ShoppingBag size={28} />
                </Link>
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <Button asChild>
              <Link to="/sign-in" onClick={onClose}>
                Sign In
              </Link>
            </Button>
            <Button asChild variant="outlineBlue">
              <Link to="/sign-up" onClick={onClose}>
                Sign Up
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
