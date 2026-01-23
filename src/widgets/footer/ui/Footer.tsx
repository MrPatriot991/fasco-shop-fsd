import { Container } from "@/shared/ui";

export const Footer = () => {
  return (
    <footer className="bg-brand-white py-8">
      <Container>
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <div className="font-volkhov text-5xl text-brand-dark">FASCO</div>
            <ul className="flex gap-5">
              <li>Support Center</li>
              <li>Invoicing</li>
              <li>Contract</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>FAQ,s</li>
            </ul>
          </div>
          <div className="text-center pt-10 pb-4 text-brand-dark">
            <p>Copyright © 2022 Xpro . All Rights Reseved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
