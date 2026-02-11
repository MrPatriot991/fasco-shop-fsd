import { useEffect, useState } from "react";
import { ChevronRight, SlidersHorizontal, X } from "lucide-react";
import { Button, Container, ErrorBoundary } from "@/shared/ui";
import { useAppDispatch, useAppSelector, useLockBodyScroll } from "@/shared/lib/hooks";
import { ProductList } from "@/entities/product";
import { FilterSidebar } from "@/features/filter-products";
import { selectFilterState } from "@/features/filter-products";
import { resetFilters } from "@/features/filter-products";
import { selectFilteredProducts } from "@/features/filter-products";
import { CatalogHeader } from "./CatalogHeader";

export const ProductCatalog = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const activeFilters = useAppSelector(selectFilterState);
  const productsByCategory = useAppSelector(selectFilteredProducts);
  const filterKey = JSON.stringify(activeFilters);

  useLockBodyScroll(isOpen);

  useEffect(() => {
    dispatch(resetFilters());
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [dispatch]);

  return (
    <section className="bg-brand-white py-10">
      <Container>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center gap-5">
            <h2 className="text-[42px] text-black text-center font-volkhov">Fashion</h2>
            <p className="text-black hidden lg:flex items-center gap-2">
              Home <ChevronRight className="w-4 h-4" /> Feshion
            </p>
          </div>

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

            {isOpen && (
              <div className="fixed inset-0 z-100 lg:hidden">
                <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />

                <div className="absolute left-0 top-0 h-full w-[300px] bg-white p-5 shadow-xl">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-volkhov">Filters</h3>
                    <button onClick={() => setIsOpen(false)}>
                      <X />
                    </button>
                  </div>

                  <div className="h-[calc(100vh-100px)] overflow-y-auto pb-10">
                    <FilterSidebar />
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-col items-center gap-4">
              <div className="hidden lg:flex w-full">
                <CatalogHeader />
              </div>
              <ErrorBoundary>
                <ProductList key={filterKey} mode="shop" products={productsByCategory}/>
              </ErrorBoundary>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
