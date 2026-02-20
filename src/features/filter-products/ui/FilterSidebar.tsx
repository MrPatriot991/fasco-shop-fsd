import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "@/shared/lib/hooks";
import { selectActiveSize, selectActiveColors, resetFilters } from "@/features/filter-products";
import { Button } from "@/shared/ui/button";
import { BrandFilter } from "./BrandFilter";
import { CollectionFilter } from "./CollectionsFilter";
import { ColorPiaker } from "./ColorPicker";
import { FilterSection } from "./FilterSection";
import { PriceRange } from "./PriceRange";
import { SizeSelector } from "./SizeSelector";
import { TagsFilter } from "./TagsFilter";

export const FilterSidebar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const selectedSize = useAppSelector(selectActiveSize);
  const selectedColor = useAppSelector(selectActiveColors);

  const handleResetAll = () => {
    dispatch(resetFilters());
    navigate("/shop", { replace: true });
  };

  return (
    <div className="flex flex-col space-y-4">
      <FilterSection title="Size">
        <SizeSelector selectedSize={selectedSize} />
      </FilterSection>
      <FilterSection title="Colors">
        <ColorPiaker selectedColor={selectedColor} />
      </FilterSection>
      <FilterSection title="Price">
        <PriceRange />
      </FilterSection>
      <FilterSection title="Brands">
        <BrandFilter />
      </FilterSection>
      <FilterSection title="Collection">
        <CollectionFilter />
      </FilterSection>
      <FilterSection title="Tags">
        <TagsFilter />
      </FilterSection>

      <Button variant="ghost" onClick={handleResetAll} className="font-medium text-brand-black">
        Clear All Filters
      </Button>
    </div>
  );
};

