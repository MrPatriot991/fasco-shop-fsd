import { Outlet } from "react-router-dom";
import { ScrollToTopButton } from "@/features/scroll-to-top";
import { FloatingCartButton } from "@/widgets/cart";
import { Header } from "@/widgets/header";
import { CartModal } from "@/widgets/cart";

export const MainLayout = () => {
  return (
    <>
      <div className="relative flex flex-col min-h-screen bg-brand-white">
        <Header />
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
