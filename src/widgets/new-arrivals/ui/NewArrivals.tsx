import { useState, useMemo } from "react";
import { ErrorBoundary, Button, Section, SectionTitle } from "@/shared/ui";
import { useAppSelector } from "@/shared/lib/hooks";
import { ProductList, selectCategoryFilter } from "@/entities/product";
import { CategoryTabs } from "@/features/filter-by-category";

export const NewArrivals = () => {
  const products = useAppSelector(selectCategoryFilter);
  const [visibleCount, setVisibleCount] = useState(6);

  const displayProducts = useMemo(() => {
    return products.slice(0, visibleCount);
  }, [products, visibleCount]);

  return (
    <Section id="new-arrivals" className="bg-brand-white">
      <div className="flex flex-col items-center gap-6 lg:gap-10">
        <SectionTitle
          as="h2"
          variant="section"
          subJustify="center"
          subContent={
            <p className="text-center font-volkhov text-brand-gray max-w-4/5 sm:w-2/3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices
              sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin
            </p>
          }
        >
          New Arrivals
        </SectionTitle>
        <CategoryTabs />
        <ErrorBoundary>
          <ProductList
            products={displayProducts}
            cols={3}
            skeletonCount={6}
            footer={
              visibleCount < products.length && (
                <Button
                  type="button"
                  variant="primary"
                  onClick={() => setVisibleCount((prev: number) => prev + 6)}
                >
                  View More
                </Button>
              )
            }
          />
        </ErrorBoundary>
      </div>
    </Section>
  );
};
