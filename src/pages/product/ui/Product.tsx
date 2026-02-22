import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import { Button } from "@/shared/ui/button";
import { QuantityPicker } from "@/shared/ui/quantity-picker";
import { EmptyState } from "@/shared/ui/empty-state";
import { selectProductByID } from "@/entities/product";
import { addToCart, openCart } from "@/entities/cart";
import { ToggleWishlistButton } from "@/features/wishlist";
import {
  resetFilters,
  selectActiveColors,
  selectActiveSize,
  setFilterValue,
} from "@/features/filter-products";
import {
  ProductActions,
  ProductDeliveryInfo,
  ProductGallery,
  ProductGuarantees,
  ProductHeader,
  ProductPrice,
  ProductStock,
  ProductTimer,
  ProductVariants,
  ProductViewers,
} from "@/widgets/product-details";
import { ProductPage } from "./ProductPage";

export const Product = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const [count, setCount] = useState(1);

  const selectedSize = useAppSelector(selectActiveSize);
  const selectedColor = useAppSelector(selectActiveColors);
  const product = useAppSelector((state) => selectProductByID(state, Number(id)));

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

  if (!product || !id) {
    return <EmptyState title="Product not found" description="Try opening another product." />;
  }

  const { image, title, brand, isDiscount, rating, sizes, colors, price, salePercent } = product;
  const productId = String(id);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color");
      return;
    }

    const cartItem = {
      productId: Number(id),
      size: selectedSize[0],
      color: selectedColor[0],
      quantity: count,
    };

    dispatch(addToCart(cartItem));
    dispatch(openCart());
    dispatch(resetFilters());
    setCount(1);
  };

  return (
    <>
      <ProductPage
        gallerySlot={
          <ProductGallery
            colors={colors}
            image={image}
            title={title}
            actionsSlot={
              <ToggleWishlistButton
                productId={productId}
                colorStar="text-black"
                className="active:bg-transparent"
              />
            }
          />
        }
        headerSlot={
          <ProductHeader
            brand={brand}
            title={title}
            rating={rating}
            actionsSlot={<ToggleWishlistButton productId={productId} colorStar="text-gray-300" />}
          />
        }
        priceSlot={<ProductPrice price={price} salePercent={salePercent} />}
        viewersSlot={<ProductViewers />}
        timerSlot={isDiscount ? <ProductTimer targetDate="2026-02-28" /> : null}
        stockSlot={<ProductStock />}
        variantsSlot={
          <ProductVariants
            sizes={sizes}
            colors={colors}
            selectedSize={selectedSize}
            selectedColor={selectedColor}
          />
        }
        purchaseSlot={
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
        }
        actionsSlot={<ProductActions />}
        deliverySlot={
          <ProductDeliveryInfo
            estimatedStart="2026-07-30"
            estimatedEnd="2026-08-03"
            freeShippingThreshold={75}
          />
        }
        guaranteesSlot={<ProductGuarantees />}
      />
    </>
  );
};
