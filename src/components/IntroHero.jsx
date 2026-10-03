
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

import heroBackground from "../assets/banar.jpeg";

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
          INTRO VIDEO
      ====================================================== */}
      <AnimatePresence>
        {!introFinished && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#020805]"
          >
            <video
              autoPlay
              muted={muted}
              playsInline
              onEnded={() => setIntroFinished(true)}
              className="h-full w-full object-cover"
            >
              <source src="/videos/ppp.mp4" type="video/mp4" />
            </video>

            {/* Light video overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Subtle green tint */}
            <div className="absolute inset-0 bg-[#16A34A]/5 mix-blend-screen" />

            {/* Intro Controls */}
            <div className="absolute right-3 top-3 sm:right-6 sm:top-6 z-50 flex items-center gap-2 sm:gap-3">
              {/* Volume */}
              <button
                type="button"
                onClick={() => setMuted((val) => !val)}
                aria-label={muted ? "Unmute video" : "Mute video"}
                className="flex h-8 w-8 sm:h-10 sm:w-10 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:border-[#16A34A] hover:bg-[#16A34A]/20"
              >
                {muted ? (
                  <VolumeX className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                ) : (
                  <Volume2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                )}
              </button>

              {/* Skip Intro */}
              <button
                type="button"
                onClick={() => setIntroFinished(true)}
                className="flex cursor-pointer items-center gap-1.5 sm:gap-2 rounded-full border border-white/20 bg-black/40 px-2.5 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-widest text-white backdrop-blur-md transition-all duration-300 hover:border-[#16A34A] hover:bg-[#16A34A]"
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
        className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-[#020805] text-white selection:bg-[#16A34A] selection:text-white"
      >
        {/* ===================================================
            FULLSCREEN BACKGROUND IMAGE
        ==================================================== */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBackground}
            alt="Quilonad Media Billboard Network"
            className="h-full w-full object-cover object-right md:object-center"
          />

          {/* Light overall overlay */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Soft left gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020805]/55 via-[#020805]/30 to-transparent md:w-[65%]" />

          {/* Soft bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#020805]/30 via-transparent to-[#020805]/55" />

          {/* Subtle Green Glow */}
          <div className="pointer-events-none absolute left-[-10%] top-[25%] h-[500px] w-[500px] rounded-full bg-[#16A34A]/10 blur-[160px]" />
        </div>

        {/* ===================================================
            NAVIGATION
        ==================================================== */}
        <header className="relative z-50 w-full px-3.5 py-3.5 sm:px-6 sm:py-5 md:px-10 lg:px-16">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            {/* Logo */}
            <button
              type="button"
              onClick={() => scrollTo("home")}
              className="group flex cursor-pointer flex-col text-left"
            >
              <span className="text-base sm:text-xl font-black tracking-[0.16em] sm:tracking-[0.2em] text-white transition-colors duration-300 group-hover:text-[#22C55E]">
                QUILONAD
              </span>

              <span className="-mt-0.5 text-[7.5px] sm:text-[9px] font-bold uppercase tracking-[0.38em] sm:tracking-[0.45em] text-[#16A34A]">
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

              {/* Quote */}
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

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen((val) => !val)}
              className="flex h-8 w-8 sm:h-10 sm:w-10 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/25 text-white backdrop-blur-md transition-all duration-300 hover:border-[#16A34A] hover:bg-[#16A34A]/20 lg:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
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
                  className="absolute left-3 right-3 sm:left-6 sm:right-6 top-[3.75rem] sm:top-20 z-50 rounded-2xl border border-[#16A34A]/30 bg-[#020805]/95 p-4 sm:p-6 shadow-2xl backdrop-blur-xl lg:hidden"
                >
                  <div className="flex flex-col gap-1.5 sm:gap-2">
                    {navItems.map(([label, id]) => (
                      <button
                        type="button"
                        key={id}
                        onClick={() => scrollTo(id)}
                        className="cursor-pointer text-left text-xs sm:text-sm font-semibold uppercase tracking-wider text-zinc-300 py-2 sm:py-2.5 px-3 rounded-xl transition-colors hover:text-white hover:bg-white/5 active:bg-[#16A34A]/20"
                      >
                        {label}
                      </button>
                    ))}

                    <button
                      type="button"
                      onClick={() => scrollTo("contact")}
                      className="mt-2.5 sm:mt-3 w-full cursor-pointer rounded-full bg-[#16A34A] py-2.5 sm:py-3 text-center text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#22C55E]"
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
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-3.5 py-6 sm:px-6 sm:py-12 md:px-10 md:py-16 lg:px-16">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-black leading-[0.95] sm:leading-[0.9] tracking-[-0.035em]"
            >
              <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#22C55E]">
                QUILONAD
              </span>

              <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white">
                MEDIA
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-3.5 sm:mt-6 max-w-xl text-xs sm:text-base md:text-lg font-normal leading-relaxed text-zinc-200"
            >
              Powerful advertising and media solutions that make your brand
              visible, memorable, and impossible to miss.
            </motion.p>

            {/* =================================================
                SERVICES STRIP
            ================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-4 sm:mt-6 flex flex-wrap items-center gap-x-2 sm:gap-x-2.5 gap-y-1.5 text-[9.5px] sm:text-[11px] md:text-xs font-semibold uppercase tracking-wider text-zinc-300"
            >
              {servicePills.map((item, index) => (
                <div key={item} className="flex items-center gap-1.5 sm:gap-2">
                  <span className="cursor-default transition-colors duration-300 hover:text-white">
                    {item}
                  </span>

                  {index < servicePills.length - 1 && (
                    <span className="font-bold text-[#16A34A] select-none">
                      •
                    </span>
                  )}
                </div>
              ))}
            </motion.div>

            {/* =================================================
                CTA BUTTONS
            ================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 w-full sm:w-auto"
            >
              {/* Primary CTA */}
              <button
                type="button"
                onClick={() => scrollTo("services")}
                className="group flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#16A34A] px-5 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#16A34A]/25 transition-all duration-300 hover:bg-[#22C55E] hover:shadow-[#22C55E]/25"
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
                className="flex cursor-pointer items-center justify-center rounded-full border border-white/30 bg-white/10 px-5 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#22C55E] hover:bg-[#16A34A]/20"
              >
                Get a Quote
              </button>
            </motion.div>
          </div>
        </div>

        {/* ===================================================
            BOTTOM GREEN ACCENT
        ==================================================== */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-px bg-gradient-to-r from-transparent via-[#16A34A] to-transparent opacity-70" />
      </section>
    </>
  );
}