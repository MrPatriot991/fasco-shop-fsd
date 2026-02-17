import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui";
import type { FaqItem } from "@/entities/info/model/types";

interface AccordionItemProps extends FaqItem {
  defaultOpen?: boolean;
}

export const AccordionItem = ({ q, a, defaultOpen = false }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentId = useId();
  const triggerId = useId();

  return (
    <div className={cn("overflow-hidden rounded-xl border transition-all duration-200", isOpen ? "border-indigo-400 shadow-sm" : "border-slate-200")}>
      <Button
        variant="ghost"
        size="widthFull"
        id={triggerId}
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen(!isOpen)}
        className="justify-between rounded-none bg-white px-5 py-4 text-left hover:bg-slate-50"
      >
        <span className="font-medium text-slate-800 pr-4">{q}</span>
        <span
          className={`shrink-0 text-indigo-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          <ChevronDown size={18} />
        </span>
      </Button>
      <div
        id={contentId}
        role="region"
        aria-labelledby={triggerId}
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <p className="min-h-0 border-t border-slate-100 bg-slate-50/60 px-5 py-4 leading-relaxed text-slate-600">
          {a}
        </p>
      </div>
    </div>
  );
};
