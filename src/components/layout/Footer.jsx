import React from "react";
import {
  ArrowRight,
  ArrowUp,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

import logo from '../../assets/medias/logo.png'

// Static data — edit here
const CTA = {
  line1: "Ready to build stronger solutions together?",
  line2: "Let's create value. Let's grow together.",
  button: { label: "Get in Touch", href: "#" },
};

const COMPANY = {
  name: "Pratap",
  description:
    "Leading manufacturer of HDPE / PP Woven Fabric & Sacks, Non-woven Fabrics, PE Liner Bags and Aluminium Composite Panels (ACP) in West Bengal."
};

const QUICK_LINKS = {
  title: "Quick Links",
  links: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Products", href: "/products" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Our Infrastructure", href: "/our-infrastructure" }
  ],
};

const PRODUCTS = {
  title: "Our Products",
  links: [
    { label: "HDPE / PP Woven Fabric & Sacks", href: "/products?hdpe-pp-woven-fabric-&-sacks" },
    { label: "Non-woven Fabrics", href: "/products?non-woven-fabrics" },
    { label: "PE Liner Bags", href: "/products?pe-liner-bags" },
    { label: "Aluminium Composite Panels (ACP)", href: "/products?aluminium-composite-panels" },
    { label: "Custom Solutions", href: "/products?custom-solutions" },
  ],
};

const INDUSTRIES = {
  title: "Industries",
  links: [
    { label: "Agriculture", href: "#" },
    { label: "Chemicals", href: "#" },
    { label: "Construction", href: "#" },
    { label: "Food", href: "#" },
    { label: "Logistics", href: "#" },
  ],
};

const CONTACT = {
  title: "Get in Touch",
  address: "Vill. – Haripur, P.O. – Panchla, Howrah – 711322, West Bengal, India",
  phone: "+91 33 2684 1354",
  email: "info@Pratap.in",
  cta: { label: "Send Enquiry", href: "#" },
};

const LEGAL = {
  copyright: "© 2024 Pratap. All Rights Reserved.",
  links: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-r from-slate-50 via-slate-50 to-slate-50 text-white bg-white">
      {/* Decorative background accents */}
      <div className="pointer-events-none absolute -left-24 -top-24 -z-0 h-72 w-72 rounded-full bg-blue-700/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-10 -z-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

      {/* Main footer content */}
      <div className="relative page-width py-10 sm:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {/* Company */}
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="text-xl font-bold italic tracking-tight text-white sm:text-2xl">
              <img src={logo} width="40%" />
            </span>
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-[#223d8e] sm:text-[13px]">
              {COMPANY.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold sm:text-base text-[#223d8e]">
              {QUICK_LINKS.title}
            </h3>
            <ul className="mt-3 flex flex-col gap-2">
              {QUICK_LINKS.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-xs text-[#223d8e] transition-colors hover:text-blue-300 sm:text-[13px]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h3 className="text-sm font-bold text-[#223d8e] sm:text-base">
              {PRODUCTS.title}
            </h3>
            <ul className="mt-3 flex flex-col gap-2">
              {PRODUCTS.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-xs text-[#223d8e] transition-colors hover:text-blue-300 sm:text-[13px]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-sm font-bold text-[#223d8e] sm:text-base">
              {INDUSTRIES.title}
            </h3>
            <ul className="mt-3 flex flex-col gap-2">
              {INDUSTRIES.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-xs text-[#223d8e] transition-colors hover:text-blue-300 sm:text-[13px]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-sm font-bold text-[#223d8e] sm:text-base">
              {CONTACT.title}
            </h3>
            <div className="mt-3 flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0 text-[#223d8e]" />
                <p className="text-xs leading-snug text-[#223d8e] sm:text-[13px]">
                  {CONTACT.address}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={15} className="shrink-0 text-[#223d8e]" />
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="text-xs text-[#223d8e] hover:text-blue-300 sm:text-[13px]"
                >
                  {CONTACT.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={15} className="shrink-0 text-[#223d8e]" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-xs text-[#223d8e] hover:text-blue-300 sm:text-[13px]"
                >
                  {CONTACT.email}
                </a>
              </div>
            </div>

            <a
              href={CONTACT.cta.href}
              className="group mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-blue-900 transition-colors hover:bg-blue-100"
            >
              {CONTACT.cta.label}
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10 py-4 bg-[#f9f9f9]">
        <div className="flex page-width flex-col-reverse items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-[11px] text-[#223d8e] sm:text-xs">
            {LEGAL.copyright}
          </p>

          <div className="flex items-center gap-4">
            {LEGAL.links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-[11px] hover:text-white sm:text-xs text-[#223d8e]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="absolute -top-5 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-blue-900 text-white shadow-md transition-colors hover:bg-blue-800 sm:right-6 lg:right-10"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}