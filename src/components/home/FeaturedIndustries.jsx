import React from "react";
import {
  Sprout,
  FlaskConical,
  Building2,
  UtensilsCrossed,
  Shirt,
  ShoppingBag,
  Truck,
  ArrowRight,
} from "lucide-react";

// Static data — edit here
const SECTION = {
  eyebrow: "Industries We Serve",
  headingLine1: "Solutions that power",
  headingLine2: "every industry.",
  cta: { label: "Explore All Industries", href: "#" },
};

const INDUSTRIES = [
  {
    icon: Sprout,
    title: "Agriculture",
    description: "Reliable packaging for a stronger harvest.",
  },
  {
    icon: FlaskConical,
    title: "Chemicals",
    description: "Safe, durable and chemical-resistant solutions.",
  },
  {
    icon: Building2,
    title: "Construction",
    description: "Strong materials for every building block.",
  },
  {
    icon: UtensilsCrossed,
    title: "Food",
    description: "Hygienic packaging that ensures freshness.",
  },
  {
    icon: Shirt,
    title: "Textile",
    description: "Supporting the textile industry with quality.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & FMCG",
    description: "Packaging that enhances value and trust.",
  },
  {
    icon: Truck,
    title: "Logistics",
    description: "Secure packaging for smooth deliveries.",
  },
];

export default function FeaturedIndustries() {
  return (
    <section className="w-full bg-blue-50/60 px-4 py-10 sm:px-6 sm:py-12 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-6">
          {/* Left heading block */}
          <div className="shrink-0 lg:w-64 lg:pr-6">
            <p className="text-[11px] font-bold tracking-wider text-blue-700 sm:text-xs">
              {SECTION.eyebrow}
            </p>
            <h2 className="mt-2 text-xl font-extrabold leading-snug text-blue-950 sm:text-2xl">
              {SECTION.headingLine1}
              <br />
              {SECTION.headingLine2}
            </h2>
            <div className="mt-3 h-1 w-8 rounded-full bg-blue-700" />
          </div>

          {/* Industries row */}
          <div className="grid flex-1 grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-7 lg:gap-x-0 lg:divide-x lg:divide-blue-200">
            {INDUSTRIES.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center px-2 text-center lg:px-4"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-200 bg-white sm:h-12 sm:w-12">
                    <Icon
                      className="h-5 w-5 text-blue-700 sm:h-6 sm:w-6"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="mt-2 text-xs font-bold text-blue-950 sm:text-sm">
                    {industry.title}
                  </h3>
                  <p className="mt-1 max-w-[110px] text-[10px] leading-snug text-gray-500 sm:max-w-[120px] sm:text-[11px]">
                    {industry.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center sm:mt-10">
          <a
            href={SECTION.cta.href}
            className="group inline-flex items-center gap-2 rounded-full border border-blue-700 bg-white px-6 py-2.5 text-xs font-semibold text-blue-800 transition-colors hover:bg-blue-800 hover:text-white sm:text-sm"
          >
            {SECTION.cta.label}
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}