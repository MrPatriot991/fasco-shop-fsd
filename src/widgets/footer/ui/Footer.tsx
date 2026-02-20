import { NavLink } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";
import { Dropdown } from "@/shared/ui/dropdown";
import { FOOTER_NAV, AUTH_NAV } from "@/shared/config";
import { useAppSelector } from "@/shared/lib/hooks";
import { selectIsAuthenticated } from "@/features/auth/model";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "Twitter", href: "https://x.com", icon: Twitter },
];

export const Footer = () => {
  const isAuth = useAppSelector(selectIsAuthenticated);
  const navItems = isAuth ? AUTH_NAV : FOOTER_NAV;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-surface bg-linear-to-b from-brand-white to-slate-50/80">
      <Container>
        <div className="py-10 md:py-12">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-8">
            <section className="max-w-sm space-y-4">
              <p className="font-volkhov text-3xl text-brand-dark md:text-4xl">FASCO</p>
              <p className="text-sm leading-relaxed text-brand-gray">
                Curated fashion picks and everyday essentials with fast delivery and clean checkout.
              </p>
              <Button asChild variant="outlineDark" size="none" className="h-10 px-4 text-sm">
                <NavLink to="/shop">Explore Catalog</NavLink>
              </Button>
            </section>

            <section>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gray">
                Navigation
              </p>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-3 lg:grid-cols-1">
                {navItems.map(({ label, path }, i) => (
                  <li key={i}>
                    {path === "/pages" ? (
                      <Dropdown
                        label="Pages"
                        items={FOOTER_NAV}
                        direction="up"
                        dropdownClassName="w-56"
                        className="py-0"
                        buttonClassName="pl-0 text-sm font-normal"
                      />
                    ) : (
                      <Button asChild variant="linkPlain" size="none" className="text-sm">
                        <NavLink to={path}>{label}</NavLink>
                      </Button>
                    )}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gray">
                Follow Us
              </p>
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-surface bg-brand-white text-brand-dark transition-colors duration-300 hover:border-brand-black hover:text-brand-black"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-brand-surface pt-5 text-xs text-brand-gray sm:flex-row sm:items-center sm:justify-between">
            <p>Copyright � {currentYear} FASCO. All Rights Reserved.</p>
            <p>Designed for modern shopping experiences.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

