import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
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
  portal?: boolean;
  className?: string;
  buttonClassName?: string;
  dropdownClassName?: string;
  children?: React.ReactNode;
}

export const Dropdown = <T extends DropdownItem | string>({
  label,
  items,
  onSelect,
  portal = false,
  className,
  buttonClassName,
  dropdownClassName,
  children,
}: DropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useOnClickOutside(containerRef, () => setIsOpen(false), !portal && isOpen);

  useEffect(() => {
    if (!portal || !isOpen) return;

    const updatePosition = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + 8,
        left: rect.left,
      });
    };

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (containerRef.current?.contains(target)) return;
      if (menuRef.current?.contains(target)) return;
      setIsOpen(false);
    };

    updatePosition();

    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, [isOpen, portal]);

  const menuContent = (
    <div
      ref={menuRef}
      className={cn(
        portal ? "fixed z-120 pt-2" : "absolute left-0 top-full z-50 pt-2",
        dropdownClassName
      )}
      style={portal ? { top: position.top, left: position.left } : undefined}
    >
      <div className="flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xl">
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
              className="text-xm border-b border-gray-50 px-4 py-2.5 text-brand-gray transition-colors duration-200 last:border-0 hover:bg-gray-50 hover:text-brand-black"
            >
              {itemPath ? <Link to={itemPath}>{content}</Link> : content}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div
      ref={containerRef}
      onMouseLeave={!portal ? () => setIsOpen(false) : undefined}
      className={cn("relative py-1", className)}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={!portal ? () => setIsOpen(true) : undefined}
        className={cn(
          "flex items-center gap-1 pl-4 font-medium text-brand-gray outline-none transition-colors duration-200 hover:text-brand-black",
          buttonClassName
        )}
      >
        <div className="flex items-center gap-2">
          {children}
          <span>{label}</span>
        </div>
        <ChevronDown
          className={cn("transition-transform duration-200", isOpen && "rotate-180")}
          size={14}
        />
      </button>

      {isOpen ? (portal ? createPortal(menuContent, document.body) : menuContent) : null}
    </div>
  );
};
