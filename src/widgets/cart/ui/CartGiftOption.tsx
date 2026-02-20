import { CheckboxGiftWrap } from "@/shared/ui/checkboxGiftWrap";

interface CartGiftOptionProps {
  label: React.ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const CartGiftOption = ({ label, checked, onChange }: CartGiftOptionProps) => {
  return (
    <CheckboxGiftWrap
      label={label}
      checked={checked}
      onChange={onChange}
      id="checkboxCart"
      className="mt-auto"
    />
  );
};

