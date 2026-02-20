import { Outlet, useLocation } from "react-router-dom";
import { Container } from "@/shared/ui/container";

import authIn from "@/shared/assets/images/auth-img.webp";
import authUp from "@/shared/assets/images/auth-up-img.webp";

export const AuthLayout = () => {
  const { pathname } = useLocation();

  const bgImg = pathname === "/sign-up" ? authUp : authIn;

  return (
    <div className="flex flex-col items-center lg:justify-center min-h-dvh py-10">
      <Container maxWidth="3xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:border lg:border-border-gray rounded-r-2xl">
          <div className="hidden lg:block w-full">
            <img src={bgImg} alt="FASCO Fashion" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-center sm:px-11 lg:px-20 lg:py-15 gap-8 md:gap-16">
            <div aria-label="Logo FASCO" className="font-volkhov text-5xl text-brand-dark mb-auto">
              FASCO
            </div>
            <Outlet />
          </div>
        </div>
      </Container>
    </div>
  );
};

