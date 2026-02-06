import { useTimer } from "@/shared/lib/hooks";
import { cn } from "@/shared/lib/utils";

interface TimerDisplayProp {
  targetDate: string;
  variant?: "minimal" | "boxed";
  className?: string;
}

export const TimerDisplay = ({ targetDate, variant = "boxed", className }: TimerDisplayProp) => {
  const { days, hours, minutes, seconds } = useTimer(targetDate);
  const pad = (n: number) => String(n).padStart(2, "0");

  const items = [
    { label: "Days", value: days },
    { label: "Hr", value: hours },
    { label: "Mins", value: minutes },
    { label: "Sec", value: seconds },
  ];

  if (variant === "minimal") {
    return (
      <div className={cn("flex items-center gap-2 font-medium text-lg md:text-2xl", className)}>
        {items.map(({ label, value }, i) => (
          <div key={label} className="flex items-center gap-2">
            <span className="size-8">{pad(value)}</span>
            {i !== items.length - 1 && <span className="opacity-50">:</span>}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("flex gap-3 sm:gap-6", className)}>
      {items.map(({ label, value }) => (
        <div key={label} className="flex flex-col items-center gap-2">
          <div className="flex items-center justify-center size-14 sm:size-20 bg-white rounded-xl shadow-around text-2xl sm:text-3xl font-medium text-brand-dark">
            {pad(value)}
          </div>
          <span className="text-sx sm:text-xs uppercase tracking-widest text-brand-gray">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};
