import React from "react";
import {
  PackageCheck,
  Award,
  Users,
  Globe2,
  ArrowRight,
  Factory,
} from "lucide-react";

// Static data — edit here
const ABOUT = {
  eyebrow: "Who We Are",
  headingLine1: "Building Stronger",
  headingLine2: "Solutions Since Day One",
  description:
    "With a commitment to excellence and a customer-centric approach, Protap has grown into a trusted name in the manufacturing industry. Our state-of-the-art facilities, skilled workforce and advanced technology enable us to deliver superior quality products that cater to diverse industries across the globe.",
  cta: { label: "Get to Know Us", href: "#" },
};

const STATS = [
  { icon: PackageCheck, value: "15+", label: "Years of\nExperience" },
  { icon: Award, value: "100+", label: "Products" },
  { icon: Users, value: "500+", label: "Happy\nClients" },
  { icon: Globe2, value: "Pan India", label: "Supply\nNetwork" },
];

const HISTORY = {
  eyebrow: "Our History",
  heading: "Our Journey of Growth",
};

const TIMELINE = [
  {
    year: "2008",
    title: "The Beginning",
    description:
      "Protap was established with a vision to deliver high-quality packaging and industrial materials.",
  },
  {
    year: "2012",
    title: "Expanding Horizons",
    description:
      "Expanded product portfolio and enhanced production capacity to meet growing market demand.",
  },
  {
    year: "2016",
    title: "Technological Advancement",
    description:
      "Invested in advanced machinery and technology to ensure superior quality and efficiency.",
  },
  {
    year: "2020",
    title: "Pan India Presence",
    description:
      "Strengthened our distribution network and became a trusted partner across India.",
  },
  {
    year: "Today & Beyond",
    title: "Innovating for the Future",
    description:
      "Continuously innovating and expanding to create value and a sustainable impact for the future.",
  },
];

export default function AboutHistory() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Who We Are + Stats */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Left: text */}
          <div>
            <p className="text-xs font-bold tracking-wider text-blue-700 sm:text-sm">
              {ABOUT.eyebrow}
            </p>
            <h2 className="mt-2 text-xl font-extrabold leading-snug text-blue-950 sm:text-2xl md:text-3xl">
              {ABOUT.headingLine1}
              <br />
              {ABOUT.headingLine2}
            </h2>
            <p className="mt-4 max-w-lg text-xs leading-relaxed text-gray-500 sm:text-sm">
              {ABOUT.description}
            </p>

            <a
              href={ABOUT.cta.href}
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-blue-800 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-blue-900 sm:text-sm"
            >
              {ABOUT.cta.label}
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Right: stats card */}
          <div className="rounded-2xl bg-slate-50 px-5 py-6 sm:px-8 sm:py-8">
            <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-y-0 sm:divide-x sm:divide-blue-100">
              {STATS.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center px-2 text-center sm:px-4"
                  >
                    <Icon
                      className="h-6 w-6 text-blue-700 sm:h-7 sm:w-7"
                      strokeWidth={1.5}
                    />
                    <span className="mt-2 text-lg font-extrabold text-blue-950 sm:text-xl">
                      {stat.value}
                    </span>
                    <p className="mt-0.5 whitespace-pre-line text-[11px] leading-snug text-gray-500 sm:text-xs">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Our Journey of Growth */}
        <div className="mt-12 rounded-2xl bg-slate-50 px-4 py-10 sm:mt-16 sm:px-8 sm:py-12">
          <div className="text-center">
            <p className="text-xs font-bold tracking-wider text-blue-700 sm:text-sm">
              {HISTORY.eyebrow}
            </p>
            <h2 className="mt-2 text-xl font-extrabold text-blue-950 sm:text-2xl md:text-3xl">
              {HISTORY.heading}
            </h2>
          </div>

          {/* Desktop / tablet: horizontal timeline */}
          <div className="relative mt-12 hidden sm:block">
            <div className="absolute left-0 right-0 top-5 h-px bg-blue-200" />

            <div className="grid grid-cols-5 gap-4 lg:gap-6">
              {TIMELINE.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-blue-800 ring-4 ring-slate-50">
                    <Factory className="h-4 w-4 text-white" strokeWidth={1.75} />
                  </div>

                  <div className="mt-5 w-full rounded-xl border border-blue-100 bg-white px-4 py-5 text-center sm:text-left">
                    <p className="text-sm font-extrabold text-blue-950">
                      {item.year}
                    </p>
                    <h3 className="mt-0.5 text-xs font-bold text-blue-800 sm:text-sm">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[11px] leading-relaxed text-gray-500 sm:text-xs">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="relative mt-10 space-y-6 sm:hidden">
            <div className="absolute bottom-0 left-5 top-0 w-px bg-blue-200" />

            {TIMELINE.map((item, index) => (
              <div key={index} className="relative flex gap-4 pl-0">
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-800 ring-4 ring-slate-50">
                  <Factory className="h-4 w-4 text-white" strokeWidth={1.75} />
                </div>

                <div className="flex-1 rounded-xl border border-blue-100 bg-white px-4 py-4">
                  <p className="text-sm font-extrabold text-blue-950">
                    {item.year}
                  </p>
                  <h3 className="mt-0.5 text-xs font-bold text-blue-800">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[11px] leading-relaxed text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}