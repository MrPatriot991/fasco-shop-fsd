import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "@/pages/home";
import { AuthPage } from "@/pages/auth";
import { Shop } from "@/pages/shope";
import { ProductPage } from "@/pages/product";
import { Cart } from "@/pages/cart";
import { Checkout, SuccessPage } from "@/pages/checkout";
import { InfoPage } from "@/pages/info";
import { AuthLayout, MainLayout } from "@/app/layouts";
import { Wishlist } from "@/pages/wishlist";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/shop", element: <Shop /> },
      { path: "/shop/:id", element: <ProductPage /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/checkout/success", element: <SuccessPage /> },
      { path: "/info", element: <InfoPage /> },
      { path: "/wishlist", element: <Wishlist /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "/sign-in", element: <AuthPage /> },
      { path: "/sign-up", element: <AuthPage /> },
      { path: "/forgot-password", element: <AuthPage /> },
    ],
  },
]);
