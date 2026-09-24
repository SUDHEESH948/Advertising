import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";
import { reveal, group } from "../animations/variants";
import {
  img,
  work,
  servicesData,
  notableClients,
  runningImg,
} from "../data/mediaData";
import Button from "../components/Button";
import Eyebrow from "../components/Eyebrow";
import Fade from "../components/Fade";

export default function Home() {
  /*
   * LED advertisements
   * Uses the existing hero image + existing work images.
   * This means you don't need to add new image imports.
   */
  const ledAds = useMemo(() => {
    const ads = [img.hero, ...work.map((item) => item.image)].filter(Boolean);

    return [...new Set(ads)];
  }, []);

  const [currentAd, setCurrentAd] = useState(0);

  /*
   * Automatically change LED advertisement
   * every 4 seconds.
   */
  useEffect(() => {
    if (ledAds.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % ledAds.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [ledAds.length]);

  return (
    <div className="bg-white">
      {/* =========================================================
          HOME HERO
      ========================================================= */}
      <section className="bg-white pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1440px] xl:max-w-[1600px] 2xl:max-w-[1760px] grid lg:grid-cols-[1fr_1.1fr] xl:grid-cols-[1fr_1.25fr] gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* LEFT COLUMN */}
          <div className="flex flex-col justify-center">
            <motion.div variants={group} initial="hidden" animate="show">
              <motion.div variants={reveal}>
                <Eyebrow>Kerala’s Transit & Out-of-Home Media Leader</Eyebrow>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="mt-5 sm:mt-6 max-w-4xl font-display text-[clamp(2.4rem,7vw,7.4rem)] font-extrabold leading-[0.95] sm:leading-[0.9] tracking-[-0.04em] text-[#111820]"
              >
                16 Lakh KM.
                <br />
                <span className="text-[#FD3DB5]">Daily Impact.</span>
                <br />
                <span className="ml-[0.15em] sm:ml-[0.2em] text-[#111820]">
                  All Kerala.
                </span>
              </motion.h1>

              <motion.div
                variants={reveal}
                className="mt-6 sm:mt-8 flex flex-col justify-between gap-6 border-t border-black/15 pt-6 sm:flex-row sm:items-end"
              >
                <p className="max-w-md text-sm sm:text-base leading-relaxed sm:leading-7 text-[#111820]/65">
                  Sole licensee for KSRTC bus fleet branding, prime highway
                  hoardings, LED roadshow vans, and large-format digital
                  printing across Kerala.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <Button className="w-full sm:w-auto">Book Media</Button>

                  <Button to="/gallery" dark className="w-full sm:w-auto">
                    View Samples
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT COLUMN — AUTOMATIC LED ADVERTISING BOARD
          ===================================================== */}
          <div className="flex justify-center lg:justify-end w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                w-full
                max-w-[520px]
                sm:max-w-[640px]
                lg:max-w-none
                aspect-[16/10]
                sm:aspect-[16/9]
                lg:aspect-[16/9.5]
                xl:aspect-[16/9]
                overflow-hidden
                rounded-xl
                sm:rounded-2xl
                lg:rounded-3xl
                bg-[#080B10]
                border border-black/20
                shadow-[0_25px_70px_rgba(0,0,0,0.25)]
              "
            >
              {/* =================================================
                  LED SCREEN
              ================================================= */}
              <div className="absolute inset-0 bg-black">
                <motion.img
                  key={currentAd}
                  src={ledAds[currentAd]}
                  alt="LED Advertising Display"
                  initial={{
                    opacity: 0,
                    scale: 1.06,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />

                {/* Dark cinematic overlay */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#111820]/90 via-transparent to-black/25" />

                {/* Pink LED glow */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#FD3DB5]/10 via-transparent to-transparent" />

                {/* =================================================
                    LED SCANLINES
                ================================================= */}
                <div
                  className="
                    absolute
                    inset-0
                    pointer-events-none
                    opacity-[0.16]
                  "
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(255,255,255,0.18) 4px)",
                  }}
                />

                {/* =================================================
                    SCREEN REFLECTION
                ================================================= */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-transparent" />

                {/* =================================================
                    TOP BADGE
                ================================================= */}
                <div
                  className="
                  absolute
                  top-3.5
                  left-3.5
                  sm:top-5
                  sm:left-5
                  lg:top-6
                  lg:left-6
                  z-10
                  flex
                  items-center
                  gap-2
                "
                >
                  <span className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-white text-[8px] sm:text-[9px] lg:text-[11px] font-bold uppercase tracking-wider shadow-sm">
                    <span className="h-2 w-2 lg:h-2.5 lg:w-2.5 rounded-full bg-[#FD3DB5] animate-pulse" />
                    Live LED Display
                  </span>
                  <span className="hidden sm:inline-block px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-[#FD3DB5] text-white text-[8px] sm:text-[9px] lg:text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    KSRTC Sole Licensee
                  </span>
                </div>

                {/* =================================================
                    BOTTOM CONTENT
                ================================================= */}
                <div
                  className="
                  absolute
                  bottom-4
                  left-4
                  right-4
                  sm:bottom-6
                  sm:left-6
                  sm:right-6
                  lg:bottom-8
                  lg:left-8
                  lg:right-8
                  flex
                  items-end
                  justify-between
                  gap-4
                  z-10
                "
                >
                  <div>
                    <span className="block font-black text-sm sm:text-lg lg:text-2xl xl:text-3xl text-[#FF8ED8] tracking-tight drop-shadow-sm">
                      16,00,000+ KM
                    </span>

                    <span className="block text-[8px] sm:text-[10px] lg:text-xs xl:text-sm font-bold uppercase tracking-[.18em] text-white/90">
                      Daily Kerala Route Footprint
                    </span>
                  </div>

                  <div
                    className="
                    h-9
                    w-9
                    sm:h-11
                    sm:w-11
                    lg:h-14
                    lg:w-14
                    shrink-0
                    rounded-full
                    bg-[#FD3DB5]
                    flex
                    items-center
                    justify-center
                    shadow-lg
                    hover:scale-105
                    transition-transform
                  "
                  >
                    <ArrowDownRight
                      size={18}
                      className="text-white lg:w-6 lg:h-6"
                    />
                  </div>
                </div>

                {/* =================================================
                    SLIDE INDICATORS
                ================================================= */}
                <div
                  className="
                  absolute
                  bottom-3
                  sm:bottom-3.5
                  lg:bottom-4
                  left-1/2
                  -translate-x-1/2
                  flex
                  items-center
                  gap-1.5
                  lg:gap-2
                  z-10
                "
                >
                  {ledAds.map((_, index) => (
                    <span
                      key={index}
                      className={`
                        h-1 lg:h-1.5 rounded-full transition-all duration-500
                        ${
                          index === currentAd
                            ? "w-5 lg:w-8 bg-[#FD3DB5]"
                            : "w-1.5 lg:w-2.5 bg-white/50"
                        }
                      `}
                    />
                  ))}
                </div>
              </div>

              {/* =================================================
                  LED BOARD FRAME
              ================================================= */}
              <div
                className="
                absolute
                inset-0
                pointer-events-none
                rounded-xl
                sm:rounded-2xl
                lg:rounded-3xl
                border-[5px]
                sm:border-[7px]
                lg:border-[10px]
                xl:border-[12px]
                border-[#151A20]
              "
              />

              {/* Outer highlight */}
              <div
                className="
                absolute
                inset-0
                pointer-events-none
                rounded-xl
                sm:rounded-2xl
                lg:rounded-3xl
                ring-1
                ring-white/10
              "
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MARQUEE TICKER
      ========================================================= */}
      <section className="overflow-hidden border-y border-black/10 bg-[#FD3DB5] py-4 text-[#111820]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max gap-10 whitespace-nowrap font-display text-2xl sm:text-3xl font-extrabold tracking-[-0.03em]"
        >
          {Array(2)
            .fill([
              "KSRTC Bus Fleet Branding",
              "Prime Highway Hoardings",
              "Mobile LED Video Vans",
              "In-Store Retail Visuals",
              "Highway Reflective Signboards",
              "Digital Printing 25k sq.ft/day",
              "BUS-TV Ads",
              "Exhibition Pavilions",
            ])
            .flat()
            .map((x, i) => (
              <span key={i}>
                {x}
                <span className="ml-10 text-white">✳</span>
              </span>
            ))}
        </motion.div>
      </section>

      {/* =========================================================
          CLIENT LOGOS / TRUST
      ========================================================= */}
      <section className="py-8 sm:py-14 border-b border-black/10 bg-white/60">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.25em] text-[#111820]/50 mb-6 sm:mb-8">
            Trusted by Kerala's Foremost Commercial & Public Institutions
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 lg:gap-6">
            {notableClients.slice(0, 10).map((client) => (
              <span
                key={client}
                className="
                  px-3 py-1.5
                  sm:px-4 sm:py-2
                  rounded-xl
                  bg-black/5
                  text-[#111820]
                  font-display
                  text-[11px]
                  sm:text-xs
                  font-bold
                  tracking-tight
                  hover:bg-[#FD3DB5]
                  hover:text-white
                  transition-all
                  cursor-default
                "
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          01 / KEY SERVICES
      ========================================================= */}
      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-[.4fr_1fr] md:items-end">
            <Eyebrow>01 / Core Capabilities</Eyebrow>

            <Fade>
              <h2
                className="
                max-w-4xl
                font-display
                text-3xl
                sm:text-5xl
                lg:text-6xl
                font-extrabold
                leading-[0.95]
                sm:leading-[0.92]
                tracking-[-0.04em]
                text-[#111820]
              "
              >
                Unrivaled reach across
                <br />
                <span className="text-[#FD3DB5]">all Kerala markets.</span>
              </h2>
            </Fade>
          </div>

          <div className="mt-10 sm:mt-14 grid border-t border-black/15 md:grid-cols-2">
            {servicesData.slice(0, 6).map((service, i) => (
              <Fade key={service.id} delay={i * 0.05}>
                <Link
                  to="/services"
                  className="
                    group
                    flex
                    min-h-[190px]
                    sm:min-h-[220px]
                    flex-col
                    justify-between
                    border-b
                    border-black/15
                    p-5
                    sm:p-6
                    md:p-8
                    transition
                    hover:bg-white
                    md:even:border-l
                    active:bg-slate-50
                  "
                >
                  <div className="flex justify-between">
                    <span className="text-[10px] font-bold text-[#FD3DB5]">
                      {service.number}
                    </span>

                    <ArrowUpRight
                      size={18}
                      className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>

                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold tracking-[-0.03em]">
                      {service.title}
                    </h3>

                    <p className="mt-1.5 sm:mt-2 text-xs font-semibold text-[#FD3DB5]">
                      {service.tagline}
                    </p>

                    <p className="mt-1 max-w-sm text-xs sm:text-sm leading-6 text-[#111820]/60 line-clamp-2">
                      {service.desc}
                    </p>
                  </div>
                </Link>
              </Fade>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 text-center">
            <Link
              to="/services"
              className="
                inline-flex
                items-center
                gap-2
                text-xs
                font-bold
                uppercase
                tracking-[.18em]
                text-[#111820]
                hover:text-[#FD3DB5]
                transition-colors
                py-2
              "
            >
              <span>View All 11 Services & Media Solutions</span>

              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          02 / ROADSHOW & VIDEO SHOWCASE
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#111820] px-4 py-14 sm:px-6 sm:py-20 text-white lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.24em] text-[#FF8ED8]">
                <span className="h-px w-8 bg-[#FF8ED8]" />
                02 / Roadshows & Mobile LED Vans
              </p>

              <h2
                className="
                mt-4
                sm:mt-6
                max-w-xl
                font-display
                text-3xl
                sm:text-5xl
                lg:text-6xl
                font-extrabold
                leading-[0.95]
                sm:leading-[0.92]
                tracking-[-0.04em]
              "
              >
                Live Stagecraft &
                <br />
                <span className="text-[#FF8ED8]">High-Lumen Video.</span>
              </h2>

              <p className="mt-4 sm:mt-6 max-w-sm text-sm leading-relaxed sm:leading-7 text-white/60">
                Self-powered hydraulic LED video vans and stagecraft vehicles
                for high-voltage promotions, election circuits, festival
                takeovers, and brand roadshows.
              </p>
            </div>

            <div className="group relative overflow-hidden bg-black rounded-2xl shadow-xl aspect-video">
              <img
                src={runningImg}
                alt="Mobile LED Video Van & Stagecraft"
                className="
                  h-full
                  w-full
                  object-cover
                  opacity-90
                  transition
                  duration-700
                  group-hover:scale-105
                "
                loading="lazy"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111820]/90 via-transparent to-[#FD3DB5]/10" />

              <div
                className="
                absolute
                bottom-4
                left-4
                right-4
                sm:bottom-5
                sm:left-5
                sm:right-5
                flex
                items-center
                justify-between
                text-[9px]
                sm:text-[10px]
                font-bold
                uppercase
                tracking-[.18em]
                text-white
              "
              >
                <span className="truncate pr-2">
                  Mobile LED Stagecraft / High-Fidelity Audio
                </span>

                <span
                  className="
                  grid
                  h-8
                  w-8
                  sm:h-9
                  sm:w-9
                  place-items-center
                  rounded-full
                  bg-[#FD3DB5]
                  text-white
                  shadow-md
                  shrink-0
                "
                >
                  <ArrowUpRight size={14} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          03 / SELECTED CLIENT WORK
      ========================================================= */}
      <section className="bg-[#111820] px-4 py-14 sm:px-6 sm:py-20 text-white lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-5 sm:gap-7 md:flex-row md:items-end">
            <div>
              <Eyebrow>03 / Client Samples</Eyebrow>

              <h2
                className="
                mt-4
                sm:mt-6
                font-display
                text-3xl
                sm:text-5xl
                lg:text-6xl
                font-extrabold
                tracking-[-0.04em]
              "
              >
                Proven executions across
                <br />
                <span className="text-[#FF8ED8]">Kerala.</span>
              </h2>
            </div>

            <Link
              to="/gallery"
              className="
                flex
                items-center
                gap-2
                text-[10px]
                font-bold
                uppercase
                tracking-[.18em]
                text-white/65
                hover:text-white
              "
            >
              All Gallery Samples
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="mt-10 sm:mt-14 grid gap-6 sm:gap-8 md:grid-cols-2">
            {work.slice(0, 4).map((p, i) => (
              <Fade key={p.title} delay={i * 0.04}>
                <Link
                  to="/gallery"
                  className={`group ${i === 1 || i === 2 ? "md:mt-16" : ""}`}
                >
                  <div
                    className="
                    relative
                    overflow-hidden
                    rounded-2xl
                    bg-white/10
                    shadow-lg
                  "
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      className="
                        aspect-[4/3]
                        w-full
                        object-cover
                        transition
                        duration-700
                        group-hover:scale-105
                      "
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    <span
                      className="
                      absolute
                      bottom-4
                      left-4
                      sm:bottom-5
                      sm:left-5
                      text-[9px]
                      sm:text-[10px]
                      font-bold
                      uppercase
                      tracking-[.18em]
                      text-white
                    "
                    >
                      {p.client} — {p.type}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <h3
                        className="
                        font-display
                        text-xl
                        sm:text-2xl
                        lg:text-3xl
                        font-bold
                        tracking-[-0.03em]
                      "
                      >
                        {p.title}
                      </h3>

                      <p className="text-xs text-white/50 mt-1">{p.category}</p>
                    </div>

                    <span
                      className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[.17em]
                      text-[#FF8ED8]
                    "
                    >
                      {p.year}
                    </span>
                  </div>
                </Link>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="bg-[#FD3DB5] px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
        <div
          className="
          mx-auto
          flex
          max-w-[1440px]
          flex-col
          justify-between
          gap-8
          sm:gap-10
          md:flex-row
          md:items-end
        "
        >
          <h2
            className="
            max-w-4xl
            font-display
            text-3xl
            sm:text-5xl
            lg:text-7xl
            xl:text-8xl
            font-extrabold
            leading-[0.92]
            sm:leading-[0.88]
            tracking-[-0.04em]
            text-[#111820]
          "
          >
            Ready to capture
            <br />
            <span className="text-white">all of Kerala?</span>
          </h2>

          <Button to="/contact" dark className="w-full sm:w-auto">
            Get Rate Card
          </Button>
        </div>
      </section>
    </div>
  );
}
