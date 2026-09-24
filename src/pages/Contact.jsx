import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowUpRight, ShieldCheck } from "lucide-react";
import { img } from "../data/mediaData";
import Hero from "../components/Hero";
import Eyebrow from "../components/Eyebrow";
import Choice from "../components/Choice";
import Info from "../components/Info";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [service, setService] = useState("KSRTC Bus Branding");
  const [district, setDistrict] = useState("All Kerala (14 Districts)");

  const mediaOptions = [
    "KSRTC Bus Branding",
    "Highway Hoardings & OOH",
    "Mobile LED Video Vans",
    "In-Store Retail Visuals",
    "Highway Direction Boards",
    "Digital Printing (25k sq.ft)",
    "Event Pavilion & Management",
    "Corporate Spice Boxes",
  ];

  const districtOptions = [
    "All Kerala (14 Districts)",
    "Kollam",
    "Kochi / Ernakulam",
    "Thiruvananthapuram",
    "Kozhikode",
    "Thrissur",
    "Custom District Selection",
  ];

  return (
    <div className="bg-white">
      <Hero
        eyebrow="Media Inquiries & Rates"
        title={
          <>
            Book Kerala’s
            <br />
            <span className="text-[#FD3DB5]">Prime Advertising.</span>
          </>
        }
        body="Reach out to Quilonad Media’s planning desk for verified KSRTC fleet availability, hoarding site locations, and rate cards."
        image={img.workspace}
      />
      <section className="px-4 py-12 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1240px] gap-10 lg:gap-16 lg:grid-cols-[1.2fr_.8fr]">
          {/* Inquiry Form */}
          <div>
            <Eyebrow>01 / Campaign Specification</Eyebrow>
            <h2 className="mt-4 sm:mt-6 font-display text-3xl sm:text-5xl font-extrabold tracking-[-0.04em]">
              Request Media
              <br />
              <span className="text-[#FD3DB5]">Rate Card.</span>
            </h2>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 sm:mt-10 bg-white p-5 sm:p-8 rounded-2xl shadow-sm border border-black/10"
              >
                <div className="grid h-12 w-12 place-items-center rounded-full bg-[#FD3DB5] text-white">
                  <Check />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold">
                  Inquiry Received.
                </h3>
                <p className="mt-3 text-sm leading-7 text-black/60">
                  Our media planners in Kollam and Kochi will prepare your
                  customized route availability and rate card within 24 hours.
                </p>
                <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                  <div>
                    <strong>Selected Media:</strong> {service}
                  </div>
                  <div>
                    <strong>Coverage:</strong> {district}
                  </div>
                </div>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="mt-8 sm:mt-10 space-y-6 sm:space-y-7"
              >
                <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
                  {["Full name", "Email", "Company / Brand", "Phone"].map(
                    (x) => (
                      <label
                        key={x}
                        className="text-[10px] font-bold uppercase tracking-[.17em]"
                      >
                        {x}
                        <input
                          required
                          type={
                            x === "Email"
                              ? "email"
                              : x === "Phone"
                                ? "tel"
                                : "text"
                          }
                          className="mt-2 w-full border-b border-black/20 bg-transparent px-0 py-2.5 text-base sm:text-sm font-normal normal-case tracking-normal outline-none focus:border-[#FD3DB5] transition-colors"
                          placeholder={`Your ${x.toLowerCase()}`}
                        />
                      </label>
                    ),
                  )}
                </div>

                <Choice
                  label="Required Media Capability"
                  options={mediaOptions}
                  value={service}
                  set={setService}
                />
                <Choice
                  label="Geographic Coverage"
                  options={districtOptions}
                  value={district}
                  set={setDistrict}
                />

                <label className="block text-[10px] font-bold uppercase tracking-[.17em]">
                  Campaign Objectives & Timeline
                  <textarea
                    required
                    rows={4}
                    className="mt-2 w-full resize-none border-b border-black/20 bg-transparent px-0 py-2.5 text-base sm:text-sm font-normal normal-case tracking-normal outline-none focus:border-[#FD3DB5] transition-colors"
                    placeholder="E.g., 30 KSRTC Super Fast buses for 3 months statewide release starting next month..."
                  />
                </label>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-[#111820] px-7 py-3.5 text-xs font-bold uppercase tracking-[.17em] text-white hover:bg-[#FD3DB5] active:scale-95 transition-all cursor-pointer shadow-md"
                >
                  Submit Rate Inquiry <ArrowUpRight size={15} />
                </button>
              </form>
            )}
          </div>

          {/* Studio & Contact Coordinates */}
          <div className="border-t border-black/15 pt-8 lg:pt-0 lg:border-t-0">
            <Eyebrow>02 / Quilonad Media Offices</Eyebrow>
            <div className="mt-6 sm:mt-8 space-y-6">
              <Info label="Central Office">
                Quilonad Media Towers, Beach Road, Kollam, Kerala — 691001
              </Info>
              <Info label="Regional Hubs">
                Kochi: Marine Drive / MG Road Corridor
                <br />
                Thiruvananthapuram: Statue Junction
              </Info>
              <Info label="Direct Phone">
                <a
                  href="tel:+919447123456"
                  className="hover:text-[#FD3DB5] transition-colors"
                >
                  +91 94471 23456
                </a>{" "}
                /{" "}
                <a
                  href="tel:+914742741122"
                  className="hover:text-[#FD3DB5] transition-colors"
                >
                  +91 474 2741122
                </a>
              </Info>
              <Info label="Official Email">
                <a
                  href="mailto:info@quilonadmedia.com"
                  className="hover:text-[#FD3DB5] transition-colors"
                >
                  info@quilonadmedia.com
                </a>
                <br />
                <a
                  href="mailto:transit@quilonadmedia.com"
                  className="hover:text-[#FD3DB5] transition-colors"
                >
                  transit@quilonadmedia.com
                </a>
              </Info>
              <Info label="Operational Hours">
                Monday – Saturday: 9:00 AM – 6:30 PM
              </Info>
            </div>
            <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-white border border-black/10 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FD3DB5]">
                <ShieldCheck size={16} />
                <span>Sole Licensee Assurance</span>
              </div>
              <p className="mt-2 text-xs text-black/60 leading-relaxed">
                Direct statutory rights for KSRTC fleet branding. Zero broker
                commissions or intermediate agency delays.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
