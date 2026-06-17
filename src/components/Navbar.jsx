import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { logoUrl } from "../constants/assets";

const productItems = [
  {
    label: "Produk Asuransi",
    to: "/products/solusi-asuransi",
  },
  {
    label: "Daftar Asuransi",
    to: "/products/daftar-asuransi",
  },
  {
    label: "Claim Asuransi",
    to: "/products/claim-asuransi",
  },
];

const aboutItems = [
  {
    label: "Profile",
    to: "/about/profile",
  },
  {
    label: "Direksi",
    to: "/about/direksi",
  },
  {
    label: "GCG",
    to: "/about/gcg",
  },
];

const navLinkBase = "font-body-md text-body-md transition-colors duration-200";

const navLinkInactive = "text-on-surface-variant hover:text-secondary";

const navLinkActive =
  "border-b-2 border-secondary-fixed pb-1 font-bold text-primary";

export default function Navbar() {
  const location = useLocation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const isProductsActive = location.pathname.startsWith("/products");
  const isAboutActive = location.pathname.startsWith("/about");

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-outline-variant/30 bg-surface/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-container-max items-center justify-between px-margin-mobile md:px-margin-desktop">
        <Link to="/" className="flex items-center gap-4">
          <img
            src={logoUrl}
            alt="Aman Jiwa Insurance Logo"
            className="h-12 w-auto object-contain"
          />

          <span className="font-headline-md text-headline-md font-bold text-primary">
            Aman Jiwa Insurance
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? navLinkActive : navLinkInactive}`
            }
          >
            Beranda
          </NavLink>

          <DropdownNav
            label="About Us"
            items={aboutItems}
            isActive={isAboutActive}
            isOpen={isAboutOpen}
            setIsOpen={setIsAboutOpen}
          />

          <DropdownNav
            label="Products"
            items={productItems}
            isActive={isProductsActive}
            isOpen={isProductsOpen}
            setIsOpen={setIsProductsOpen}
          />

          <NavLink
            to="/claims"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? navLinkActive : navLinkInactive}`
            }
          >
            Review
          </NavLink>

          <NavLink
            to="/blog-edukasi"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? navLinkActive : navLinkInactive}`
            }
          >
            Blog & Edukasi
          </NavLink>
        </div>

        {/* <div className="hidden md:block">
          <button
            type="button"
            className="rounded bg-primary px-6 py-2.5 font-bold text-on-primary shadow-sm transition-all hover:bg-primary-container active:opacity-80"
          >
            Konsultasi Gratis
          </button>
        </div> */}

        <button
          type="button"
          className="p-2 text-primary md:hidden"
          onClick={() => setIsMobileMenuOpen((current) => !current)}
        >
          <span className="material-symbols-outlined">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-outline-variant/30 bg-white px-margin-mobile py-4 md:hidden">
          <div className="flex flex-col gap-2">
            <MobileNavLink to="/" label="Beranda" />

            <MobileSection title="Products" items={productItems} />

            <MobileSection title="About Us" items={aboutItems} />

            <MobileNavLink to="/claims" label="Klaim" />
            <MobileNavLink to="/blog" label="Blog" />

            <button
              type="button"
              className="mt-4 rounded bg-primary px-6 py-2.5 font-bold text-on-primary"
            >
              Konsultasi Gratis
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

function DropdownNav({ label, items, isActive, isOpen, setIsOpen }) {
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        className={`${navLinkBase} flex items-center gap-1 ${
          isActive ? navLinkActive : navLinkInactive
        }`}
        onClick={() => setIsOpen((current) => !current)}
      >
        {label}
        <span className="material-symbols-outlined text-[20px]">
          expand_more
        </span>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full pt-4">
          <div className="w-56 overflow-hidden rounded-xl border border-outline-variant/30 bg-white py-2 shadow-xl">
            {items.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `block px-5 py-3 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-secondary-container text-primary"
                      : "text-on-surface-variant hover:bg-surface-container-low hover:text-primary"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileSection({ title, items }) {
  return (
    <div className="pt-2">
      <div className="mb-2 text-sm font-bold text-primary">{title}</div>

      <div className="ml-4 flex flex-col gap-1">
        {items.map((item) => (
          <MobileNavLink key={item.to} to={item.to} label={item.label} />
        ))}
      </div>
    </div>
  );
}

function MobileNavLink({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `rounded-lg px-3 py-2 text-sm font-semibold ${
          isActive
            ? "bg-secondary-container text-primary"
            : "text-on-surface-variant hover:bg-surface-container-low"
        }`
      }
    >
      {label}
    </NavLink>
  );
}
