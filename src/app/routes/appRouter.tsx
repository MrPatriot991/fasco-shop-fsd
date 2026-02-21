import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "@/pages/home";
import { AuthPage } from "@/pages/auth";
import { AuthLayout, MainLayout } from "@/app/layouts";
import { PageSkeleton } from "@/shared/ui/page-skeleton";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    hydrateFallbackElement: <PageSkeleton />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/shop",
        lazy: async () => {
          const m = await import("@/pages/shope");
          return { Component: m.Shop };
        },
      },
      {
        path: "/shop/:id",
        lazy: async () => {
          const m = await import("@/pages/product");
          return { Component: m.ProductPage };
        },
      },
      {
        path: "/cart",
        lazy: async () => {
          const m = await import("@/pages/cart");
          return { Component: m.Cart };
        },
      },
      {
        path: "/checkout",
        lazy: async () => {
          const m = await import("@/pages/checkout");
          return { Component: m.Checkout };
        },
      },
      {
        path: "/checkout/success",
        lazy: async () => {
          const m = await import("@/pages/checkout");
          return { Component: m.SuccessPage };
        },
      },
      {
        path: "/info",
        lazy: async () => {
          const m = await import("@/pages/info");
          return { Component: m.InfoPage };
        },
      },
      {
        path: "/wishlist",
        lazy: async () => {
          const m = await import("@/pages/wishlist");
          return { Component: m.Wishlist };
        },
      },
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
