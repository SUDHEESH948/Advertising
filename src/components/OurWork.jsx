import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ChevronDown,
  Building2,
  Bus,
  MapPin,
  Sparkles,
  MessageCircle,
} from "lucide-react";

// ============================================================================
// CURATED 20 PORTFOLIO IMAGES
// ============================================================================

// Category 1: Hoardings & Billboards (7 items)
import imgHoarding1 from "../assets/work/rbghj.png";
import imgHoarding2 from "../assets/work/err.png";
import imgHoarding3 from "../assets/work/tttt.png";
import imgHoarding4 from "../assets/work/ttto.png";
import imgHoarding5 from "../assets/work/WhatsApp Image 2026-10-22 at 4.41.50 PM.jpeg";
import imgHoarding6 from "../assets/work/WhatsApp Image 2026-10-22 at 4.41.54 PM.jpeg";
import imgHoarding7 from "../assets/work/WhatsApp Image 2026-10-22 at 4.41.56 PM (1).jpeg";

// Category 2: Transit & Moving Media (7 items)
import imgTransit1 from "../assets/work/WhatsApp Image 2026-10-22 at 4.41.55 PM.jpeg";
import imgTransit2 from "../assets/work/WhatsApp Image 2026-10-22 at 4.41.45 PM (2).jpeg";
import imgTransit3 from "../assets/work/WhatsApp Image 2026-10-22 at 4.41.49 PM.jpeg";
import imgTransit4 from "../assets/work/WhatsApp Image 2026-10-22 at 4.41.54 PM (2).jpeg";
import imgTransit5 from "../assets/work/WhatsApp Image 2026-10-22 at 4.41.44 PM (1).jpeg";
import imgTransit6 from "../assets/work/WhatsApp Image 2026-10-22 at 4.41.46 PM (1).jpeg";
import imgTransit7 from "../assets/work/WhatsApp Image 2026-10-22 at 4.41.52 PM.jpeg";

// Category 3: Mini Hoardings & Street Signage (6 items)
import imgMini1 from "../assets/work/rrt.png";
import imgMini2 from "../assets/work/rt.png";
import imgMini3 from "../assets/work/efgh.png";
import imgMini4 from "../assets/work/WhatsApp Image 2026-10-22 at 4.41.53 PM.jpeg";
import imgMini5 from "../assets/work/ee.png";
import imgMini6 from "../assets/work/WhatsApp Image 2026-10-22 at 4.41.20 PM.jpeg";

export const hoardings = [
  {
    id: 1,
    src: imgHoarding1,
    title: "Airport Corridor Skyline Hoarding",
    category: "Hoardings & Billboards",
    categoryId: "hoardings",
    location: "Karipur Airport Road Junction",
    tag: "High-Visibility Unipole",
  },
  {
    id: 2,
    src: imgHoarding2,
    title: "Commercial Multi-Tier City Billboard",
    category: "Hoardings & Billboards",
    categoryId: "hoardings",
    location: "M.G. Road Commercial Center, Kochi",
    tag: "Urban Static & Digital",
  },
  {
    id: 3,
    src: imgHoarding3,
    title: "Lush Green Highway Billboard",
    category: "Hoardings & Billboards",
    categoryId: "hoardings",
    location: "NH Highway Scenic Corridor",
    tag: "Large Format Unipole",
  },
  {
    id: 4,
    src: imgHoarding4,
    title: "Panoramic High-Traffic Mega Hoarding",
    category: "Hoardings & Billboards",
    categoryId: "hoardings",
    location: "National Highway Bypass",
    tag: "Panoramic Structure",
  },
  {
    id: 5,
    src: imgHoarding5,
    title: "Elevated Bypass Rooftop Hoarding",
    category: "Hoardings & Billboards",
    categoryId: "hoardings",
    location: "Bypass Flyover, Thiruvananthapuram",
    tag: "Rooftop Landmark",
  },
  {
    id: 6,
    src: imgHoarding6,
    title: "Prime Commercial Junction Billboard",
    category: "Hoardings & Billboards",
    categoryId: "hoardings",
    location: "Central Junction, Kollam",
    tag: "High-Footfall Intersection",
  },
  {
    id: 7,
    src: imgHoarding7,
    title: "Overhead Arterial Highway Display",
    category: "Hoardings & Billboards",
    categoryId: "hoardings",
    location: "Ayathil Flyover Junction, Kollam",
    tag: "Flyover View Billboard",
  },
];

