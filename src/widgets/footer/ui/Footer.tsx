import { Container } from "@/shared/ui";
import { FOOTER_NAV } from "@/shared/config";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-brand-white py-10">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <div className="font-volkhov text-4xl text-brand-dark">FASCO</div>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-4 text-center text-sm sm:grid-cols-3 lg:mt-0 lg:ml-auto lg:flex">
              {FOOTER_NAV.map(({ label, path }, i) => (
                <li key={i} className="relative group">
                  <NavLink to={path} className="text-brand-dark">
                    {label}
                  </NavLink>
                  <span className="absolute left-0 border-b-2 border-brand-gray block w-full h-1 -translate-y-1/2 -translate-x-full opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"></span>
                </li>
              ))}
            </ul>
          </div>
          <div className=" pt-6 text-center text-sm text-brand-dark">
            Copyright © 2022 Xpro. All Rights Reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
};
