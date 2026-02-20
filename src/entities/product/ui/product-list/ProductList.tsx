import { cn } from "@/shared/lib/utils";
import { Skeleton } from "@/shared/ui/skeleton";
import { useAppSelector } from "@/shared/lib/hooks";
import { selectProductStatus, ProductCard } from "@/entities/product";
import type { Product } from "@/entities/product/model/schema";

interface ProductsListProps {
  products: Product[];
  cols: number;
  skeletonCount: number;
  renderItem?: (product: Product) => React.ReactNode;
  footer?: React.ReactNode;
  empty?: React.ReactNode;
}

export const ProductList = ({
  products,
  cols,
  skeletonCount = 6,
  renderItem,
  footer,
  empty = <span className="text-brand-dark">Products do not exist.</span>,
}: ProductsListProps) => {
  const status = useAppSelector(selectProductStatus);

  const gridClasses = cn("grid w-full gap-6", {
    "grid-cols-1": cols === 1,
    "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2": cols === 2,
    "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3": cols === 3,
    "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4": cols === 4,
  });

  return (
    <div className="flex flex-col w-full items-center justify-center flex-1 gap-10">
      {products.length === 0 && empty}
      <ul className={gridClasses}>
        {status === "loading" && products.length === 0 ? (
          <Skeleton count={skeletonCount} />
        ) : (
          products.map((product) => (
            <li key={product.id}>
              {renderItem ? (
                renderItem(product)
              ) : (
                <ProductCard product={product} variant={cols === 1 ? "list" : "grid"} />
              )}
            </li>
          ))
        )}
      </ul>

      {footer}
    </div>
  );
};

