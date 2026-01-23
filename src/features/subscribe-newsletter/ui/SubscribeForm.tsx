import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { subscribeSchema, type SubscribeSchema } from "../model/schema";
import { Button } from "@/shared/ui";

export const SubscribeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscribeSchema>({
    resolver: zodResolver(subscribeSchema),
  });

  const onSubmit = (data: SubscribeSchema) => {
    console.log("Subscribe email:", data.email);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-6">
      <div className="max-w-[630px] w-full p-2">
        <input
          type="email"
          {...register("email")}
          placeholder="Enter your email"
          className="p-6 shadow-around w-full rounded-xl"
        />
        {errors.email && <p className="mt-2 text-xs text-accent-red">{errors.email.message}</p>}
      </div>
      <Button>Subscribe Now</Button>
    </form>
  );
};
