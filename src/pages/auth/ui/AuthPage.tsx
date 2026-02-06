import { useLocation } from "react-router-dom";
import { Button } from "@/shared/ui";
import { LoginForm } from "@/features/auth/login";
import { RegistrForm } from "@/features/auth/register";
import { ForgotPasswordForm } from "@/features/auth/forgot-password";
import { GoogleIcon } from "@/shared/ui/icons/GoogleIcon";
import { GmailIcon } from "@/shared/ui/icons/GmailIcon";

export const AuthPage = () => {
  const { pathname } = useLocation();

  const isSignIn = pathname === "/sign-in";
  const isSignUp = pathname === "/sign-up";
  const isForgot = pathname === "/forgot-password";

  const title = isSignUp ? "Create Account" : "Sign In To FASCO";

  return (
    <>
      <div className="flex flex-col  w-full gap-9">
        {!isForgot && (
          <>
            <h2 className="text-3xl self-start font-volkhov ">{title}</h2>
            <div className="flex flex-col items-center justify-center gap-8 md:gap-16">
              <div className="flex items-center flex-wrap  w-full gap-4">
                <Button variant="outlineBlue">
                  <GoogleIcon /> Sign up with Google
                </Button>
                <Button variant="outlineBlue">
                  <GmailIcon /> Sign up with Email
                </Button>
              </div>
              <div className="flex items-center w-1/3 font-bold text-center text-brand-gray gap-3">
                <hr className="flex-1 " />
                <span className="text-3xl">OR</span>
                <hr className="flex-1" />
              </div>
            </div>
          </>
        )}
      </div>

      {isSignIn && <LoginForm />}
      {isSignUp && <RegistrForm />}
      {isForgot && <ForgotPasswordForm />}
    </>
  );
};
