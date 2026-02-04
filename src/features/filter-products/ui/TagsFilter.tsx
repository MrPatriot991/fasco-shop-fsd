import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import { selectTagsFilter, toggleArrayFilter } from "@/features/filter-products";
import { TAGS } from "@/shared/lib/constants";
import { Button } from "@/shared/ui";
import { cn } from "@/shared/lib/utils";

export const TagsFilter = () => {
  const dispatch = useAppDispatch();
  const activeTags = useAppSelector(selectTagsFilter);

  return (
    <div className="flex flex-wrap gap-4 py-4">
      {TAGS.map((tag) => {
        const isActive = activeTags.includes(tag);

        return (
          <Button
            key={tag}
            variant="ghost"
            size="none"
            onClick={() => dispatch(toggleArrayFilter({ key: "tags", value: tag }))}
            className={cn(isActive ? "text-brand-black font-bold" : "text-brand-gray")}
          >
            {tag}
          </Button>
        );
      })}
    </div>
  );
};
