import React from "react";
import { ArrowRight, LayoutGrid } from "lucide-react";

import wovenSackImage from '../../assets/medias/woven-sack.png'
import nonWovenImage from '../../assets/medias/non-woven-fabric.png'
import preLinerImage from '../../assets/medias/pe-liner-bag.png'
import acpImage from '../../assets/medias/acp.png'


// Static data — edit here
const SECTION = {
  eyebrow: "Our Product Range",
  heading: "Engineered for Strength. Designed for Performance.",
};

const PRODUCTS = [
  {
    image: wovenSackImage,
    title: "HDPE / PP Woven\nFabric & Sacks",
    description:
      "Durable, reliable and high-performance woven solutions for diverse industrial applications.",
    cta: "View Products",
    href: "#",
  },
  {
    image: nonWovenImage,
    title: "Non-woven\nFabrics",
    description:
      "Versatile and sustainable fabrics for multiple applications.",
    cta: "View Products",
    href: "#",
  },
  {
    image: preLinerImage,
    title: "PE Liner Bags",
    description: "Leak-proof protection for safe and secure packaging.",
    cta: "View Products",
    href: "#",
  },
  {
    image: acpImage,
    title: "Aluminium Composite\nPanels (ACP)",
    description:
      "Strong, lightweight and modern panels for architectural excellence.",
    cta: "View Products",
    href: "#",
  },
];

const CUSTOM_CARD = {
  title: "Custom Solutions",
  description: "Tailored products to meet your unique requirements.",
  cta: "Enquire Now",
  href: "#",
};

export default function ProductRange() {
  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="page-width mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-bold tracking-wider text-blue-700 sm:text-sm">
            {SECTION.eyebrow}
          </p>
          <h2 className="mt-2 text-xl font-extrabold text-blue-950 sm:text-2xl md:text-3xl">
            {SECTION.heading}
          </h2>
          <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-blue-700" />
        </div>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-5">
          {PRODUCTS.map((product, index) => (
            <div
              key={index}
              className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-gray-50">
                <img
                  src={product.image}
                  alt={product.title.replace("\n", " ")}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col px-4 py-4 sm:px-5 sm:py-5">
                <h3 className="whitespace-pre-line text-sm font-bold leading-snug text-blue-950 sm:text-base">
                  {product.title}
                </h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-gray-500 sm:text-[13px]">
                  {product.description}
                </p>
                <a
                  href={product.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 transition-colors hover:text-blue-900 sm:text-sm"
                >
                  {product.cta}
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          ))}

          {/* Custom Solutions dark card */}
          <div className="group flex flex-col justify-between rounded-xl bg-gradient-to-r from-slate-50 to-sky-50 px-5 py-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:col-span-2 sm:px-6 sm:py-7 lg:col-span-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-black/25 bg-black/5">
              <LayoutGrid className="h-5 w-5 text-black" strokeWidth={1.75} />
            </div>

            <div className="mt-6">
              <h3 className="text-base font-bold text-black sm:text-lg">
                {CUSTOM_CARD.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-black sm:text-[13px]">
                {CUSTOM_CARD.description}
              </p>
              <a
                href={CUSTOM_CARD.href}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-blank transition-colors hover:text-blue-200 sm:text-sm"
              >
                {CUSTOM_CARD.cta}
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>

        {/* View all button */}
        {/* <div className="mt-10 flex justify-center sm:mt-12">
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full border border-blue-700 px-6 py-3 text-xs font-semibold text-blue-800 transition-colors hover:bg-blue-800 hover:text-white sm:text-sm"
          >
            View All Products
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div> */}
      </div>
    </section>
  );
}