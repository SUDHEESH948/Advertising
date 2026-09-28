
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
      className="relative overflow-hidden bg-white px-6 py-24 text-[#1A1A1A] md:px-10 lg:px-16"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-[#D1007F]/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#F2299A]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#D1007F]" />

              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#D1007F]">
                Selected Work
              </p>
            </div>

            <h2 className="text-4xl font-black tracking-tight text-[#1A1A1A] md:text-7xl">
              Campaigns that
              <span className="block text-[#D1007F]">
                get noticed.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-neutral-500">
            A selection of outdoor, transit, digital, print and signage
            campaigns designed to create strong brand visibility.
          </p>
        </div>

        {/* =====================================================
            CATEGORY FILTERS
        ====================================================== */}
        <div className="mb-10 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setSelectedIndex(null);
              }}
              className={`
                whitespace-nowrap rounded-full px-5 py-3
                text-xs font-bold uppercase tracking-wider
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
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
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
                rounded-[2rem]
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
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#F2299A]">
                  {item.category}
                </span>

                <h3 className="mt-2 text-xl font-bold text-white">
                  {item.title}
                </h3>

                <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/60 transition group-hover:text-white">
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
        <div className="mt-28">
          <div className="mb-8">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#D1007F]" />

              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#D1007F]">
                Trusted Brands
              </p>
            </div>

            <h2 className="mt-3 text-3xl font-black text-[#1A1A1A] md:text-5xl">
              Brands we work with
            </h2>
          </div>

          <div
            className="
              overflow-hidden
              rounded-3xl
              border-2
              border-[#F3B4D8]
              bg-[#FFF3F9]
              py-10
            "
          >
            <div className="flex min-w-max animate-marquee items-center gap-20 px-10">
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
              ].map((brand, index) => (
                <div
                  key={`${brand}-${index}`}
                  className="
                    text-xl
                    font-black
                    tracking-[0.2em]
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
        <div id="news" className="mt-28 scroll-mt-20">
          <div className="mb-12">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#D1007F]" />

              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#D1007F]">
                News & Updates
              </p>
            </div>

            <h2 className="mt-3 text-4xl font-black text-[#1A1A1A] md:text-6xl">
              Latest from
              <span className="block text-[#D1007F]">
                our world.
              </span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {news.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="
                  group
                  rounded-[2rem]
                  border-2
                  border-[#F3B4D8]
                  bg-white
                  p-7
                  shadow-[0_8px_30px_rgba(209,0,127,0.05)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#D1007F]
                  hover:shadow-[0_15px_40px_rgba(209,0,127,0.12)]
                "
              >
                <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-[#D1007F]">
                  <CalendarDays size={14} />

                  {article.date}

                  <span className="text-[#D1007F]/30">
                    /
                  </span>

                  {article.category}
                </div>

                <h3 className="mt-8 text-xl font-bold leading-snug text-[#1A1A1A] transition-colors group-hover:text-[#D1007F]">
                  {article.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-neutral-500">
                  {article.text}
                </p>

                <button
                  className="
                    mt-8
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

                <div className="mt-6 h-[2px] w-8 bg-[#D1007F] transition-all duration-300 group-hover:w-16" />
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
              p-5
              backdrop-blur-xl
            "
          >
            {/* Close */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="
                absolute
                right-6
                top-6
                z-10
                flex
                h-12
                w-12
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
              <X size={20} />
            </button>

            {/* Previous */}
            <button
              onClick={previous}
              className="
                absolute
                left-5
                top-1/2
                z-10
                flex
                h-12
                w-12
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
              <ChevronLeft />
            </button>

            {/* Next */}
            <button
              onClick={next}
              className="
                absolute
                right-5
                top-1/2
                z-10
                flex
                h-12
                w-12
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
              <ChevronRight />
            </button>

            {/* Lightbox */}
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="
                max-h-[90vh]
                max-w-6xl
                overflow-hidden
                rounded-3xl
                border-2
                border-[#D1007F]
                bg-[#0b0b0b]
                shadow-[0_0_60px_rgba(209,0,127,0.25)]
              "
            >
              <img
                src={selected.image}
                alt={selected.title}
                className="max-h-[80vh] w-auto max-w-full object-contain"
              />

              <div className="bg-[#0b0b0b] p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-[#F2299A]">
                  {selected.category}
                </p>

                <h3 className="mt-1 text-xl font-bold text-white">
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