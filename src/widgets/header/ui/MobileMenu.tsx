import { Link } from "react-router-dom";
import { LANDING_NAV } from "@/shared/config";
import { Button } from "@/shared/ui";
// import { Button } from "@/shared/ui";

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
                <Link to={item.path} className="p-1" onClick={onClose}>
                  {item.label}
                </Link>
              ) : (
                <a href={item.path} className="p-1" onClick={onClose}>
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-4 mt-auto">
          <Button asChild>
            <Link to="/sign-in">Sign In</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="sign-up">Sign Up</Link>
          </Button>
        </div>
      </nav>
    </div>
  );
};
