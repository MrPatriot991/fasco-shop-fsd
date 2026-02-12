import { useEffect, type RefObject } from "react";

export const useOnClickOutside = (
  ref: RefObject<HTMLElement | null>,
  handle: (event: MouseEvent | TouchEvent) => void,
  isOpen: boolean
) => {
  useEffect(() => {
    if (!isOpen) return;

    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return;
      handle(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handle, isOpen]);
};
