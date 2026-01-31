import type { RawProduct } from "./schema";

import img1 from "@/shared/assets/images/imag-home-card-1.jpg";
import img2 from "@/shared/assets/images/imag-home-card-2.jpg";
import img3 from "@/shared/assets/images/imag-home-card-3.jpg";
import img4 from "@/shared/assets/images/imag-home-card-4.jpg";
import img5 from "@/shared/assets/images/imag-home-card-5.jpg";
import img6 from "@/shared/assets/images/imag-home-card-6.jpg";
import img7 from "@/shared/assets/images/sl-sale-1.webp";
import img8 from "@/shared/assets/images/sl-sale-2.webp";
import img9 from "@/shared/assets/images/sl-sale-3.webp";
import img10 from "@/shared/assets/images/sl-sale-4.webp";
import img11 from "@/shared/assets/images/sl-sale-5.webp";

export const MOCK_PRODUCTS: RawProduct[] = [
  {
    id: 9991,
    title: "Shiny Dress",
    price: 595.5,
    image: img1,
    category: "women's clothing",
    description: "Original design from FASCO layout",
  },
  {
    id: 9992,
    title: "Long Dress",
    price: 390,
    image: img2,
    category: "women's clothing",
    description: "Original design from FASCO layout",
  },
  {
    id: 9993,
    title: "Full Sweater",
    price: 90,
    image: img3,
    category: "women's clothing",
    description: "Original design from FASCO layout",
  },
  {
    id: 9994,
    title: "White Dress",
    price: 150,
    image: img4,
    category: "women's clothing",
    description: "Original design from FASCO layout",
  },
  {
    id: 9995,
    title: "Colorful Dress",
    price: 50,
    image: img5,
    category: "women's clothing",
    description: "Original design from FASCO layout",
  },
  {
    id: 9996,
    title: "White Shirt",
    price: 70,
    image: img6,
    category: "women's clothing",
    description: "Original design from FASCO layout",
  },
  {
    id: 9997,
    title: "White Shirt",
    price: 270,
    image: img7,
    category: "women's clothing",
    description: "Original design from FASCO layout",
    isDiscount: true,
  },
  {
    id: 9998,
    title: "White Shirt",
    price: 150,
    image: img8,
    category: "women's clothing",
    description: "Original design from FASCO layout",
    isDiscount: true,
  },
  {
    id: 9999,
    title: "Polarised Sunglasses",
    price: 190,
    image: img9,
    category: "women's clothing",
    description: "Original design from FASCO layout",
    isDiscount: true,
  },
  {
    id: 10000,
    title: "Rockstar Jacket",
    price: 230,
    image: img10,
    category: "women's clothing",
    description: "Original design from FASCO layout",
    isDiscount: true,
  },
  {
    id: 10001,
    title: "Long-sleeve Coat",
    price: 106,
    image: img11,
    category: "women's clothing",
    description: "Original design from FASCO layout",
    isDiscount: true,
  },
];