export const transit = [
  {
    id: 8,
    src: imgTransit1,
    title: "Intercity Bus Fleet Back Wrap",
    category: "Transit & Moving Media",
    categoryId: "transit",
    location: "S.M. Travels Intercity Route",
    tag: "Full Rear Bus Wrap",
  },
  {
    id: 9,
    src: imgTransit2,
    title: "Piaggio Ape Urban Transit Wrap",
    category: "Transit & Moving Media",
    categoryId: "transit",
    location: "Metropolitan Delivery Fleet",
    tag: "Commercial Vehicle Branding",
  },
  {
    id: 10,
    src: imgTransit3,
    title: "City Auto Fleet Campaign #27",
    category: "Transit & Moving Media",
    categoryId: "transit",
    location: "Central City Commuter Network",
    tag: "Auto Rickshaw Hood Ad",
  },
  {
    id: 11,
    src: imgTransit4,
    title: "Dynamic Urban Transit Panel #23",
    category: "Transit & Moving Media",
    categoryId: "transit",
    location: "Regional Commuter Corridor",
    tag: "Fleet Rear Panel",
  },
  {
    id: 12,
    src: imgTransit5,
    title: "Metropolitan Fleet Transit Ad #28",
    category: "Transit & Moving Media",
    categoryId: "transit",
    location: "Commercial Shopping District",
    tag: "Auto Rickshaw Media",
  },
  {
    id: 13,
    src: imgTransit6,
    title: "Street Fleet Mobility Ad #31",
    category: "Transit & Moving Media",
    categoryId: "transit",
    location: "Urban Market Route",
    tag: "Transit Exposure",
  },
  {
    id: 14,
    src: imgTransit7,
    title: "Intercity Commuter Ad Wrap #32",
    category: "Transit & Moving Media",
    categoryId: "transit",
    location: "Suburban Arterial Road",
    tag: "Fleet Mobility Ad",
  },
];

export const miniHoardings = [
  {
    id: 15,
    src: imgMini1,
    title: "Asset Homes Prime Mini Hoarding",
    category: "Mini Hoardings & Signage",
    categoryId: "mini-hoardings",
    location: "Kannur District Commercial Road",
    tag: "Ground-Level Mini Unipole",
  },
  {
    id: 16,
    src: imgMini2,
    title: "Twin Roadside Mini Hoarding Network",
    category: "Mini Hoardings & Signage",
    categoryId: "mini-hoardings",
    location: "Kannur Arterial Corridor",
    tag: "Dual Mini Hoarding",
  },
  {
    id: 17,
    src: imgMini3,
    title: "Monsoon Highway Roadside Display",
    category: "Mini Hoardings & Signage",
    categoryId: "mini-hoardings",
    location: "High-Traffic Curved Corridor",
    tag: "Curved Highway Hoarding",
  },
  {
    id: 18,
    src: imgMini4,
    title: "State Transit Roadside Display",
    category: "Mini Hoardings & Signage",
    categoryId: "mini-hoardings",
    location: "Public Bus Transit Route",
    tag: "Roadside Poster Display",
  },
  {
    id: 19,
    src: imgMini5,
    title: "Traffic Island & Central Median Sign",
    category: "Mini Hoardings & Signage",
    categoryId: "mini-hoardings",
    location: "Opposite SBI Circle, City Center",
    tag: "Traffic Median Branding",
  },
  {
    id: 20,
    src: imgMini6,
    title: "Experiential Walking Board Crew",
    category: "Mini Hoardings & Signage",
    categoryId: "mini-hoardings",
    location: "On-Ground Event Activation",
    tag: "Human Billboard Campaign",
  },
];

// Curated interleaved order for "All":
// Row 1: Hoarding 1, Transit 1, Mini 1
// Row 2: Hoarding 2, Transit 2, Mini 2
// Row 3: Hoarding 3, Transit 3, Mini 3
// Row 4: Hoarding 4, Transit 4, Mini 4
// Row 5: Hoarding 5, Transit 5, Mini 5
// Row 6: Hoarding 6, Transit 6, Mini 6
// Row 7: Hoarding 7, Transit 7
export const ALL_CURATED_ITEMS = [
  hoardings[0], transit[0], miniHoardings[0],
  hoardings[1], transit[1], miniHoardings[1],
  hoardings[2], transit[2], miniHoardings[2],
  hoardings[3], transit[3], miniHoardings[3],
  hoardings[4], transit[4], miniHoardings[4],
  hoardings[5], transit[5], miniHoardings[5],
  hoardings[6], transit[6],
];

