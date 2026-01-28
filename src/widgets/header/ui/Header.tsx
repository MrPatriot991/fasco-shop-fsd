import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button, Container } from "@/shared/ui";
import { LANDING_NAV } from "@/shared/config";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-white/80 backdrop-blur-md border-b border-brand-surface">
      <Container>
        <div className="flex justify-between items-center py-6">
          <div className="font-volkhov text-5xl text-brand-dark">FASCO</div>

          {/* Desctop Navigation */}
          <nav className="hidden lg:flex ml-auto mr-10">
            <ul className="flex gap-6 lg:gap-12 ">
              {LANDING_NAV.map((item) => (
                <li key={item.path}>
                  {item.type === "route" ? (
                    <NavLink to={item.path}>
                      {({ isActive }) => (
                        <Button
                          asChild
                          variant="link"
                          size="none"
                          className={
                            isActive ? "text-brand-black after:scale-x-100 after:origin-left" : ""
                          }
                        >
                          <span>{item.label}</span>
                        </Button>
                      )}
                    </NavLink>
                  ) : (
                    <Button asChild variant="link" size="none">
                      <a href={item.path}>{item.label}</a>
                    </Button>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center ml-auto mr-6 lg:mr-0 lg:ml-0 gap-6 lg:gap-8">
            <Button asChild variant="link" size="none">
              <NavLink to="/sign-in">Sign In</NavLink>
            </Button>
            <Button size="md-2" asChild>
              <NavLink to="sign-up">Sign Up</NavLink>
            </Button>
          </div>

          {/* Mobile/Tablet Controls: Burger Button */}
          <button
            className="lg:hidden p-2 text-brand-dark cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && <MobileMenu onClose={handleClose} />}
      </Container>
    </header>
  );
};
