"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const productLinks = [
  { href: "/products/ointment-manufacturing-plant", label: "Ointment Manufacturing Plant" },
  { href: "/products/liquid-oral-processing-plant", label: "Liquid Oral Processing Plant" },
  { href: "/products/pw-wfi-storage-tanks", label: "PW & WFI Storage Tanks" },
  { href: "/products/stainless-steel-air-tray-dryer", label: "Stainless Steel Air Tray Dryer" },
  { href: "/products/stainless-steel-octagonal-blender", label: "Stainless Steel Octagonal Blender" },
  { href: "/products/multi-mill-machine", label: "Multi Mill Machine" },
  { href: "/products/stainless-steel-ipc-bin-container", label: "Stainless Steel IPC Bin Container" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If already on home page, scroll to top
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="bg-gradient-to-r from-orange-100 via-pink-50 to-purple-100 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-orange-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={handleLogoClick}>
            <img
              src="/images/logo.png"
              alt="Microtech Engineering"
              style={{ height: "45px", width: "auto", objectFit: "contain" }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-2">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}

            {/* Products dropdown */}
            <div className="relative group">
              <Link
                href="/products"
                className="flex items-center gap-1 px-4 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Products
                <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {/* Dropdown panel */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 min-w-[260px]">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 py-2 overflow-hidden">
                  {productLinks.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-gray-900 transition-colors"
                    >
                      {p.label}
                    </Link>
                  ))}
                  <div className="mx-4 my-2 border-t border-gray-100" />
                  <Link
                    href="/products"
                    className="block px-5 py-2.5 text-sm font-semibold text-orange-600 hover:bg-orange-50 transition-colors"
                  >
                    View All Products →
                  </Link>
                </div>
              </div>
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-all shadow-md hover:shadow-lg"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden" ref={mobileMenuRef}>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-50 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className={`w-6 h-6 text-gray-700 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`w-6 h-6 text-gray-700 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {isMobileMenuOpen && (
              <nav
                aria-label="Mobile navigation"
                className="absolute top-16 left-0 right-0 bg-gradient-to-r from-orange-100 via-pink-50 to-purple-100 backdrop-blur-md shadow-xl border-t border-orange-200/50 p-4 flex flex-col gap-2"
              >
                {navLinks.slice(0, 2).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all"
                  >
                    {link.label}
                  </Link>
                ))}
                {/* Mobile Products accordion */}
                <div>
                  <button
                    onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all"
                  >
                    Products
                    <svg className={`w-4 h-4 transition-transform duration-200 ${isMobileProductsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isMobileProductsOpen && (
                    <div className="ml-4 mt-1 flex flex-col gap-1">
                      {productLinks.map((p) => (
                        <Link
                          key={p.href}
                          href={p.href}
                          onClick={() => { setIsMobileMenuOpen(false); setIsMobileProductsOpen(false); }}
                          className="px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all"
                        >
                          {p.label}
                        </Link>
                      ))}
                      <Link
                        href="/products"
                        onClick={() => { setIsMobileMenuOpen(false); setIsMobileProductsOpen(false); }}
                        className="px-4 py-2.5 text-sm font-semibold text-orange-600 hover:bg-orange-50 rounded-lg transition-all"
                      >
                        View All Products →
                      </Link>
                    </div>
                  )}
                </div>
                {navLinks.slice(2).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-2 px-4 py-3 bg-gray-900 text-white text-sm font-semibold rounded-full text-center hover:bg-gray-800 transition-all shadow-md"
                >
                  Get in Touch
                </Link>
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}