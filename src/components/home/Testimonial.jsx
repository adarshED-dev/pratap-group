import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

// Static data — edit here
const SECTION = {
  eyebrow: "Trusted by 500+ Businesses",
  headingLine1: "What our clients say",
  headingLine2: "about us.",
  cta: { label: "View All Testimonials", href: "#" },
};

const TESTIMONIALS = [
  {
    quote:
      "Protap has been our trusted partner for over 5 years. Their product quality and timely delivery are unmatched.",
    name: "Rajesh Agarwal",
    role: "Procurement Head, ABC Industries",
  },
  {
    quote:
      "The consistency in quality and their responsiveness to our custom requirements sets Protap apart from other suppliers.",
    name: "Sunita Mehra",
    role: "Operations Manager, Vertex Textiles",
  },
  {
    quote:
      "From bulk packaging to specialized liner bags, Protap has never let us down. A truly dependable manufacturing partner.",
    name: "Karan Malhotra",
    role: "Supply Chain Lead, Horizon Foods",
  },
  {
    quote:
      "Their team's technical expertise helped us solve packaging challenges we'd struggled with for years.",
    name: "Ayesha Khan",
    role: "Plant Head, Novatek Chemicals",
  },
  {
    quote:
      "Reliable, professional and quality-driven — Protap has become an extension of our own manufacturing process.",
    name: "Vikram Nair",
    role: "Director, Coastal Construction Co.",
  },
];

const CLIENTS = {
  eyebrow: "Our Valued Clients",
  logos: [
    { name: "ITC Limited", image: "/clients/itc-limited.png" },
    { name: "Aditya Birla Group", image: "/clients/aditya-birla-group.png" },
    { name: "Dalmia Bharat Group", image: "/clients/dalmia-bharat-group.png" },
    { name: "Berger Paints", image: "/clients/berger-paints.png" },
  ],
  footnote: "More than 500+ happy clients across India",
};

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrev = () =>
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));

  const goNext = () =>
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));

  const active = TESTIMONIALS[activeIndex];

  return (
    <section className="w-full border-y border-gray-100 bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[auto_1fr_auto] lg:gap-6 xl:gap-10">
          {/* Left: heading + CTA */}
          <div className="lg:w-56 xl:w-64">
            <p className="text-[10px] font-bold tracking-wider text-blue-700 sm:text-xs">
              {SECTION.eyebrow}
            </p>
            <h2 className="mt-2 text-lg font-extrabold leading-snug text-blue-950 sm:text-xl md:text-2xl">
              {SECTION.headingLine1}
              <br />
              {SECTION.headingLine2}
            </h2>
            <div className="mt-3 h-1 w-8 rounded-full bg-blue-700" />

            <a
              href={SECTION.cta.href}
              className="group mt-5 inline-flex items-center gap-2 rounded-full bg-blue-800 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-blue-900 sm:text-sm"
            >
              {SECTION.cta.label}
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Middle: testimonial carousel */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous testimonial"
              className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:border-blue-700 hover:text-blue-700 sm:flex"
            >
              <ArrowLeft size={16} />
            </button>

            <div className="flex-1 rounded-2xl bg-gray-50 px-5 py-6 sm:px-8 sm:py-7">
              <Quote className="h-6 w-6 text-gray-300 sm:h-7 sm:w-7" fill="currentColor" strokeWidth={0} />

              <p className="mt-3 min-h-[3.5rem] text-xs leading-relaxed text-gray-600 sm:mt-4 sm:text-sm md:text-base">
                {active.quote}
              </p>

              <p className="mt-4 text-xs font-bold text-blue-950 sm:mt-5 sm:text-sm">
                – {active.name}
              </p>
              <p className="text-[11px] text-gray-500 sm:text-xs">{active.role}</p>

              {/* Dots */}
              <div className="mt-5 flex items-center gap-1.5 sm:mt-6">
                {TESTIMONIALS.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "w-5 bg-blue-700"
                        : "w-1.5 bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next testimonial"
              className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:border-blue-700 hover:text-blue-700 sm:flex"
            >
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Mobile-only prev/next controls */}
          <div className="flex items-center justify-center gap-4 sm:hidden">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-blue-700 hover:text-blue-700"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-blue-700 hover:text-blue-700"
            >
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Right: client logos */}
          <div className="lg:w-64 xl:w-72">
            <p className="text-[10px] font-bold tracking-wider text-blue-700 sm:text-xs">
              {CLIENTS.eyebrow}
            </p>

            <div className="mt-3 grid grid-cols-4 gap-2 sm:mt-4 sm:gap-3 lg:grid-cols-2">
              {CLIENTS.logos.map((client, index) => (
                <div
                  key={index}
                  className="flex aspect-square items-center justify-center rounded-lg border border-gray-100 bg-white p-2 shadow-sm"
                >
                  <img
                    src={client.image}
                    alt={client.name}
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
            </div>

            <p className="mt-3 text-[11px] text-gray-500 sm:mt-4 sm:text-xs">
              {CLIENTS.footnote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}