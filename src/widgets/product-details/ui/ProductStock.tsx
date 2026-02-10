export const ProductStock = () => {
  return (
    <div className="mb-3">
      <p className="text-brand-gray mb-2">
        Only <span className="font-bold">9</span> item(s) left in stock!
      </p>
      <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
        <div className="w-1/4 h-full bg-red-600"></div>
      </div>
    </div>
  );
};
