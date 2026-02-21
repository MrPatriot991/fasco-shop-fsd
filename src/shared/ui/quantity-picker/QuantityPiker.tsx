import { Button } from "@/shared/ui/button";

interface QuantityPickerProps {
  value: number;
  onChange: (newValue: number) => void;
  min?: number;
}

export const QuantityPicker = ({ value, onChange, min = 1 }: QuantityPickerProps) => {
  return (
    <div className="inline-flex h-10 md:h-14 w-33.25 border border-brand-gray/10 rounded-sm">
      <Button
        variant="ghost"
        size="none"
        onClick={() => onChange(Math.max(min, value - 1))}
        className="px-4 py-4 rounded-none border-r border-brand-gray/10"
      >
        -
      </Button>
      <div className="flex items-center justify-center">
        <span className="px-4 py-2 text-center w-12">{value}</span>
      </div>
      <Button
        variant="ghost"
        size="none"
        onClick={() => onChange(value + 1)}
        className="px-4 py-4 rounded-none border-l border-brand-gray/10"
      >
        +
      </Button>
    </div>
  );
};
