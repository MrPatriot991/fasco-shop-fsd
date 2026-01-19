import { Container } from "@/shared/ui";
import { Header } from "@/widgets/header";
import { ProductList } from "@/widgets/product-list";

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-brand-white">
      <Header />
      <Container>
        <main>
          <ProductList />
        </main>
      </Container>
    </div>
  );
};
