import { useState } from "react";
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

export default function GalleryNews() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filtered =
    activeCategory === "All"
      ? gallery
      : gallery.filter((item) => item.category === activeCategory);

  const previous = () => {
    setSelectedIndex((current) =>
      current === 0 ? filtered.length - 1 : current - 1
    );
  };

  const next = () => {
    setSelectedIndex((current) =>
      current === filtered.length - 1 ? 0 : current + 1
    );
  };

  const selected =
    selectedIndex !== null ? filtered[selectedIndex] : null;

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-16 text-[#1A1A1A]"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-[#D1007F]/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#F2299A]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <div className="mb-8 sm:mb-12 flex flex-col justify-between gap-4 sm:gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-3 sm:mb-4 flex items-center gap-3">
              <span className="h-[2px] w-8 sm:w-10 bg-[#D1007F]" />

              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#D1007F]">
                Selected Work
              </p>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#1A1A1A]">
              Campaigns that
              <span className="block text-[#D1007F]">
                get noticed.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm leading-relaxed text-neutral-500">
            A selection of outdoor, transit, digital, print and signage
            campaigns designed to create strong brand visibility.
          </p>
        </div>

        {/* =====================================================
            CATEGORY FILTERS
        ====================================================== */}
        <div className="mb-8 sm:mb-10 flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setSelectedIndex(null);
              }}
              className={`
                shrink-0 whitespace-nowrap rounded-full px-4 py-2 sm:px-5 sm:py-2.5
                text-[11px] sm:text-xs font-bold uppercase tracking-wider
                transition-all duration-300
                ${
                  activeCategory === category
                    ? "bg-[#D1007F] text-white shadow-[0_8px_25px_rgba(209,0,127,0.25)]"
                    : "border border-[#F3B4D8] bg-[#FFF3F9] text-[#D1007F] hover:border-[#D1007F] hover:bg-[#FDE5F1]"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* =====================================================
            GALLERY GRID
        ====================================================== */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {filtered.map((item, index) => (
            <motion.button
              layout
              key={`${item.title}-${activeCategory}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -7 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedIndex(index)}
              className="
                group
                relative
                aspect-[4/5]
                overflow-hidden
                rounded-2xl
                sm:rounded-3xl
                border-2
                border-[#F3B4D8]
                bg-[#FFF3F9]
                text-left
                shadow-[0_8px_30px_rgba(209,0,127,0.07)]
                transition-all
                duration-300
                hover:border-[#D1007F]
                hover:shadow-[0_15px_40px_rgba(209,0,127,0.16)]
              "
            >
              <img
                src={item.image}
                alt={item.title}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              {/* Magenta top accent */}
              <div className="absolute left-0 right-0 top-0 h-1 bg-[#D1007F] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#F2299A]">
                  {item.category}
                </span>

                <h3 className="mt-1.5 sm:mt-2 text-lg sm:text-xl font-bold text-white">
                  {item.title}
                </h3>

                <div className="mt-3 sm:mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/60 transition group-hover:text-white">
                  View Project
                  <ExternalLink size={13} />
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* =====================================================
            TRUSTED BRANDS
        ====================================================== */}
        <div className="mt-16 sm:mt-24 md:mt-28">
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 sm:w-10 bg-[#D1007F]" />

              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#D1007F]">
                Trusted Brands
              </p>
            </div>

            <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-5xl font-black text-[#1A1A1A]">
              Brands we work with
            </h2>
          </div>

          <div
            className="
              overflow-hidden
              rounded-2xl
              sm:rounded-3xl
              border-2
              border-[#F3B4D8]
              bg-[#FFF3F9]
              py-6
              sm:py-10
            "
          >
            <div className="animate-marquee items-center gap-10 sm:gap-20 px-6 sm:px-10">
              {[
                "NEXORA",
                "VOLTÉ",
                "PRISTINE",
                "APEX",
                "URBAN",
                "NOVA",
                "VISION",
                "NEXORA",
                "VOLTÉ",
                "PRISTINE",
                "APEX",
                "URBAN",
                "NOVA",
                "VISION",
              ].map((brand, index) => (
                <div
                  key={`${brand}-${index}`}
                  className="
                    text-base
                    sm:text-xl
                    font-black
                    tracking-[0.15em]
                    sm:tracking-[0.2em]
                    text-[#D1007F]/30
                    transition-all
                    duration-300
                    hover:text-[#D1007F]
                  "
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            NEWS & UPDATES
        ====================================================== */}
        <div id="news" className="mt-16 sm:mt-24 md:mt-28 scroll-mt-16 sm:scroll-mt-20">
          <div className="mb-8 sm:mb-12">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 sm:w-10 bg-[#D1007F]" />

              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#D1007F]">
                News & Updates
              </p>
            </div>

            <h2 className="mt-2 sm:mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1A1A]">
              Latest from
              <span className="block text-[#D1007F]">
                our world.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {news.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="
                  group
                  rounded-2xl
                  sm:rounded-[2rem]
                  border-2
                  border-[#F3B4D8]
                  bg-white
                  p-5
                  sm:p-7
                  shadow-[0_8px_30px_rgba(209,0,127,0.05)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#D1007F]
                  hover:shadow-[0_15px_40px_rgba(209,0,127,0.12)]
                "
              >
                <div className="flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-widest text-[#D1007F]">
                  <CalendarDays size={13} />

                  {article.date}

                  <span className="text-[#D1007F]/30">
                    /
                  </span>

                  {article.category}
                </div>

                <h3 className="mt-5 sm:mt-8 text-lg sm:text-xl font-bold leading-snug text-[#1A1A1A] transition-colors group-hover:text-[#D1007F]">
                  {article.title}
                </h3>

                <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-neutral-500">
                  {article.text}
                </p>

                <button
                  className="
                    mt-6
                    sm:mt-8
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-bold
                    uppercase
                    tracking-widest
                    text-[#D1007F]/60
                    transition-all
                    group-hover:text-[#D1007F]
                  "
                >
                  Read More
                  <ArrowRight size={14} />
                </button>

                <div className="mt-5 sm:mt-6 h-[2px] w-8 bg-[#D1007F] transition-all duration-300 group-hover:w-16" />
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
            className="
              fixed
              inset-0
              z-[200]
              flex
              items-center
              justify-center
              bg-black/95
              p-3
              sm:p-5
              backdrop-blur-xl
            "
          >
            {/* Close */}
            <button
              onClick={() => setSelectedIndex(null)}
              aria-label="Close image preview"
              className="
                absolute
                right-3
                top-3
                sm:right-6
                sm:top-6
                z-30
                flex
                h-9
                w-9
                sm:h-12
                sm:w-12
                items-center
                justify-center
                rounded-full
                border
                border-[#D1007F]
                bg-[#D1007F]
                text-white
                transition
                hover:bg-[#F2299A]
              "
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            {/* Previous */}
            <button
              onClick={previous}
              aria-label="Previous image"
              className="
                absolute
                left-2
                sm:left-5
                top-1/2
                z-30
                flex
                h-9
                w-9
                sm:h-12
                sm:w-12
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-[#D1007F]
                bg-black/60
                text-white
                transition
                hover:bg-[#D1007F]
              "
            >
              <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
            </button>

            {/* Next */}
            <button
              onClick={next}
              aria-label="Next image"
              className="
                absolute
                right-2
                sm:right-5
                top-1/2
                z-30
                flex
                h-9
                w-9
                sm:h-12
                sm:w-12
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-[#D1007F]
                bg-black/60
                text-white
                transition
                hover:bg-[#D1007F]
              "
            >
              <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
            </button>

            {/* Lightbox */}
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="
                max-h-[85vh]
                sm:max-h-[90vh]
                max-w-full
                sm:max-w-4xl
                lg:max-w-6xl
                overflow-hidden
                rounded-2xl
                sm:rounded-3xl
                border-2
                border-[#D1007F]
                bg-[#0b0b0b]
                shadow-[0_0_60px_rgba(209,0,127,0.25)]
              "
            >
              <img
                src={selected.image}
                alt={selected.title}
                className="max-h-[60vh] sm:max-h-[75vh] w-auto max-w-full object-contain mx-auto"
              />

              <div className="bg-[#0b0b0b] p-3.5 sm:p-5">
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#F2299A]">
                  {selected.category}
                </p>

                <h3 className="mt-1 text-base sm:text-xl font-bold text-white">
                  {selected.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}