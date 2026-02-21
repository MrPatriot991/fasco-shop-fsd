import { ChevronRight } from "lucide-react";
import { SectionTitle } from "@/shared/ui/sectionTitle";

export const CartHeader = () => {
  return (
    <SectionTitle
      as="h1"
      align="center"
      className="md:gap-4 lg:gap-6"
      subContent={
        <p className="font-volkhov text-black hidden md:flex items-center gap-2">
          Home <ChevronRight className="w-4 h-4" /> Your Shopping Cart
        </p>
      }
    >
      Shopping Cart
    </SectionTitle>
  );
};
