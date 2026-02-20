import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

import {
  forgotStep2Schema,
  type ForgotStep2Schema,
} from "@/features/auth/forgot-password/model/forgotPasswordSchema";

interface Props {
  onNext: (data: ForgotStep2Schema) => void;
}

export const Step2VerifyCode = ({ onNext }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forgotStep2Schema),
  });

  return (
    <form onSubmit={handleSubmit(onNext)} className="flex flex-col gap-11">
      <div>
        <h2 className="text-3xl font-volkhov">Enter The Confirmation Code</h2>
      </div>
      <Input
        variant="underline"
        {...register("code")}
        type="text"
        inputMode="numeric"
        autoComplete="one-time-code"
        placeholder="Confirmation Code 000000"
        error={errors.code?.message}
      />
      <div className="flex flex-col items-center gap-6">
        <Button type="submit" size="widthFull">
          Recover Account
        </Button>
        <div className="flex items-center gap-4">
          <span className="whitespace-nowrap">Didn’t receive Confirmation Code?</span>
          <Button asChild variant="link" size="none" className="text-brand-blue">
            <NavLink to="">Resend Now</NavLink>
          </Button>
        </div>
      </div>
    </form>
  );
};

