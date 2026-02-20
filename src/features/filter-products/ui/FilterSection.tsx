import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const FilterSection = ({ title, children, defaultOpen = false }: FilterSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-brand-gray/20 py-2">
      <Button
        variant="ghost"
        size="none"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full active:scale-none items-center justify-between mb-2 py-2 rounded-none"
      >
        <h3 className="font-volkhov text-[18px] text-black">{title}</h3>
        <ChevronDown
          size={20}
          className={cn("transition-transform duration-300 text-gray-400", !isOpen && "-rotate-90")}
        />
      </Button>

      <div
        className={cn(
          "grid transition-[grid-template-rows_opacity] duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 overflow-hidden"
        )}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

