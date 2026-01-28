import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginSchema } from "@/features/auth/login/model/loginSchema";
import { Button, Input } from "@/shared/ui";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginSchema) => {
    console.log("Dfta sending", data);
  };

  return (
    <form className="flex flex-col items-center gap-11" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col w-full gap-7">
        <Input
          type="email"
          aria-invalid={!!errors?.email}
          placeholder="Email"
          {...register("email")}
          error={errors.email?.message}
        />
        <Input
          type="password"
          aria-invalid={!!errors?.password}
          placeholder="Password"
          {...register("password")}
          error={errors.password?.message}
        />
      </div>
      <div className="flex flex-col items-center max-w-[575px] w-full gap-5">
        <Button type="submit" size="xl-2">
          Sign In
        </Button>
        <Button asChild type="button" size="xl-2" variant="outline">
          <NavLink to="/sign-up">Register Now</NavLink>
        </Button>
        <Button asChild variant="link" size="none" className="self-end text-brand-blue">
          <NavLink to="/forgot-password">Forget Password?</NavLink>
        </Button>
      </div>
    </form>
  );
};
