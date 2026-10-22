import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Building2,
  Bus,
  MapPin,
  Sparkles,
  MessageCircle,
} from "lucide-react";

// ============================================================================
// CURATED 20 PORTFOLIO IMAGES (Strictly importing only the 20 best works)
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

// ============================================================================
// 20 CURATED PORTFOLIO WORK ITEMS
// ============================================================================
export const WORK_ITEMS = [
  // --------------------------------------------------------------------------
  // COLUMN 1 / CATEGORY 1: HOARDINGS & BILLBOARDS (7 items)
  // --------------------------------------------------------------------------
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

  // --------------------------------------------------------------------------
  // COLUMN 2 / CATEGORY 2: TRANSIT & MOVING MEDIA (7 items)
  // --------------------------------------------------------------------------
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

  // --------------------------------------------------------------------------
  // COLUMN 3 / CATEGORY 3: MINI HOARDINGS & STREET SIGNAGE (6 items)
  // --------------------------------------------------------------------------
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

export const CATEGORIES_CONFIG = [
  {
    id: "all",
    name: "All Categories",
    shortName: "All (20)",
    icon: Sparkles,
    count: 20,
  },
  {
    id: "hoardings",
    name: "Hoardings & Billboards",
    shortName: "Hoardings",
    icon: Building2,
    tagline: "High-Impact Unipoles & Rooftop Billboards",
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
  
  // Desktop expansion state: false = shows 2 per column (6 works total), true = shows all 20 works
  const [webExpanded, setWebExpanded] = useState(false);

  // Mobile expansion state per category: false = shows 6 photos, true = shows all
  const [expandedMobileCategories, setExpandedMobileCategories] = useState({});

  // Lightbox selection
  const [selectedItem, setSelectedItem] = useState(null);

  const hoardingsItems = WORK_ITEMS.filter((i) => i.categoryId === "hoardings");
  const transitItems = WORK_ITEMS.filter((i) => i.categoryId === "transit");
  const miniHoardingsItems = WORK_ITEMS.filter((i) => i.categoryId === "mini-hoardings");

  const categoryBuckets = [
    {
      config: CATEGORIES_CONFIG[1], // Column 1: Hoardings & Billboards
      items: hoardingsItems,
    },
    {
      config: CATEGORIES_CONFIG[2], // Column 2: Transit & Moving Media
      items: transitItems,
    },
    {
      config: CATEGORIES_CONFIG[3], // Column 3: Mini Hoardings & Street Signage
      items: miniHoardingsItems,
    },
  ];

  // Active items for single tab filtering or modal navigation
  const currentActiveItems =
    activeTab === "all"
      ? WORK_ITEMS
      : WORK_ITEMS.filter((item) => item.categoryId === activeTab);

  const toggleMobileCategoryExpand = (catId) => {
    setExpandedMobileCategories((prev) => ({
      ...prev,
      [catId]: !prev[catId],
    }));
  };

  // Keyboard navigation & body scroll lock for Lightbox Modal
  useEffect(() => {
    if (!selectedItem) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedItem(null);
      } else if (e.key === "ArrowLeft") {
        const idx = currentActiveItems.findIndex((i) => i.id === selectedItem.id);
        if (idx !== -1) {
          const prevIdx = idx === 0 ? currentActiveItems.length - 1 : idx - 1;
          setSelectedItem(currentActiveItems[prevIdx]);
        }
      } else if (e.key === "ArrowRight") {
        const idx = currentActiveItems.findIndex((i) => i.id === selectedItem.id);
        if (idx !== -1) {
          const nextIdx = idx === currentActiveItems.length - 1 ? 0 : idx + 1;
          setSelectedItem(currentActiveItems[nextIdx]);
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
  }, [selectedItem, currentActiveItems]);

  const getWhatsAppEnquiryUrl = (item) => {
    const message = encodeURIComponent(
      `Hello Quilonad Media, I am interested in advertising with your ${item.category} service (Ref: ${item.title} - ${item.location}). Please share availability and rate card.`
    );
    return `https://wa.me/919497014999?text=${message}`;
  };

  return (
    <section
      id="work"
      className="min-h-screen scroll-mt-16 sm:scroll-mt-20 bg-[#F4DC86] px-4 py-12 sm:px-8 sm:py-20 lg:px-16 text-[#1A1A1A]"
    >
      <div className="mx-auto max-w-7xl">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="h-[2px] w-6 sm:w-10 bg-[#D1007F]" />
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#D1007F]">
              Curated Portfolio Showcase
            </p>
          </div>

          <div className="mt-2 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black tracking-tight text-[#1A1A1A] sm:text-5xl md:text-6xl lg:text-7xl">
                Our Work in <span className="text-[#D1007F]">Action.</span>
              </h1>
              <p className="mt-2.5 max-w-2xl text-xs sm:text-sm leading-relaxed text-[#5A4B1A]">
                Explore our high-impact outdoor media executions across Kerala. 
                Organized into distinct media categories: large format hoardings, transit wraps, and street signage.
              </p>
            </div>

            {/* Total Count Badge */}
            <div className="inline-flex items-center gap-2 self-start rounded-full border-2 border-[#D1007F]/40 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#D1007F] animate-pulse" />
              <span className="text-xs font-black uppercase tracking-wider text-[#D1007F]">
                20 Curated Works
              </span>
            </div>
          </div>

          {/* =====================================================
              CATEGORY FILTER PILLS / TABS
          ====================================================== */}
          <div className="mt-8 flex flex-wrap items-center gap-2 sm:gap-3">
            {CATEGORIES_CONFIG.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(cat.id);
                    setWebExpanded(false);
                  }}
                  className={`
                    group flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer
                    ${
                      isActive
                        ? "bg-[#D1007F] text-white shadow-[0_6px_20px_rgba(209,0,127,0.35)] scale-105"
                        : "bg-white/80 text-[#5A4B1A] border border-[#D1007F]/30 hover:border-[#D1007F] hover:bg-white hover:text-[#D1007F]"
                    }
                  `}
                >
                  <Icon size={14} className={isActive ? "text-white" : "text-[#D1007F]"} />
                  <span>{cat.shortName || cat.name}</span>
                  <span
                    className={`
                      ml-0.5 rounded-full px-1.5 py-0.2 text-[10px] font-black
                      ${isActive ? "bg-white/20 text-white" : "bg-[#D1007F]/10 text-[#D1007F]"}
                    `}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* =================================================================
            VIEW A: DESKTOP COLUMN LAYOUT (WHEN "ALL CATEGORIES" IS ACTIVE)
            Column 1: Category 1 (Hoardings & Billboards)
            Column 2: Category 2 (Transit & Moving Media)
            Column 3: Category 3 (Mini Hoardings & Street Signage)
        ================================================================== */}
        {activeTab === "all" ? (
          <>
            {/* Desktop (md & up) - 3 Columns Side-by-Side per Category */}
            <div className="hidden md:grid md:grid-cols-3 md:gap-6 lg:gap-8 items-start">
              {categoryBuckets.map((bucket, colIdx) => {
                const Icon = bucket.config.icon;
                const visibleInCol = webExpanded
                  ? bucket.items
                  : bucket.items.slice(0, 2); // 2 per column = 6 visible initially

                return (
                  <div key={bucket.config.id} className="flex flex-col gap-5">
                    {/* Category Column Header */}
                    <div className="rounded-2xl border-2 border-[#D1007F]/40 bg-white/95 p-4 shadow-sm backdrop-blur-sm transition-all hover:border-[#D1007F]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#D1007F] text-white shadow-md">
                            <Icon size={18} />
                          </div>
                          <div>
                            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#D1007F]">
                              Column {colIdx + 1}
                            </span>
                            <h2 className="text-base font-black text-[#1A1A1A]">
                              {bucket.config.name}
                            </h2>
                          </div>
                        </div>

                        <span className="rounded-full bg-[#FFF3F9] px-2.5 py-1 text-xs font-black text-[#D1007F] border border-[#F3B4D8]">
                          {bucket.items.length} Works
                        </span>
                      </div>
                      <p className="mt-2 text-[11px] text-[#6E5A23] leading-snug">
                        {bucket.config.tagline}
                      </p>
                    </div>

                    {/* Column Image Cards */}
                    <div className="flex flex-col gap-5">
                      {visibleInCol.map((item) => (
                        <WorkCard
                          key={item.id}
                          item={item}
                          onSelect={() => setSelectedItem(item)}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Desktop "View More" Toggle */}
            <div className="hidden md:flex mt-12 flex-col items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setWebExpanded((prev) => !prev)}
                className="
                  group inline-flex items-center gap-2.5 rounded-full border-2 border-[#D1007F] bg-[#D1007F]
                  px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-white
                  shadow-[0_8px_25px_rgba(209,0,127,0.25)] transition-all duration-300
                  hover:bg-[#B0006B] hover:border-[#B0006B] hover:shadow-[0_12px_32px_rgba(209,0,127,0.35)]
                  active:scale-95 cursor-pointer
                "
              >
                <span>{webExpanded ? "Show Fewer Works" : "View More Works"}</span>
                {webExpanded ? (
                  <ChevronUp size={18} className="transition-transform duration-300 group-hover:-translate-y-1" />
                ) : (
                  <ChevronDown size={18} className="transition-transform duration-300 group-hover:translate-y-1" />
                )}
              </button>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#6E5A23]">
                {webExpanded ? "Showing all 20 Curated Works" : "Showing 6 of 20 Works (2 Per Column)"}
              </p>
            </div>

            {/* Mobile (< md) - Stacked by Category with 6 Photos + "View More" */}
            <div className="md:hidden flex flex-col gap-10">
              {categoryBuckets.map((bucket, colIdx) => {
                const Icon = bucket.config.icon;
                const isCatExpanded = !!expandedMobileCategories[bucket.config.id];
                const mobileVisibleItems = isCatExpanded
                  ? bucket.items
                  : bucket.items.slice(0, 6); // 6 photos on mobile

                return (
                  <div key={bucket.config.id} className="flex flex-col gap-4">
                    {/* Category Mobile Header */}
                    <div className="rounded-xl border-2 border-[#D1007F]/40 bg-white p-3.5 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#D1007F] text-white shadow-sm">
                            <Icon size={16} />
                          </div>
                          <div>
                            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#D1007F]">
                              Category {colIdx + 1}
                            </span>
                            <h2 className="text-sm font-black text-[#1A1A1A]">
                              {bucket.config.name}
                            </h2>
                          </div>
                        </div>

                        <span className="rounded-full bg-[#FFF3F9] px-2.5 py-0.5 text-[11px] font-black text-[#D1007F] border border-[#F3B4D8]">
                          {bucket.items.length} Photos
                        </span>
                      </div>
                    </div>

                    {/* Mobile Grid (6 Photos Initially) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {mobileVisibleItems.map((item) => (
                        <WorkCard
                          key={item.id}
                          item={item}
                          onSelect={() => setSelectedItem(item)}
                        />
                      ))}
                    </div>

                    {/* Mobile "View More" button for this category (when > 6 photos) */}
                    {bucket.items.length > 6 && (
                      <div className="flex justify-center mt-1">
                        <button
                          type="button"
                          onClick={() => toggleMobileCategoryExpand(bucket.config.id)}
                          className="
                            inline-flex items-center gap-2 rounded-full border border-[#D1007F] bg-white px-6 py-2.5
                            text-xs font-bold uppercase tracking-wider text-[#D1007F] shadow-sm transition-all
                            hover:bg-[#D1007F] hover:text-white active:scale-95 cursor-pointer
                          "
                        >
                          <span>
                            {isCatExpanded
                              ? `Show Less ${bucket.config.shortName}`
                              : `View More ${bucket.config.shortName} (+${bucket.items.length - 6} more)`}
                          </span>
                          {isCatExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          /* =================================================================
              VIEW B: SINGLE CATEGORY TAB VIEW
              (Shows 6 photos initially on mobile & desktop with "View More")
          ================================================================== */
          <div className="flex flex-col gap-6">
            {/* Category Banner */}
            {(() => {
              const activeConfig = CATEGORIES_CONFIG.find((c) => c.id === activeTab);
              const Icon = activeConfig?.icon || Sparkles;

              return (
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl border-2 border-[#D1007F]/40 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D1007F] text-white shadow-md">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl font-black text-[#1A1A1A]">
                        {activeConfig?.name}
                      </h2>
                      <p className="text-xs text-[#6E5A23]">{activeConfig?.tagline}</p>
                    </div>
                  </div>

                  <span className="self-start sm:self-auto rounded-full bg-[#FFF3F9] px-3.5 py-1 text-xs font-black text-[#D1007F] border border-[#F3B4D8]">
                    {currentActiveItems.length} Curated Photos
                  </span>
                </div>
              );
            })()}

            {/* Grid for Single Category */}
            {(() => {
              const isCatExpanded = !!expandedMobileCategories[activeTab];
              const visibleItems = isCatExpanded
                ? currentActiveItems
                : currentActiveItems.slice(0, 6); // 6 photos initially

              return (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleItems.map((item) => (
                      <WorkCard
                        key={item.id}
                        item={item}
                        onSelect={() => setSelectedItem(item)}
                      />
                    ))}
                  </div>

                  {/* View More if > 6 photos */}
                  {currentActiveItems.length > 6 && (
                    <div className="mt-8 flex flex-col items-center justify-center gap-2">
                      <button
                        type="button"
                        onClick={() => toggleMobileCategoryExpand(activeTab)}
                        className="
                          group inline-flex items-center gap-2.5 rounded-full border-2 border-[#D1007F] bg-[#D1007F]
                          px-8 py-3 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-white
                          shadow-[0_8px_25px_rgba(209,0,127,0.25)] transition-all duration-300
                          hover:bg-[#B0006B] hover:border-[#B0006B] active:scale-95 cursor-pointer
                        "
                      >
                        <span>
                          {isCatExpanded
                            ? "Show Fewer Photos"
                            : `View More Photos (+${currentActiveItems.length - 6} more)`}
                        </span>
                        {isCatExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#6E5A23]">
                        Showing {visibleItems.length} of {currentActiveItems.length} Photos
                      </p>
                    </div>
                  )}
                </>
              );
            })()}
          </div>
        )}
      </div>

      {/* =====================================================
          LIGHTBOX MODAL WITH FULL IMAGE PREVIEW & WHATSAPP
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
              className="absolute right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-[#D1007F] text-white shadow-xl transition-transform hover:scale-110 cursor-pointer"
            >
              <X size={22} />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                const idx = currentActiveItems.findIndex((i) => i.id === selectedItem.id);
                if (idx !== -1) {
                  const prevIdx = idx === 0 ? currentActiveItems.length - 1 : idx - 1;
                  setSelectedItem(currentActiveItems[prevIdx]);
                }
              }}
              aria-label="Previous work"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-50 flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white shadow-lg transition-transform hover:scale-110 cursor-pointer"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                const idx = currentActiveItems.findIndex((i) => i.id === selectedItem.id);
                if (idx !== -1) {
                  const nextIdx = idx === currentActiveItems.length - 1 ? 0 : idx + 1;
                  setSelectedItem(currentActiveItems[nextIdx]);
                }
              }}
              aria-label="Next work"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-50 flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white shadow-lg transition-transform hover:scale-110 cursor-pointer"
            >
              <ChevronRight size={28} />
            </button>

            {/* Lightbox Content Container */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border-2 border-[#D1007F] bg-white shadow-2xl"
            >
              {/* Image Preview Container */}
              <div className="flex max-h-[68vh] items-center justify-center bg-neutral-950 p-2 sm:p-4">
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="max-h-[64vh] w-auto max-w-full object-contain drop-shadow-md"
                />
              </div>

              {/* Title, Category & Action Footer */}
              <div className="flex flex-col gap-3 border-t border-[#F3B4D8] bg-[#FFF3F9] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-[#D1007F] px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-white">
                      {selectedItem.category}
                    </span>
                    <span className="text-[10px] font-bold text-[#D1007F]">
                      Project {String(selectedItem.id).padStart(2, "0")} of 20
                    </span>
                  </div>
                  <h3 className="mt-1 text-base sm:text-lg font-black text-[#1A1A1A]">
                    {selectedItem.title}
                  </h3>
                  <p className="flex items-center gap-1.5 text-xs text-[#6E5A23] font-medium">
                    <MapPin size={12} className="text-[#D1007F]" />
                    <span>{selectedItem.location}</span>
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
// INDIVIDUAL WORK CARD COMPONENT
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
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-95" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="rounded-full bg-black/60 backdrop-blur-md px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white border border-white/20">
            {item.tag}
          </span>
          <span className="rounded-full bg-[#D1007F] px-2 py-0.5 text-[9px] font-black text-white shadow-sm">
            #{String(item.id).padStart(2, "0")}
          </span>
        </div>

        {/* Card Details Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-3.5 sm:p-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F2299A]">
            {item.category}
          </p>
          <h3 className="mt-0.5 text-xs sm:text-sm font-black text-white leading-snug drop-shadow-sm group-hover:text-[#F4DC86] transition-colors">
            {item.title}
          </h3>
          <div className="mt-1 flex items-center justify-between">
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