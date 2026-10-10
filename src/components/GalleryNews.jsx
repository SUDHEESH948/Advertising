import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  X,
} from "lucide-react";

const gallery = [
  {
    title: "Urban Hoarding Campaign",
    category: "Hoarding",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Transit Brand Experience",
    category: "Bus Branding",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Digital LED Campaign",
    category: "LED",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Premium Print Campaign",
    category: "Printing",
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "City Media Placement",
    category: "Outdoor",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Night Signage",
    category: "Signage",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=85",
  },
];

const categories = [
  "All",
  "Hoarding",
  "Bus Branding",
  "LED",
  "Printing",
  "Outdoor",
  "Signage",
];

// Esteemed Clients from Quilonad portfolio (served locally to ensure high reliability and zero network failures)
export const clientBrands = [
  {
    name: "LuLu Mall",
    logo: "/clients/lulu.png",
  },
  {
    name: "Chungath Jewellery",
    logo: "/clients/chungath.png",
  },
  {
    name: "Silks World",
    logo: "/clients/silks-world.svg",
  },
  {
    name: "Bhima Gold",
    logo: "/clients/bhima.svg",
  },
  {
    name: "Meditrina Hospitals",
    logo: "/clients/meditrina.svg",
  },
  {
    name: "M.K. Fabrics",
    logo: "/clients/mk-fabrics.svg",
  },
  {
    name: "Yes Bharath",
    logo: "/clients/yes-bharath.svg",
  },
  {
    name: "Jayalakshmi",
    logo: "/clients/jayalakshmi.svg",
  },
  {
    name: "Ria Money Transfer",
    logo: "/clients/ria.svg",
  },
  {
    name: "Ultra Bond",
    logo: "/clients/ultra-bond.svg",
  },
  {
    name: "GRB",
    logo: "/clients/grb.svg",
  },
  {
    name: "RAK Ceramics",
    logo: "/clients/rak-ceramics.svg",
  },
  {
    name: "VKC Group",
    logo: "/clients/vkc.svg",
  },
  {
    name: "Milma",
    logo: "/clients/milma.svg",
  },
  {
    name: "Rajadhani",
    logo: "/clients/rajadhani.svg",
  },
  {
    name: "KIMS Healthcare",
    logo: "/clients/kims.svg",
  },
  {
    name: "Azeezia",
    logo: "/clients/azeezia.svg",
  },
  {
    name: "Pulimoottil Silks",
    logo: "/clients/pulimoottil.png",
  },
  {
    name: "Wedland Weddings",
    logo: "/clients/wedland.svg",
  },
  {
    name: "Kajaria",
    logo: "/clients/kajaria.svg",
  },
  {
    name: "KSACS",
    logo: "/clients/ksacs.svg",
  },
  {
    name: "Manappuram Foundation",
    logo: "/clients/manappuram.svg",
  },
  {
    name: "Malabar Gold & Diamonds",
    logo: "/clients/malabar-gold.svg",
  },
  {
    name: "Club Mahindra",
    logo: "/clients/club-mahindra.svg",
  },
  {
    name: "National Health Mission",
    logo: "/clients/nhm.svg",
  },
  {
    name: "Information & PRD Kerala",
    logo: "/clients/kerala-prd.svg",
  },
];

const news = [
  {
    category: "Advertising",
    date: "Sep 2026",
    title: "How outdoor advertising creates lasting brand visibility",
    text: "Explore how strategic media placement can help brands become part of the everyday city experience.",
  },
  {
    category: "Campaigns",
    date: "Aug 2026",
    title: "Building stronger brands through moving media",
    text: "Bus and vehicle branding turns everyday journeys into high-visibility brand experiences.",
  },
  {
    category: "Media Updates",
    date: "Aug 2026",
    title: "The growing role of digital LED advertising",
    text: "Dynamic digital displays are changing how brands communicate in high-traffic locations.",
  },
];

function BrandLogo({ logo, name }) {
  const [hasError, setHasError] = useState(!logo);

  if (hasError || !logo) {
    const initials = name
      .split(" ")
      .map((part) => part[0])
      .filter(Boolean)
      .slice(0, 2)
      .join("")
      .toUpperCase();

    return (
      <div
        className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#D1007F]/15 to-[#D1007F]/30 text-[#D1007F] font-black text-xs sm:text-sm shadow-inner select-none"
        title={name}
      >
        {initials}
      </div>
    );
  }

  return (
    <img
      src={logo}
      alt={name}
      loading="lazy"
      className="max-h-full max-w-full object-contain filter transition-all duration-300 group-hover:scale-105"
      onError={() => setHasError(true)}
    />
  );
}

