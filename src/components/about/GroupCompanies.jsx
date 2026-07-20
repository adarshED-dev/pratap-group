import React from "react";
import { Building2, ArrowRight } from "lucide-react";

// Static data — edit here
const SECTION = {
  eyebrow: "Our Strength",
  heading: "Group Companies",
};

const COMPANIES = [
  {
    name: "Protap Polyfab Pvt. Ltd.",
    description: "Manufacturer of HDPE / PP Woven Fabric and Sacks.",
  },
  {
    name: "Protap Nonwovens Pvt. Ltd.",
    description: "Manufacturer of Non-woven Fabrics for diverse applications.",
  },
  {
    name: "Protap Packaging Pvt. Ltd.",
    description: "Manufacturer of PE Liner Bags and Packaging Solutions.",
  },
  {
    name: "Protap Panels Pvt. Ltd.",
    description: "Manufacturer of Aluminium Composite Panels (ACP).",
  },
  {
    name: "Protap Global Solutions",
    description: "Export and Global Supply Chain Solutions.",
  },
];

const CTA = { label: "Explore Our Products", href: "#" };

export default function GroupCompanies() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div>
          <p className="text-xs font-bold tracking-wider text-blue-700 sm:text-sm">
            {SECTION.eyebrow}
          </p>
          <h2 className="mt-2 text-xl font-extrabold text-blue-950 sm:text-2xl md:text-3xl">
            {SECTION.heading}
          </h2>
          <div className="mt-3 h-1 w-8 rounded-full bg-blue-700" />
        </div>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-5">
          {COMPANIES.map((company, index) => (
            <div
              key={index}
              className="group flex flex-col items-center rounded-xl border border-gray-100 bg-white px-5 py-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:px-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 transition-colors duration-300 group-hover:bg-blue-100">
                <Building2 className="h-6 w-6 text-blue-700" strokeWidth={1.5} />
              </div>

              <h3 className="mt-4 text-sm font-bold text-blue-700 sm:text-[15px]">
                {company.name}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-500 sm:text-[13px]">
                {company.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center sm:mt-12">
          <a
            href={CTA.href}
            className="group inline-flex items-center gap-2 rounded-full border border-blue-700 px-6 py-2.5 text-xs font-semibold text-blue-800 transition-colors hover:bg-blue-800 hover:text-white sm:text-sm"
          >
            {CTA.label}
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