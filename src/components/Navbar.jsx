import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, Phone, Mail } from "lucide-react";
import { logoImg, links } from "../data/mediaData";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 group focus:outline-none">
      <img
        src={logoImg}
        alt="Quilonad Media — Advertising, Printing & Marketing"
        className="h-10 sm:h-12 w-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
      />
    </Link>
  );
}

// Navigation in center with enhanced mobile drawer
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const f = () => setSolid(window.scrollY > 20);
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  // Close drawer if resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && open) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid || open
          ? "border-b border-black/10 bg-white/95 backdrop-blur-xl shadow-xs"
          : "border-b border-transparent bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-10">
        {/* Left: Brand Logo */}
        <div className="flex-1 flex justify-start">
          <Logo />
        </div>

        {/* Center: Navigation in Center */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 justify-center">
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-[11px] font-bold uppercase tracking-[.22em] transition-colors py-1 relative ${
                  isActive
                    ? "text-[#FD3DB5]"
                    : "text-[#111820]/65 hover:text-[#111820]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#FD3DB5] rounded-full"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right: CTA Button */}
        <div className="flex-1 hidden md:flex justify-end">
          <Link
            to="/contact"
            className="group flex items-center gap-2 rounded-full bg-[#111820] px-5 py-2.5 text-[10px] font-bold uppercase tracking-[.18em] text-white transition hover:bg-[#FD3DB5] active:scale-95"
          >
            Book Media <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Mobile Toggle Button (touch-optimized >=44px) */}
        <button
          onClick={() => setOpen(!open)}
          className="grid h-11 w-11 place-items-center rounded-full border border-black/15 bg-white text-[#111820] md:hidden active:scale-95 transition-all shadow-xs"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-black/10 bg-white px-4 sm:px-6 md:hidden shadow-2xl"
          >
            <div className="py-2">
              {links.map(([to, label], i) => {
                const isActive = location.pathname === to;
                return (
                  <motion.div
                    key={to}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      onClick={() => setOpen(false)}
                      to={to}
                      className={`flex items-center justify-between border-b border-black/10 py-4 text-sm font-bold uppercase tracking-[.16em] transition-colors ${
                        isActive ? "text-[#FD3DB5]" : "text-[#111820]"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        {isActive && (
                          <span className="h-2 w-2 rounded-full bg-[#FD3DB5]" />
                        )}
                        {label}
                      </span>
                      <ArrowUpRight
                        size={16}
                        className={
                          isActive ? "text-[#FD3DB5]" : "text-black/30"
                        }
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick Contact & Action Buttons for Mobile */}
            <div className="pt-2 pb-6 space-y-3">
              <Link
                onClick={() => setOpen(false)}
                to="/contact"
                className="flex items-center justify-center gap-2 rounded-full bg-[#111820] py-3.5 text-xs font-bold uppercase tracking-[.18em] text-white active:scale-95 transition-all shadow-md"
              >
                Request Rate Card <ArrowUpRight size={14} />
              </Link>
              <div className="flex gap-2">
                <a
                  href="tel:+919447123456"
                  className="flex-1 flex items-center justify-center gap-2 rounded-full bg-slate-100 py-3 text-[11px] font-bold uppercase tracking-wider text-[#111820] active:scale-95 transition-colors border border-black/5"
                >
                  <Phone size={13} className="text-[#FD3DB5]" /> Call Desk
                </a>
                <a
                  href="mailto:info@quilonadmedia.com"
                  className="flex-1 flex items-center justify-center gap-2 rounded-full bg-slate-100 py-3 text-[11px] font-bold uppercase tracking-wider text-[#111820] active:scale-95 transition-colors border border-black/5"
                >
                  <Mail size={13} className="text-[#FD3DB5]" /> Email Us
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
