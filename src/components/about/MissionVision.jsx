import React from "react";
import { Target, Eye } from "lucide-react";
import missionvisionImage from '../../assets/medias/mission-vision.png'

// Static data — edit here
const SECTION = {
  eyebrow: "Our Purpose",
  heading: "Mission & Vision",
  // Replace with your actual product banner image path
  image: missionvisionImage,
  imageAlt: "Protap woven sacks, liner bags and aluminium composite panels",
};

const ITEMS = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To deliver innovative, high-quality and sustainable solutions that exceed customer expectations and contribute to the growth of industries and communities.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be a globally recognized leader in manufacturing, known for our quality, innovation and commitment to sustainable development.",
  },
];

export default function MissionVision() {
  return (
    <section className="relative w-full">
      {/* Image sets the container's natural height */}
      <img
        src={SECTION.image}
        alt={SECTION.imageAlt}
        className="block h-auto w-full object-cover"
      />

      {/* Dark blue overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/95 to-blue-900/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent sm:hidden" />

      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold tracking-wider text-blue-300 sm:text-xs">
              {SECTION.eyebrow}
            </p>
            <h2 className="mt-1.5 text-xl font-extrabold text-white sm:mt-2 sm:text-2xl md:text-3xl">
              {SECTION.heading}
            </h2>
            <div className="mt-2 h-1 w-8 rounded-full bg-blue-400 sm:mt-3" />

            <div className="mt-5 flex flex-col gap-6 sm:mt-8 sm:flex-row sm:gap-0 sm:divide-x sm:divide-white/15">
              {ITEMS.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="sm:flex-1 sm:px-6 sm:first:pl-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/30 sm:h-10 sm:w-10">
                        <Icon className="h-4 w-4 text-white sm:h-5 sm:w-5" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-sm font-bold text-white sm:text-base">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-2.5 max-w-xs text-[11px] leading-relaxed text-blue-100/75 sm:mt-3 sm:text-xs">
                      {item.description}
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