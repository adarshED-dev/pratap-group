import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

import mainImage from '../../assets/medias/main.png'
import topImage from '../../assets/medias/top.png'
import bottomleftImage from '../../assets/medias/main.png'
import bottomrightImage from '../../assets/medias/main.png'
// Static data — edit here
const SECTION = {
  eyebrow: "Our Infrastructure",
  heading: "Production Facility",
  description:
    "Our advanced manufacturing facility in West Bengal is equipped with state-of-the-art machinery and technology to ensure precision, efficiency and consistent quality.",
  checklist: [
    "Modern & Automated Machinery",
    "High Production Capacity",
    "Stringent Quality Control",
    "Skilled & Dedicated Workforce",
    "Environmentally Responsible Practices",
  ],
  cta: { label: "View Our Facility", href: "#" },
};

// Replace with your actual facility image paths
const IMAGES = {
  main: mainImage,
  topRight: topImage,
  bottomRight1: bottomleftImage,
  bottomRight2: bottomrightImage,
};

export default function ProductionFacility() {
  return (
    <section className="w-full bg-blue-50/40 py-12 sm:py-16">
      <div className="mx-auto page-width">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-8 xl:gap-12">
          {/* Left: text */}
          <div>
            <p className="text-xs font-bold tracking-wider text-blue-700 sm:text-sm">
              {SECTION.eyebrow}
            </p>
            <h2 className="mt-2 text-xl font-extrabold text-blue-950 sm:text-2xl">
              {SECTION.heading}
            </h2>
            <div className="mt-3 h-1 w-8 rounded-full bg-blue-700" />

            <p className="mt-4 text-xs leading-relaxed text-gray-500 sm:text-sm">
              {SECTION.description}
            </p>

            <ul className="mt-5 flex flex-col gap-2.5 sm:mt-6">
              {SECTION.checklist.map((item, index) => (
                <li key={index} className="flex items-center gap-2.5">
                  <CheckCircle2
                    size={16}
                    className="shrink-0 text-blue-700"
                    strokeWidth={2}
                  />
                  <span className="text-xs text-gray-700 sm:text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={SECTION.cta.href}
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-blue-800 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-blue-900 sm:mt-7 sm:text-sm"
            >
              {SECTION.cta.label}
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Right: image gallery */}
          <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-[1.6fr_1fr]">
            {/* Large image */}
            <div className="overflow-hidden rounded-2xl">
              <img
                src={IMAGES.main}
                alt="Pratap production facility floor"
                className="h-full max-h-[520px] w-full object-cover md:max-h-none"
              />
            </div>

            {/* Right stack: top wide image + two smaller images */}
            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={IMAGES.topRight}
                  alt="Pratap production line aisle"
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={IMAGES.bottomRight1}
                    alt="Pratap fabric rolls close-up"
                    className="aspect-square w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={IMAGES.bottomRight2}
                    alt="Pratap woven fabric roll close-up"
                    className="aspect-square w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}