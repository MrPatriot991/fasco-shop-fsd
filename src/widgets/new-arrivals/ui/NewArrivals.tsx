import { useState, useMemo } from "react";
import { Container, ErrorBoundary, Button } from "@/shared/ui";
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
    <section id="new-arrivals" className="bg-brand-white pt-16 lg:pt-36">
      <Container>
        <div className="flex flex-col items-center space-y-12">
          <h2 className="text-section-title font-volkhov text-brand-dark">New Arrivals</h2>
          <p className="text-center text-brand-gray lg:w-2/3 w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices
            sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin{" "}
          </p>
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
      </Container>
    </section>
  );
};
