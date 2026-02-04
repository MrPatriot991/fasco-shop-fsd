import { Button } from "@/shared/ui";
import { ChevronDown, Menu, Tally4, Tally2, Tally3 } from "lucide-react";

export const CatalogHeader = () => {
  return (
    <div className="flex flex-1 items-center justify-between ">
      <div className="flex items-center gap-4">
        Best selling <ChevronDown />
      </div>
      <div>
        <Button variant="ghost" size="none" className="p-3 text-[#f2f2f2] rounded-xs">
          <Menu className="w-3 h-3 text-black" />
        </Button>
        <Button variant="ghost" size="none" className="p-3 text-[#f2f2f2] rounded-xs">
          <Tally2 className="w-3 h-3 text-black" />
        </Button>
        <Button variant="ghost" size="none" className="p-3 text-[#f2f2f2] rounded-xs">
          <Tally3 className="w-3 h-3 text-black" />
        </Button>
        <Button variant="ghost" size="none" className="p-3 text-[#f2f2f2] rounded-xs">
          <Tally4 className="w-3 h-3 text-black" />
        </Button>
      </div>
    </div>
  );
};
