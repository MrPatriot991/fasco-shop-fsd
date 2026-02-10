export const CartTableHeader = () => {
  return (
    <div className="hidden md:grid grid-cols-12 gap-6 pb-4 border-b border-gray-200 font-semibold text-brand-black">
      <div className="col-span-5">Product</div>
      <div className="col-span-2">Price</div>
      <div className="col-span-3">Quantity</div>
      <div className="col-span-2 text-right">Total</div>
    </div>
  );
};
