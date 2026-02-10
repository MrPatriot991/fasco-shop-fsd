import { createPortal } from "react-dom";
import { useAppDispatch, useAppSelector, useLockBodyScroll } from "@/shared/lib/hooks";
import {
  updateCartItem,
  closeCart,
  selectIsCartModalOpen,
  selectItemTotalWithWrap,
  selectLastAddedId,
  selectCartItems,
  selectIsGiftWrapEnabled,
  toggleGifWrap,
} from "@/entities/cart";
import { CartModalContent } from "./CartModalContent";
import { CartModalHeader } from "./CartModalHeader";
import { CartModalItem } from "./CartModalItem";
import { CartModalFooter } from "./CartModalFooter";
import { CartGiftOption } from "./CartGiftOption";

export const CartModal = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectIsCartModalOpen);
  const lastAddedId = useAppSelector(selectLastAddedId);
  const cartItems = useAppSelector(selectCartItems);
  const isGiftWrap = useAppSelector(selectIsGiftWrapEnabled);
  const subtotal = useAppSelector(selectItemTotalWithWrap);

  const currentItem = cartItems.find((item) => item.id === lastAddedId);
  useLockBodyScroll(isOpen);

  if (!isOpen || !currentItem) return null;

  const handleClose = () => {
    console.log("Test", cartItems);
    dispatch(closeCart());
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    dispatch(updateCartItem({ id, quantity }));
  };

  return createPortal(
    <div
      className="fixed inset-0 z-100 flex justify-end bg-black/50 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="relative flex flex-col h-full w-full max-w-3xl p-4 sm:p-7 lg:p-11 bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <CartModalHeader freeShippingThreshold={75} onClick={handleClose} />

        <CartModalContent>
          <CartModalItem
            id={currentItem.id}
            productId={currentItem.productId}
            title={currentItem.title}
            image={currentItem.image}
            price={currentItem.price}
            color={currentItem.color}
            size={currentItem.size}
            quantity={currentItem.quantity}
            onQuantityChange={handleQuantityChange}
          />

          <CartGiftOption
            price={10}
            checked={isGiftWrap}
            onChange={() => dispatch(toggleGifWrap())}
          />
        </CartModalContent>

        <CartModalFooter subtotal={subtotal} onClose={handleClose} />
      </div>
    </div>,
    document.body
  );
};
