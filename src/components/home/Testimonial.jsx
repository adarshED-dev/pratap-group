import React from "react";
import { ArrowRight } from "lucide-react";

import adityaBirlaImage from '../../assets/medias/aditya-birla.png'
import bergerPaintsImage from '../../assets/medias/berger-paints.png'
import dalmiaImage from '../../assets/medias/dalmia.png'
import ITCLimitedImage from '../../assets/medias/ITC.png'

// Static data — edit here
const SECTION = {
  eyebrow: "Trusted by 500+ Businesses",
  headingLine1: "What our clients say",
  headingLine2: "about us.",
  cta: { label: "View All Testimonials", href: "#" },
};

const CLIENTS = {
  eyebrow: "Our Valued Clients",
  logos: [
    { name: "ITC Limited", image: ITCLimitedImage },
    { name: "Aditya Birla Group", image: adityaBirlaImage },
    { name: "Dalmia Bharat Group", image: dalmiaImage },
    { name: "Berger Paints", image: bergerPaintsImage },
  ],
  footnote: "More than 500+ happy clients across India",
};

// how many times the logo set repeats in the strip — more copies means
// the viewport never shows the "end" of the list, even on wide screens
const MARQUEE_COPIES = 6;

export default function Testimonials() {
  // duplicate the logo list so the marquee can loop seamlessly, and so
  // there's always enough width to fill the viewport with room to spare
  const marqueeLogos = Array.from({ length: MARQUEE_COPIES }, () => CLIENTS.logos).flat();

  // translate exactly one "set" width (1 / MARQUEE_COPIES of the total
  // strip) so the loop restarts on an identical frame — no visible seam
  const translatePercent = 100 / MARQUEE_COPIES;

  // scale duration with copies so scroll speed stays constant regardless
  // of how many logos/copies are in the strip
  const durationSeconds = 6;

  return (
    <section className="w-full border-y border-gray-100 bg-white py-10 sm:py-12">
      <div className="page-width">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[auto_1fr] lg:gap-12 xl:gap-16">
          {/* Left: heading + CTA */}
          <div className="lg:w-64 xl:w-72">
            <p className="text-[10px] font-bold tracking-wider text-blue-700 sm:text-xs">
              {SECTION.eyebrow}
            </p>
            <h2 className="mt-2 text-lg font-extrabold leading-snug text-blue-950 sm:text-xl md:text-2xl">
              {SECTION.headingLine1}
              <br />
              {SECTION.headingLine2}
            </h2>
            <div className="mt-3 h-1 w-8 rounded-full bg-blue-700" />

            {/* <a
              href={SECTION.cta.href}
              className="group mt-5 inline-flex items-center gap-2 rounded-full bg-blue-800 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-blue-900 sm:text-sm"
            >
              {SECTION.cta.label}
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a> */}
          </div>

          {/* Right: marquee-scrolling client logos */}
          <div className="min-w-0">
            <p className="text-[10px] font-bold tracking-wider text-[#223d8e] sm:text-xs">
              {CLIENTS.eyebrow}
            </p>

            <div className="relative mt-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div
                className="flex w-max animate-marquee gap-4"
                style={{
                  "--marquee-distance": `-${translatePercent}%`,
                  animationDuration: `${durationSeconds}s`,
                }}
              >
                {marqueeLogos.map((client, index) => (
                  <div
                    key={index}
                    className="flex h-24 w-24 shrink-0 items-center justify-center rounded-lg border border-gray-100 bg-white p-3 shadow-sm sm:h-28 sm:w-28"
                  >
                    <img
                      src={client.image}
                      alt={client.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-4 text-[11px] text-gray-500 sm:text-xs">
              {CLIENTS.footnote}
            </p>
          </div>
        </div>
      </div>

      {/* Marquee animation */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(var(--marquee-distance)); }
        }
        .animate-marquee {
          animation-name: marquee;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}