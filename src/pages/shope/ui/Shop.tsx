import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";
import { useAppSelector, useLockBodyScroll, usePagination } from "@/shared/lib/hooks";
import { Button } from "@/shared/ui/button";
import { EmptyState } from "@/shared/ui/empty-state";
import { ErrorBoundary } from "@/shared/ui/error-boundary";
import { Pagination } from "@/shared/ui/pagination";
import { ProductCard, ProductList, selectProductStatus } from "@/entities/product";
import { FilterSidebar, selectFilteredProducts } from "@/features/filter-products";
import { SearchFilterStatus } from "@/features/search-filter-status";
import { Benefits } from "@/widgets/benefits";
import { Footer } from "@/widgets/footer";
import { InstagramFeed } from "@/widgets/instagram-feed";
import { NewsLetter } from "@/widgets/news-latter";
import { Packages } from "@/widgets/packages";
import { ShopPage } from "./ShopPage";
import {
  CatalogHeader,
  CatalogToolbar,
  MobileFilterDrawer,
  useCatalogFilters,
} from "@/widgets/product-catalog";

const ITEMS_PER_PAGE = 9;

export const Shop = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const [isOpen, setIsOpen] = useState(false);
  const [cols, setCols] = useState(3);

  const { activeFilters } = useCatalogFilters();
  const productsFromStore = useAppSelector(selectFilteredProducts);
  const status = useAppSelector(selectProductStatus);
  const filterKey = JSON.stringify(activeFilters);

  const searchedProducts = useMemo(() => {
    if (!searchQuery) return productsFromStore;

    return productsFromStore.filter((p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, productsFromStore]);

  const { currentPage, totalPages, displayProducts, setCurrentPage } = usePagination(
    searchedProducts,
    ITEMS_PER_PAGE
  );

  useLockBodyScroll(isOpen);

  const isEmpty = searchedProducts.length === 0 && status !== "loading";

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    requestAnimationFrame(() => {
      document.getElementById("catalog-top")?.scrollIntoView({ behavior: "smooth" });
    });
  };

  const scrollToCatalog = () => {
    document.getElementById("catalog-top")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <ShopPage
        headerSlot={<CatalogHeader />}
        mobileToolbarSlot={
          <>
            <Button variant="ghost" size="none" onClick={() => setIsOpen(true)}>
              <SlidersHorizontal size={20} />
              Filters
            </Button>
            {searchQuery && <SearchFilterStatus searchTerm={searchQuery} />}
          </>
        }
        toolbarSlot={<CatalogToolbar setCols={setCols} cols={cols} searchTerm={searchQuery} />}
        filterSlot={
          <>
            <aside className="hidden lg:block">
              <div className="sticky top-5">
                <h3 className="text-3xl font-volkhov text-black pb-5">Filters</h3>
                <div className="max-h-[calc(100vh-120px)] overflow-y-auto pr-4 scrollbar-fashion">
                  <FilterSidebar />
                </div>
              </div>
            </aside>
            <MobileFilterDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
          </>
        }
        itemsSlot={
          <ErrorBoundary>
            <ProductList
              key={`${filterKey}-${searchQuery}`}
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
        }
        emptySlot={
          <EmptyState
            title="No products found"
            description="Try changing filters or your search query."
          />
        }
        isEmpty={isEmpty}
      />
      <Packages onActionClick={scrollToCatalog} />
      <Benefits />
      <InstagramFeed />
      <NewsLetter />
      <Footer />
    </>
  );
};
