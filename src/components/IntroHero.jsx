
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";

import heroBackground from "../assets/hroicce.png";
import logoImg from "../assets/logo-clean.png";
import introVideo from "../assets/medialogo/errrrrrr.mp4";

const navItems = [
  ["About", "about"],
  ["Services", "services"],
  ["Media", "media"],
  ["Our Work", "work"],
  ["News", "news"],
  ["Contact", "contact"],
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
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black"
          >
            {/* Main Intro Video - No Blurred Background */}
            <video
              autoPlay
              muted={muted}
              playsInline
              preload="auto"
              onEnded={() => setIntroFinished(true)}
              className="relative z-10 h-full w-full object-contain md:object-cover"
            >
              <source src={introVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Video Overlay */}
            <div className="pointer-events-none absolute inset-0 z-20 bg-black/20" />
            <div className="pointer-events-none absolute inset-0 z-20 bg-[#cc338B]/5 mix-blend-screen" />

            {/* Intro Controls */}
            <div className="absolute right-3 top-3 z-50 flex items-center gap-2 sm:right-6 sm:top-6 sm:gap-3">
              {/* Mute / Unmute */}
              <button
                type="button"
                onClick={() => setMuted((value) => !value)}
                aria-label={muted ? "Unmute video" : "Mute video"}
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:border-[#cc338B] hover:bg-[#cc338B]/30 sm:h-10 sm:w-10"
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
                className="flex cursor-pointer items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:border-[#cc338B] hover:bg-[#cc338B] sm:gap-2 sm:px-4 sm:py-2 sm:text-xs sm:tracking-widest"
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
        className="relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden bg-[#020805] pt-[80px] text-white selection:bg-[#cc338B] selection:text-white sm:pt-[90px]"
      >
        {/* ===================================================
            BACKGROUND
        ==================================================== */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={heroBackground}
            alt="Quilonad Media Billboard Network"
            className="absolute inset-0 h-full w-full object-cover object-left-top"
          />

          {/* Desktop Gradient */}
          <div className="hidden inset-0 bg-gradient-to-r from-[#020805]/80 via-[#020805]/30 to-transparent md:block md:w-[65%]" />
          <div className="hidden inset-0 bg-gradient-to-t from-[#020805]/70 via-transparent to-transparent md:block" />

          {/* Magenta Ambient Glow */}
          <div className="pointer-events-none absolute left-[-25%] top-[30%] h-[350px] w-[350px] rounded-full bg-[#cc338B]/10 blur-[130px] sm:left-[-10%] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />
        </div>

        {/* ===================================================
            FIXED NAVIGATION
        ==================================================== */}
        <header className="pointer-events-none fixed left-0 right-0 top-3 z-[1000] w-full px-3 sm:top-5 sm:px-6">
          <div className="pointer-events-auto mx-auto flex h-[54px] w-full max-w-md items-center justify-between rounded-full border border-black/5 bg-white/95 px-4 shadow-xl shadow-black/10 backdrop-blur-md sm:h-[60px] sm:max-w-lg sm:px-6 lg:w-fit lg:max-w-none lg:justify-start lg:gap-8 xl:gap-10">
            {/* Logo */}
            <button
              type="button"
              onClick={() => scrollTo("home")}
              className="group flex shrink-0 cursor-pointer items-center"
              aria-label="Quilonad Media Home"
            >
              <img
                src={logoImg}
                alt="Quilonad Media"
                className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:h-9 md:h-10"
              />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden items-center justify-center gap-5 lg:flex xl:gap-7">
              {navItems.map(([label, id]) => (
                <button
                  type="button"
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="relative cursor-pointer text-xs font-bold uppercase tracking-[0.16em] text-[#cc338B] transition-all duration-300 after:absolute after:-bottom-1.5 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-[#cc338B] after:transition-all after:duration-300 hover:text-[#a82670] hover:after:w-full"
                >
                  {label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMenuOpen((value) => !value)}
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-[#cc338B]/30 bg-white text-[#cc338B] shadow-sm transition-all duration-300 hover:border-[#cc338B] hover:bg-[#cc338B] hover:text-white sm:h-9 sm:w-9"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>

          {/* =================================================
              MOBILE MENU
          ================================================== */}
          <AnimatePresence>
            {menuOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setMenuOpen(false)}
                  className="pointer-events-auto fixed inset-0 top-[65px] z-40 bg-black/50 backdrop-blur-sm sm:top-[75px] lg:hidden"
                />

                {/* Menu Panel */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="pointer-events-auto absolute left-3 right-3 top-[4.25rem] z-50 rounded-2xl border border-[#cc338B]/20 bg-white/95 p-4 shadow-2xl backdrop-blur-xl sm:left-6 sm:right-6 sm:top-[4.75rem] sm:p-6 lg:hidden"
                >
                  <div className="flex flex-col gap-1.5 sm:gap-2">
                    {navItems.map(([label, id]) => (
                      <button
                        type="button"
                        key={id}
                        onClick={() => scrollTo(id)}
                        className="cursor-pointer rounded-xl px-3 py-2.5 text-left text-xs font-bold uppercase tracking-wider text-[#cc338B] transition-colors hover:bg-[#cc338B]/10 sm:text-sm"
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </header>

        {/* Bottom Accent */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-px bg-gradient-to-r from-transparent via-[#cc338B] to-transparent opacity-70" />
      </section>
    </>
  );
}