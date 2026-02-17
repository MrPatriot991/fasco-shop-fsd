import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "@/pages/home";
import { AuthPage } from "@/pages/auth";
import { ShopPage } from "@/pages/shope";
import { ProductPage } from "@/pages/product";
import { CartPage } from "@/pages/cart";
import { CheckoutPage } from "@/pages/checkout";
import { AuthLayout, MainLayout } from "@/app/layouts";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/shop", element: <ShopPage /> },
      { path: "/shop/:id", element: <ProductPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/checkout", element: <CheckoutPage /> },
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
