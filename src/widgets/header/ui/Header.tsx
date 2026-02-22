import { lazy, Suspense, useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { useAppSelector } from "@/shared/lib/hooks";
import { selectIsAuthenticated } from "@/features/auth/model";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";
import { DesktopNav } from "./DesktopNav";
import { DesktopActions } from "./DesktopActions";

const MobileMenu = lazy(() =>
  import("./MobileMenu").then((module) => ({
    default: module.MobileMenu,
  }))
);

const SearchInput = lazy(() =>
  import("@/features/search/ui/SearchInput").then((module) => ({
    default: module.SearchInput,
  }))
);

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const isAuth = useAppSelector(selectIsAuthenticated);

  const handleClose = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-white/80 backdrop-blur-md border-b border-brand-surface">
      <Container>
        <div className="flex justify-between items-center py-6">
          <div className="font-volkhov text-5xl text-brand-dark">FASCO</div>

          <div
            className={cn(
              "flex items-center flex-1",
              isSearchOpen ? "justify-end" : "justify-center"
            )}
          >
            {isSearchOpen ? (
              <Suspense fallback={<div className="h-10 w-full max-w-md" />}>
                <SearchInput onClose={() => setIsSearchOpen(false)} />
              </Suspense>
            ) : (
              <DesktopNav />
            )}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {isAuth && (
              <Button size="icon" variant="ghost" onClick={() => setIsSearchOpen(true)}>
                <Search />
              </Button>
            )}
            <DesktopActions />
          </div>

          {/* Mobile/Tablet Controls: Burger Button */}
          <Button
            variant="ghost"
            size="none"
            className="lg:hidden p-2 text-brand-dark cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </Button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <Suspense fallback={null}>
            <MobileMenu onClose={handleClose} isOpen={isOpen} />
          </Suspense>
        )}
      </Container>
    </header>
  );
};
