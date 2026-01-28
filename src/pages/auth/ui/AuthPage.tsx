import { useLocation } from "react-router-dom";
import { Button } from "@/shared/ui";
import { LoginForm } from "@/features/auth/login/ui/LoginForm";
import { GoogleIcon } from "@/shared/ui/icons/GoogleIcon";
import { GmailIcon } from "@/shared/ui/icons/GmailIcon";

export const AuthPage = () => {
  const { pathname } = useLocation();

  const isSignIn = pathname === "/sign-in";
  const isSignUp = pathname === "/sign-up";
  const isForgot = pathname === "/forgot-password";

  const title = isForgot ? "Forget Password" : isSignUp ? "Create Account" : "Sign In To FASCO";

  return (
    <div className="flex flex-col justify-center sm:px-11 lg:px-20 lg:py-15  gap-10 lg:gap-16">
      <div className="font-volkhov text-5xl text-brand-dark mb-auto">FASCO</div>

      <div className="flex flex-col  w-full gap-6">
        <h2 className="text-3xl self-start font-volkhov ">{title}</h2>
        <div className="flex items-center flex-wrap  w-full gap-4">
          <Button variant="outline">
            <GoogleIcon /> Sign up with Google
          </Button>
          <Button variant="outline">
            <GmailIcon /> Sign up with Email
          </Button>
        </div>
      </div>

      <div className="flex w-full justify-center">
        <div className="flex items-center w-1/3 font-bold text-center text-brand-gray gap-3">
          <hr className="flex-1" />
          <span className="text-3xl ">OR</span>
          <hr className="flex-1" />
        </div>
      </div>

      {isSignIn && <LoginForm />}
    </div>
  );
};
