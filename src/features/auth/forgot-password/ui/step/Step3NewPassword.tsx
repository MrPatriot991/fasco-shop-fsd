import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@/shared/ui";
import {
  forgotStep3Schema,
  type ForgotStep3Schema,
} from "@/features/auth/forgot-password/model/forgotPasswordSchema";

interface Props {
  onSubmit: (data: ForgotStep3Schema) => void;
}

export const Step3NewPassword = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forgotStep3Schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-11">
      <h2 className="text-3xl font-volkhov">Enter Your New Password</h2>

      <div>
        <Input
          type="password"
          {...register("password")}
          placeholder="New Password"
          error={errors.password?.message}
        />
        <Input
          type="password"
          {...register("confirmPassword")}
          placeholder="Confirmation Password"
          error={errors.confirmPassword?.message}
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};
