import React, { useState } from "react";
import {
  Package, Cylinder, Grid3x3, Layers, CircleDot,
  Shield, Sun, Droplets, Ruler, Palette, Leaf,
  ChevronLeft, ChevronRight, Download, Send,
  Tractor, Wheat, Building2, FlaskConical, HardHat, Beef,
  Sprout, UtensilsCrossed, ShoppingBag, Truck, Recycle,
  Weight, Printer, Settings2, Check, Minus,
} from "lucide-react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ManufacturerDetails from "../components/product/ManufacturerDetails";

/* ------------------------------------------------------------------ */
/*  STATIC DATA                                                        */
/* ------------------------------------------------------------------ */

const TAB_ICONS = { Package, Cylinder, Grid3x3, Layers, CircleDot };

const PRODUCTS = [
  {
    id: "woven",
    tabIcon: "Package",
    tabTitle: "HDPE/PP",
    tabSubtitle: "Woven Fabrics & Sacks",
    pattern: "weave",
    accent: "blue",
    eyebrow: "HDPE/PP",
    title: "Woven Fabrics & Sacks",
    description:
      "Our HDPE/PP woven fabrics and sacks are manufactured using premium quality tape yarns to deliver exceptional strength, durability, and reliability for demanding packaging requirements.",
    features: [
      { icon: Shield, label: "High Strength & Durability" },
      { icon: Sun, label: "UV Stabilized & Weatherproof" },
      { icon: Droplets, label: "Moisture & Chemical Resistant" },
      { icon: Grid3x3, label: "Custom Sizes & GSM Available" },
      { icon: Printer, label: "Excellent Printability & Finish" },
      { icon: Recycle, label: "Eco-Friendly & Recyclable" },
    ],
    applications: [
      { icon: Tractor, label: "Agriculture" },
      { icon: Package, label: "Fertilizers" },
      { icon: Building2, label: "Cement" },
      { icon: Wheat, label: "Food Grains" },
      { icon: CircleDot, label: "Sugar" },
      { icon: FlaskConical, label: "Chemicals" },
      { icon: HardHat, label: "Construction" },
      { icon: Beef, label: "Animal Feed" },
    ],
    specs: [
      { icon: Layers, label: "Material", value: "HDPE / PP" },
      { icon: Ruler, label: "Width", value: "380 mm - 2500 mm" },
      { icon: Weight, label: "GSM Range", value: "50 - 250 GSM" },
      { icon: Grid3x3, label: "Weave", value: "Plain / Laminated" },
      { icon: Layers, label: "Lamination", value: "With / Without" },
      { icon: Printer, label: "Printing", value: "Up to 8 Colors" },
      { icon: Palette, label: "Colors", value: "White / Custom" },
      { icon: Settings2, label: "Customization", value: "Size, GSM, Print, Lamination" },
    ],
    whyChooseUs: [
      "Consistent quality with advanced manufacturing",
      "Superior load-bearing capacity",
      "Long-lasting performance in all conditions",
      "Tailored solutions for every industry need",
    ],
  },
  {
    id: "nonwoven",
    tabIcon: "Cylinder",
    tabTitle: "PP",
    tabSubtitle: "Non-Woven Fabrics",
    pattern: "nonwoven",
    accent: "blue",
    eyebrow: "PP",
    title: "Non-Woven Fabrics",
    description:
      "Our PP non-woven fabrics are engineered from fine polypropylene fibres, delivering a soft yet durable material for hygiene, packaging, and industrial applications.",
    features: [
      { icon: Shield, label: "Lightweight & Breathable" },
      { icon: Sun, label: "UV Stabilized Options" },
      { icon: Droplets, label: "Water Repellent Finish" },
      { icon: Grid3x3, label: "Multiple GSM Ranges" },
      { icon: Printer, label: "Flexo Printable Surface" },
      { icon: Recycle, label: "100% Recyclable" },
    ],
    applications: [
      { icon: ShoppingBag, label: "Retail Bags" },
      { icon: Package, label: "Packaging" },
      { icon: Building2, label: "Furnishing" },
      { icon: HardHat, label: "Agro Covers" },
      { icon: FlaskConical, label: "Medical" },
      { icon: Sprout, label: "Horticulture" },
      { icon: Truck, label: "Logistics" },
      { icon: Beef, label: "Hygiene" },
    ],
    specs: [
      { icon: Layers, label: "Material", value: "100% PP" },
      { icon: Ruler, label: "Width", value: "600 mm - 3200 mm" },
      { icon: Weight, label: "GSM Range", value: "20 - 200 GSM" },
      { icon: Grid3x3, label: "Bond", value: "Spunbond" },
      { icon: Layers, label: "Lamination", value: "Optional" },
      { icon: Printer, label: "Printing", value: "Up to 6 Colors" },
      { icon: Palette, label: "Colors", value: "Wide Custom Range" },
      { icon: Settings2, label: "Customization", value: "GSM, Width, Color" },
    ],
    whyChooseUs: [
      "Soft-touch fabric with strong tear resistance",
      "Consistent fibre distribution for uniform strength",
      "Hygienic and skin-friendly manufacturing",
      "Rapid turnaround on custom GSM orders",
    ],
  },
  {
    id: "leno",
    tabIcon: "Grid3x3",
    tabTitle: "Polypropylene",
    tabSubtitle: "Leno Bags",
    pattern: "leno",
    accent: "emerald",
    eyebrow: "Polypropylene",
    title: "Leno Bags",
    description:
      "Our polypropylene leno bags feature an open-mesh weave that maximizes airflow, making them ideal for storing and transporting fresh produce and other ventilation-sensitive goods.",
    features: [
      { icon: Shield, label: "Reinforced Mesh Weave" },
      { icon: Sun, label: "UV Resistant Yarn" },
      { icon: Droplets, label: "Quick-Dry Ventilated Design" },
      { icon: Grid3x3, label: "Custom Mesh Density" },
      { icon: Printer, label: "Branding Print Available" },
      { icon: Recycle, label: "Fully Recyclable" },
    ],
    applications: [
      { icon: Wheat, label: "Vegetables" },
      { icon: Sprout, label: "Fruits" },
      { icon: Package, label: "Onions & Potatoes" },
      { icon: Building2, label: "Firewood" },
      { icon: FlaskConical, label: "Shellfish" },
      { icon: Tractor, label: "Agriculture" },
      { icon: Truck, label: "Export Packing" },
      { icon: Beef, label: "Poultry Feed" },
    ],
    specs: [
      { icon: Layers, label: "Material", value: "PP Leno Mesh" },
      { icon: Ruler, label: "Width", value: "200 mm - 900 mm" },
      { icon: Weight, label: "GSM Range", value: "20 - 70 GSM" },
      { icon: Grid3x3, label: "Weave", value: "Open Mesh" },
      { icon: Layers, label: "Lamination", value: "Not Required" },
      { icon: Printer, label: "Printing", value: "Up to 4 Colors" },
      { icon: Palette, label: "Colors", value: "Green / Custom" },
      { icon: Settings2, label: "Customization", value: "Mesh, Size, Drawstring" },
    ],
    whyChooseUs: [
      "Superior airflow keeps produce fresher for longer",
      "High tensile strength despite the open weave",
      "Lightweight construction reduces shipping costs",
      "Available with drawstring or stitched openings",
    ],
  },
  {
    id: "acp",
    tabIcon: "Layers",
    tabTitle: "Aluminium",
    tabSubtitle: "Composite Panels",
    pattern: "acp",
    accent: "slate",
    eyebrow: "Aluminium",
    title: "Composite Panels",
    description:
      "Our aluminium composite panels combine two aluminium sheets with a solid core, offering an architectural-grade material that is rigid, weather-resistant, and easy to fabricate.",
    features: [
      { icon: Shield, label: "High Rigidity & Flatness" },
      { icon: Sun, label: "Weatherproof Coating" },
      { icon: Droplets, label: "Corrosion Resistant" },
      { icon: Grid3x3, label: "Multiple Core Options" },
      { icon: Printer, label: "PVDF / PE Finishes" },
      { icon: Recycle, label: "Recyclable Aluminium Core" },
    ],
    applications: [
      { icon: Building2, label: "Facades" },
      { icon: HardHat, label: "Signage" },
      { icon: Package, label: "False Ceilings" },
      { icon: ShoppingBag, label: "Interiors" },
      { icon: FlaskConical, label: "Cladding" },
      { icon: Truck, label: "Vehicle Bodies" },
      { icon: Sprout, label: "Partitions" },
      { icon: Beef, label: "Kitchen Panels" },
    ],
    specs: [
      { icon: Layers, label: "Material", value: "Al + Core + Al" },
      { icon: Ruler, label: "Width", value: "1220 / 1500 mm" },
      { icon: Weight, label: "Thickness", value: "3 - 6 mm" },
      { icon: Grid3x3, label: "Core", value: "PE / FR" },
      { icon: Layers, label: "Coating", value: "PVDF / PE" },
      { icon: Printer, label: "Finish", value: "Gloss / Matte" },
      { icon: Palette, label: "Colors", value: "40+ Shades" },
      { icon: Settings2, label: "Customization", value: "Size, Core, Finish" },
    ],
    whyChooseUs: [
      "Precision-flat panels for seamless installation",
      "Weather-tested coatings for long-term colour retention",
      "Lightweight yet structurally rigid core",
      "Wide shade card for architectural design freedom",
    ],
  },
  {
    id: "granules",
    tabIcon: "CircleDot",
    tabTitle: "DCA & CA of",
    tabSubtitle: "HMEL's Polypropylene",
    pattern: "granules",
    accent: "amber",
    eyebrow: "DCA & CA of",
    title: "HMEL's Polypropylene",
    description:
      "We supply DCA and CA grade polypropylene granules sourced from HMEL, offering consistent melt flow and mechanical properties for downstream processing.",
    features: [
      { icon: Shield, label: "Consistent Melt Flow Index" },
      { icon: Sun, label: "Stabilized Against Degradation" },
      { icon: Droplets, label: "Low Moisture Content" },
      { icon: Grid3x3, label: "Multiple Grades Available" },
      { icon: Printer, label: "Batch-Wise Quality Reports" },
      { icon: Recycle, label: "Food-Grade Compliant Options" },
    ],
    applications: [
      { icon: Package, label: "Injection Molding" },
      { icon: Building2, label: "Extrusion" },
      { icon: FlaskConical, label: "Blow Molding" },
      { icon: Wheat, label: "Fibre & Yarn" },
      { icon: HardHat, label: "Pipes & Fittings" },
      { icon: Tractor, label: "Woven Sacks" },
      { icon: Truck, label: "Packaging Films" },
      { icon: Beef, label: "Consumer Goods" },
    ],
    specs: [
      { icon: Layers, label: "Grade", value: "DCA / CA" },
      { icon: Ruler, label: "MFI Range", value: "3 - 35 g/10min" },
      { icon: Weight, label: "Packing", value: "25 / 50 kg Bags" },
      { icon: Grid3x3, label: "Form", value: "Granules" },
      { icon: Layers, label: "Source", value: "HMEL" },
      { icon: Printer, label: "Traceability", value: "Batch Coded" },
      { icon: Palette, label: "Color", value: "Natural" },
      { icon: Settings2, label: "Customization", value: "Grade, Packing Size" },
    ],
    whyChooseUs: [
      "Sourced directly from HMEL for assured quality",
      "Stable supply chain with consistent lot quality",
      "Technical support for grade selection",
      "Competitive pricing on bulk orders",
    ],
  },
];

