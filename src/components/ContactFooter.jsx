
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

export default function ContactFooter() {
  const [submitted, setSubmitted] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      {/* =====================================================
          CONTACT SECTION
      ====================================================== */}
      <section
        id="contact"
        className="
          relative overflow-hidden bg-white px-5 py-24
          text-[#1A1A1A] sm:px-6 md:px-10 lg:px-16 lg:py-32
        "
      >
        {/* Background Effects */}
        <div
          className="
            pointer-events-none absolute left-1/2 top-1/2
            h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2
            rounded-full bg-[#D1007F]/5 blur-[130px]
            md:h-[600px] md:w-[600px]
          "
        />

        <div
          className="
            pointer-events-none absolute -bottom-40 -left-40
            h-96 w-96 rounded-full bg-[#F2299A]/5 blur-[120px]
          "
        />

        <div className="relative mx-auto max-w-7xl">
          {/* =====================================================
              CONTACT CONTENT
          ====================================================== */}
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              {/* Section Label */}
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#D1007F]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#D1007F] sm:text-xs">
                  Start a Conversation
                </p>
              </div>

              {/* Heading */}
              <h2
                className="
                  mt-6 text-5xl font-black leading-[0.9]
                  tracking-[-0.05em] text-[#1A1A1A]
                  sm:text-6xl md:text-7xl lg:text-8xl
                "
              >
                Let's make
                <span className="block text-[#D1007F]">
                  your brand visible.
                </span>
              </h2>

              <p className="mt-7 max-w-lg text-sm leading-7 text-neutral-500 sm:text-base">
                Tell us about your campaign. From outdoor advertising and
                transit branding to LED displays, printing and electronic
                media, our team can help turn your idea into a powerful
                campaign.
              </p>

              {/* =====================================================
                  CONTACT DETAILS
              ====================================================== */}
              <div className="mt-10 space-y-4">
                {/* Phone */}
                <a
                  href="tel:+919999999999"
                  className="group flex items-center gap-4"
                >
                  <span
                    className="
                      flex h-12 w-12 shrink-0 items-center justify-center
                      rounded-full border border-[#F3B4D8]
                      bg-[#FFF3F9] text-[#D1007F]
                      transition-all duration-300
                      group-hover:border-[#D1007F]
                      group-hover:bg-[#D1007F]
                      group-hover:text-white
                    "
                  >
                    <Phone size={17} />
                  </span>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                      Call Us
                    </p>

                    <p className="mt-1 text-sm text-neutral-700 transition group-hover:text-[#D1007F]">
                      +91 99999 99999
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:hello@quilonadmedia.com"
                  className="group flex items-center gap-4"
                >
                  <span
                    className="
                      flex h-12 w-12 shrink-0 items-center justify-center
                      rounded-full border border-[#F3B4D8]
                      bg-[#FFF3F9] text-[#D1007F]
                      transition-all duration-300
                      group-hover:border-[#D1007F]
                      group-hover:bg-[#D1007F]
                      group-hover:text-white
                    "
                  >
                    <Mail size={17} />
                  </span>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                      Email Us
                    </p>

                    <p className="mt-1 text-sm text-neutral-700 transition group-hover:text-[#D1007F]">
                      hello@quilonadmedia.com
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <span
                    className="
                      flex h-12 w-12 shrink-0 items-center justify-center
                      rounded-full border border-[#F3B4D8]
                      bg-[#FFF3F9] text-[#D1007F]
                    "
                  >
                    <MapPin size={17} />
                  </span>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                      Location
                    </p>

                    <p className="mt-1 text-sm text-neutral-700">
                      Kerala, India
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="
                  mt-8 inline-flex items-center gap-3 rounded-full
                  border-2 border-[#D1007F] bg-white px-5 py-3
                  text-xs font-bold uppercase tracking-wider
                  text-[#D1007F] transition-all duration-300
                  hover:bg-[#D1007F] hover:text-white
                "
              >
                Chat on WhatsApp

                <ArrowRight size={15} />
              </a>
            </motion.div>

            {/* =====================================================
                FORM
            ====================================================== */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="
                rounded-[2rem] border-2 border-[#F3B4D8]
                bg-[#FFF3F9] p-5
                shadow-[0_15px_50px_rgba(209,0,127,0.08)]
                sm:p-7 md:p-9
              "
            >
              {submitted ? (
                <div className="flex min-h-[500px] flex-col items-center justify-center px-5 text-center">
                  <div
                    className="
                      flex h-16 w-16 items-center justify-center
                      rounded-full bg-[#D1007F] text-white
                      shadow-[0_10px_30px_rgba(209,0,127,0.25)]
                    "
                  >
                    <CheckCircle2 size={30} />
                  </div>

                  <h3 className="mt-7 text-3xl font-black text-[#1A1A1A]">
                    Thank You!
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-7 text-neutral-500">
                    Your enquiry has been received. Our media team will
                    contact you shortly.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="
                      mt-8 rounded-full border-2 border-[#D1007F]
                      px-6 py-3 text-xs font-bold uppercase
                      tracking-widest text-[#D1007F]
                      transition-all hover:bg-[#D1007F]
                      hover:text-white
                    "
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={submitForm}>
                  {/* Form Header */}
                  <div className="mb-8">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D1007F]">
                      Request a Quote
                    </p>

                    <h3 className="mt-3 text-2xl font-black text-[#1A1A1A] sm:text-3xl">
                      Tell us about your campaign.
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-neutral-500">
                      Share your requirements and our team will get back to
                      you.
                    </p>
                  </div>

                  {/* Inputs */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      required
                      type="text"
                      placeholder="Full Name"
                      className="form-input"
                    />

                    <input
                      type="text"
                      placeholder="Company Name"
                      className="form-input"
                    />

                    <input
                      required
                      type="tel"
                      placeholder="Phone Number"
                      className="form-input"
                    />

                    <input
                      required
                      type="email"
                      placeholder="Email Address"
                      className="form-input"
                    />

                    <select
                      required
                      defaultValue=""
                      className="form-input sm:col-span-2"
                    >
                      <option value="" disabled>
                        Select Advertising Service
                      </option>

                      <option>Hoarding</option>
                      <option>Mini Hoarding</option>
                      <option>Moving Media</option>
                      <option>Private Bus Branding</option>
                      <option>KSRTC Branding</option>
                      <option>LED Display</option>
                      <option>Bus Shelter Branding</option>
                      <option>Railway Station Branding</option>
                      <option>High-Quality Printing</option>
                      <option>FM Marketing</option>
                      <option>Electronic Media</option>
                      <option>Sign Board</option>
                      <option>Retail Platform Advertising</option>
                    </select>

                    <input
                      type="text"
                      placeholder="Campaign Location"
                      className="form-input sm:col-span-2"
                    />

                    <textarea
                      required
                      rows="5"
                      placeholder="Tell us about your requirements..."
                      className="form-input resize-none sm:col-span-2"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="
                      group mt-5 flex w-full items-center
                      justify-center gap-3 rounded-full
                      bg-[#D1007F] px-7 py-4 text-sm
                      font-bold text-white
                      shadow-[0_10px_30px_rgba(209,0,127,0.2)]
                      transition-all duration-300
                      hover:bg-[#F2299A]
                      hover:shadow-[0_15px_35px_rgba(209,0,127,0.3)]
                    "
                  >
                    Send Enquiry

                    <Send
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </button>
                </form>
              )}
            </motion.div>
          </div>

          {/* =====================================================
              FINAL CTA
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              relative mt-24 overflow-hidden rounded-[2.5rem]
              border-2 border-[#F3B4D8]
              bg-gradient-to-br from-[#FFF3F9] via-white to-[#FDE5F1]
              p-8 shadow-[0_15px_50px_rgba(209,0,127,0.06)]
              sm:p-10 md:mt-28 md:p-14
            "
          >
            <div
              className="
                absolute -right-20 -top-20 h-64 w-64
                rounded-full bg-[#D1007F]/10 blur-[100px]
              "
            />

            <div className="relative z-10 max-w-4xl">
              <div className="flex items-center gap-3 text-[#D1007F]">
                <Sparkles size={18} />

                <span className="text-[10px] font-bold uppercase tracking-[0.3em] sm:text-xs">
                  QUILONAD MEDIA
                </span>
              </div>

              <h3 className="mt-5 text-4xl font-black tracking-tight text-[#1A1A1A] sm:text-5xl md:text-6xl">
                Make your brand
                <span className="text-[#D1007F]">
                  {" "}
                  impossible to miss.
                </span>
              </h3>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-500 sm:text-base">
                Outdoor advertising, moving media, LED displays, printing,
                FM marketing, electronic media, retail platform advertising
                and professional signage.
              </p>

              <button
                type="button"
                onClick={() => scrollTo("services-ticker")}
                className="
                  group mt-8 flex items-center gap-3 rounded-full
                  bg-[#D1007F] px-7 py-4 text-sm font-bold text-white
                  shadow-[0_10px_30px_rgba(209,0,127,0.2)]
                  transition-all hover:bg-[#F2299A]
                "
              >
                Explore Our Services

                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <footer
        className="
          border-t-2 border-[#F3B4D8] bg-white
          px-5 py-12 text-[#1A1A1A]
          sm:px-6 md:px-10 lg:px-16
        "
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* BRAND */}
            <div className="lg:col-span-2">
              <button
                type="button"
                onClick={() => scrollTo("home")}
                className="text-left"
              >
                <div className="text-2xl font-black tracking-[0.18em] text-[#D1007F]">
                  QUILONAD
                </div>

                <div className="text-[9px] font-medium tracking-[0.45em] text-neutral-400">
                  MEDIA
                </div>
              </button>

              <p className="mt-5 max-w-sm text-sm leading-7 text-neutral-500">
                For Complete Media Promotion. Building visibility through
                powerful advertising and media solutions.
              </p>

              {/* =====================================================
                  SOCIAL ICONS
                  Inline SVGs are used instead of lucide-react
                  social icons for maximum Vercel compatibility.
              ====================================================== */}
              <div className="mt-6 flex gap-2">
                {/* Instagram */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-full border border-[#F3B4D8]
                    bg-[#FFF3F9] text-[#D1007F]
                    transition-all hover:border-[#D1007F]
                    hover:bg-[#D1007F] hover:text-white
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="#"
                  aria-label="Facebook"
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-full border border-[#F3B4D8]
                    bg-[#FFF3F9] text-[#D1007F]
                    transition-all hover:border-[#D1007F]
                    hover:bg-[#D1007F] hover:text-white
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4a22 22 0 0 0-2.4-.1c-2.4 0-4 1.5-4 4.1V10H8v3h2.4v8h3.1Z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="#"
                  aria-label="YouTube"
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-full border border-[#F3B4D8]
                    bg-[#FFF3F9] text-[#D1007F]
                    transition-all hover:border-[#D1007F]
                    hover:bg-[#D1007F] hover:text-white
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* NAVIGATION */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A]">
                Navigation
              </h4>

              <div className="mt-5 space-y-3">
                {[
                  ["home", "Home"],
                  ["about", "About"],
                  ["services-ticker", "Services"],
                  ["media", "Media"],
                  ["work", "Our Work"],
                  ["news", "News"],
                  ["contact", "Contact"],
                ].map(([id, label]) => (
                  <button
                    type="button"
                    key={id}
                    onClick={() => scrollTo(id)}
                    className="
                      block text-sm text-neutral-500
                      transition hover:text-[#D1007F]
                    "
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* SERVICES */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A]">
                Services
              </h4>

              <div className="mt-5 space-y-3 text-sm text-neutral-500">
                <p>Outdoor Advertising</p>
                <p>Bus Branding</p>
                <p>KSRTC Branding</p>
                <p>LED Display</p>
                <p>High-Quality Printing</p>
                <p>FM Marketing</p>
                <p>Electronic Media</p>
                <p>Retail Platform Advertising</p>
                <p>Sign Board</p>
              </div>
            </div>
          </div>

          {/* FOOTER BOTTOM */}
          <div
            className="
              mt-12 flex flex-col justify-between gap-4
              border-t border-[#F3B4D8] pt-7
              text-xs text-neutral-400 md:flex-row
            "
          >
            <p>© 2026 Quilonad MEDIA. All Rights Reserved.</p>

            <p className="text-[#D1007F]">
              For Complete Media Promotion
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}