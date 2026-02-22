import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useScrollToTop } from "@/shared/lib/hooks";
import { ScrollToTopButton } from "@/features/scroll-to-top";
import { Header } from "@/widgets/header";
import { useEnsureProducts } from "@/entities/product/model/useEnsureProducts";

const FloatingCartButton = lazy(() =>
  import("@/widgets/cart/ui/FloatingCartButton").then((module) => ({
    default: module.FloatingCartButton,
  }))
);

const CartModal = lazy(() =>
  import("@/widgets/cart/ui/CartModal").then((module) => ({
    default: module.CartModal,
  }))
);

export const MainLayout = () => {
  useScrollToTop();

  useEnsureProducts();

  return (
    <>
      <div className="relative flex flex-col min-h-screen bg-brand-white">
        <Header />
        <div className="h-1 w-full bg-linear-to-r from-[#FFF5F5] via-[#F3E8E8] to-[#E5DADA]" />
        <main>
          <Outlet />
        </main>
        <Suspense fallback={null}>
          <FloatingCartButton />
        </Suspense>
        <ScrollToTopButton />
      </div>
      <Suspense fallback={null}>
        <CartModal />
      </Suspense>
    </>
  );
};
