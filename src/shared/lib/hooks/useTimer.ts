import { useCallback, useEffect, useState } from "react";

export const useTimer = (targetDate: string) => {
  const calculateTime = useCallback(() => {
    const target = new Date(targetDate).getTime();

    if (isNaN(target)) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const now = new Date().getTime();
    const distance = target - now;

    if (distance < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
  }, [targetDate]);

  const [time, setTime] = useState(calculateTime);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = calculateTime();
      setTime(newTime);

      if (Object.values(newTime).every((v) => v === 0)) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate, calculateTime]);

  return time;
};
