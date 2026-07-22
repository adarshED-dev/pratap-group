import { useEffect, useRef, useState } from "react";
import { Factory, Award, Users, ShieldCheck, Globe2 } from "lucide-react";

// Static data — edit here
const STATS = [
  {
    icon: Factory,
    title: "15+",
    subtitle: "Years of Experience",
    description: "Delivering quality you can trust.",
  },
  {
    icon: Award,
    title: "100+",
    subtitle: "Products",
    description: "Wide range of solutions for every need.",
  },
  {
    icon: Users,
    title: "500+",
    subtitle: "Happy Clients",
    description: "Trusted by industries across India.",
  },
  {
    icon: ShieldCheck,
    title: "100%",
    subtitle: "Premium Quality Assurance",
    description: "Advanced technology & strict quality control.",
  },
  {
    icon: Globe2,
    title: "5000+",
    subtitle: "Pan India Supply Network",
    description: "Timely delivery across the country.",
  },
];

// How long every counter takes to finish, in milliseconds — every stat
// reaches its target at the same moment regardless of how big the
// number is (15 and 15000 both finish together at this duration).
const COUNT_DURATION_MS = 6000;

// Splits "15000+" -> { value: 15000, prefix: "", suffix: "+" }
// Splits "100%"   -> { value: 100,   prefix: "", suffix: "%" }
function parseStatTitle(title) {
  const match = title.match(/^(\D*)([\d,]+)(\D*)$/);
  if (!match) return { prefix: "", value: 0, suffix: "" };
  const [, prefix, numberPart, suffix] = match;
  return {
    prefix,
    value: parseInt(numberPart.replace(/,/g, ""), 10),
    suffix,
  };
}

// -----------------------------------------------------------------------
// Reveal-on-scroll hook — fires `onVisible` once, the first time the
// element enters the viewport.
// -----------------------------------------------------------------------
function useRevealOnScroll(onVisible) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible();
          observer.unobserve(node);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [onVisible]);

  return ref;
}

// -----------------------------------------------------------------------
// Counts from 0 up to `target` over exactly `duration` ms once `start`
// becomes true. Every counter on the page sharing the same `duration`
// will therefore finish at the same instant, no matter its target size.
// -----------------------------------------------------------------------
function useCountUp(target, duration, start) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!start) return;

    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out so it settles smoothly rather than stopping abruptly
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [start, target, duration]);

  return value;
}

function StatItem({ stat, sectionVisible }) {
  const Icon = stat.icon;
  const { prefix, value: targetValue, suffix } = parseStatTitle(stat.title);
  const count = useCountUp(targetValue, COUNT_DURATION_MS, sectionVisible);

  return (
    <div className="flex justify-center items-center gap-3 px-0 lg:px-6 lg:first:pl-0 lg:last:pr-0">
      {/* <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/5 sm:h-12 sm:w-12">
        <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" strokeWidth={1.75} />
      </div> */}

      <div>
        <div className="flex items-baseline gap-1.5 text-center justify-center">
          <span className="font-bold text-[#2a3d6d] text-3xl text-center mb-2 tabular-nums">
            {prefix}
            {count.toLocaleString()}
            {suffix}
          </span>
        </div>
        <p className="text-xs font-semibold text-black sm:text-sm text-center">
          {stat.subtitle}
        </p>
        <p className="mt-0.5 max-w-[160px] text-[11px] leading-snug text-black sm:text-xs text-center">
          {stat.description}
        </p>
      </div>
    </div>
  );
}

export default function StatsData() {
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRevealOnScroll(() => setSectionVisible(true));

  return (
    <section ref={sectionRef} className="w-full my-[3rem]">
      <div className="page-width px-4 py-8 sm:px-6 sm:py-10 lg:px-10 rounded-2xl mx-auto bg-gradient-to-r from-zinc-50 to-slate-100 grid max-w-7xl grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-y-8 lg:grid-cols-5 lg:gap-y-0 lg:divide-x lg:divide-white/15">
        {STATS.map((stat, index) => (
          <StatItem key={index} stat={stat} sectionVisible={sectionVisible} />
        ))}
      </div>
    </section>
  );
}