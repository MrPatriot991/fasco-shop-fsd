import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/header";
import { CartModal } from "@/widgets/cart";

export const MainLayout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-brand-white">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <CartModal />
    </>
  );
};
