import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Share2,
  ArrowRight,
  Navigation,
} from "lucide-react";

// Static data — edit here
const INFO_CARDS = [
  {
    icon: MapPin,
    title: "Head Office & Plant",
    lines: ["Vill. – Haripur, P.O. – Panchla,", "Howrah – 711322,", "West Bengal, India"],
    link: { label: "View on Map", href: "#" },
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+91 33 2684 1234", "+91 33 2684 5678"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@protap.in", "sales@protap.in"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Monday – Saturday", "9:00 AM – 6:00 PM", "(Sunday Closed)"],
  },
  {
    icon: Share2,
    title: "Follow Us",
    socials: [
      { icon: "", href: "#", label: "Facebook" },
      { icon: "", href: "#", label: "LinkedIn" },
      { icon: "", href: "#", label: "YouTube" },
    ],
  },
];

const FORM_SECTION = {
  title: "Send Us a Message",
  subtitle:
    "Have a question or need more information? Fill out the form and our team will get back to you.",
};

const MAP_SECTION = {
  title: "Find Us",
  card: {
    name: "Protap Manufacturing Unit",
    address: "Vill. – Haripur, P.O. – Panchla, Howrah – 711322, West Bengal, India",
    cta: { label: "Get Directions", href: "#" },
  },
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire this up to your backend / email service
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="w-full bg-white">
      {/* Info cards */}
      <div className="border-b border-gray-100 px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-5">
          {INFO_CARDS.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="rounded-xl border border-gray-100 px-4 py-5 shadow-sm"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-800">
                  <Icon size={16} className="text-white" strokeWidth={1.75} />
                </div>
                <h3 className="mt-3 text-xs font-bold text-blue-950 sm:text-sm">
                  {card.title}
                </h3>

                {card.lines && (
                  <div className="mt-1.5 text-[11px] leading-snug text-gray-500 sm:text-xs">
                    {card.lines.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                )}

                {card.link && (
                  <a
                    href={card.link.href}
                    className="mt-2 inline-block text-[11px] font-semibold text-blue-700 hover:text-blue-900 sm:text-xs"
                  >
                    {card.link.label}
                  </a>
                )}

                {/* {card.socials && (
                  <div className="mt-2.5 flex items-center gap-2">
                    {card.socials.map((social, i) => {
                      const SocialIcon = social.icon;
                      return (
                        <a
                          key={i}
                          href={social.href}
                          aria-label={social.label}
                          className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-800 text-white transition-colors hover:bg-blue-900"
                        >
                          <SocialIcon size={12} />
                        </a>
                      );
                    })}
                  </div>
                )} */}
              </div>
            );
          })}
        </div>
      </div>

      {/* Form + Map */}
      <div className="px-4 py-10 sm:px-6 sm:py-12 lg:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Send Us a Message */}
          <div>
            <h2 className="text-lg font-extrabold text-blue-950 sm:text-xl">
              {FORM_SECTION.title}
            </h2>
            <p className="mt-2 text-xs text-gray-500 sm:text-sm">
              {FORM_SECTION.subtitle}
            </p>

            <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4 sm:mt-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  className="rounded-lg border border-gray-200 px-4 py-2.5 text-xs text-gray-700 outline-none transition-colors focus:border-blue-600 sm:text-sm"
                />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="rounded-lg border border-gray-200 px-4 py-2.5 text-xs text-gray-700 outline-none transition-colors focus:border-blue-600 sm:text-sm"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address *"
                  className="rounded-lg border border-gray-200 px-4 py-2.5 text-xs text-gray-700 outline-none transition-colors focus:border-blue-600 sm:text-sm"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="rounded-lg border border-gray-200 px-4 py-2.5 text-xs text-gray-700 outline-none transition-colors focus:border-blue-600 sm:text-sm"
                />
              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="rounded-lg border border-gray-200 px-4 py-2.5 text-xs text-gray-700 outline-none transition-colors focus:border-blue-600 sm:text-sm"
              />

              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message *"
                className="resize-none rounded-lg border border-gray-200 px-4 py-2.5 text-xs text-gray-700 outline-none transition-colors focus:border-blue-600 sm:text-sm"
              />

              <button
                type="submit"
                className="group inline-flex w-fit items-center gap-2 rounded-full bg-blue-800 px-6 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-blue-900 sm:text-sm"
              >
                Send Message
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              {submitted && (
                <p className="text-xs font-medium text-green-600 sm:text-sm">
                  Thanks! Your message has been sent — we'll be in touch soon.
                </p>
              )}
            </form>
          </div>

          {/* Find Us */}
          <div>
            <h2 className="text-lg font-extrabold text-blue-950 sm:text-xl">
              {MAP_SECTION.title}
            </h2>

            <div className="relative mt-5 overflow-hidden rounded-2xl border border-gray-100 sm:mt-6">
              {/* Stylized map placeholder — swap for a real embedded map (Google Maps / Mapbox) */}
              <div className="relative aspect-[4/3] w-full bg-[repeating-linear-gradient(0deg,#e2e8f0_0px,#e2e8f0_1px,#eff2f6_1px,#eff2f6_40px),repeating-linear-gradient(90deg,#e2e8f0_0px,#e2e8f0_1px,#eff2f6_1px,#eff2f6_40px)] sm:aspect-[4/3] md:aspect-square lg:aspect-[4/3]">
                <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/30 blur-xl" />
                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-[85%] flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-800 shadow-lg">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <div className="mt-1 h-2 w-2 rotate-45 bg-blue-800" />
                </div>
              </div>

              {/* Location info card */}
              <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-white/95 px-4 py-3 shadow-md backdrop-blur sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-xs">
                <div className="flex items-start gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-800">
                    <MapPin size={14} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-blue-950 sm:text-sm">
                      {MAP_SECTION.card.name}
                    </h3>
                    <p className="mt-0.5 text-[10px] leading-snug text-gray-500 sm:text-xs">
                      {MAP_SECTION.card.address}
                    </p>
                    <a
                      href={MAP_SECTION.card.cta.href}
                      className="mt-1.5 inline-flex items-center gap-1 text-[10px] font-semibold text-blue-700 hover:text-blue-900 sm:text-xs"
                    >
                      {MAP_SECTION.card.cta.label}
                      <Navigation size={11} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}