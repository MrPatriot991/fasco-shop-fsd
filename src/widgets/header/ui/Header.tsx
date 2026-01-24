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
                <li key={item.path} className="relative group">
                  {item.type === "route" ? (
                    <NavLink
                      to={item.path}
                      className="hover:text-brand-dark duration-300 transition-colors p-1"
                    >
                      {item.label}
                    </NavLink>
                  ) : (
                    <a
                      href={item.path}
                      className="hover:text-brand-dark duration-300 transition-colors p-1"
                    >
                      {item.label}
                    </a>
                  )}
                  <span className="absolute left-0 border-b-2 border-brand-gray block w-full h-1 -translate-y-1/2 -translate-x-full opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"></span>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center ml-auto mr-6 lg:mr-0 lg:ml-0 gap-6 lg:gap-8">
            <button className="hover:text-brand-dark duration-300 transition-colors cursor-pointer p-1">
              Sign In
            </button>
            <Button size="md-2">Sign Up</Button>
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
