import { useState, useRef } from "react";
import { ChevronRight, SlidersHorizontal } from "lucide-react";
import { Button, Container, ErrorBoundary, Pagination, SectionTitle } from "@/shared/ui";
import { useAppSelector, useLockBodyScroll, usePagination } from "@/shared/lib/hooks";
import { ProductCard, ProductList } from "@/entities/product";
import { FilterSidebar, selectFilteredProducts } from "@/features/filter-products";
import { CatalogHeader, useCatalogFilters, MobileFilterDrawer } from "@/widgets/product-catalog";

const ITEMS_PER_PAGE = 9;

export const ProductCatalog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cols, setCols] = useState(3);
  const catalogRef = useRef<HTMLUListElement | null>(null);

  const { activeFilters } = useCatalogFilters();
  const products = useAppSelector(selectFilteredProducts);
  const filterKey = JSON.stringify(activeFilters);

  const { currentPage, totalPages, displayProducts, setCurrentPage } = usePagination(
    products,
    ITEMS_PER_PAGE
  );

  useLockBodyScroll(isOpen);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    requestAnimationFrame(() => {
      catalogRef.current?.scrollIntoView({ behavior: "smooth" });
    });
  };

  return (
    <section id="catalog-top" ref={catalogRef} className="bg-brand-white py-10">
      <Container>
        <div className="flex flex-col">
          <SectionTitle
            as="h1"
            title="Fashion"
            subContent={
              <p className="text-black hidden lg:flex items-center gap-2">
                Home <ChevronRight className="w-4 h-4" /> Fashion
              </p>
            }
          />

          <div className="flex lg:hidden justify-between items-center">
            <Button variant="ghost" size="none" onClick={() => setIsOpen(true)}>
              <SlidersHorizontal size={20} />
              Filters
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 mt-0 lg:mt-12">
            <aside className="hidden lg:block">
              <div className="sticky top-5">
                <h3 className="text-3xl font-volkhov text-black pb-5">Filters</h3>

                <div className="max-h-[calc(100vh-120px)] overflow-y-auto pr-4 scrollbar-fashion">
                  <FilterSidebar />
                </div>
              </div>
            </aside>

            <MobileFilterDrawer isOpen={isOpen} setIsOpen={setIsOpen} />

            <div className="flex flex-col items-center gap-4">
              <div className="hidden lg:flex w-full">
                <CatalogHeader setCols={setCols} />
              </div>
              <ErrorBoundary>
                <ProductList
                  key={filterKey}
                  products={displayProducts}
                  cols={cols}
                  skeletonCount={9}
                  renderItem={(product) => (
                    <ProductCard product={product} variant={cols === 1 ? "list" : "grid"} />
                  )}
                  footer={
                    <Pagination
                      totalPages={totalPages}
                      currentPage={currentPage}
                      onPageChange={handlePageChange}
                    />
                  }
                />
              </ErrorBoundary>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
