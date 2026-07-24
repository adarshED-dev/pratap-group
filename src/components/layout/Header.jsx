import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
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

// Combined, in reading order, for the mobile sidebar
const ALL_LINKS = [...leftLinks, ...rightLinks];

const brand = {
  name: "FILTECH\nFABRIC\nPVT LTD.",
  logoLetter: "F",
};

// Pass transparentAtTop="yes" on pages where the header should start
// see-through (e.g. sitting over a hero image) and turn white once the
// user scrolls down. Omit it (or pass anything else) and the header
// stays white/solid at all times, regardless of scroll position.
export default function Header({ transparentAtTop = "no" }) {
  const [productsOpen, setProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isTransparentMode = transparentAtTop === "yes";

  useEffect(() => {
    // No need to listen for scroll at all if this header is never
    // supposed to be transparent in the first place.
    if (!isTransparentMode) return;

    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll(); // set correct state immediately on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isTransparentMode]);

  // Lock body scroll while the sidebar is open, and let Escape close it
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  // Decide background/text styling:
  // - transparent mode + not scrolled  -> see-through bg, dark text (assumes a light hero) or adjust as needed
  // - transparent mode + scrolled      -> solid white bg + shadow
  // - non-transparent mode             -> always solid white bg + shadow
  const showSolidBg = !isTransparentMode || isScrolled;

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        showSolidBg ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex flex-row-reverse lg:flex-row page-width items-center justify-between py-4 px-5">
        {/* Left links — desktop only */}
        <div className="hidden md:flex items-center gap-8">
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

        {/* Mobile hamburger — left side on mobile so the logo stays centered */}
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          className="md:hidden text-[#2f2f2a] transition-transform duration-300 active:scale-90"
        >
          <Menu size={24} />
        </button>

        {/* Center logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
           <img src={logo} width="25%" className="m-auto" />
        </a>

        {/* Right links — desktop only */}
        <div className="hidden md:flex items-center gap-8">
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

        {/* Spacer on mobile so the logo stays centered against the hamburger's width */}
        <div className="md:hidden w-6" aria-hidden="true" />
      </nav>

      {/* Backdrop overlay */}
      <div
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
        className={`md:hidden fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile sidebar */}
      <aside
        className={`md:hidden fixed top-0 left-0 z-[70] h-full w-[78%] max-w-xs bg-white shadow-2xl transition-transform duration-300 ease-out ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <img src={logo} alt="logo" className="w-20 h-auto" />
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="text-[#2f2f2a] transition-transform duration-300 active:scale-90"
          >
            <X size={22} />
          </button>
        </div>

        <ul className="flex flex-col py-2">
          {ALL_LINKS.map((link, i) => (
            <li key={i} className="border-b border-gray-50 last:border-b-0">
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block w-full px-5 py-4 text-sm font-semibold text-[#2f2f2a] transition-colors duration-300 hover:bg-gray-50 hover:text-[#1e2a52]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </header>
  );
}