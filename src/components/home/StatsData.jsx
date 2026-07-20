import React from "react";
import { Factory, Award, Users, ShieldCheck, Globe2 } from "lucide-react";

// Static data — edit here
const STATS = [
  {
    icon: Factory,
    title: "15+",
    subtitle: "Years of Experience",
    description: "Delivering quality you can trust.",
  },
  {
    icon: Award,
    title: "100+",
    subtitle: "Products",
    description: "Wide range of solutions for every need.",
  },
  {
    icon: Users,
    title: "500+",
    subtitle: "Happy Clients",
    description: "Trusted by industries across India.",
  },
  {
    icon: ShieldCheck,
    title: "Premium",
    subtitle: "Quality Assurance",
    description: "Advanced technology & strict quality control.",
  },
  {
    icon: Globe2,
    title: "Pan India",
    subtitle: "Supply Network",
    description: "Timely delivery across the country.",
  },
];

export default function StatsData() {
  return (
    <section className="w-full w-full">
      <div className="page-width px-4 py-8 sm:px-6 sm:py-10 lg:px-10 rounded-2xl mx-auto bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 grid max-w-7xl grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-y-8 lg:grid-cols-5 lg:gap-y-0 lg:divide-x lg:divide-white/15">
        {STATS.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3 px-0 lg:px-6 lg:first:pl-0 lg:last:pr-0"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/5 sm:h-12 sm:w-12">
                <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" strokeWidth={1.75} />
              </div>

              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-lg font-bold text-white sm:text-xl">
                    {stat.title}
                  </span>
                </div>
                <p className="text-xs font-semibold text-white sm:text-sm">
                  {stat.subtitle}
                </p>
                <p className="mt-0.5 max-w-[160px] text-[11px] leading-snug text-blue-200/80 sm:text-xs">
                  {stat.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}