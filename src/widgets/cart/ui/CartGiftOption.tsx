import { CartGiftWrap } from "@/shared/ui";

interface CartGiftOptionProps {
  label: React.ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const CartGiftOption = ({ label, checked, onChange }: CartGiftOptionProps) => {
  return (
    <CartGiftWrap
      label={label}
      checked={checked}
      onChange={onChange}
      id="checkboxCart"
      className="mt-auto"
    />
  );
};