export const CATEGORIES_CONFIG = [
  {
    id: "all",
    name: "All Categories",
    shortName: "All",
    icon: Sparkles,
    tagline: "Complete Curated Portfolio across All Outdoor & Transit Media",
    count: 20,
  },
  {
    id: "hoardings",
    name: "Hoardings & Billboards",
    shortName: "Hoardings",
    icon: Building2,
    tagline: "High-Impact Unipoles & Arterial Rooftop Billboards",
    count: 7,
  },
  {
    id: "transit",
    name: "Transit & Moving Media",
    shortName: "Transit & Fleet",
    icon: Bus,
    tagline: "Bus Wraps & Auto Rickshaw Fleet Branding",
    count: 7,
  },
  {
    id: "mini-hoardings",
    name: "Mini Hoardings & Street Signage",
    shortName: "Mini Hoardings",
    icon: MapPin,
    tagline: "Roadside Mini Hoardings & Traffic Medians",
    count: 6,
  },
];

export default function OurWork() {
  const [activeTab, setActiveTab] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedItem, setSelectedItem] = useState(null);

  // Active pool based on selected tab
  const currentPool =
    activeTab === "all"
      ? ALL_CURATED_ITEMS
      : activeTab === "hoardings"
      ? hoardings
      : activeTab === "transit"
      ? transit
      : miniHoardings;

  const visibleItems = currentPool.slice(0, visibleCount);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setVisibleCount(6); // Reset pagination on tab change
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const handlePrev = (e) => {
    e?.stopPropagation();
    const idx = currentPool.findIndex((i) => i.id === selectedItem?.id);
    if (idx !== -1) {
      const prevIdx = idx === 0 ? currentPool.length - 1 : idx - 1;
      setSelectedItem(currentPool[prevIdx]);
    }
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    const idx = currentPool.findIndex((i) => i.id === selectedItem?.id);
    if (idx !== -1) {
      const nextIdx = idx === currentPool.length - 1 ? 0 : idx + 1;
      setSelectedItem(currentPool[nextIdx]);
    }
  };

  // Keyboard navigation & body scroll lock for Lightbox Modal
  useEffect(() => {
    if (!selectedItem) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedItem(null);
      } else if (e.key === "ArrowLeft") {
        const idx = currentPool.findIndex((i) => i.id === selectedItem.id);
        if (idx !== -1) {
          const prevIdx = idx === 0 ? currentPool.length - 1 : idx - 1;
          setSelectedItem(currentPool[prevIdx]);
        }
      } else if (e.key === "ArrowRight") {
        const idx = currentPool.findIndex((i) => i.id === selectedItem.id);
        if (idx !== -1) {
          const nextIdx = idx === currentPool.length - 1 ? 0 : idx + 1;
          setSelectedItem(currentPool[nextIdx]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedItem, currentPool]);

  const getWhatsAppEnquiryUrl = (item) => {
    const message = encodeURIComponent(
      `Hello Quilonad Media, I am interested in advertising with your ${item.category} service (Ref: ${item.title} - ${item.location}). Please share availability and rate card.`
    );
    return `https://wa.me/919497014999?text=${message}`;
  };

  return (
    <section
      id="work"
      className="min-h-screen scroll-mt-16 sm:scroll-mt-20 bg-[#F4DC86] px-4 py-10 sm:px-6 sm:py-16 md:px-8 lg:px-12 xl:px-16 text-[#1A1A1A]"
    >
      <div className="mx-auto max-w-7xl">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <div className="mb-6 sm:mb-10">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="h-[2px] w-6 sm:w-10 bg-[#D1007F]" />
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#D1007F]">
              Curated Portfolio Showcase
            </p>
          </div>

          <div className="mt-2 flex flex-col md:flex-row md:items-end md:justify-between gap-3 sm:gap-4">
            <div>
              <h1 className="text-3xl font-black tracking-tight text-[#1A1A1A] sm:text-5xl md:text-6xl lg:text-7xl">
                Our Work in <span className="text-[#D1007F]">Action.</span>
              </h1>
              <p className="mt-2 max-w-2xl text-xs sm:text-sm leading-relaxed text-[#5A4B1A]">
                Explore our high-impact outdoor media executions across Kerala. 
                Organized into distinct media categories: large format hoardings, transit wraps, and street signage.
              </p>
            </div>

            {/* Total Count Badge */}
            <div className="inline-flex items-center gap-2 self-start md:self-end shrink-0 rounded-full border border-[#D1007F]/40 bg-white/90 px-3.5 py-1.5 shadow-sm backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#D1007F] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#D1007F] whitespace-nowrap">
                20 Curated Works
              </span>
            </div>
          </div>

          {/* =====================================================
              CATEGORY FILTER PILLS / TABS (Responsive Scroll & Wrap)
          ====================================================== */}
          <div className="mt-6 sm:mt-8 flex items-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar pb-1.5 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:overflow-visible">
            {CATEGORIES_CONFIG.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleTabChange(cat.id)}
                  className={`
                    group inline-flex shrink-0 items-center gap-1.5 sm:gap-2 rounded-full px-3.5 py-2 sm:px-4 sm:py-2.5
                    text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer whitespace-nowrap
                    ${
                      isActive
                        ? "bg-[#D1007F] text-white shadow-[0_4px_16px_rgba(209,0,127,0.35)] scale-[1.02]"
                        : "bg-white/85 text-[#5A4B1A] border border-[#D1007F]/25 hover:border-[#D1007F] hover:bg-white hover:text-[#D1007F]"
                    }
                  `}
                >
                  <Icon size={14} className={isActive ? "text-white" : "text-[#D1007F] shrink-0"} />
                  <span>{cat.shortName || cat.name}</span>
                  <span
                    className={`
                      ml-0.5 rounded-full px-1.5 py-0.5 text-[10px] font-black leading-none
                      ${isActive ? "bg-white/25 text-white" : "bg-[#D1007F]/10 text-[#D1007F]"}
                    `}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            CATEGORY SUB-BANNER (Active when category tab is picked)
        ====================================================== */}
        {activeTab !== "all" && (
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl border-2 border-[#D1007F]/30 bg-white/95 p-4 sm:p-5 shadow-sm">
            {(() => {
              const cfg = CATEGORIES_CONFIG.find((c) => c.id === activeTab);
              const Icon = cfg?.icon || Sparkles;
              return (
                <>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-[#D1007F] text-white shadow-md shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h2 className="text-base sm:text-lg font-black text-[#1A1A1A]">
                        {cfg?.name}
                      </h2>
                      <p className="text-xs text-[#6E5A23]">{cfg?.tagline}</p>
                    </div>
                  </div>
                  <span className="self-start sm:self-auto rounded-full bg-[#FFF3F9] px-3 py-1 text-xs font-black text-[#D1007F] border border-[#F3B4D8] whitespace-nowrap">
                    {currentPool.length} Curated Works
                  </span>
                </>
              );
            })()}
          </div>
        )}

        {/* =====================================================
            RESPONSIVE WORK GRID (1 Col Mobile, 2 Col Tablet, 3 Col Desktop)
        ====================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {visibleItems.map((item) => (
            <WorkCard
              key={item.id}
              item={item}
              onSelect={() => setSelectedItem(item)}
            />
          ))}
        </div>

        {/* =====================================================
            LOAD MORE BUTTON (Disappears when all items loaded)
        ====================================================== */}
        {visibleCount < currentPool.length && (
          <div className="mt-10 sm:mt-14 flex flex-col items-center justify-center gap-2.5">
            <button
              type="button"
              onClick={handleLoadMore}
              className="
                group inline-flex items-center gap-2.5 rounded-full border-2 border-[#D1007F] bg-[#D1007F]
                px-7 py-3 sm:px-8 sm:py-3.5 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-white
                shadow-[0_8px_25px_rgba(209,0,127,0.25)] transition-all duration-300
                hover:bg-[#B0006B] hover:border-[#B0006B] hover:shadow-[0_12px_32px_rgba(209,0,127,0.35)]
                active:scale-95 cursor-pointer
              "
            >
              <span>Load More</span>
              <ChevronDown
                size={17}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </button>
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#6E5A23]">
              Showing {visibleItems.length} of {currentPool.length} Works
            </p>
          </div>
        )}
      </div>

      {/* =====================================================
          LIGHTBOX MODAL (Responsive Mobile/Tablet/Desktop)
      ====================================================== */}
      <AnimatePresence>
        {selectedItem && (
          <div
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-3 backdrop-blur-md sm:p-6"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              aria-label="Close modal"
              className="absolute right-3 top-3 sm:right-5 sm:top-5 z-50 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#D1007F] text-white shadow-xl transition-transform hover:scale-110 cursor-pointer"
            >
              <X size={20} />
            </button>

            {/* Previous Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous work"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50 flex h-10 w-10 sm:h-13 sm:w-13 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white shadow-lg transition-transform hover:scale-110 cursor-pointer"
            >
              <ChevronLeft size={24} className="sm:hidden" />
              <ChevronLeft size={28} className="hidden sm:block" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              aria-label="Next work"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 flex h-10 w-10 sm:h-13 sm:w-13 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white shadow-lg transition-transform hover:scale-110 cursor-pointer"
            >
              <ChevronRight size={24} className="sm:hidden" />
              <ChevronRight size={28} className="hidden sm:block" />
            </button>

            {/* Lightbox Container */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border-2 border-[#D1007F] bg-white shadow-2xl"
            >
              {/* Image Preview */}
              <div className="flex max-h-[60vh] sm:max-h-[68vh] items-center justify-center bg-neutral-950 p-2 sm:p-4">
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="max-h-[56vh] sm:max-h-[64vh] w-auto max-w-full object-contain drop-shadow-md"
                />
              </div>

              {/* Title & Info Footer */}
              <div className="flex flex-col gap-3 border-t border-[#F3B4D8] bg-[#FFF3F9] px-4 py-3.5 sm:px-5 sm:py-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-[#D1007F] px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-white shrink-0">
                      {selectedItem.category}
                    </span>
                    <span className="text-[10px] font-bold text-[#D1007F] whitespace-nowrap">
                      #{String(selectedItem.id).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-1 text-sm sm:text-base md:text-lg font-black text-[#1A1A1A] truncate">
                    {selectedItem.title}
                  </h3>
                  <p className="flex items-center gap-1.5 text-xs text-[#6E5A23] font-medium truncate">
                    <MapPin size={12} className="text-[#D1007F] shrink-0" />
                    <span className="truncate">{selectedItem.location}</span>
                  </p>
                </div>

                {/* WhatsApp Action Button */}
                <a
                  href={getWhatsAppEnquiryUrl(selectedItem)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all active:scale-95 shrink-0"
                >
                  <MessageCircle size={16} />
                  <span>Enquire This Ad</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

// ============================================================================
// WORK CARD COMPONENT (Responsive Aspect Ratio & Truncation)
// ============================================================================
function WorkCard({ item, onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      onClick={onSelect}
      className="
        group relative flex flex-col cursor-pointer overflow-hidden rounded-2xl
        border-2 border-[#D1007F]/30 bg-white shadow-[0_8px_24px_rgba(209,0,127,0.08)]
        transition-all duration-300 hover:border-[#D1007F] hover:shadow-[0_15px_35px_rgba(209,0,127,0.22)]
      "
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FFF3F9]">
        <img
          src={item.src}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-95" />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 right-2.5 sm:top-3 sm:left-3 sm:right-3 flex items-center justify-between gap-2">
          <span className="truncate max-w-[70%] rounded-full bg-black/65 backdrop-blur-md px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white border border-white/20">
            {item.tag}
          </span>
          <span className="rounded-full bg-[#D1007F] px-2 py-0.5 text-[9px] font-black text-white shadow-sm shrink-0">
            #{String(item.id).padStart(2, "0")}
          </span>
        </div>

        {/* Card Details Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
          <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#F2299A]">
            {item.category}
          </p>
          <h3 className="mt-0.5 text-xs sm:text-sm font-black text-white leading-snug line-clamp-1 drop-shadow-sm group-hover:text-[#F4DC86] transition-colors">
            {item.title}
          </h3>
          <div className="mt-1 flex items-center justify-between gap-2">
            <span className="truncate text-[10px] sm:text-[11px] text-white/80 font-medium">
              📍 {item.location}
            </span>
            <span className="flex items-center gap-1 text-[10px] font-bold text-white/90 group-hover:text-[#F2299A] transition-colors shrink-0">
              <span>View</span>
              <ExternalLink size={11} />
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}