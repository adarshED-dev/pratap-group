import { useState } from "react";
import { ChevronDown } from "lucide-react";
import logo from '../../assets/medias/logo.png'



// -----------------------------------------------------------------------
// Static data
// -----------------------------------------------------------------------
const leftLinks = [
  { label: "About", href: "/about-us" },
  { label: "Our Infrastructure", href: "/our-infrastructure" },
];

const rightLinks = [
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact-us" },
];

const brand = {
  name: "FILTECH\nFABRIC\nPVT LTD.",
  logoLetter: "F",
};

export default function Header() {
  const [productsOpen, setProductsOpen] = useState(false);

  return (

    <header className="w-full bg-white">
      <nav className="mx-auto flex page-width items-center justify-between py-4">
        {/* Left links */}
        <div className="flex items-center gap-8">
          {leftLinks.map((link, i) =>
            link.hasDropdown ? (
              <div
                key={i}
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button className="flex items-center gap-1 text-sm text-[#2f2f2a] hover:text-[#1e2a52] transition-colors">
                  {link.label}
                  <ChevronDown size={14} />
                </button>
              </div>
            ) : (
              <a
                key={i}
                href={link.href}
                className="text-md text-[#2f2f2a] hover:text-[#1e2a52] transition-colors font-semibold"
              >
                {link.label}
              </a>
            )
          )}
        </div>

        {/* Center logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
           <img src={logo} width="25%" className="m-auto" />
        </a>

        {/* Right links */}
        <div className="flex items-center gap-8">
          {rightLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="text-md text-[#2f2f2a] hover:text-[#1e2a52] transition-colors font-semibold"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}