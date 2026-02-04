import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import { selectCollectionFilter, setCollection } from "@/features/filter-products";
import { COLLECTIONS } from "@/shared/lib/constants";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui";

export const CollectionFilter = () => {
  const dispatch = useAppDispatch();
  const activeCollection = useAppSelector(selectCollectionFilter);

  return (
    <div className="flex flex-col items-start gap-3 py-4">
      {COLLECTIONS.map((item) => {
        const isActive = activeCollection === item;

        return (
          <Button
            key={item}
            variant="ghost"
            size="none"
            type="button"
            onClick={() => dispatch(setCollection(item))}
            className={cn(
              isActive
                ? "text-brand-black font-bold translate-x-2"
                : "text-brand-gray hover:text-brand-black hover:translate-x-1"
            )}
          >
            <span className="capitalize">{item.replace("-", " ")}</span>
          </Button>
        );
      })}
    </div>
  );
};
