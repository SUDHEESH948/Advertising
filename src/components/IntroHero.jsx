import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Menu,
  X,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";

import heroBackground from "../assets/hroicce.png";

const navItems = [
  ["About", "about"],
  ["Services", "services"],
  ["Media", "media"],
  ["Our Work", "work"],
  ["News", "news"],
  ["Contact", "contact"],
];

const servicePills = [
  "Outdoor Advertising",
  "Bus Branding",
  "LED Display",
  "Printing",
  "FM Marketing",
];

export default function IntroHero() {
  const [introFinished, setIntroFinished] = useState(false);
  const [muted, setMuted] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = introFinished ? "" : "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [introFinished]);

  const scrollTo = (id) => {
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      {/* =====================================================
          INTRO VIDEO (RESPONSIVE 16:9 CONTAIN WITH BLURRED BG)
      ====================================================== */}
      <AnimatePresence>
        {!introFinished && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#020805]"
          >
            {/* Ambient Blurred Video Background for mobile aspect fill */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-35 blur-2xl md:hidden"
            >
              <source src="/videos/videee.mp4" type="video/mp4" />
            </video>

            {/* Main Video: fully contained on mobile, full-cover on desktop */}
            <video
              autoPlay
              muted={muted}
              playsInline
              onEnded={() => setIntroFinished(true)}
              className="relative z-10 max-h-full w-full object-contain md:h-full md:object-cover"
            >
              <source src="/videos/videee.mp4" type="video/mp4" />
            </video>

            {/* Video Overlays */}
            <div className="pointer-events-none absolute inset-0 z-20 bg-black/20" />
            <div className="pointer-events-none absolute inset-0 z-20 bg-[#16A34A]/5 mix-blend-screen" />

            {/* Intro Controls */}
            <div className="absolute right-3 top-3 z-50 flex items-center gap-2 sm:right-6 sm:top-6 sm:gap-3">
              {/* Volume Button */}
              <button
                type="button"
                onClick={() => setMuted((value) => !value)}
                aria-label={muted ? "Unmute video" : "Mute video"}
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:border-[#16A34A] hover:bg-[#16A34A]/30 sm:h-10 sm:w-10"
              >
                {muted ? (
                  <VolumeX className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                ) : (
                  <Volume2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                )}
              </button>

              {/* Skip Intro Button */}
              <button
                type="button"
                onClick={() => setIntroFinished(true)}
                className="flex cursor-pointer items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:border-[#16A34A] hover:bg-[#16A34A] sm:gap-2 sm:px-4 sm:py-2 sm:text-xs sm:tracking-widest"
              >
                <Play
                  className="h-2.5 w-2.5 sm:h-3 sm:w-3"
                  fill="currentColor"
                />
                Skip Intro
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section
        id="home"
        className="relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden bg-[#020805] text-white selection:bg-[#16A34A] selection:text-white"
      >
        {/* ===================================================
            BACKGROUND IMAGE & CONTRAST GRADIENTS
        ==================================================== */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={heroBackground}
            alt="Quilonad Media Billboard Network"
            className="
              absolute inset-0
              h-full w-full
              object-cover
              object-[18%_center]
              sm:object-[28%_center]
              md:object-center
            "
          />

          {/* Heavy gradient on mobile to ensure white/green text remains legible */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020805]/95 via-[#020805]/65 to-black/30 md:hidden" />

          {/* Desktop/Tablet soft gradients */}
          <div className="hidden inset-0 bg-gradient-to-r from-[#020805]/80 via-[#020805]/30 to-transparent md:block md:w-[65%]" />
          <div className="hidden inset-0 bg-gradient-to-t from-[#020805]/70 via-transparent to-transparent md:block" />

          {/* Subtle green ambient accent glow */}
          <div className="pointer-events-none absolute left-[-25%] top-[30%] h-[350px] w-[350px] rounded-full bg-[#16A34A]/10 blur-[130px] sm:left-[-10%] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />
        </div>

        {/* ===================================================
            NAVIGATION
        ==================================================== */}
        <header className="relative z-50 w-full px-4 py-4 sm:px-6 sm:py-5 md:px-10 lg:px-16">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            {/* Logo */}
            <button
              type="button"
              onClick={() => scrollTo("home")}
              className="group flex cursor-pointer flex-col text-left"
            >
              <span className="text-base font-black tracking-[0.16em] text-white transition-colors duration-300 group-hover:text-[#22C55E] sm:text-xl sm:tracking-[0.2em]">
                QUILONAD
              </span>
              <span className="-mt-0.5 text-[7.5px] font-bold uppercase tracking-[0.38em] text-[#16A34A] sm:text-[9px] sm:tracking-[0.45em]">
                MEDIA
              </span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 lg:flex">
              {navItems.map(([label, id]) => (
                <button
                  type="button"
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="cursor-pointer text-xs font-semibold uppercase tracking-[0.2em] text-zinc-200 transition-colors duration-200 hover:text-[#22C55E]"
                >
                  {label}
                </button>
              ))}

              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="group flex cursor-pointer items-center gap-2 rounded-full bg-[#16A34A] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#16A34A]/20 transition-all duration-300 hover:bg-[#22C55E]"
              >
                Get a Quote
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </nav>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:border-[#16A34A] hover:bg-[#16A34A]/20 sm:h-10 sm:w-10 lg:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {/* =================================================
              MOBILE MENU
          ================================================== */}
          <AnimatePresence>
            {menuOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setMenuOpen(false)}
                  className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
                />

                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="absolute left-3 right-3 top-[4.25rem] z-50 rounded-2xl border border-[#16A34A]/30 bg-[#020805]/95 p-4 shadow-2xl backdrop-blur-xl sm:left-6 sm:right-6 sm:top-20 sm:p-6 lg:hidden"
                >
                  <div className="flex flex-col gap-1.5 sm:gap-2">
                    {navItems.map(([label, id]) => (
                      <button
                        type="button"
                        key={id}
                        onClick={() => scrollTo(id)}
                        className="cursor-pointer rounded-xl px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-zinc-300 transition-colors hover:bg-white/5 hover:text-white active:bg-[#16A34A]/20 sm:text-sm"
                      >
                        {label}
                      </button>
                    ))}

                    <button
                      type="button"
                      onClick={() => scrollTo("contact")}
                      className="mt-3 w-full cursor-pointer rounded-full bg-[#16A34A] py-2.5 text-center text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#22C55E] sm:py-3"
                    >
                      Get a Quote
                    </button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </header>

        {/* ===================================================
            HERO CONTENT
        ==================================================== */}
        <div
          className="
            relative z-10 mx-auto flex w-full max-w-7xl flex-1
            items-end
            px-4
            pb-8
            pt-10
            sm:px-6
            sm:pb-12
            md:items-center
            md:px-10
            md:py-16
            lg:px-16
          "
        >
          <div className="w-full max-w-xl lg:max-w-3xl">
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-black leading-[0.95] tracking-[-0.03em] sm:leading-[0.9]"
            >
              <span className="block text-3xl text-[#22C55E] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                QUILONAD
              </span>
              <span className="block text-3xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                MEDIA
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="
                mt-2.5
                max-w-xs
                text-xs
                font-normal
                leading-relaxed
                text-zinc-200
                drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]
                sm:mt-4
                sm:max-w-md
                sm:text-base
                md:mt-6
                md:max-w-xl
                md:text-lg
              "
            >
              Powerful advertising and media solutions that make your brand
              visible, memorable, and impossible to miss.
            </motion.p>

            {/* Service Pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="
                mt-3
                flex
                max-w-sm
                flex-wrap
                items-center
                gap-x-2
                gap-y-1
                text-[9px]
                font-semibold
                uppercase
                tracking-wider
                text-zinc-300
                sm:mt-5
                sm:max-w-xl
                sm:text-[11px]
                md:mt-6
                md:text-xs
              "
            >
              {servicePills.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-1.5 sm:gap-2"
                >
                  <span className="cursor-default transition-colors duration-300 hover:text-[#22C55E]">
                    {item}
                  </span>

                  {index < servicePills.length - 1 && (
                    <span className="select-none font-bold text-[#16A34A]">
                      •
                    </span>
                  )}
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="
                mt-5
                flex
                w-full
                flex-col
                items-stretch
                gap-2.5
                sm:mt-7
                sm:w-auto
                sm:flex-row
                sm:items-center
                sm:gap-4
              "
            >
              {/* Primary CTA */}
              <button
                type="button"
                onClick={() => scrollTo("services")}
                className="
                  group
                  flex
                  w-full
                  cursor-pointer
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#16A34A]
                  px-5
                  py-2.5
                  text-xs
                  font-bold
                  text-white
                  shadow-lg
                  shadow-[#16A34A]/30
                  transition-all
                  duration-300
                  hover:bg-[#22C55E]
                  sm:w-auto
                  sm:px-7
                  sm:py-3.5
                  sm:text-sm
                "
              >
                Explore Services
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              {/* Secondary CTA */}
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="
                  flex
                  w-full
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/25
                  bg-black/30
                  px-5
                  py-2.5
                  text-xs
                  font-bold
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-[#22C55E]
                  hover:bg-[#16A34A]/20
                  sm:w-auto
                  sm:px-7
                  sm:py-3.5
                  sm:text-sm
                "
              >
                Get a Quote
              </button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Green Accent */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-px bg-gradient-to-r from-transparent via-[#16A34A] to-transparent opacity-70" />
      </section>
    </>
  );
}