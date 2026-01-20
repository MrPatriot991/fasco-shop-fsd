import { Outlet } from "react-router-dom";
import { Container } from "@/shared/ui";
import { Header } from "@/widgets/header";

export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-white">
      <Header />
      <Container>
        <main>
          <Outlet />
        </main>
      </Container>
    </div>
  );
};
