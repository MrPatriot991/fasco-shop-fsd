export {
  selectProductState,
  selectProductStatus,
  selectCategory,
  productSelectors,
  selectAllProducts,
  selectProductEntities,
  selectOnlyDeals,
  selectProductByID,
  selectCategoryFilter,
} from "./model/productSelectors";
export { productSlice, setCategory } from "./model/productSlice";
export { rawProductSchema, productSchema } from "./model/productSchema";
export type { RawProduct, Product } from "./model/productSchema";
export type { Status, ProductStatus } from "./model/productTypes";
export { MOCK_PRODUCTS } from "./model/mocks";
export { ProductCard } from "./ui/product-card/ProductCard";
export { ProductList } from "./ui/product-list/ProductList";
export { ProductBadge } from "./ui/product-badge/ProductBadge";
