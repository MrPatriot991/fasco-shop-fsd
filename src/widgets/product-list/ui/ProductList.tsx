import { useEffect, useState, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import { setCategory } from "@/entities/product";
import { Container, Button } from "@/shared/ui";
import {
  fetchProducts,
  ProductCard,
  ProductCardSkeleton,
  selectFilteredProducts,
  selectProductStatus,
  type Category,
  type Product,
} from "@/entities/product";

interface Buttons {
  id: number;
  label: string;
  category: Category;
}

const buttons: Buttons[] = [
  { id: 1, label: "Women’s Fashion", category: "women's clothing" },
  { id: 2, label: "Men’s Fashion", category: "men's clothing" },
  { id: 3, label: "Women Accessories", category: "jewelery" },
  { id: 4, label: "Men Accessories", category: "electronics" },
  { id: 5, label: "Discount Deals", category: "all" },
];

export const ProductList = () => {
  const dispatch = useAppDispatch();
  const apiProducts = useAppSelector<Product[]>(selectFilteredProducts);
  const status = useAppSelector(selectProductStatus);

  const [visibleCount, setVisibleCount] = useState(6);

  const displayProducts = useMemo(() => {
    return apiProducts.slice(0, visibleCount);
  }, [apiProducts, visibleCount]);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const handleCategoryClick = (category: Category) => {
    dispatch(setCategory(category));
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  return (
    <section id="new-arrivals" className="bg-brand-white pt-16 lg:pt-36">
      <Container>
        <div className="flex flex-col items-center space-y-12">
          <h2 className="text-section-title font-volkhov text-brand-dark">New Arrivals</h2>
          <p className="text-center text-brand-gray lg:w-2/3 w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices
            sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin{" "}
          </p>
          <div className="w-full overflow-hidden">
            <div className="flex overflow-x-auto md:justify-between gap-3 md:gap-7 scrollbar-hide">
              {buttons.map((button) => (
                <Button
                  key={button.id}
                  variant="secondary"
                  className="whitespace-nowrap shrink-0"
                  onClick={() => handleCategoryClick(button.category)}
                >
                  {button.label}
                </Button>
              ))}
            </div>
          </div>
          <ul className="grid grid-cols-1 w-full sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayProducts.map((product) => (
              <li key={`mock-${product.id}`}>
                <ProductCard product={product} />
              </li>
            ))}

            {status === "loading" &&
              apiProducts.length === 0 &&
              Array.from({ length: 3 }).map((_, i) => (
                <li key={`skeleton-${i}`}>
                  <ProductCardSkeleton />
                </li>
              ))}
          </ul>

          {visibleCount < apiProducts.length && (
            <Button onClick={handleShowMore}>
              {status === "loading" ? "Loading..." : "View more"}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
};
