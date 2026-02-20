import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import {
  forgotStep1Schema,
  type ForgotStep1Schema,
} from "@/features/auth/forgot-password/model/forgotPasswordSchema";

interface Props {
  onNext: (data: ForgotStep1Schema) => void;
}

export const Step1UserData = ({ onNext }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forgotStep1Schema),
  });

  return (
    <form onSubmit={handleSubmit(onNext)} className="flex flex-col gap-11">
      <h2 className="text-3xl font-volkhov">Forget Password</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          variant="underline"
          {...register("firstName")}
          type="text"
          placeholder="First Name"
          error={errors.firstName?.message}
        />
        <Input
          variant="underline"
          {...register("lastName")}
          type="text"
          placeholder="Last Name"
          error={errors.lastName?.message}
        />
        <Input
          variant="underline"
          {...register("email")}
          type="email"
          placeholder="Email Address"
          error={errors.email?.message}
        />
        <Input
          variant="underline"
          {...register("phone")}
          type="tel"
          placeholder="Phone Number"
          error={errors.phone?.message}
        />
      </div>

      <div className="flex flex-col items-center gap-6">
        <Button type="submit" size="widthFull">
          Send Confirmation Code
        </Button>
        <div className="flex items-center gap-4">
          <span className="whitespace-nowrap">Already have an account?</span>
          <Button asChild variant="link" size="none" className="text-brand-blue">
            <NavLink to="/sign-in">Login</NavLink>
          </Button>
        </div>
      </div>
    </form>
  );
};

