import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ArrowUpRight, ArrowRight, Plus, X } from "lucide-react";
import { img, servicesData, processSteps, faqData } from "../data/mediaData";
import Hero from "../components/Hero";
import Eyebrow from "../components/Eyebrow";
import Fade from "../components/Fade";

export default function Services() {
  const [open, setOpen] = useState(0);

  return (
    <div className="bg-white">
      <Hero
        eyebrow="Media Solutions"
        title={
          <>
            Comprehensive
            <br />
            <span className="text-[#FD3DB5]">Advertising Reach.</span>
          </>
        }
        body="From the sole licensee KSRTC transit fleet to prime highway hoardings, LED road show trucks, and 25,000 sq.ft daily digital printing."
        image={img.hoarding}
      />

      {/* Services List (All 11 Quilonad Services with Real Assets) */}
      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <Eyebrow>01 / Complete Services List</Eyebrow>
          <div className="mt-8 sm:mt-12 space-y-6 sm:space-y-8">
            {servicesData.map((service) => (
              <Fade key={service.id}>
                <div className="group rounded-2xl sm:rounded-3xl border border-black/15 bg-white p-5 sm:p-8 lg:p-10 shadow-xs hover:border-[#FD3DB5] hover:shadow-xl transition-all duration-300">
                  <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-6 sm:gap-8 items-center">
                    <div className="flex flex-col justify-between h-full">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                          <span className="text-xs font-bold text-[#FD3DB5] font-mono">
                            SERVICE {service.number}
                          </span>
                          <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider px-2 sm:px-2.5 py-0.5 rounded-full bg-black/5 text-[#111820]/70">
                            {service.tagline}
                          </span>
                        </div>
                        <h2 className="mt-2.5 sm:mt-3 font-display text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-[-0.03em] text-[#111820]">
                          {service.title}
                        </h2>
                        <p className="mt-2 sm:mt-3 text-xs sm:text-base leading-relaxed sm:leading-7 text-[#111820]/70">
                          {service.desc}
                        </p>
                      </div>

                      {/* Bullet Points */}
                      <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                        {service.details.map((point) => (
                          <span
                            key={point}
                            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-slate-100 text-[10px] sm:text-[11px] font-medium text-[#111820]"
                          >
                            <Check
                              size={12}
                              className="text-[#FD3DB5] shrink-0"
                            />
                            {point}
                          </span>
                        ))}
                      </div>

                      <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <Link
                          to="/contact"
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#111820] text-white text-[10px] font-bold uppercase tracking-wider hover:bg-[#FD3DB5] active:scale-95 transition-all w-full sm:w-auto"
                        >
                          Inquire Rates <ArrowUpRight size={13} />
                        </Link>
                        <Link
                          to="/gallery"
                          className="text-[10px] font-bold uppercase tracking-wider text-[#111820]/60 hover:text-[#FD3DB5] transition-colors inline-flex items-center justify-center sm:justify-start gap-1 py-1"
                        >
                          View Samples <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>

                    {/* Compact, framed local asset image */}
                    <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 border border-black/10 shadow-sm group-hover:shadow-md transition-all">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-2.5 left-3.5 right-3.5 sm:bottom-3 sm:left-4 sm:right-4 flex items-center justify-between text-white text-[9px] sm:text-[10px] font-bold tracking-wider uppercase">
                        <span className="truncate pr-2">{service.title}</span>
                        <span className="text-[#FF8ED8] shrink-0 font-mono">
                          0{service.number}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-[#111820] px-4 py-14 sm:px-6 sm:py-20 text-white lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1000px]">
          <Eyebrow>02 / Execution Framework</Eyebrow>
          <h2 className="mt-4 sm:mt-6 font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.04em]">
            From Route Audit
            <br />
            <span className="text-[#FF8ED8]">to Live Visibility.</span>
          </h2>
          <div className="mt-10 sm:mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((x, i) => (
              <Fade key={x.step} delay={i * 0.06}>
                <div className="border-t border-white/25 pt-4 sm:pt-5">
                  <p className="text-[10px] font-bold text-[#FF8ED8]">
                    {x.step}
                  </p>
                  <h3 className="mt-3 sm:mt-5 font-display text-base sm:text-lg font-bold tracking-[-0.02em]">
                    {x.title}
                  </h3>
                  <p className="mt-1.5 sm:mt-2 text-xs leading-relaxed text-white/50">
                    {x.desc}
                  </p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[900px]">
          <Eyebrow>03 / Frequently Asked Questions</Eyebrow>
          <div className="mt-8 sm:mt-10 border-t border-black/15">
            {faqData.map((item, i) => (
              <div key={item.q} className="border-b border-black/15">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between py-5 sm:py-6 text-left font-display text-base sm:text-xl font-bold tracking-[-0.03em] cursor-pointer"
                >
                  <span className="pr-4">{item.q}</span>
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-black/20 shrink-0">
                    {open === i ? <X size={15} /> : <Plus size={15} />}
                  </span>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="max-w-2xl overflow-hidden pb-5 sm:pb-6 text-xs sm:text-sm leading-6 sm:leading-7 text-[#111820]/65"
                    >
                      {item.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
