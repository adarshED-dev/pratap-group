import React, { useState } from "react";
import { ArrowRight, Clock, Mail, Phone, Share, Store } from "lucide-react";
const access_key = import.meta.env.VITE_MAIL_ACCESS_KEY;

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

function ContactForm({ formData }) {
  const defaultData = {
    title: "Send Us a Message",

    subtitle: "Fill in the form below and we'll get back to you shortly.",

    buttonText: "Send Message",

    office: {
      title: "Visit Our Office",
      icon: Store,
      details: [
        "123, ABC Road",
        "Vijay Nagar",
        "Indore, Madhya Pradesh 452010",
        "India",
      ],
    },

    phone: {
      title: "Call Us",
      icon: Phone,
      details: ["+91 99999 99999", "+91 731 123 4567"],
    },

    email: {
      title: "Email Us",
      icon: Mail,
      details: ["hello@mvpatelandco.com", "info@mvpatelandco.com"],
    },

    hours: {
      title: "Business Hours",
      icon: Clock,
      details: [
        "Mon - Sat : 10:30 AM - 8:00 PM",
        "Sunday : 11:00 AM - 6:00 PM",
      ],
    },

    social: {
      title: "Follow Us",
      icon: Share,
      links: [
        { icon: '<i class="fa-brands fa-instagram"></i>', url: "/instagram" },
        { icon: `<i class="fa-brands fa-facebook"></i>`, url: "/facebook" },
        { icon: `<i class="fa-brands fa-pinterest"></i>`, url: "/pinterest" },
        { icon: `<i class="fa-brands fa-youtube"></i>`, url: "/youtube" }
      ],
    },
  };

  const content = formData || defaultData;

  const infoSections = [
    content.office,
    content.phone,
    content.email,
    content.hours,
  ];

  // --- form state ---
  const [form, setForm] = useState(initialFormState);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key, ...form }),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("success");
        setForm(initialFormState); // reset the form after successful submission
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section className="w-full py-20 px-6 lg:px-20">
      <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        {/* Left */}
        <div className="rounded-md border border-[#223d8e]/10 bg-transparent p-8 lg:p-10">
          <h2 className="mt-2 text-xl font-extrabold text-blue-950 sm:text-2xl md:text-3xl">
            {content.title}
          </h2>

          <p className="text-sm my-4 sm:text-base text-gray-500 leading-relaxed">
            {content.subtitle}
          </p>
          <div className="w-16 h-0.5 bg-blue-700 mt-6" style={{ opacity: 1, transform: "none" }}></div>

          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="rounded border border-[#223d83]/30 bg-transparent px-5 py-4 text-blue-950 placeholder:text-[#223d83]/20 focus:border-blue-950 focus:outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="rounded border border-[#223d8e]/30 bg-transparent px-5 py-4 text-blue-950 placeholder:text-[#223d83]/20 focus:border-blue-950 focus:outline-none"
              />
            </div>

            <input
              type="tel"
              placeholder="Phone Number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full rounded border border-[#223d8e]/30 bg-transparent px-5 py-4 text-black placeholder:text-[#223d83]/20 focus:border-blue-950 focus:outline-none"
            />

            <input
              type="text"
              placeholder="Subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full rounded border border-[#223d8e]/30 bg-transparent px-5 py-4 text-black placeholder:text-[#223d83]/20 focus:border-blue-950 focus:outline-none"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full resize-none rounded border border-[#223d83]/30 bg-transparent px-5 py-4 text-black placeholder:text-[#223d83]/20 focus:border-blue-950 focus:outline-none"
            />

            <div className="mt-5 flex items-center gap-4 justify-left sm:mt-5">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="group inline-flex items-center gap-2 cursor-pointer rounded-full border border-blue-700 px-6 py-2.5 text-xs tracking-[0.6px] text-blue-800 transition-colors hover:bg-blue-800 hover:text-white sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Sending..." : content.buttonText}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              {status === "success" && (
                <span className="text-sm text-green-600">Message sent — thank you!</span>
              )}
              {status === "error" && (
                <span className="text-sm text-red-600">Something went wrong. Please try again.</span>
              )}
            </div>
          </form>
        </div>

        {/* Right */}
        <div className="rounded-md border border-[#223d8e]/10 p-8 lg:p-10">
          <div className="space-y-10">
            {infoSections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div key={index} className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#223d8e]/10 text-blue-950">
                    <Icon size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>

                  <div>
                    <h3 className="mb-3 uppercase tracking-wide text-[#223d8e] text-sm font-semibold">
                      {section.title}
                    </h3>

                    <div className="space-y-2">
                      {section.details.map((item, i) => (
                        <p key={i} className="leading-7 text-[#223d8e]/75">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Social */}
            <div className="flex gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#223d8e]/10 text-blue-950">
                <Share size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>

              <div>
                <h3 className="mb-4 uppercase tracking-wide text-[#223d8e] text-sm font-semibold">
                  {content.social.title}
                </h3>

                <div className="flex gap-4">
                  {content.social.links.map((item, index) => (
                    <a
                      key={index}
                      href={item.url}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-[#223d8e]/20 text-[#223d8e] transition-all duration-300 hover:border-blue-700 hover:text-blue-700"
                       dangerouslySetInnerHTML={{ __html: item.icon }}
                    >
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;