import React from "react";
import { Building2, ArrowRight } from "lucide-react";

// Static data — edit here
const SECTION = {
  eyebrow: "Our Strength",
  heading: "Group Companies",
};
const COMPANIES = [
  {
    name: "Pratap Polyfab Pvt. Ltd.",
    description: "Manufacturer of HDPE / PP Woven Fabric and Sacks.",
    logo: "", // e.g. "/logos/polyfab.png"
    image: "", // e.g. "/factories/polyfab.jpg"
  },
  {
    name: "Pratap Nonwovens Pvt. Ltd.",
    description: "Manufacturer of Non-woven Fabrics for diverse applications.",
    logo: "",
    image: "",
  },
  {
    name: "Pratap Packaging Pvt. Ltd.",
    description: "Manufacturer of PE Liner Bags and Packaging Solutions.",
    logo: "",
    image: "",
  },
  {
    name: "Pratap Panels Pvt. Ltd.",
    description: "Manufacturer of Aluminium Composite Panels (ACP).",
    logo: "",
    image: "",
  },
  {
    name: "Pratap Global Solutions",
    description: "Export and Global Supply Chain Solutions.",
    logo: "",
    image: "",
  },
];

const CTA = { label: "Explore Our Products", href: "#" };

function CompanyCard({ company }) {
  const { name, description, logo, image } = company;

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Photo (or icon fallback if no image yet) */}
      <div className="relative h-36 w-full overflow-hidden bg-blue-50 sm:h-40">
        {image ? (
          <img
            src={image}
            alt={`${name} facility`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
            <Building2 className="h-9 w-9 text-blue-300" strokeWidth={1.5} />
          </div>
        )}

        {/* Logo badge, overlapping the photo like a nameplate */}
        {logo && (
          <div className="absolute bottom-0 left-4 translate-y-1/2 rounded-lg border border-gray-100 bg-white p-2 shadow-md">
            <img src={logo} alt={`${name} logo`} className="h-8 w-8 object-contain" />
          </div>
        )}
      </div>

      {/* Copy */}
      <div className={`flex flex-1 flex-col px-5 py-6 text-center sm:px-6 ${logo ? "pt-7" : ""}`}>
        <h3 className="text-sm font-bold text-[#2a3d6d] sm:text-[15px]">{name}</h3>
        <p className="mt-2 text-xs leading-relaxed text-gray-500 sm:text-[13px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function GroupCompanies() {
  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="mx-auto page-width">
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
            <CompanyCard key={index} company={company} />
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