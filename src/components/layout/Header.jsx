import React, { useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import logo from '../../assets/medias/logo.png'



// Static nav data — edit here to change links
const NAV_ITEMS = [
  { label: "Home", href: "/", active: true },
  { label: "About Us", href: "/about-us" },
  {
    label: "Products",
    href: "#",
    dropdown: [
      { label: "Product One", href: "#" },
      { label: "Product Two", href: "#" },
      { label: "Product Three", href: "#" },
    ],
  },
  { label: "Industries", href: "#" },
  { label: "Quality", href: "#" },
  { label: "Sustainability", href: "#" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-100 bg-white shadow-sm relative z-50">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex shrink-0 items-center">
          <img src={logo} alt="pratap-group-logo" width="100px" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {NAV_ITEMS.map((item) =>
            item.dropdown ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDesktopDropdownOpen(true)}
                onMouseLeave={() => setDesktopDropdownOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-sm font-medium text-gray-700 transition-colors hover:text-blue-700 xl:text-[15px]"
                  aria-expanded={desktopDropdownOpen}
                >
                  {item.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      desktopDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {desktopDropdownOpen && (
                  <div className="absolute left-0 top-full w-48 rounded-md border border-gray-100 bg-white py-2 shadow-lg">
                    {item.dropdown.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-700"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors xl:text-[15px] ${
                  item.active
                    ? "border-b-2 border-blue-700 text-blue-700 pb-1"
                    : "text-gray-700 hover:text-blue-700"
                }`}
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#"
          className="hidden shrink-0 items-center gap-2 rounded-full bg-blue-800 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-900 lg:inline-flex"
        >
          Get in Touch
          <ArrowRight size={16} />
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Nav Panel */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 border-t border-gray-100 px-4 pb-4 pt-2 sm:px-6">
          {NAV_ITEMS.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="flex flex-col">
                <button
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="flex items-center justify-between py-3 text-left text-sm font-medium text-gray-700"
                >
                  {item.label}
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${
                      mobileProductsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileProductsOpen && (
                  <div className="ml-3 flex flex-col gap-1 border-l border-gray-100 pl-3">
                    {item.dropdown.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        className="py-2 text-sm text-gray-600 hover:text-blue-700"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className={`py-3 text-sm font-medium ${
                  item.active ? "text-blue-700" : "text-gray-700 hover:text-blue-700"
                }`}
              >
                {item.label}
              </a>
            )
          )}

          <a
            href="#"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-blue-800 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-900"
          >
            Get in Touch
            <ArrowRight size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}