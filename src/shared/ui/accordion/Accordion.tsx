import { useId, useState } from "react";
import { cn } from "@/shared/lib/utils";

interface AccordionProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;

  className?: string;
  triggerClassName?: string;
  contentClassName?: string;
}

export const Accordion = ({
  trigger,
  children,
  defaultOpen = false,
  className,
  triggerClassName,
  contentClassName,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const triggerId = useId();
  const contentId = useId();

  return (
    <div className={cn("group overflow-hidden", className)} data-state={isOpen ? "open" : "close"}>
      <button
        id={triggerId}
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen(!isOpen)}
        className={cn("w-full text-left", triggerClassName)}
      >
        {trigger}
      </button>
      <div
        id={contentId}
        role="region"
        aria-labelledby={triggerId}
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          contentClassName
        )}
      >
        <div className="min-h-0">{children}</div>
      </div>
    </div>
  );
};
