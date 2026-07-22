import { useEffect, useRef, useState } from "react";

const capacityData = [
  {
    value: 120000,
    suffix: "+",
    unit: "SQ. FT.",
    title: "Manufacturing Area",
    subtitle: "",
  },
  {
    value: 6,
    suffix: "+",
    unit: "",
    title: "Production Lines",
    subtitle: "High Efficiency",
  },
  {
    value: 15000,
    suffix: "+",
    unit: "MT",
    title: "Annual Production Capacity",
    subtitle: "",
  },
  {
    value: 500,
    suffix: "+",
    unit: "",
    title: "Team Members",
    subtitle: "Skilled & Dedicated",
  },
  {
    value: 24,
    suffix: "/7",
    unit: "",
    title: "Operations",
    subtitle: "Ensuring Consistency",
  },
  {
    value: 40,
    suffix: "+",
    unit: "",
    title: "Countries Served",
    subtitle: "Global Presence",
  },
  {
    value: 100,
    suffix: "%",
    unit: "",
    title: "Quality Assured",
    subtitle: "At Every Stage",
  },
  {
    value: 0,
    suffix: "",
    unit: "",
    title: "Production Downtime",
    subtitle: "High Reliability",
  },
];

function Counter({ end, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;

        started.current = true;

        let start = 0;
        const duration = 1800;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;

          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Capacity() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto page-width px-6">

        {/* Heading */}

        <p className="text-center uppercase tracking-[6px] text-[#2F63FF] text-xs md:text-sm font-semibold">
          Our Capacity
        </p>

        <h2 className="mt-4 text-center text-3xl md:text-5xl font-semibold text-[#0A2143]">
          Numbers That Define Our Strength
        </h2>

        {/* Grid */}

        <div className="mt-16">

          <div className="grid grid-cols-2 lg:grid-cols-4">

            {capacityData.map((item, index) => (
              <div
                key={index}
                className={`
                    py-10 px-4 text-center
                    border-[#E7EAF2]
                    ${index < 4 ? "border-b" : ""}
                    ${index % 4 !== 3 ? "lg:border-r" : ""}
                    ${index % 2 === 0 ? "border-r lg:border-r" : ""}
                `}
              >
                <h3 className="text-[#2F63FF] font-light text-5xl md:text-6xl">
                  <Counter
                    end={item.value}
                    suffix={item.suffix}
                  />
                </h3>

                {item.unit && (
                  <p className="mt-3 text-sm font-semibold uppercase text-[#0A2143]">
                    {item.unit}
                  </p>
                )}

                <p className="mt-2 font-semibold text-[#0A2143]">
                  {item.title}
                </p>

                {item.subtitle && (
                  <p className="mt-1 text-gray-500 text-sm">
                    {item.subtitle}
                  </p>
                )}
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}