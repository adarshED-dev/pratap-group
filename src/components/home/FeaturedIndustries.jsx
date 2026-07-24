import { motion } from "motion/react";
import {
  Sprout,
  FlaskConical,
  Building2,
  UtensilsCrossed,
  Truck,
  ArrowRight,
  LayoutGrid,
} from "lucide-react";

// -----------------------------------------------------------------------
// Static data
// -----------------------------------------------------------------------
const SECTION = {
  eyebrow: "Industries We Serve",
  headingPlain: "Solutions that power ",
  headingHighlight: " every industry.",
  description:
    "Our high-performance materials and packaging solutions are trusted across a wide range of industries for their quality, strength and reliability.",
  cta: { label: "Explore All Industries", href: "#" },
};

const INDUSTRIES = [
  {
    name: "Agriculture",
    description:
      "Reliable packaging solutions that support productivity and ensure safer storage for a stronger harvest.",
    icon: Sprout,
    iconColor: "text-green-600",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=500&h=400&fit=crop",
  },
  {
    name: "Chemicals",
    description:
      "Safe, durable and chemical-resistant solutions for handling and transporting critical materials.",
    icon: FlaskConical,
    iconColor: "text-purple-600",
    image:
      "https://images.pexels.com/photos/5428257/pexels-photo-5428257.jpeg?_gl=1*fuwbnj*_ga*MTM4MzEzNTU2My4xNzg0ODA2ODg1*_ga_8JE65Q40S6*czE3ODQ4MDY4ODUkbzEkZzEkdDE3ODQ4MDY5OTIkajI0JGwwJGgw",
  },
  {
    name: "Construction",
    description:
      "Strong woven and composite solutions that support every building block with confidence.",
    icon: Building2,
    iconColor: "text-blue-600",
    image:
      "https://images.unsplash.com/photo-1541976590-713941681591?w=500&h=400&fit=crop",
  },
  {
    name: "Food",
    description:
      "Hygienic, food-grade packaging that ensures freshness, safety and trust in every delivery.",
    icon: UtensilsCrossed,
    iconColor: "text-orange-500",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&h=400&fit=crop",
  },
  {
    name: "Logistics",
    description:
      "Secure, tough and efficient packaging solutions for smooth storage and hassle-free deliveries.",
    icon: Truck,
    iconColor: "text-blue-600",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=500&h=400&fit=crop",
  },
];

// Standard fade-up — used for the eyebrow, plain heading text, description, and cards
const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// "Falls from top like an object" — starts higher up and further away (opacity 0),
// accelerates downward (spring), and settles with a small natural bounce on landing.
const dropIn = {
  hidden: { opacity: 0, y: -70 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 14,
      mass: 0.9,
    },
  },
};

// Stagger wrapper for the heading block — makes eyebrow, heading, description
// reveal in sequence rather than all at once
const headingContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Stagger wrapper for the industry cards grid
const cardsContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export default function FeaturedIndustries() {
  return (
    <section className="relative w-full bg-[#f7f9fc] px-6 py-16">
      <div className="page-width mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -35% 0px" }}
          variants={headingContainer}
        >
          <motion.p
            variants={fadeUp}
            className="flex items-center justify-center gap-2 text-xs font-bold tracking-[3px] text-blue-700 uppercase mb-3"
          >
            {SECTION.eyebrow}
            <span className="w-6 h-px bg-gray-300" />
          </motion.p>

          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#0b1f3a] leading-tight mb-4">
            <motion.span variants={fadeUp} className="inline-block">
              {SECTION.headingPlain}
            </motion.span>
            <motion.span variants={dropIn} className="inline-block text-blue-700 ml-[20px]">
              {SECTION.headingHighlight}
            </motion.span>
          </h2>

          <motion.p
            variants={fadeUp}
            className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            {SECTION.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="w-16 h-0.5 bg-blue-700 mx-auto mt-6"
          />
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -35% 0px" }}
          variants={cardsContainer}
        >
          {INDUSTRIES.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="rounded-2xl bg-white overflow-hidden border border-gray-100 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
              >
                {/* Image + icon */}
                <div className="relative h-40">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute -bottom-6 left-5 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                    <Icon size={20} className={industry.iconColor} strokeWidth={2} />
                  </div>
                </div>

                {/* Text content */}
                <div className="px-5 pt-9 pb-6">
                  <h3 className="text-lg font-bold text-[#0b1f3a] mb-2">{industry.name}</h3>
                  <div className="w-6 h-0.5 bg-blue-600 mb-3" />
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">
                    {industry.description}
                  </p>
                  <a
                    href="#"
                    aria-label={`Learn more about ${industry.name}`}
                    className="inline-flex items-center justify-center text-blue-700 hover:translate-x-1 transition-transform"
                  >
                    <ArrowRight size={18} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA button */}
        {/* <div className="flex justify-center mt-8">
          
            href={SECTION.cta.href}
            className="group inline-flex items-center gap-2 rounded-full border border-blue-700 px-6 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50 transition-colors"
          >
            <LayoutGrid size={16} className="text-orange-500" />
            {SECTION.cta.label}
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div> */}
      </div>
    </section>
  );
}