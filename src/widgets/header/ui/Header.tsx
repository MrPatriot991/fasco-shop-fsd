import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button, Container } from "@/shared/ui";
import { navigation } from "@/shared/config";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const scrollY = window.scrollY;

    document.documentElement.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";

      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-white/80 backdrop-blur-md border-b border-brand-surface">
      <Container>
        <div className="flex justify-between items-center py-6">
          <div className="font-volkhov text-5xl text-brand-dark">FASCO</div>

          {/* Desctop Navigation */}
          <nav className="hidden lg:flex ml-auto mr-10">
            <ul className="flex gap-6 lg:gap-12 ">
              {navigation.map((item) => (
                <li key={item.path}>
                  <a href="" className="hover:text-brand-dark duration-300 transition-colors p-1">
                    {item.label}
                  </a>
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
        {isOpen && (
          <div className="fixed inset-x-0 top-[97px] h-[calc(100dvh-97px)] lg:hidden bg-brand-white flex flex-col">
            <nav className="flex flex-col flex-1 overflow-y-auto p-4 gap-6 ">
              <ul className="flex flex-col gap-6">
                {navigation.map((item) => (
                  <li key={item.path}>
                    <a href={item.path} className="text-2xl font-semibold">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              {/* <hr className="border-brand-surface" /> */}
              <div className="flex flex-col gap-4 mt-auto">
                <Button variant="outline">Sign In</Button>
                <Button>Sign Up</Button>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};
