import { X } from "lucide-react";
import { FilterSidebar } from "@/features/filter-products";

export const MobileFilterDrawer = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-100 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />

          <div className="absolute left-0 top-0 h-full w-75 bg-white p-5 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-volkhov">Filters</h3>
              <button onClick={() => setIsOpen(false)}>
                <X />
              </button>
            </div>

            <div className="h-[calc(100vh-100px)] overflow-y-auto pb-10">
              <FilterSidebar />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
