import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
  MessageCircle,
  X,
} from "lucide-react";

export default function ContactFooter() {
  const [submitted, setSubmitted] = useState(false);
  const [showFullDetails, setShowFullDetails] = useState(false);

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
          relative overflow-hidden bg-[#F4DC86] px-4 py-16
          text-[#1A1A1A] sm:px-6 sm:py-20 md:px-10 lg:px-16 lg:py-28
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
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
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
                  mt-4 sm:mt-6 text-4xl font-black leading-[0.95]
                  tracking-[-0.04em] text-[#60A917]
                  sm:text-6xl md:text-7xl lg:text-8xl
                "
              >
                Let's make
                <span className="block text-[#D1007F]">
                  your brand visible.
                </span>
              </h2>

              <p className="mt-5 sm:mt-7 max-w-lg text-sm leading-relaxed text-neutral-500 sm:text-base">
                Tell us about your campaign. From outdoor advertising and
                transit branding to LED displays, printing and electronic media,
                our team can help turn your idea into a powerful campaign.
              </p>

              {/* =====================================================
                  CONTACT DETAILS
              ====================================================== */}
              <div className="mt-8 sm:mt-10 space-y-3.5 sm:space-y-4">
                {/* Enquiry & Primary Phone */}
                <div className="group rounded-2xl border-2 border-[#F3B4D8] bg-[#FFF3F9] p-4 sm:p-5 transition-all duration-300 hover:border-[#D1007F] hover:shadow-[0_10px_30px_rgba(209,0,127,0.12)]">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex items-center gap-3.5 sm:gap-4">
                      <span className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#D1007F] text-white shadow-md transition-transform duration-300 group-hover:scale-105">
                        <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                      </span>

                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D1007F]">
                            Enquiry & WhatsApp Number
                          </p>
                          <span className="inline-flex items-center gap-1 rounded-full bg-[#25D366]/15 px-2 py-0.5 text-[9px] font-bold text-[#198754]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#25D366] animate-pulse" />
                            Active
                          </span>
                        </div>

                        <a
                          href="tel:+919497014999"
                          className="mt-0.5 block text-lg sm:text-xl font-black text-[#171217] transition-colors hover:text-[#D1007F]"
                        >
                          +91 94970 14999
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-1 sm:pt-0">
                      <a
                        href="tel:+919497014999"
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 rounded-full bg-[#D1007F] px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#B0006B] transition-colors"
                      >
                        <Phone size={12} />
                        <span>Call</span>
                      </a>

                      <a
                        href="https://wa.me/919497014999?text=Hello%20Quilonad%20Media%2C%20I%20want%20to%20enquire%20about%20your%20advertising%20services.%20Please%20share%20full%20details."
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#20ba59] transition-colors"
                      >
                        <MessageCircle size={12} />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  {/* Subline with other lines & Full Details link */}
                  <div className="mt-3 pt-3 border-t border-[#F3B4D8]/60 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <p className="text-neutral-500">
                      All Lines:{" "}
                      <span className="font-semibold text-neutral-800">
                        9497014999
                      </span>
                      , 9497585555, 9497013999, 9048805999
                    </p>

                    <button
                      type="button"
                      onClick={() => setShowFullDetails(true)}
                      className="inline-flex items-center gap-1 font-bold text-[#D1007F] hover:underline"
                    >
                      <span>Click for Full Details</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>

                {/* Email */}
                <a
                  href="mailto:quilonmediadesigns@gmail.com"
                  className="group flex items-center gap-3.5 sm:gap-4 rounded-xl border border-transparent p-1 sm:p-2 transition-all hover:bg-white/60"
                >
                  <span
                    className="
                      flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center
                      rounded-full border border-[#F3B4D8]
                      bg-[#FFF3F9] text-[#D1007F]
                      transition-all duration-300
                      group-hover:border-[#D1007F]
                      group-hover:bg-[#D1007F]
                      group-hover:text-white
                    "
                  >
                    <Mail className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                  </span>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                      Email Us
                    </p>

                    <p className="mt-0.5 text-sm text-neutral-700 transition group-hover:text-[#D1007F]">
                      quilonmediadesigns@gmail.com
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3.5 sm:gap-4 p-1 sm:p-2">
                  <span
                    className="
                      flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center
                      rounded-full border border-[#F3B4D8]
                      bg-[#FFF3F9] text-[#D1007F]
                    "
                  >
                    <MapPin className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                  </span>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                      Location
                    </p>

                    <p className="mt-0.5 text-sm text-neutral-700">
                      Kerala, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons: WhatsApp & Full Details */}
              <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/919497014999?text=Hello%20Quilonad%20Media%2C%20I%20want%20to%20enquire%20about%20your%20advertising%20services.%20Please%20share%20full%20details."
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex-1 inline-flex items-center justify-center gap-2.5 rounded-full
                    bg-[#25D366] hover:bg-[#20ba59] px-6 py-3.5
                    text-xs sm:text-sm font-bold uppercase tracking-wider
                    text-white shadow-md transition-all duration-300
                    hover:shadow-lg active:scale-[0.98] text-center
                  "
                >
                  <MessageCircle size={17} />
                  <span>Chat on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => setShowFullDetails(true)}
                  className="
                    inline-flex items-center justify-center gap-2 rounded-full
                    border-2 border-[#D1007F] bg-white px-6 py-3.5
                    text-xs sm:text-sm font-bold uppercase tracking-wider
                    text-[#D1007F] transition-all duration-300
                    hover:bg-[#D1007F] hover:text-white text-center
                  "
                >
                  <span>Full Details</span>
                  <ArrowRight size={15} />
                </button>
              </div>
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
                rounded-2xl sm:rounded-[2rem] border-2 border-[#F3B4D8]
                bg-[#FFF3F9] p-4 sm:p-7 md:p-9
                shadow-[0_15px_50px_rgba(209,0,127,0.08)]
              "
            >
              {submitted ? (
                <div className="flex min-h-[420px] sm:min-h-[500px] flex-col items-center justify-center px-4 text-center">
                  <div
                    className="
                      flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center
                      rounded-full bg-[#D1007F] text-white
                      shadow-[0_10px_30px_rgba(209,0,127,0.25)]
                    "
                  >
                    <CheckCircle2 size={28} />
                  </div>

                  <h3 className="mt-5 sm:mt-7 text-2xl sm:text-3xl font-black text-[#1A1A1A]">
                    Thank You!
                  </h3>

                  <p className="mt-2 sm:mt-3 max-w-md text-xs sm:text-sm leading-relaxed text-neutral-500">
                    Your enquiry has been received. Our media team will contact
                    you shortly.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="
                      mt-6 sm:mt-8 rounded-full border-2 border-[#D1007F]
                      px-6 py-2.5 sm:py-3 text-xs font-bold uppercase
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
                  <div className="mb-6 sm:mb-8">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D1007F]">
                      Request a Quote
                    </p>

                    <h3 className="mt-2 sm:mt-3 text-xl font-black text-[#60A917] sm:text-2xl md:text-3xl">
                      Tell us about your campaign.
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-500">
                      Share your requirements and our team will get back to you.
                    </p>
                  </div>

                  {/* Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
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
                      className="form-input sm:col-span-2 cursor-pointer"
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
                      rows="4"
                      placeholder="Tell us about your requirements..."
                      className="form-input resize-none sm:col-span-2"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="
                      group mt-4 sm:mt-5 flex w-full items-center
                      justify-center gap-2.5 sm:gap-3 rounded-full
                      bg-[#D1007F] px-6 py-3.5 sm:px-7 sm:py-4 text-xs sm:text-sm
                      font-bold text-white
                      shadow-[0_10px_30px_rgba(209,0,127,0.2)]
                      transition-all duration-300
                      hover:bg-[#F2299A]
                      hover:shadow-[0_15px_35px_rgba(209,0,127,0.3)]
                    "
                  >
                    Send Enquiry
                    <Send
                      size={15}
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
              relative mt-16 sm:mt-24 md:mt-28 overflow-hidden rounded-2xl sm:rounded-[2.5rem]
              border-2 border-[#F3B4D8]
              bg-gradient-to-br from-[#FFF3F9] via-white to-[#FDE5F1]
              p-6 sm:p-10 md:p-14 shadow-[0_15px_50px_rgba(209,0,127,0.06)]
            "
          >
            <div
              className="
                absolute -right-20 -top-20 h-64 w-64
                rounded-full bg-[#D1007F]/10 blur-[100px]
              "
            />

            <div className="relative z-10 max-w-4xl">
              <div className="flex items-center gap-2.5 sm:gap-3 text-[#D1007F]">
                <Sparkles size={16} />

                <span className="text-[10px] font-bold uppercase tracking-[0.3em] sm:text-xs">
                  QUILONAD MEDIA
                </span>
              </div>

              <h3 className="mt-3 sm:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#60A917]">
                Make your brand
                <span className="text-[#D1007F]"> impossible to miss.</span>
              </h3>

              <p className="mt-3 sm:mt-5 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-neutral-500">
                Outdoor advertising, moving media, LED displays, printing, FM
                marketing, electronic media, retail platform advertising and
                professional signage.
              </p>

              <button
                type="button"
                onClick={() => scrollTo("services-ticker")}
                className="
                  group mt-6 sm:mt-8 inline-flex items-center justify-center gap-2.5 sm:gap-3 rounded-full
                  bg-[#D1007F] px-6 py-3.5 sm:px-7 sm:py-4 text-xs sm:text-sm font-bold text-white
                  shadow-[0_10px_30px_rgba(209,0,127,0.2)]
                  transition-all hover:bg-[#F2299A]
                  w-full sm:w-auto text-center
                "
              >
                Explore Our Services
                <ArrowRight
                  size={15}
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
          border-t-2 border-[#F3B4D8] bg-[#F4DC86]
          px-4 py-10 text-[#1A1A1A]
          sm:px-6 sm:py-12 md:px-10 lg:px-16
        "
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {/* BRAND */}
            <div className="sm:col-span-2">
              <button
                type="button"
                onClick={() => scrollTo("home")}
                className="text-left"
              >
                <div className="text-xl sm:text-2xl font-black tracking-[0.18em] text-[#D1007F]">
                  QUILONAD
                </div>

                <div className="text-[8px] sm:text-[9px] font-medium tracking-[0.45em] text-neutral-400">
                  MEDIA
                </div>
              </button>

              <p className="mt-4 sm:mt-5 max-w-sm text-xs sm:text-sm leading-relaxed text-neutral-500">
                For Complete Media Promotion. Building visibility through
                powerful advertising and media solutions.
              </p>

              {/* =====================================================
                  SOCIAL ICONS
              ====================================================== */}
              <div className="mt-5 sm:mt-6 flex gap-2">
                {/* Instagram */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="
                    flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center
                    rounded-full border border-[#F3B4D8]
                    bg-[#FFF3F9] text-[#D1007F]
                    transition-all hover:border-[#D1007F]
                    hover:bg-[#D1007F] hover:text-white
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 sm:h-5 sm:w-5"
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
                    flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center
                    rounded-full border border-[#F3B4D8]
                    bg-[#FFF3F9] text-[#D1007F]
                    transition-all hover:border-[#D1007F]
                    hover:bg-[#D1007F] hover:text-white
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 sm:h-5 sm:w-5"
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
                    flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center
                    rounded-full border border-[#F3B4D8]
                    bg-[#FFF3F9] text-[#D1007F]
                    transition-all hover:border-[#D1007F]
                    hover:bg-[#D1007F] hover:text-white
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 sm:h-5 sm:w-5"
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

              <div className="mt-4 sm:mt-5 space-y-2.5 sm:space-y-3">
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
                      block text-xs sm:text-sm text-neutral-500
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

              <div className="mt-4 sm:mt-5 space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-neutral-500">
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
              mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-between gap-3
              border-t border-[#F3B4D8] pt-6 sm:pt-7
              text-xs text-neutral-400 text-center sm:text-left
            "
          >
            <p>© 2026 Quilonad MEDIA. All Rights Reserved.</p>

            <p className="text-[#D1007F]">For Complete Media Promotion</p>
          </div>
        </div>
      </footer>

      {/* =====================================================
          FULL DETAILS MODAL
      ====================================================== */}
      <AnimatePresence>
        {showFullDetails && (
          <div
            onClick={() => setShowFullDetails(false)}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 p-3 backdrop-blur-md sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: "spring", damping: 26, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border-2 border-[#D1007F] bg-white p-6 sm:p-8 shadow-2xl text-[#171217]"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setShowFullDetails(false)}
                aria-label="Close details"
                className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 transition-all hover:rotate-90 hover:bg-[#D1007F] hover:text-white"
              >
                <X size={18} />
              </button>

              {/* Modal Header */}
              <div className="pr-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D1007F]">
                  Quilonad Media • Contact Directory
                </span>
                <h3 className="mt-1 text-2xl sm:text-3xl font-black text-[#171217]">
                  Full Contact & Enquiry Details
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-neutral-500">
                  Direct contact numbers and campaign communication channels.
                </p>
              </div>

              {/* Primary Enquiry Spotlight */}
              <div className="mt-6 rounded-2xl border-2 border-[#25D366] bg-[#F0FDF4] p-4 sm:p-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-[#25D366] px-2.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">
                        Primary Enquiry Desk
                      </span>
                      <span className="text-xs font-semibold text-[#166534]">
                        WhatsApp Available
                      </span>
                    </div>
                    <div className="mt-1 text-xl sm:text-2xl font-black text-[#166534]">
                      +91 94970 14999
                    </div>
                    <p className="text-xs text-[#15803d]">
                      Instant quotes, media availability, and campaign bookings.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href="tel:+919497014999"
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#166534] px-4 py-2 text-xs font-bold text-white hover:bg-[#14532d] transition-colors"
                    >
                      <Phone size={12} />
                      <span>Call Now</span>
                    </a>
                    <a
                      href="https://wa.me/919497014999?text=Hello%20Quilonad%20Media%2C%20I%20want%20to%20enquire%20about%20your%20advertising%20services.%20Please%20share%20full%20details."
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2 text-xs font-bold text-white hover:bg-[#20ba59] transition-colors"
                    >
                      <MessageCircle size={12} />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* All Contact Lines */}
              <div className="mt-6">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-3">
                  Direct Department Contact Lines
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    {
                      number: "+91 94970 14999",
                      clean: "9497014999",
                      label: "General Enquiry & WhatsApp Desk",
                      note: "Rates, Hoardings & Transit",
                    },
                    {
                      number: "+91 94975 85555",
                      clean: "9497585555",
                      label: "Media Coordination Desk",
                      note: "Outdoor Sites & LED Billboards",
                    },
                    {
                      number: "+91 94970 13999",
                      clean: "9497013999",
                      label: "Campaign Strategy Desk",
                      note: "KSRTC & Private Bus Fleet",
                    },
                    {
                      number: "+91 90488 05999",
                      clean: "9048805999",
                      label: "Production & Fabrication Desk",
                      note: "Signage, Printing & Prototypes",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between rounded-xl border border-neutral-200 bg-neutral-50/70 p-3 hover:border-[#D1007F] hover:bg-[#FFF7FB] transition-all"
                    >
                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-[#D1007F]">
                          {item.label}
                        </span>
                        <span className="block text-sm font-bold text-neutral-900 mt-0.5">
                          {item.number}
                        </span>
                        <span className="block text-[10px] text-neutral-500">
                          {item.note}
                        </span>
                      </div>

                      <a
                        href={`tel:+91${item.clean}`}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#D1007F] border border-[#F3B4D8] hover:bg-[#D1007F] hover:text-white transition-colors"
                        title={`Call ${item.number}`}
                      >
                        <Phone size={13} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Office & Operations Details */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-5 border-t border-neutral-100">
                <div className="rounded-xl bg-neutral-50 p-3.5 border border-neutral-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                    Official Email
                  </span>
                  <a
                    href="mailto:quilonmediadesigns@gmail.com"
                    className="mt-1 block text-xs sm:text-sm font-semibold text-[#D1007F] hover:underline"
                  >
                    quilonmediadesigns@gmail.com
                  </a>
                </div>

                <div className="rounded-xl bg-neutral-50 p-3.5 border border-neutral-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                    Headquarters
                  </span>
                  <p className="mt-1 text-xs sm:text-sm font-semibold text-neutral-800">
                    Kerala, India (Pan-Kerala Operations)
                  </p>
                </div>
              </div>

              {/* Modal Bottom Action */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/919497014999?text=Hello%20Quilonad%20Media%2C%20I%20want%20to%20enquire%20about%20your%20advertising%20services.%20Please%20share%20full%20details."
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] py-3 px-4 text-xs sm:text-sm font-bold text-white shadow-md transition-all active:scale-[0.98]"
                >
                  <MessageCircle size={15} />
                  <span>Start WhatsApp Chat (+91 94970 14999)</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setShowFullDetails(false);
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#D1007F] hover:bg-[#B0006B] py-3 px-4 text-xs sm:text-sm font-bold text-white shadow-md transition-all active:scale-[0.98]"
                >
                  <span>Fill Quote Form</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
