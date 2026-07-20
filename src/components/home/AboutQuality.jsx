import React from "react";
import {
  Factory,
  BadgeCheck,
  Users,
  ArrowRight,
  ShieldCheck,
  Cpu,
  UserRound,
  Truck,
  Leaf,
  Heart,
} from "lucide-react";

import aboutFactoryImage from '../../assets/medias/bg-tint.png'

// Static data — edit here
const ABOUT = {
  eyebrow: "About Protap",
  headingLine1: "Built on trust.",
  headingLine2: "Driven by quality.",
  description:
    "With over a decade of expertise, Protap has become a trusted name in manufacturing high-quality industrial products. Our focus on innovation, advanced technology and customer satisfaction drives everything we do.",
  // Replace with your actual facility image path
  image: aboutFactoryImage,
  imageAlt: "Protap manufacturing facility",
  features: [
    {
      icon: Factory,
      title: "Advanced Manufacturing",
      description: "State-of-the-art technology and skilled workforce.",
    },
    {
      icon: BadgeCheck,
      title: "Strict Quality Control",
      description: "International standards at every step.",
    },
    {
      icon: Users,
      title: "Customer First Approach",
      description: "Building long-term relationships with trust.",
    },
  ],
  cta: { label: "Know More About Us", href: "#" },
};

const WHY_CHOOSE = {
  eyebrow: "Why Choose Protap?",
  headingLine1: "Quality is not just our promise,",
  headingLine2: "it's our process.",
  items: [
    {
      icon: ShieldCheck,
      title: "Premium Raw Materials",
      description: "We use only high-grade raw materials for superior quality.",
    },
    {
      icon: Cpu,
      title: "Advanced Technology",
      description: "Modern machines and processes ensure consistency.",
    },
    {
      icon: UserRound,
      title: "Skilled Team",
      description: "Experienced professionals committed to excellence.",
    },
    {
      icon: Truck,
      title: "On-time Delivery",
      description: "Strong logistics network ensures timely supply.",
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description: "Eco-friendly solutions for a better tomorrow.",
    },
    {
      icon: Heart,
      title: "Customer Satisfaction",
      description: "Your success is our biggest achievement.",
    },
  ],
};

export default function AboutQuality() {
  return (
    <section className="w-full">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2">
        {/* Left: About Protap */}
        <div className="relative isolate overflow-hidden px-4 py-12 sm:px-8 sm:py-16 lg:px-10">
          <img
            src={ABOUT.image}
            alt={ABOUT.imageAlt}
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-blue-950/85" />

          <p className="text-[11px] font-bold tracking-wider text-blue-200 sm:text-xs">
            {ABOUT.eyebrow}
          </p>
          <h2 className="mt-2 text-xl font-extrabold leading-snug text-white sm:text-2xl md:text-3xl">
            {ABOUT.headingLine1}
            <br />
            {ABOUT.headingLine2}
          </h2>
          <p className="mt-4 max-w-md text-xs leading-relaxed text-blue-100/80 sm:text-sm">
            {ABOUT.description}
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:mt-8 sm:gap-5">
            {ABOUT.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/25 bg-white/5 sm:h-10 sm:w-10">
                    <Icon className="h-4 w-4 text-white sm:h-5 sm:w-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white sm:text-sm">
                      {feature.title}
                    </h3>
                    <p className="mt-0.5 text-[11px] leading-snug text-blue-100/70 sm:text-xs">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <a
            href={ABOUT.cta.href}
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-blue-900 transition-colors hover:bg-blue-100 sm:mt-10 sm:text-sm"
          >
            {ABOUT.cta.label}
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Right: Why Choose Protap */}
        <div className="bg-white px-4 py-12 sm:px-8 sm:py-16 lg:px-10">
          <p className="text-[11px] font-bold tracking-wider text-blue-700 sm:text-xs">
            {WHY_CHOOSE.eyebrow}
          </p>
          <h2 className="mt-2 text-xl font-extrabold leading-snug text-blue-950 sm:text-2xl md:text-3xl">
            {WHY_CHOOSE.headingLine1}
            <br />
            {WHY_CHOOSE.headingLine2}
          </h2>
          <div className="mt-3 h-1 w-10 rounded-full bg-blue-700" />

          <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {WHY_CHOOSE.items.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group rounded-xl border border-gray-100 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-5"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 sm:h-10 sm:w-10">
                    <Icon className="h-4 w-4 text-blue-700 sm:h-5 sm:w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-3 text-xs font-bold text-blue-800 sm:text-sm">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[11px] leading-snug text-gray-500 sm:text-xs">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}