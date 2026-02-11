export const ProductCardSkeleton = () => {
  return (
    <div className="flex flex-col p-4 h-full bg-white w-full rounded-2xl shadow-sm animate-pulse">
      <div className="h-60 w-full bg-gray-200 rounded-xl mb-4" />

      <div className="flex flex-col flex-1 gap-4">
        <div className="flex justify-between items-start gap-2">
          <div className="flex-1 space-y-2">
            <div className="h-5 bg-gray-200 rounded w-3/4" />
            <div className="h-3 bg-gray-100 rounded w-1/4" />
          </div>
          <div className="h-4 bg-gray-100 rounded w-16" />
        </div>

        <div className="mt-auto flex justify-between items-end">
          <div className="space-y-1">
            <div className="h-2 bg-gray-50 rounded w-8" />
            <div className="h-6 bg-gray-200 rounded w-16" />
          </div>
        </div>
      </div>
    </div>
  );
};