export default function GalleryNews() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filterRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const filtered =
    activeCategory === "All"
      ? gallery
      : gallery.filter((item) => item.category === activeCategory);

  const checkScroll = () => {
    if (!filterRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = filterRef.current;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
  };

  useEffect(() => {
    const el = filterRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scrollFilters = (direction) => {
    if (!filterRef.current) return;
    const scrollAmount = Math.max(filterRef.current.clientWidth * 0.7, 120);
    filterRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const previous = (e) => {
    e?.stopPropagation?.();
    setSelectedIndex((current) =>
      current === 0 ? filtered.length - 1 : current - 1
    );
  };

  const next = (e) => {
    e?.stopPropagation?.();
    setSelectedIndex((current) =>
      current === filtered.length - 1 ? 0 : current + 1
    );
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedIndex(null);
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((current) =>
          current === 0 ? filtered.length - 1 : current - 1
        );
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((current) =>
          current === filtered.length - 1 ? 0 : current + 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedIndex, filtered.length]);

  const selected = selectedIndex !== null ? filtered[selectedIndex] : null;

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#F4DC86] px-3.5 py-12 text-[#1A1A1A] sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-16"
    >
      {/* Decorative background glows */}
      <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-[#D1007F]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#F2299A]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <div className="mb-6 flex flex-col justify-between gap-3 sm:mb-12 sm:gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-2 flex items-center gap-2.5 sm:mb-4 sm:gap-3">
              <span className="h-[2px] w-6 bg-[#D1007F] sm:w-10" />
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D1007F] sm:text-xs sm:tracking-[0.35em]">
                Selected Work
              </p>
            </div>

            <h2 className="text-2xl font-black tracking-tight text-[#1A1A1A] sm:text-5xl md:text-6xl lg:text-7xl">
              Campaigns that
              <span className="block text-[#D1007F]">get noticed.</span>
            </h2>
          </div>

          <p className="max-w-md text-xs leading-relaxed text-[#5A4B1A] sm:text-sm">
            A selection of outdoor, transit, digital, print and signage
            campaigns designed to create strong brand visibility.
          </p>
        </div>

        {/* =====================================================
            CATEGORY FILTERS
        ====================================================== */}
        <div className="mb-6 flex items-center gap-1.5 sm:mb-10 sm:gap-2">
          {/* Mobile Left Arrow */}
          <button
            type="button"
            onClick={() => scrollFilters("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll categories left"
            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#D1007F] bg-white text-[#D1007F] shadow-sm transition-all duration-200 sm:hidden ${
              canScrollLeft
                ? "cursor-pointer hover:bg-[#D1007F] hover:text-white active:scale-95"
                : "cursor-not-allowed opacity-25 pointer-events-none"
            }`}
          >
            <ChevronLeft size={14} />
          </button>

          {/* Category Scroll Container */}
          <div
            ref={filterRef}
            className="no-scrollbar flex min-w-0 flex-1 items-center gap-1.5 overflow-x-auto scroll-smooth py-1 sm:gap-2"
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={(e) => {
                  setActiveCategory(category);
                  setSelectedIndex(null);
                  e.currentTarget.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "center",
                  });
                }}
                className={`shrink-0 whitespace-nowrap rounded-full px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider transition-all duration-300 sm:px-5 sm:py-2.5 sm:text-xs ${
                  activeCategory === category
                    ? "bg-[#D1007F] text-white shadow-[0_8px_25px_rgba(209,0,127,0.25)]"
                    : "border border-[#D1007F]/40 bg-[#FFF3F9] text-[#D1007F] hover:border-[#D1007F] hover:bg-[#FDE5F1]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Mobile Right Arrow */}
          <button
            type="button"
            onClick={() => scrollFilters("right")}
            disabled={!canScrollRight}
            aria-label="Scroll categories right"
            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#D1007F] bg-white text-[#D1007F] shadow-sm transition-all duration-200 sm:hidden ${
              canScrollRight
                ? "cursor-pointer hover:bg-[#D1007F] hover:text-white active:scale-95"
                : "cursor-not-allowed opacity-25 pointer-events-none"
            }`}
          >
            <ChevronRight size={14} />
          </button>
        </div>

        
        {/* =====================================================
            ESTEEMED CLIENTS (MARQUEE)
        ====================================================== */}
        <div className="mt-12 sm:mt-24 md:mt-28">
          <div className="mb-4 sm:mb-8">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="h-[2px] w-6 bg-[#D1007F] sm:w-10" />
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D1007F] sm:text-xs sm:tracking-[0.35em]">
                Trusted Brands
              </p>
            </div>

            <h2 className="mt-1.5 text-xl font-black text-[#1A1A1A] sm:mt-3 sm:text-3xl md:text-5xl">
              Our Esteemed Clients
            </h2>
          </div>

          <div className="overflow-hidden rounded-xl border-2 border-[#D1007F]/30 bg-white/70 backdrop-blur-sm py-4 sm:rounded-3xl sm:py-6">
            <div className="flex w-max animate-marquee items-center gap-4 px-4 sm:gap-6 sm:px-8">
              {[...clientBrands, ...clientBrands].map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="group flex shrink-0 items-center gap-3 rounded-xl border border-[#D1007F]/20 bg-white px-4 py-2.5 shadow-sm transition-all duration-300 hover:border-[#D1007F] hover:shadow-[0_4px_20px_rgba(209,0,127,0.18)] sm:px-5 sm:py-3"
                >
                  <div className="flex h-8 w-20 items-center justify-center overflow-hidden sm:h-10 sm:w-28">
                    <BrandLogo logo={brand.logo} name={brand.name} />
                  </div>

                  <span className="h-4 w-[1px] bg-neutral-200 transition-colors group-hover:bg-[#D1007F]/40" />

                  <span className="whitespace-nowrap text-xs font-bold tracking-wider text-[#1A1A1A] transition-colors duration-300 group-hover:text-[#D1007F] sm:text-sm">
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            NEWS & UPDATES
        ====================================================== */}
        <div
          id="news"
          className="mt-12 scroll-mt-16 sm:mt-24 sm:scroll-mt-20 md:mt-28"
        >
          <div className="mb-6 sm:mb-12">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="h-[2px] w-6 bg-[#D1007F] sm:w-10" />
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D1007F] sm:text-xs sm:tracking-[0.35em]">
                News & Updates
              </p>
            </div>

            <h2 className="mt-1.5 text-2xl font-black text-[#1A1A1A] sm:mt-3 sm:text-4xl md:text-5xl lg:text-6xl">
              Latest from
              <span className="block text-[#D1007F]">our world.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {news.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-xl border-2 border-[#D1007F]/30 bg-white p-4 shadow-[0_8px_30px_rgba(209,0,127,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D1007F] hover:shadow-[0_15px_40px_rgba(209,0,127,0.15)] sm:rounded-[2rem] sm:p-7"
              >
                <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-wider text-[#D1007F] sm:text-[10px] sm:tracking-widest">
                  <CalendarDays size={12} />
                  {article.date}
                  <span className="text-[#D1007F]/30">/</span>
                  {article.category}
                </div>

                <h3 className="mt-3.5 text-base font-bold leading-snug text-[#1A1A1A] transition-colors group-hover:text-[#D1007F] sm:mt-8 sm:text-xl">
                  {article.title}
                </h3>

                <p className="mt-2.5 text-xs leading-relaxed text-neutral-500 sm:mt-4 sm:text-sm">
                  {article.text}
                </p>

                <button
                  type="button"
                  className="mt-4 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#D1007F] transition-all group-hover:text-[#A80066] sm:mt-8 sm:gap-2 sm:text-xs"
                >
                  Read More
                  <ArrowRight size={13} />
                </button>

                <div className="mt-4 h-[2px] w-8 bg-[#D1007F] transition-all duration-300 group-hover:w-16 sm:mt-6" />
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          IMAGE LIGHTBOX
      ====================================================== */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-3 backdrop-blur-md sm:p-6"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(null);
              }}
              aria-label="Close image preview"
              className="absolute right-3 top-3 z-50 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-[#D1007F] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#F2299A] sm:right-6 sm:top-6 sm:h-12 sm:w-12"
            >
              <X className="h-4 w-4 sm:h-6 sm:w-6" />
            </button>

            {/* Desktop Previous */}
            <button
              type="button"
              onClick={previous}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 z-50 hidden h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-2 border-[#D1007F] bg-white text-[#D1007F] shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#D1007F] hover:text-white sm:flex sm:left-6 sm:h-12 sm:w-12"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Desktop Next */}
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="absolute right-2 top-1/2 z-50 hidden h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-2 border-[#D1007F] bg-white text-[#D1007F] shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#D1007F] hover:text-white sm:flex sm:right-6 sm:h-12 sm:w-12"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Lightbox Card */}
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-xs overflow-hidden rounded-2xl border-2 border-[#D1007F] bg-white shadow-[0_20px_60px_rgba(209,0,127,0.25)] sm:max-h-[90vh] sm:max-w-2xl sm:rounded-3xl md:max-w-3xl lg:max-w-5xl"
            >
              {/* Image */}
              <div className="flex items-center justify-center bg-[#FFF3F9]/60 p-2 sm:p-4">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="mx-auto max-h-[55vh] w-auto max-w-full rounded-xl object-contain shadow-sm sm:max-h-[70vh]"
                />
              </div>

              {/* Caption Footer */}
              <div className="flex flex-col gap-2 border-t border-[#F3B4D8] bg-white p-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:p-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D1007F] sm:text-xs">
                    {selected.category}
                  </span>

                  <h3 className="mt-0.5 text-base font-black tracking-tight text-[#1A1A1A] sm:mt-1 sm:text-2xl">
                    {selected.title}
                  </h3>
                </div>

                {/* Mobile Prev / Next Controls */}
                <div className="flex items-center gap-1.5 sm:hidden">
                  <button
                    type="button"
                    onClick={previous}
                    aria-label="Previous image"
                    className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-[#F3B4D8] bg-[#FFF3F9] text-[#D1007F] transition-all hover:bg-[#D1007F] hover:text-white active:scale-95"
                  >
                    <ChevronLeft size={14} />
                  </button>

                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next image"
                    className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-[#F3B4D8] bg-[#FFF3F9] text-[#D1007F] transition-all hover:bg-[#D1007F] hover:text-white active:scale-95"
                  >
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}