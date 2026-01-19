import { Button, Container } from "@/shared/ui";
import { navigation } from "@/shared/config";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-brand-white/80 backdrop-blur-md border-b border-brand-surface">
      <Container>
        <div className="flex justify-between items-center py-6 gap-10">
          <h1 className="font-volkhov text-5xl text-brand-dark">FASCO</h1>
          <nav className="ml-auto">
            <ul className="flex gap-12 ">
              {navigation.map((item) => (
                <li key={item.path}>
                  <a href="" className="hover:text-brand-dark duration-300 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <button className="hover:text-brand-dark duration-300 transition-colors cursor-pointer px-4">Sign In</button>
            <Button size="md-2">Sign Up</Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
