import { createBrowserRouter } from "react-router-dom";
import { AuthLayout, MainLayout } from "@/app/layouts";
import { PageSkeleton } from "@/shared/ui/page-skeleton";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    hydrateFallbackElement: <PageSkeleton />,
    children: [
      {
        index: true,
        lazy: async () => {
          const m = await import("@/pages/home");
          return { Component: m.HomePage };
        },
      },
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
          return { Component: m.Product };
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
      {
        path: "/profile",
        lazy: async () => {
          const m = await import("@/pages/profile");
          return { Component: m.Profile };
        },
      },
    ],
  },
  {
    element: <AuthLayout />,
    hydrateFallbackElement: <PageSkeleton />,
    children: [
      {
        path: "/sign-in",
        lazy: async () => {
          const m = await import("@/pages/auth");
          return { Component: m.AuthPage };
        },
      },
      {
        path: "/sign-up",
        lazy: async () => {
          const m = await import("@/pages/auth");
          return { Component: m.AuthPage };
        },
      },
      {
        path: "/forgot-password",
        lazy: async () => {
          const m = await import("@/pages/auth");
          return { Component: m.AuthPage };
        },
      },
    ],
  },
]);
