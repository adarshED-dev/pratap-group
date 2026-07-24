import { ExternalLink } from "lucide-react";
import logo from '../../assets/medias/logo.png'

// -----------------------------------------------------------------------
// Static data — edit here
// -----------------------------------------------------------------------
const MANUFACTURER = {
  eyebrow: "Manufacturer Details",
  name: "Pratap",
  logoText: "pratap",
  description: [
    "pratap is a trusted name in the packaging industry with over two decades of expertise in manufacturing high-quality woven fabrics and sacks.",
    "With a strong focus on innovation, quality, and sustainability, pratap delivers packaging solutions that meet global standards and exceed customer expectations.",
  ],
  stats: [
    { label: "India Rank", value: "#12", sublabel: "In Woven Packaging" },
    { label: "Global Rank", value: "#87", sublabel: "Industry Worldwide" },
    { label: "Experience", value: "20+", sublabel: "Years of Excellence" },
  ],
  image:
    "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1000&h=750&fit=crop",
  overlayStats: [
    { value: "50+", label: "Countries Served" },
    { value: "500+", label: "Happy Clients" },
  ],
  highlights: [
    {
      title: "Quality Assurance",
      description:
        "Strict quality control at every stage ensures consistent performance and durability.",
    },
    {
      title: "Advanced Manufacturing",
      description:
        "State-of-the-art machines and technology enable precision and high production capacity.",
    },
    {
      title: "Sustainable Approach",
      description:
        "Eco-friendly materials and responsible processes for a better and greener tomorrow.",
    },
  ],
  tagline: "Delivering Strength. Ensuring Reliability. Building Trust.",
  websiteUrl: "#",
};


export default function ManufacturerDetails() {
  const m = MANUFACTURER;

  return (
    <section className="rounded-3xl border border-slate-100 bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
      {/* Top: text + image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left — text content */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[2px] text-slate-400">
            {m.eyebrow}
          </p>
          <div className="mt-2 mb-5 h-0.5 w-8 bg-slate-800" />

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5">
            About {m.name}
          </h2>

          <div className="space-y-4 mb-8">
            {m.description.map((para, i) => (
              <p key={i} className="text-sm sm:text-base leading-relaxed text-slate-600">
                {para}
              </p>
            ))}
          </div>

          <div className="flex divide-x divide-slate-200">
            {m.stats.map((stat, i) => (
              <div key={i} className="px-5 first:pl-0">
                <p className="text-xs text-slate-500 mb-1">{stat.label}</p>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900">{stat.value}</p>
                <p className="text-xs text-slate-400 mt-0.5">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — image with overlays */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-100 shadow-sm h-72 sm:h-96 lg:h-[420px]">
          <img
            src={m.image}
            alt={`${m.name} manufacturing facility`}
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Stats overlay */}
          <div className="absolute bottom-4 right-4 left-4 sm:left-auto flex divide-x divide-white/20 rounded-xl bg-slate-900/90 px-5 py-3 sm:px-6 sm:py-4 backdrop-blur-sm">
            {m.overlayStats.map((stat, i) => (
              <div key={i} className="px-4 first:pl-0 text-center sm:text-left flex-1 sm:flex-none">
                <p className="text-xl sm:text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}