const INDUSTRIES = [
  { icon: Sprout, label: "Agriculture" },
  { icon: Building2, label: "Cement" },
  { icon: FlaskConical, label: "Chemicals" },
  { icon: UtensilsCrossed, label: "Food Processing" },
  { icon: ShoppingBag, label: "Retail Packaging" },
  { icon: HardHat, label: "Construction" },
  { icon: Truck, label: "Logistics" },
  { icon: Recycle, label: "Waste Management" },
];

const COMPARE_COLUMNS = [
  { id: "woven", label: "HDPE/PP\nWoven Fabrics" },
  { id: "nonwoven", label: "PP\nNon-Woven" },
  { id: "leno", label: "Leno\nBags" },
  { id: "acp", label: "ACP\nPanels" },
  { id: "granules", label: "HMEL PP\n(DCA & CA)" },
];

const COMPARE_ROWS = [
  { feature: "High Strength", values: [true, true, true, true, false] },
  { feature: "Moisture Resistant", values: [true, true, false, true, true] },
  { feature: "UV Resistant", values: [true, true, true, true, false] },
  { feature: "Printable", values: [true, true, true, true, false] },
  { feature: "Recyclable", values: [true, true, true, true, true] },
];

const ACCENTS = {
  blue: { bg: "bg-blue-600", text: "text-blue-700", light: "bg-blue-50", border: "border-blue-600", ring: "ring-blue-100" },
  emerald: { bg: "bg-emerald-600", text: "text-emerald-700", light: "bg-emerald-50", border: "border-emerald-600", ring: "ring-emerald-100" },
  slate: { bg: "bg-slate-600", text: "text-slate-700", light: "bg-slate-50", border: "border-slate-600", ring: "ring-slate-100" },
  amber: { bg: "bg-amber-600", text: "text-amber-700", light: "bg-amber-50", border: "border-amber-600", ring: "ring-amber-100" },
};

