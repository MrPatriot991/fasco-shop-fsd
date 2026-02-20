import { AccordionItem } from "./AccordionItem";
import type { FaqItem } from "@/entities/info";

interface AccordionSectionProps {
  items: FaqItem[];
  defaultOpenFirst?: boolean;
}

export const AccordionSection = ({ items, defaultOpenFirst = false }: AccordionSectionProps) => {
  if (items.length === 0) {
    return <p className="text-sm text-slate-500">No items available.</p>;
  }

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => (
        <AccordionItem
          key={`${item.q}-${index}`}
          q={item.q}
          a={item.a}
          defaultOpen={defaultOpenFirst && index === 0}
        />
      ))}
    </div>
  );
};
