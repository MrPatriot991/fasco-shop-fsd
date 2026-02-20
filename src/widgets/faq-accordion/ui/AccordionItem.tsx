import { ChevronDown } from "lucide-react";
import { Accordion } from "@/shared/ui/accordion";
import { cn } from "@/shared/lib/utils";
import type { FaqItem } from "@/entities/info";

interface AccordionItemProps extends FaqItem {
  defaultOpen?: boolean;
}

export const AccordionItem = ({ q, a, defaultOpen = false }: AccordionItemProps) => {
  return (
    <Accordion
      defaultOpen={defaultOpen}
      className={cn(
        "rounded-xl border",
        "data-state-open:border-indigo-400",
        "data-state-open:shadow-sm",
        "data-state-close:border-slate-200"
      )}
      triggerClassName="justify-between rounded-none bg-white px-5 py-4 hover:bg-slate-50 flex"
      contentClassName="border-t border-slate-100 bg-slate-50/60 px-5 py-4"
      trigger={
        <>
          <span className="font-medium text-slate-800 pr-4">{q}</span>
          <span
            className={cn(
              "shrink-0 text-indigo-500 transition-transform duration-300 group-data-[state=open]:rotate-180"
            )}
          >
            <ChevronDown size={18} />
          </span>
        </>
      }
    >
      <p className="leading-relaxed text-slate-600">{a}</p>
    </Accordion>
  );
};

