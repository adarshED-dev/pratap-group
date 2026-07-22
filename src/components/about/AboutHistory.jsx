import { useEffect, useRef, useState } from "react";
import {
  Building2,
  FlaskConical,
  Settings,
  MapPin,
  TrendingUp,
  Rocket,
} from "lucide-react";

// -----------------------------------------------------------------------
// Static data
// -----------------------------------------------------------------------
const SECTION = {
  eyebrow: "Our History",
  headingPlain: "Our Journey of ",
  headingHighlight: "Growth",
  description:
    "From a small beginning to an industry leader, our journey is built on vision, innovation and unwavering commitment to quality.",
};

const MILESTONES = [
  {
    year: "1997",
    title: "The Beginning",
    description:
      "Pratap Group of companies |  Pratap Group established in India with a focus on technical textile filter products.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=700&h=450&fit=crop",
  },
  {
    year: "2003",
    title: "Expanding Horizons",
    description:
      "Expanded product line with specialized chemical and pharmaceutical filter solutions — centrifuge filter bags, nutch filter bags and polypropylene filter fabrics.",
    icon: FlaskConical,
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&h=450&fit=crop",
  },
  {
    year: "2008",
    title: "Innovation & Growth",
    description:
      "Invested in advanced manufacturing technology and infrastructure to enhance product quality and production capacity.",
    icon: Settings,
    image:
      "https://images.unsplash.com/photo-1581091870621-1f7f0aeae481?w=700&h=450&fit=crop",
  },
  {
    year: "2015",
    title: "Strengthening Presence",
    description:
      "Strengthened our presence across India by building a strong distribution network and serving diverse industries with reliability.",
    icon: MapPin,
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&h=450&fit=crop",
  },
  {
    year: "2020",
    title: "New Milestones",
    description:
      "Introduced innovative products and sustainable solutions to meet evolving industry needs and global standards.",
    icon: TrendingUp,
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=700&h=450&fit=crop",
  },
  {
    year: "Today & Beyond",
    title: "Innovating for the Future",
    description:
      "Continuously innovating and expanding to create value and a sustainable impact for generations to come.",
    icon: Rocket,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&h=450&fit=crop",
  },
];

// -----------------------------------------------------------------------
// Scroll-reveal hook — adds a "visible" flag once the element enters
// the viewport, used to trigger the fade/slide-in animation classes.
// -----------------------------------------------------------------------
function useRevealOnScroll() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

function MilestoneCard({ milestone, align }) {
  const [ref, isVisible] = useRevealOnScroll();
  const Icon = milestone.icon;

  return (
    <div
      ref={ref}
      className={`group relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-blue-200 ${
        isVisible
          ? "opacity-100 translate-x-0"
          : `opacity-0 ${align === "left" ? "-translate-x-10" : "translate-x-10"}`
      }`}
    >
      <p className="font-serif italic text-xl text-blue-700 mb-2">{milestone.year}</p>
      <div className="w-8 h-0.5 bg-blue-700 mb-4 transition-all duration-300 group-hover:w-14" />

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-[#0b1f3a] mb-2">{milestone.title}</h3>
          <p className="text-sm text-gray-500 leading-relaxed">{milestone.description}</p>
        </div>

        <span className="shrink-0 w-11 h-11 rounded-full border border-blue-200 bg-white flex items-center justify-center text-blue-700 transition-all duration-300 group-hover:bg-blue-700 group-hover:text-white group-hover:scale-110 group-hover:rotate-6">
          <Icon size={18} strokeWidth={2} />
        </span>
      </div>
    </div>
  );
}

function MilestoneImage({ milestone, align }) {
  const [ref, isVisible] = useRevealOnScroll();

  return (
    <div
      ref={ref}
      className={`overflow-hidden rounded-2xl shadow-sm transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-x-0"
          : `opacity-0 ${align === "left" ? "-translate-x-10" : "translate-x-10"}`
      }`}
    >
      <img
        src={milestone.image}
        alt={milestone.title}
        className="h-56 w-full object-cover transition-transform duration-500 ease-out hover:scale-110"
      />
    </div>
  );
}

function TimelineDot({ index }) {
  const [ref, isVisible] = useRevealOnScroll();

  return (
    <div
      ref={ref}
      className={`relative z-10 hidden md:flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-700 ring-4 ring-blue-100 transition-all duration-500 ${
        isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    />
  );
}

export default function Timeline() {
  return (
    <section className="relative w-full bg-[#f7f9fc] px-6 py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[3px] text-blue-700 uppercase mb-3">
            {SECTION.eyebrow}
          </p>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#0b1f3a] leading-tight mb-4">
            {SECTION.headingPlain}
            <span className="text-blue-700">{SECTION.headingHighlight}</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {SECTION.description}
          </p>
          <div className="w-16 h-0.5 bg-blue-700 mx-auto mt-6" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* center vertical line — desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gray-200" />

          <div className="flex flex-col gap-10 md:gap-14">
            {MILESTONES.map((milestone, i) => {
              const cardOnLeft = i % 2 === 0;

              return (
                <div
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-6 md:gap-8"
                >
                  {/* left slot */}
                  <div>
                    {cardOnLeft ? (
                      <MilestoneCard milestone={milestone} align="left" />
                    ) : (
                      <MilestoneImage milestone={milestone} align="left" />
                    )}
                  </div>

                  {/* center dot */}
                  <TimelineDot index={i} />

                  {/* right slot */}
                  <div>
                    {cardOnLeft ? (
                      <MilestoneImage milestone={milestone} align="right" />
                    ) : (
                      <MilestoneCard milestone={milestone} align="right" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}