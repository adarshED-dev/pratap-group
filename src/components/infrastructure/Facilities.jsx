import { Factory, Warehouse, FlaskConical, Truck, Settings, Lightbulb, ArrowRight } from "lucide-react";

// -----------------------------------------------------------------------
// Static data
// -----------------------------------------------------------------------
const SECTION = {
  eyebrow: "Facilities",
  heading: "World-Class Facilities",
};

const FACILITIES = [
  {
    icon: Factory,
    title: "Manufacturing Unit",
    description: "Advanced machinery and automated production lines.",
    image:
      "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=400&h=400&fit=crop",
  },
  {
    icon: Warehouse,
    title: "Warehouse & Storage",
    description: "Spacious and organized storage for efficient inventory management.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&h=400&fit=crop",
  },
  {
    icon: FlaskConical,
    title: "Quality Control Lab",
    description: "Rigorous testing and quality assurance at every stage.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop",
  },
  {
    icon: Truck,
    title: "Logistics & Dispatch",
    description: "Streamlined logistics ensuring on-time deliveries.",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=400&fit=crop",
  },
  {
    icon: Settings,
    title: "Packaging Unit",
    description: "Dedicated packaging and finishing for superior output.",
    image:
      "https://images.unsplash.com/photo-1581091870621-1f7f0aeae481?w=400&h=400&fit=crop",
  },
  {
    icon: Lightbulb,
    title: "R&D & Innovation",
    description: "Continuous innovation to develop sustainable and better solutions.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop",
  },
];

export default function Facilities() {
  return (
    <section className="w-full bg-[#f5f7fb] px-6 py-16">
      <div className="page-width mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold tracking-[3px] text-blue-700 uppercase mb-2">
            {SECTION.eyebrow}
          </p>
          <h2 className="font-bold text-3xl sm:text-4xl text-[#0b1f3a]">
            {SECTION.heading}
          </h2>
          <div className="w-10 h-0.5 bg-blue-700 mx-auto mt-4" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {FACILITIES.map((facility, i) => {
            const Icon = facility.icon;
            return (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm"
              >
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-36 sm:h-40 object-cover"
                />
                <div className="p-4 sm:p-5">
                  <Icon size={26} className="text-blue-600 mb-3" strokeWidth={1.75} />
                  <h3 className="text-sm sm:text-base font-bold text-[#0b1f3a] mb-2 leading-snug">
                    {facility.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-4">
                    {facility.description}
                  </p>
                  <a
                    href="#"
                    aria-label={`Learn more about ${facility.title}`}
                    className="inline-flex items-center justify-center text-blue-700 hover:translate-x-1 transition-transform"
                  >
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}