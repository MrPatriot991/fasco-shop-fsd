import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import confetti from "canvas-confetti";
import { Button } from "@/shared/ui";

export const SuccessPage = () => {
  const [orderId] = useState(() => `FASCO-${Math.floor(Math.random() * 1000000)}`);

  useEffect(() => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#26ccff", "#a259ff"],
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#ff595e", "#ffca3a"],
      });

      if (Date.now() < animationEnd) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <div className="bg-green-100 p-6 rounded-full mb-6">
        <svg
          className="w-12 h-12 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
      <p className="text-gray-500 mb-8">
        Your order <span className="font-mono font-bold text-gray-900">{orderId}</span> is being
        processed.
      </p>

      <Link to="/">
        <Button variant="primary" size="large">
          Back to Shopping
        </Button>
      </Link>
    </div>
  );
};
