import { NavLink } from "react-router-dom";
import { LANDING_NAV } from "@/shared/config";
import { Button } from "@/shared/ui";

interface MobileMenuProps {
  onClose: () => void;
}

export const MobileMenu = ({ onClose }: MobileMenuProps) => {
  return (
    <div className="fixed inset-x-0 top-[97px] h-[calc(100dvh-97px)] lg:hidden bg-brand-white flex flex-col">
      <nav className="flex flex-col flex-1 overflow-y-auto p-4 gap-6 ">
        <ul className="flex flex-col gap-4">
          {LANDING_NAV.map((item) => (
            <li key={item.path} className="py-1 text-brand-dark">
              {item.type === "route" ? (
                <NavLink to={item.path} className="p-1" onClick={onClose}>
                  {item.label}
                </NavLink>
              ) : (
                <a href={item.path} className="p-1" onClick={onClose}>
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-4 mt-auto">
          <Button variant="outline">Sign In</Button>
          <Button>Sign Up</Button>
        </div>
      </nav>
    </div>
  );
};
