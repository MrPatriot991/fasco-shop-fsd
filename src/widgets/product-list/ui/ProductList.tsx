import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import {
  fetchProducts,
  selectAllProducts,
  selectProductStatus,
  type Product,
} from "@/entities/product";
import { ProductCard } from "@/entities/product/ui/ProductCard";

export const ProductList = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector<Product[]>(selectAllProducts);
  const status = useAppSelector(selectProductStatus);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  if (status === "loading") return <div className="text-center p-10">Loading products...</div>;
  if (status === "error")
    return <div className="text-center text-red-500 p-10">Failed to load data</div>;

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.length > 0 &&
        products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
    </ul>
  );
};
