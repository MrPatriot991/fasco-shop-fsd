import { Container } from "@/shared/ui";

export const Footer = () => {
  return (
    <footer className="bg-brand-white py-10">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <div className="font-volkhov text-4xl text-brand-dark">FASCO</div>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-4 text-center text-sm sm:grid-cols-3 lg:mt-0 lg:ml-auto lg:flex">
              <li>
                <a href="#" className="text-brand-dark">
                  Support Center
                </a>
              </li>
              <li>
                <a href="#" className="text-brand-dark">
                  Invoicing
                </a>
              </li>
              <li>
                <a href="#" className="text-brand-dark">
                  Contract
                </a>
              </li>
              <li>
                <a href="#" className="text-brand-dark">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-brand-dark">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-brand-dark">
                  FAQ,s
                </a>
              </li>
            </ul>
          </div>
          <div className=" pt-6 text-center text-sm text-brand-dark">
            Copyright © 2022 Xpro. All Rights Reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
};
