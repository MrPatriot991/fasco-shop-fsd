import { useState, useRef, useMemo } from "react";
import { ChevronRight, SlidersHorizontal } from "lucide-react";
import { Button, ErrorBoundary, Pagination, Section, SectionTitle } from "@/shared/ui";
import { useAppSelector, useLockBodyScroll, usePagination } from "@/shared/lib/hooks";
import { ProductCard, ProductList } from "@/entities/product";
import { FilterSidebar, selectFilteredProducts } from "@/features/filter-products";
import { CatalogHeader, useCatalogFilters, MobileFilterDrawer } from "@/widgets/product-catalog";
import { SearchFilterStatus } from "@/features/search-filter-status";

const ITEMS_PER_PAGE = 9;

interface ProductCatalogProps {
  searchTerm?: string | null;
}

export const ProductCatalog = ({ searchTerm }: ProductCatalogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cols, setCols] = useState(3);
  const catalogRef = useRef<HTMLUListElement | null>(null);

  const { activeFilters } = useCatalogFilters();
  const productsFromStore = useAppSelector(selectFilteredProducts);
  const filterKey = JSON.stringify(activeFilters);

  const searchedProducts = useMemo(() => {
    if (!searchTerm) return productsFromStore;

    return productsFromStore.filter((p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, productsFromStore]);

  const { currentPage, totalPages, displayProducts, setCurrentPage } = usePagination(
    searchedProducts,
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
    <Section id="catalog-top" ref={catalogRef} spacing="compact" className="bg-brand-white py-10">
      <div className="flex flex-col gap-6">
        <SectionTitle
          as="h1"
          align="center"
          className="md:gap-4 lg:gap-6"
          subContent={
            <p className="font-volkhov text-black hidden md:flex items-center gap-2">
              Home <ChevronRight className="w-4 h-4" /> Fashion
            </p>
          }
        >
          Fashion
        </SectionTitle>

        <div className="flex justify-between items-start sm:items-center flex-col sm:flex-row lg:hidden gap-3">
          <Button variant="ghost" size="none" onClick={() => setIsOpen(true)}>
            <SlidersHorizontal size={20} />
            Filters
          </Button>
          {searchTerm && <SearchFilterStatus searchTerm={searchTerm} />}
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
              <CatalogHeader setCols={setCols} searchTerm={searchTerm} />
            </div>
            <ErrorBoundary>
              <ProductList
                key={`${filterKey}-${searchTerm}`}
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
    </Section>
  );
};
