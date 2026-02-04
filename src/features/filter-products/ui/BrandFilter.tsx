import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import { selectBrandFilter, toggleArrayFilter } from "@/features/filter-products";
import { MOCK_BRANDS } from "@/shared/lib/constants";
import { Check } from "lucide-react";

export const BrandFilter = () => {
  const dispatch = useAppDispatch();
  const activeBrands = useAppSelector(selectBrandFilter);

  return (
    <div className="flex flex-col gap-3 py-4">
      {MOCK_BRANDS.map((brand) => {
        const isActive = activeBrands.includes(brand);

        return (
          <label key={brand} className="flex items-center gap-3 cursor-pointer group">
            <div className="relative flex items-center justify-center">
              <input
                type="checkbox"
                className="peer appearance-none w-5 h-5 border-2 border-gray-200 rounded checked:bg-brand-black checked:border-brand-black transition-colors duration-300"
                checked={isActive}
                onChange={() => dispatch(toggleArrayFilter({ key: "brands", value: brand }))}
              />
              <Check className="absolute w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
            </div>
            <span className="text-brand-gray group-hover:text-brand-black transition-colors">
              {brand}
            </span>
          </label>
        );
      })}
    </div>
  );
};
