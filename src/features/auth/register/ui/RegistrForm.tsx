import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@/shared/ui";
import { registerSchema, type RegisterSchema } from "../model/registerSchema";

export const RegistrForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterSchema) => {
    console.log("Register data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-11">
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
        <Input
          variant="underline"
          {...register("password")}
          type="password"
          placeholder="Password"
          error={errors.password?.message}
        />
        <Input
          variant="underline"
          {...register("confirmPassword")}
          type="password"
          placeholder="Confirm Password"
          error={errors.confirmPassword?.message}
        />
      </div>

      <div className="flex flex-col items-center gap-6">
        <Button type="submit" size="widthFull">
          Create Account
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
