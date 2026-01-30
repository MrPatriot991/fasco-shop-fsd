import { createBrowserRouter } from "react-router-dom";
import { AuthLayout, MainLayout } from "@/app/layouts";
import { HomePage } from "@/pages/home";
import { AuthPage } from "@/pages/auth";
import { ShopPage } from "@/pages/shope";
import { ProductPage } from "@/pages/product";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/shop", element: <ShopPage /> },
      { path: "/product/:id", element: <ProductPage /> },
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
