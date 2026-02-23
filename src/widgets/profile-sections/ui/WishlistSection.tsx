import { Link } from "react-router-dom";
import { Button } from "@/shared/ui/button";
import { SectionTitle } from "@/shared/ui/section-title";

interface WishlistSectionProps {
  count: number;
}

export const WishlistSection = ({ count }: WishlistSectionProps) => {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8">
      <SectionTitle
        as="h2"
        align="left"
        variant="section"
        subContent={<p className="text-sm md:text-base">Quick access to your saved products.</p>}
        classNameWrapper="gap-3"
      >
        Wishlist Shortcut
      </SectionTitle>
      <p className="mt-6 text-brand-dark">
        Items in wishlist: <span className="font-semibold">{count}</span>
      </p>
      <div className="mt-6">
        <Button asChild variant="outlineDark">
          <Link to="/wishlist">Open wishlist</Link>
        </Button>
      </div>
    </div>
  );
};
