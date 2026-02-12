import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { useOnClickOutside } from "@/shared/lib/hooks";

interface DropdownItem {
  label: string;
  path?: string;
  value?: string;
}

interface DropdownProps<T extends DropdownItem | string> {
  label: string;
  items: readonly T[];
  onSelect?: (items: T) => void;
  className?: string;
}

export const Dropdown = <T extends DropdownItem | string>({
  label,
  items,
  onSelect,
  className,
}: DropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(containerRef, () => setIsOpen(false), isOpen);

  return (
    <div
      ref={containerRef}
      onMouseLeave={() => setIsOpen(false)}
      className={cn("relative py-1", className)}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        className="flex items-center gap-1 pl-4 font-medium text-brand-gray hover:text-brand-black outline-none transition-colors duration-200"
      >
        {label}{" "}
        <ChevronDown
          className={cn("transition-transform duration-200", isOpen && "rotate-180")}
          size={14}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full pt-2 z-100">
          <div className="w-48 bg-white border border-gray-100 shadow-xl rounded-lg overflow-hidden flex flex-col">
            {items.map((item, index) => {
              const itemLabel = typeof item === "string" ? item : item.label;
              const itemPath = typeof item === "string" ? undefined : item.path;

              const content = <span className="cursor-pointer">{itemLabel}</span>;

              return (
                <div
                  key={index}
                  onClick={() => {
                    onSelect?.(item);
                    setIsOpen(false);
                  }}
                  className="px-4 py-2.5 text-xm hover:bg-gray-50 text-brand-gray hover:text-brand-black border-b last:border-0 border-gray-50 transition-colors duration-200"
                >
                  {itemPath ? <Link to={itemPath}>{content}</Link> : content}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
