import React from "react";
import { ArrowRight, MapPin } from "lucide-react";
import heroBanner from '../../assets/medias/heroBanner1.png'

// Static content — edit here
const HERO = {
  eyebrow: "Manufacturing Excellence Since Day One",
  headingLine1: "Stronger Materials.",
  headingLine2: "Better Solutions.",
  description:
    "Protap is a leading manufacturer of HDPE / PP Woven Fabric and Sacks, Non-woven Fabrics, PE Liner Bags and Aluminium Composite Panels (ACP) in West Bengal.",
  descriptionHighlight: "West Bengal.",
  primaryCta: { label: "Explore Our Products", href: "#" },
  secondaryCta: { label: "About Protap", href: "#" },
  location: "Proudly Manufacturing in West Bengal, India",
  // Replace with your actual banner image path
  image: heroBanner,
  imageAlt: "Protap woven sacks, liner bags and aluminium composite panels",
};

export default function Hero() {
  return (
    <section className="relative w-full">
      {/* Image sets the container's natural height — no fixed-height wrapper */}
      <img
        src={HERO.image}
        alt={HERO.imageAlt}
        className="block h-auto w-full object-cover"
      />

      {/* Readability gradient over the image */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent sm:from-white sm:via-white/70 sm:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent sm:hidden" />

      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <p className="text-xs font-bold tracking-wider text-blue-700 sm:text-sm">
              {HERO.eyebrow}
            </p>

            <h1 className="mt-2 text-2xl font-extrabold leading-tight text-gray-900 xs:text-3xl sm:mt-3 sm:text-4xl md:text-5xl">
              {HERO.headingLine1}
              <br />
              <span className="text-blue-600">{HERO.headingLine2}</span>
            </h1>

            <p className="mt-3 max-w-md text-xs text-gray-600 sm:mt-4 sm:text-sm md:text-base">
              {HERO.description.replace(HERO.descriptionHighlight, "")}
              <span className="font-semibold text-gray-900">
                {HERO.descriptionHighlight}
              </span>
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3 sm:mt-6 sm:gap-4">
              <a
                href={HERO.primaryCta.href}
                className="inline-flex items-center gap-2 rounded-full bg-blue-800 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-900 sm:px-6 sm:py-3 sm:text-sm"
              >
                {HERO.primaryCta.label}
                <ArrowRight size={16} />
              </a>

              <a
                href={HERO.secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-full border border-blue-800 bg-white/70 px-4 py-2 text-xs font-semibold text-blue-900 backdrop-blur transition-colors hover:bg-white sm:px-6 sm:py-3 sm:text-sm"
              >
                {HERO.secondaryCta.label}
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="mt-4 flex items-center gap-1.5 text-xs text-gray-600 sm:mt-6 sm:text-sm">
              <MapPin size={14} className="shrink-0 text-blue-700" />
              <span>{HERO.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}