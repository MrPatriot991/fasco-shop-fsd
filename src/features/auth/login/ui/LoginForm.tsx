import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "@/shared/lib/hooks";
import { loginSchema, type LoginSchema } from "@/features/auth/login/model/loginSchema";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { setCredentials } from "../../model/authSlice";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (data: LoginSchema) => {
    console.log("Dfta sending", data);
    dispatch(setCredentials());
    navigate("/shop");
  };

  return (
    <form className="flex flex-col items-center gap-11" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col w-full gap-7">
        <Input
          variant="underline"
          type="email"
          aria-invalid={!!errors?.email}
          placeholder="Email"
          {...register("email")}
          error={errors.email?.message}
        />
        <Input
          variant="underline"
          type="password"
          aria-invalid={!!errors?.password}
          placeholder="Password"
          {...register("password")}
          error={errors.password?.message}
        />
      </div>
      <div className="flex flex-col w-full gap-5">
        <Button type="submit" size="widthFull">
          Sign In
        </Button>
        <Button asChild type="button" size="widthFull" variant="outlineBlue">
          <NavLink to="/sign-up">Register Now</NavLink>
        </Button>
        <Button asChild variant="link" size="none" className="self-end text-brand-blue">
          <NavLink to="/forgot-password">Forget Password?</NavLink>
        </Button>
      </div>
    </form>
  );
};

