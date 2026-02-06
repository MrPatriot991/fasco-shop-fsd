import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Eye, Star, ArrowUpDown, CircleQuestionMark, Share2, Van, Package2 } from "lucide-react";
import { Button, Container, StarRating } from "@/shared/ui";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import { fetchProducts, selectProductByID, selectProductStatus } from "@/entities/product";
import { cn } from "@/shared/lib/utils";
import { TimerDisplay } from "@/shared/ui";
import { SizeSelector } from "@/features/filter-products/ui/SizeSelector";
import { ColorPiaker } from "@/features/filter-products/ui/ColorPicker";

export const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [count, setCount] = useState(1);
  const dispatch = useAppDispatch();

  const status = useAppSelector(selectProductStatus);
  const product = useAppSelector((state) => selectProductByID(state, Number(id)));

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (!product) return null;

  const { image, title, brand, isDiscount, rating, sizes, colors } = product;

  return (
    <section className="py-8 md:py-16 bg-brand-white">
      <Container>
        <div className="flex flex-col lg:flex-row gap-10 md:gap-20">
          {/* Left Side - Images */}
          <div className="flex gap-4 flex-1 flex-col-reverse lg:flex-row">
            <div className="flex lg:flex-col gap-3">
              {colors.map((color) => (
                <Button
                  key={color}
                  variant="ghost"
                  size="none"
                  className="w-10 h-10 md:w-20 md:h-20 border-2 border-gray-300 rounded-lg overflow-hidden hover:border-gray-800"
                >
                  <div className="w-full h-full" style={{ backgroundColor: color }}></div>
                </Button>
              ))}
            </div>
            <div className="relative flex-1 rounded-lg overflow-hidden w-full lg:max-w-lg max-h-[654px]">
              <Button
                type="button"
                variant="ghost"
                size="none"
                className="absolute lg:hidden top-5 right-5 p-2 bg-white rounded-full cursor-pointer"
              >
                <Star size={19} className="text-black" />
              </Button>
              <img
                src={image}
                alt={title}
                className={cn(
                  "w-full h-full",
                  image.includes("https://fakestoreapi.com")
                    ? "object-contain object-center"
                    : "object-cover object-top"
                )}
              />
            </div>
          </div>

          {/* Right Side - Product Info */}
          <div className="flex-1 lg:max-w-2xl">
            <div className="uppercase text-sm text-brand-gray  mb-3">{brand}</div>
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-lg md:text-3xl text-brand-black font-volkhov">{title}</h1>
              <Button
                type="button"
                variant="ghost"
                size="none"
                className="hidden lg:flex p-2 border border-brand-gray/30 rounded-full cursor-pointer"
              >
                <Star size={19} className="text-black" />
              </Button>
            </div>

            <div className="flex items-center gap-3 mb-5">
              <StarRating rate={rating.rate} />
              <span>({rating.count})</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-5">
              <div className="text-2xl md:text-3xl font-bold text-gray-900">$39.00</div>
              <div className="flex gap-4">
                <div className="text-xl text-gray-400 line-through">$59.00</div>
                <div className="bg-red-500 text-white px-3 py-2 rounded text-xs font-bold">
                  SAVE 33%
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-5">
              <Eye />
              <p className="text-brand-gray/70">24 people are viewing this right now</p>
            </div>

            {/* Timer */}
            {isDiscount && (
              <div className="flex items-center justify-between flex-wrap gap-2 md:gap-5 p-4 mb-7 border border-accent-red/30 bg-accent-red/10 rounded-sm text-accent-red text-lg">
                <p>Hurry up! Sale ends in:</p>
                <div>
                  <TimerDisplay targetDate="02-09-2026" variant="minimal" />
                </div>
              </div>
            )}

            {/* Stock */}
            <div className="mb-3">
              <p className="text-brand-gray mb-2">
                Only <span className="font-bold">9</span> item(s) left in stock!
              </p>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                <div className="w-1/4 h-full bg-red-600"></div>
              </div>
            </div>

            {/* Colors/Sizes */}
            <div className="mb-6">
              <div>
                <div className="text-base font-semibold mb-3 text-gray-900">Size: M</div>
                <SizeSelector sizes={sizes} isMult={false} className="px-0" />
              </div>
              <div>
                <div className="text-base font-semibold mb-3 text-gray-900">Color: Blue</div>
                <ColorPiaker colors={colors} isMult={false} className="px-0" />
              </div>
            </div>

            {/* Qty */}
            <div className="flex items-center flex-wrap md:flex-nowrap gap-5 mb-16">
              <div className="inline-flex border border-brand-gray/10 rounded-sm">
                <Button
                  variant="ghost"
                  size="none"
                  onClick={() => setCount((prev) => Math.max(1, prev - 1))}
                  className="px-4 py-4 rounded-none"
                >
                  -
                </Button>
                <div className="flex items-center justify-center">
                  <span className="px-4 py-2 text-center w-12">{count}</span>
                </div>
                <Button
                  variant="ghost"
                  size="none"
                  onClick={() => setCount((perv) => perv + 1)}
                  className="px-4 py-4 rounded-none"
                >
                  +
                </Button>
              </div>
              <div className="flex-1">
                <Button variant="outlineDark" type="button" size="widthFull">
                  Add to cart
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-8 text-brand-black mb-3">
              <div className="flex items-center gap-2">
                <ArrowUpDown size={20} />
                <span>Compare</span>
              </div>
              <div className="flex items-center gap-2">
                <CircleQuestionMark size={20} />
                <span>Ask a question</span>
              </div>
              <div className="flex items-center gap-2">
                <Share2 size={20} />
                <span>Share</span>
              </div>
            </div>

            <hr className="border-gray-200 mb-8" />

            <div className="flex flex-col gap-2 mb-8">
              <div className="flex flex-wrap items-center gap-2">
                <Van size={20} />
                <p>
                  <span className="font-volkhov font-bold">Estimated Delivery:</span>{" "}
                  <time dateTime="2026-07-30">Jul 30</time> –
                  <time dateTime="2026-08-03">Aug 03</time>
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Package2 size={20} />
                <p>
                  <strong className="font-volkhov font-bold">Free Shipping & Returns:</strong> On
                  all orders over $75
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center p-5 gap-5 bg-brand-secondary rounded-sm">
              <div className="flex flex-wrap gap-3">
                <div className="h-8 w-12 bg-blue-900 rounded flex items-center justify-center text-white text-xs font-bold">
                  VISA
                </div>
                <div className="h-8 w-12 bg-red-600 rounded flex items-center justify-center text-white">
                  MC
                </div>
                <div className="h-8 w-12 bg-blue-600 rounded flex items-center justify-center text-white text-xs">
                  AMEX
                </div>
                <div className="h-8 w-12 bg-blue-400 rounded flex items-center justify-center text-white text-xs">
                  JCB
                </div>
                <div className="h-8 w-12 bg-orange-500 rounded flex items-center justify-center text-white text-xs">
                  DISC
                </div>
                <div className="h-8 w-12 bg-blue-700 rounded flex items-center justify-center text-white text-xs">
                  DC
                </div>
                <div className="h-8 w-12 bg-blue-900 rounded flex items-center justify-center text-white text-xs">
                  UP
                </div>
              </div>
              <p className="font-volkhov text-black">Guarantee safe & secure checkout</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
