import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";


function HeroBanner({ overlayData = {}, imageSrc, imageSrcMobile }) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#081B33]">
      {/* Background image — swaps to a mobile-cropped image if provided,
          with a slow Ken Burns zoom for a premium feel */}
      <picture>
        {imageSrcMobile && <source srcSet={imageSrcMobile} media="(max-width: 767px)" />}
        <img
          src={imageSrc}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[6000ms] ease-out ${
            showContent ? "scale-110" : "scale-100"
          }`}
        />
      </picture>

      {/* Dark tint for text contrast */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Overlay content */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-end px-6 py-16 text-center text-white">
        {overlayData.subheading && (
          <p
            className={`mb-3 text-xs sm:text-sm uppercase tracking-[3px] text-white/80 transition-all duration-700 ${
              showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {overlayData.subheading}
          </p>
        )}

        <h1
          className={`uppercase font-serif text-3xl sm:text-5xl md:text-6xl leading-tight max-w-3xl transition-all duration-700 delay-150 ${
            showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {overlayData.heading}
        </h1>

        {overlayData.description && (
          <p
            className={`mt-6 max-w-xl text-sm sm:text-base text-white/85 transition-all duration-700 delay-300 ${
              showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {overlayData.description}
          </p>
        )}

        {overlayData.buttonAvailability && (
          <div
            className={`mt-8 flex flex-col sm:flex-row justify-center gap-4 transition-all duration-700 delay-500 ${
              showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <a
              to={overlayData.primaryLink || "/brands"}
              className="group relative overflow-hidden uppercase text-sm sm:text-base font-medium px-6 py-3 bg-white text-black transition-colors duration-300"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                {overlayData.primaryLabel || "Explore Brands"}
              </span>
              <span className="absolute inset-0 -translate-x-full bg-[#081B33] transition-transform duration-300 ease-out group-hover:translate-x-0" />
            </a>
            {overlayData.secondaryLink && (
              <a
                to={overlayData.secondaryLink}
                className="uppercase text-sm sm:text-base font-medium px-6 py-3 border border-white text-white transition-all duration-300 hover:bg-white hover:text-[#081B33]"
              >
                {overlayData.secondaryLabel || "Learn More"}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default HeroBanner;