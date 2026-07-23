import { useEffect, useState } from "react";
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

// Pass transparentAtTop="yes" on pages where the header should start
// see-through (e.g. sitting over a hero image) and turn white once the
// user scrolls down. Omit it (or pass anything else) and the header
// stays white/solid at all times, regardless of scroll position.
export default function Header({ transparentAtTop = "no" }) {
  const [productsOpen, setProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  // Decide background/text styling:
  // - transparent mode + not scrolled  -> see-through bg, dark text (assumes a light hero) or adjust as needed
  // - transparent mode + scrolled      -> solid white bg + shadow
  // - non-transparent mode             -> always solid white bg + shadow
  const showSolidBg = !isTransparentMode || isScrolled;

  return (
    <header
      className={`w-full transition-all duration-300 ${
        showSolidBg ? "bg-white shadow-md" : "bg-transparent fixed top-0 z-50"
      }`}
    >
      <nav className="mx-auto flex page-width items-center justify-between py-4 px-5">
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