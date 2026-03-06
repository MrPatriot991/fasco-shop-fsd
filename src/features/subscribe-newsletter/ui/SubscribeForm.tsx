import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { subscribeSchema, type SubscribeSchema } from "@/features/subscribe-newsletter";

export const SubscribeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscribeSchema>({
    resolver: zodResolver(subscribeSchema),
  });

  const onSubmit = () => {
    console.log("Subscribe email");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-6">
      <div className="max-w-157.5 w-full">
        <Input
          variant="ghost"
          type="email"
          {...register("email")}
          placeholder="Enter your email"
          error={errors.email?.message}
        />
      </div>
      <Button>Subscribe Now</Button>
    </form>
  );
};
