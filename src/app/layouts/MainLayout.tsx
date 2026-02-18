import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector, useScrollToTop } from "@/shared/lib/hooks";
import { fetchProducts, selectProductStatus } from "@/entities/product";
import { ScrollToTopButton } from "@/features/scroll-to-top";
import { FloatingCartButton } from "@/widgets/cart";
import { Header } from "@/widgets/header";
import { CartModal } from "@/widgets/cart";

export const MainLayout = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectProductStatus);
  useScrollToTop();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  return (
    <>
      <div className="relative flex flex-col min-h-screen bg-brand-white">
        <Header />
        <div className="h-1 w-full bg-linear-to-r from-[#FFF5F5] via-[#F3E8E8] to-[#E5DADA]" />
        <main>
          <Outlet />
        </main>
        <FloatingCartButton />
        <ScrollToTopButton />
      </div>
      <CartModal />
    </>
  );
};