/* ------------------------------------------------------------------ */
/*  GENERATED VISUAL SWATCHES (no external images, pure SVG/CSS)       */
/* ------------------------------------------------------------------ */

function ProductVisual({ pattern, variant = 0, className = "" }) {
  const seed = variant;
  const patterns = {
    weave: (
      <svg viewBox="0 0 400 260" className={className} preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={`w-bg-${seed}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
          <pattern id={`w-weave-${seed}`} width="18" height="18" patternUnits="userSpaceOnUse" patternTransform={`rotate(${seed * 6})`}>
            <rect width="18" height="18" fill="none" />
            <path d="M0 4 H18" stroke="#cbd5e1" strokeWidth="2.5" />
            <path d="M0 12 H18" stroke="#94a3b8" strokeWidth="2.5" />
            <path d="M4 0 V18" stroke="#e2e8f0" strokeWidth="2.5" />
          </pattern>
        </defs>
        <rect width="400" height="260" fill={`url(#w-bg-${seed})`} />
        <rect width="400" height="260" fill={`url(#w-weave-${seed})`} opacity="0.9" />
        <path d={`M-20 ${40 + seed * 20} C 120 ${10 + seed * 20}, 280 ${70 + seed * 20}, 420 ${30 + seed * 20}`} stroke="#2563eb" strokeWidth="3" fill="none" opacity="0.5" />
        <path d={`M-20 ${90 + seed * 15} C 120 ${60 + seed * 15}, 280 ${120 + seed * 15}, 420 ${80 + seed * 15}`} stroke="#2563eb" strokeWidth="3" fill="none" opacity="0.35" />
      </svg>
    ),
    nonwoven: (
      <svg viewBox="0 0 400 260" className={className} preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id={`nw-bg-${seed}`} cx="30%" cy="30%" r="80%">
            <stop offset="0%" stopColor="#eff6ff" />
            <stop offset="100%" stopColor="#bfdbfe" />
          </radialGradient>
        </defs>
        <rect width="400" height="260" fill={`url(#nw-bg-${seed})`} />
        <rect x="40" y="30" width="320" height="200" rx="18" fill="#ffffff" opacity="0.55" />
        {Array.from({ length: 60 }).map((_, i) => (
          <circle key={i} cx={(i * 37 + seed * 13) % 380 + 10} cy={(i * 53 + seed * 29) % 220 + 10} r="1.6" fill="#3b82f6" opacity="0.35" />
        ))}
      </svg>
    ),
    leno: (
      <svg viewBox="0 0 400 260" className={className} preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={`l-bg-${seed}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ecfdf5" />
            <stop offset="100%" stopColor="#a7f3d0" />
          </linearGradient>
        </defs>
        <rect width="400" height="260" fill={`url(#l-bg-${seed})`} />
        {Array.from({ length: 11 }).map((_, i) => (
          <line key={"v" + i} x1={20 + i * 34 + seed * 4} y1="10" x2={20 + i * 34 + seed * 4} y2="250" stroke="#059669" strokeWidth="3" opacity="0.45" />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={"h" + i} x1="10" y1={20 + i * 30 + seed * 3} x2="390" y2={20 + i * 30 + seed * 3} stroke="#047857" strokeWidth="3" opacity="0.35" />
        ))}
      </svg>
    ),
    acp: (
      <svg viewBox="0 0 400 260" className={className} preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={`a-bg-${seed}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f1f5f9" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>
        </defs>
        <rect width="400" height="260" fill={`url(#a-bg-${seed})`} />
        {Array.from({ length: 6 }).map((_, i) => (
          <rect key={i} x="30" y={20 + i * 36 + seed * 4} width="340" height="26" rx="3"
            fill={i % 2 === 0 ? "#e2e8f0" : "#94a3b8"} opacity="0.85" />
        ))}
      </svg>
    ),
    granules: (
      <svg viewBox="0 0 400 260" className={className} preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id={`g-bg-${seed}`} cx="50%" cy="40%" r="80%">
            <stop offset="0%" stopColor="#fffbeb" />
            <stop offset="100%" stopColor="#fde68a" />
          </radialGradient>
        </defs>
        <rect width="400" height="260" fill={`url(#g-bg-${seed})`} />
        {Array.from({ length: 90 }).map((_, i) => {
          const cx = ((i * 41 + seed * 17) % 380) + 10;
          const cy = ((i * 31 + seed * 23) % 220) + 10;
          return <circle key={i} cx={cx} cy={cy} r="6" fill="#fffdf5" stroke="#d97706" strokeWidth="0.6" opacity="0.9" />;
        })}
      </svg>
    ),
  };
  return patterns[pattern] || patterns.weave;
}

/* ------------------------------------------------------------------ */
/*  MAIN COMPONENT                                                     */
/* ------------------------------------------------------------------ */

export default function Product() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [imgIdx, setImgIdx] = useState(0);
  const product = PRODUCTS[activeIdx];
  const accent = ACCENTS[product.accent];
  const thumbCount = 4;

  const selectTab = (idx) => {
    setActiveIdx(idx);
    setImgIdx(0);
  };

  const nextImg = () => setImgIdx((i) => (i + 1) % thumbCount);
  const prevImg = () => setImgIdx((i) => (i - 1 + thumbCount) % thumbCount);

  return (
    <main id="main-layout--product">
        <Header />
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800 w-full">
      <div className="page-width py-8">

        {/* ---------------- TABS ---------------- */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {PRODUCTS.map((p, idx) => {
            const Icon = TAB_ICONS[p.tabIcon];
            const isActive = idx === activeIdx;
            const a = ACCENTS[p.accent];
            return (
              <button
                key={p.id}
                onClick={() => selectTab(idx)}
                className={`flex flex-col items-center gap-2 rounded-xl border-2 bg-white px-3 py-4 text-center transition-all
                  ${isActive ? `${a.border} shadow-md ring-4 ${a.ring}` : "border-slate-200 hover:border-slate-300 hover:shadow-sm"}`}
              >
                <span className={`flex h-10 w-10 items-center justify-center rounded-full ${isActive ? a.light : "bg-slate-100"}`}>
                  <Icon className={`h-5 w-5 ${isActive ? a.text : "text-slate-400"}`} strokeWidth={1.75} />
                </span>
                <span className="leading-tight">
                  <span className={`block text-xs font-semibold ${isActive ? "text-slate-900" : "text-slate-600"}`}>
                    {p.tabTitle}
                  </span>
                  <span className="block text-xs text-slate-500">{p.tabSubtitle}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* ---------------- HERO / PRODUCT DETAIL ---------------- */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Carousel */}
          <div>
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <ProductVisual pattern={product.pattern} variant={imgIdx} className="h-64 w-full sm:h-80" />
              <button
                onClick={prevImg}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow ring-1 ring-slate-200 hover:bg-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextImg}
                aria-label="Next image"
                className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow ring-1 ring-slate-200 hover:bg-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-3 grid grid-cols-4 gap-3">
              {Array.from({ length: thumbCount }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setImgIdx(i)}
                  className={`overflow-hidden rounded-lg border-2 ${i === imgIdx ? accent.border : "border-transparent"}`}
                >
                  <ProductVisual pattern={product.pattern} variant={i} className="h-16 w-full sm:h-20" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <span className={`w-fit text-xs font-bold uppercase tracking-wider ${accent.text}`}>{product.eyebrow}</span>
            <h1 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">{product.title}</h1>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{product.description}</p>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              {product.features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${accent.light}`}>
                      <Icon className={`h-4 w-4 ${accent.text}`} strokeWidth={1.75} />
                    </span>
                    <span className="text-sm font-medium text-slate-700">{f.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className={`inline-flex items-center justify-center gap-2 rounded-lg ${accent.bg} px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90`}>
                <Download className="h-4 w-4" />
                Download Catalogue
              </button>
              <button className={`inline-flex items-center justify-center gap-2 rounded-lg border-2 ${accent.border} px-5 py-2.5 text-sm font-semibold ${accent.text} bg-white transition hover:bg-slate-50`}>
                Enquire Now
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ---------------- APPLICATIONS ---------------- */}
        {/* <section className="mt-14">
          <h2 className="text-lg font-bold text-slate-900">Applications</h2>
          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
            {product.applications.map((a, i) => {
              const Icon = a.icon;
              return (
                <div key={i} className="flex flex-col items-center gap-2 text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white ring-1 ring-slate-200">
                    <Icon className="h-5 w-5 text-slate-500" strokeWidth={1.5} />
                  </span>
                  <span className="text-xs font-medium text-slate-600">{a.label}</span>
                </div>
              );
            })}
          </div>
        </section> */}

        {/* ---------------- KEY SPECS + WHY CHOOSE US ---------------- */}
        <section className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-bold text-slate-900">Key Specifications</h2>
            <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-5">
              {product.specs.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={i} className="flex items-start gap-3">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" strokeWidth={1.75} />
                    <div>
                      <div className="text-xs text-slate-500">{s.label}</div>
                      <div className="text-sm font-semibold text-slate-800">{s.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6 text-white">
            <h2 className="text-lg font-bold">Why Choose Our {product.title}?</h2>
            <ul className="mt-5 space-y-4">
              {product.whyChooseUs.map((w, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" strokeWidth={2.5} />
                  <span className="text-sm text-slate-200">{w}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-14">
          <ManufacturerDetails />
        </section>

        </div>
        </div>
        <Footer />
    </main>
  );
}