import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import { Button, Container, QuantityPicker } from "@/shared/ui";
import { fetchProducts, selectProductByID, selectProductStatus } from "@/entities/product";
import { openCart, addToCart } from "@/entities/cart";
import {
  selectActiveColors,
  selectActiveSize,
  resetFilters,
  setFilterValue,
} from "@/features/filter-products";
import { ProductGuarantees } from "./ProductGuarantees";
import { ProductGallery } from "./ProductGallery";
import { ProductHeader } from "./ProductHeader";
import { ProductPrice } from "./ProductPrice";
import { ProductViewers } from "./ProductViewers";
import { ProductTimer } from "./ProductTimer";
import { ProductStock } from "./ProductStock";
import { ProductVariants } from "./ProductVariants";
import { ProductActions } from "./ProductActions";
import { ProductDeliveryInfo } from "./ProductDeliveryInfo";

export const ProductDetails = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const [count, setCount] = useState(1);

  const status = useAppSelector(selectProductStatus);
  const selectedSize = useAppSelector(selectActiveSize);
  const selectedColor = useAppSelector(selectActiveColors);
  const product = useAppSelector((state) => selectProductByID(state, Number(id)));

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [dispatch]);

  useEffect(() => {
    if (!product) return;

    if (selectedSize.length === 0) {
      dispatch(setFilterValue({ key: "sizes", value: [product.sizes[0]] }));
    }
    if (selectedColor.length === 0) {
      dispatch(setFilterValue({ key: "colors", value: [product.colors[0]] }));
    }
  }, [product, selectedSize, selectedColor, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(resetFilters());
    };
  }, [dispatch]);

  if (!product) return null;

  const { image, title, brand, isDiscount, rating, sizes, colors, price, salePercent } = product;

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color");
      return;
    }

    const currentUniqueId = `${id}-${selectedSize}-${selectedColor}`;

    const cartItem = {
      id: currentUniqueId,
      productId: Number(id),
      title,
      price,
      image,
      size: selectedSize,
      color: selectedColor,
      quantity: count,
      isWrapped: false,
    };

    dispatch(addToCart(cartItem));
    dispatch(openCart());
    dispatch(resetFilters());
    setCount(1);
  };

  return (
    <section className="py-8 md:py-16 bg-brand-white">
      <Container>
        <div className="flex flex-col lg:flex-row gap-10 md:gap-20">
          <ProductGallery colors={colors} image={image} title={title} />

          <div className="flex-1 lg:max-w-2xl">
            <ProductHeader brand={brand} title={title} rating={rating} />
            <ProductPrice price={price} salePercent={salePercent} />
            <ProductViewers />
            {isDiscount && <ProductTimer targetDate="2026-02-28" />}
            <ProductStock />
            <ProductVariants
              sizes={sizes}
              colors={colors}
              selectedSize={selectedSize}
              selectedColor={selectedColor}
            />
            <div className="flex items-center flex-wrap md:flex-nowrap gap-5 mb-16">
              <QuantityPicker value={count} onChange={setCount} />
              <div className="flex-1">
                <Button
                  variant="outlineDark"
                  type="button"
                  size="widthFull"
                  onClick={handleAddToCart}
                >
                  Add to cart
                </Button>
              </div>
            </div>
            <ProductActions />
            <ProductDeliveryInfo
              estimatedStart="2026-07-30"
              estimatedEnd="2026-08-03"
              freeShippingThreshold={75}
            />
            <ProductGuarantees />
          </div>
        </div>
      </Container>
    </section>
  );
};
