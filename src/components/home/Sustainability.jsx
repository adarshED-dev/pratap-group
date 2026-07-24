import React from "react";
import { Leaf, Droplets, Recycle, ArrowRight } from "lucide-react";

import csrBanner from '../../assets/medias/csrbanner.png'

// Static data — edit here
const SUSTAINABILITY = {
  eyebrow: "Sustainability",
  headingLine1: "Better for the planet.",
  headingLine2: "Better for the future.",
  description:
    "We believe in responsible manufacturing. Our processes are designed to reduce environmental impact and promote a sustainable tomorrow.",
  cta: { label: "Our Sustainability Commitment", href: "#" },
  // Replace with your actual banner image path
  image: csrBanner,
  imageAlt: "Hands holding a young plant in soil",
  points: [
    { icon: Leaf, title: "Eco-friendly\nMaterials" },
    { icon: Droplets, title: "Energy Efficient\nProcesses" },
    { icon: Recycle, title: "Reducing Waste,\nCreating Value" },
  ],
};

export default function Sustainability() {
  return (
    <section className="relative w-full">
      {/* Image sets the container's natural height */}
      <img
        src={SUSTAINABILITY.image}
        alt={SUSTAINABILITY.imageAlt}
        className="block h-auto w-full object-cover"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent sm:hidden" />

      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center page-width ">
        <div className="w-full">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10 xl:gap-16">
            {/* Text block */}
            <div className="max-w-xs sm:max-w-sm">
              <p className="text-[10px] font-bold tracking-wider text-emerald-300 sm:text-xs">
                {SUSTAINABILITY.eyebrow}
              </p>
              <h2 className="mt-1.5 text-lg font-extrabold leading-tight text-white sm:mt-2 sm:text-2xl md:text-3xl">
                {SUSTAINABILITY.headingLine1}
                <br />
                {SUSTAINABILITY.headingLine2}
              </h2>
              <p className="mt-2 text-[11px] leading-relaxed text-gray-300 sm:mt-3 sm:text-xs md:text-sm">
                {SUSTAINABILITY.description}
              </p>

              {/* <a
                href={SUSTAINABILITY.cta.href}
                className="group mt-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-4 py-2 text-[11px] font-semibold text-white backdrop-blur transition-colors hover:bg-white hover:text-slate-900 sm:mt-6 sm:px-5 sm:py-2.5 sm:text-xs md:text-sm"
              >
                {SUSTAINABILITY.cta.label}
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a> */}
            </div>

            {/* Points */}
            <div className="flex flex-wrap gap-x-6 gap-y-4 border-t border-white/15 pt-4 sm:gap-x-8 lg:flex-nowrap lg:divide-x lg:divide-white/20 lg:border-t-0 lg:pt-0">
              {SUSTAINABILITY.points.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div
                    key={index}
                    className="flex min-w-[90px] flex-col items-center text-center lg:px-5 lg:first:pl-0"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 sm:h-11 sm:w-11">
                      <Icon
                        className="h-4 w-4 text-white sm:h-5 sm:w-5"
                        strokeWidth={1.5}
                      />
                    </div>
                    <p className="mt-2 whitespace-pre-line text-[10px] uppercase tracking-[0.6px] leading-snug text-white sm:text-xs">
                      {point.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}