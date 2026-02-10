import { CartGiftWrap } from "@/shared/ui";

interface CartGiftOptionProps {
  price: number;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const CartGiftOption = ({ price, checked, onChange }: CartGiftOptionProps) => {
  return (
    <CartGiftWrap
      price={price}
      checked={checked}
      onChange={onChange}
      id="checkboxCart"
      className="mt-auto"
    />
  );
};
