import type { Product } from "./schema";

import img1 from "@/shared/assets/images/imag-home-card-1.jpg";
import img2 from "@/shared/assets/images/imag-home-card-2.jpg";
import img3 from "@/shared/assets/images/imag-home-card-3.jpg";
import img4 from "@/shared/assets/images/imag-home-card-4.jpg";
import img5 from "@/shared/assets/images/imag-home-card-5.jpg";
import img6 from "@/shared/assets/images/imag-home-card-6.jpg";

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 9991,
    title: "Shiny Dress",
    brand: "Al Karam",
    price: 595.5,
    image: img1,
    rating: { rate: 5, count: 244.1 },
    size: ["s", "m", "l"],
    category: "women's clothing",
    description: "Original design from FASCO layout",
  },
  {
    id: 9992,
    title: "Long Dress",
    brand: "Al Karam",
    price: 390,
    image: img2,
    rating: { rate: 4, count: 4.1 },
    size: ["s", "m", "l", "xl"],
    category: "women's clothing",
    description: "Original design from FASCO layout",
  },
  {
    id: 9993,
    title: "Full Sweater",
    brand: "Al Karam",
    price: 90,
    image: img3,
    rating: { rate: 5, count: 250.1 },
    size: ["s", "m", "l", "xl"],
    category: "women's clothing",
    description: "Original design from FASCO layout",
  },
  {
    id: 9994,
    title: "White Dress",
    brand: "Al Karam",
    price: 150,
    image: img4,
    rating: { rate: 4, count: 5.1 },
    size: ["s", "m", "l", "xl"],
    category: "women's clothing",
    description: "Original design from FASCO layout",
  },
  {
    id: 9995,
    title: "Colorful Dress",
    brand: "Al Karam",
    price: 50,
    image: img5,
    rating: { rate: 3, count: 300.1 },
    size: ["s", "m", "l", "xl"],
    category: "women's clothing",
    description: "Original design from FASCO layout",
  },
  {
    id: 9996,
    title: "White Shirt",
    brand: "Al Karam",
    price: 70,
    image: img6,
    rating: { rate: 4, count: 6.1 },
    size: ["s", "m", "l", "xl"],
    category: "women's clothing",
    description: "Original design from FASCO layout",
  },
];
