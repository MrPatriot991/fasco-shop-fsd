import { TimerDisplay } from "@/shared/ui";

interface ProductTimerProps {
  targetDate: string;
}

export const ProductTimer = ({ targetDate }: ProductTimerProps) => {
  return (
    <div className="flex items-center justify-between flex-wrap gap-2 md:gap-5 p-4 mb-7 border border-accent-red/30 bg-accent-red/10 rounded-sm text-accent-red text-lg">
      <p>Hurry up! Sale ends in:</p>
      <div>
        <TimerDisplay targetDate={targetDate} variant="minimal" />
      </div>
    </div>
  );
};
