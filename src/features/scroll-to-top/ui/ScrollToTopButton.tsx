import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/shared/ui/button";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setIsVisible(window.scrollY > 300);
    };
    document.addEventListener("scroll", toggleVisible);
    return () => document.removeEventListener("scroll", toggleVisible);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleScrollTop}
      className="fixed bottom-24 right-6  w-12 h-12 z-40 p-3 border shadow-2xl animate-slide-in bg-white"
    >
      <ArrowUp />
    </Button>
  );
};

