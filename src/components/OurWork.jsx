import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

// Automatically imports all image files inside src/assets/work/
const imageFiles = import.meta.glob(
  "../assets/work/*.{png,jpg,jpeg,webp,svg,PNG,JPG,JPEG,WEBP,SVG}",
  { eager: true, import: "default" }
);

// Map paths into an array with clean URLs and auto-generated titles
const workItems = Object.entries(imageFiles).map(([path, url], index) => {
  // Extract filename without extension (e.g. "../assets/work/jj.png" -> "jj")
  const rawName = path.split("/").pop()?.replace(/\.[^/.]+$/, "") || `Project ${index + 1}`;
  
  // Clean dashes/underscores to title case (e.g. "led-billboard-ad" -> "Led Billboard Ad")
  const formattedTitle = rawName
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return {
    id: index + 1,
    title: formattedTitle,
    src: url,
  };
});

export default function OurWork() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const previous = (e) => {
    e?.stopPropagation();
    setSelectedIndex((current) =>
      current === 0 ? workItems.length - 1 : current - 1
    );
  };

  const next = (e) => {
    e?.stopPropagation();
    setSelectedIndex((current) =>
      current === workItems.length - 1 ? 0 : current + 1
    );
  };

  const selectedItem = selectedIndex !== null ? workItems[selectedIndex] : null;

  return (
    <div className="min-h-screen bg-[#F4DC86] px-4 py-12 sm:px-8 sm:py-20 lg:px-16 text-[#1A1A1A]">
      <div className="mx-auto max-w-7xl">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <div className="mb-10 sm:mb-16">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="h-[2px] w-6 sm:w-10 bg-[#D1007F]" />
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#D1007F]">
              Portfolio Showcase
            </p>
          </div>

          <h1 className="mt-2 text-3xl font-black tracking-tight text-[#1A1A1A] sm:text-5xl md:text-6xl lg:text-7xl">
            Our Work in <span className="text-[#D1007F]">Action.</span>
          </h1>

          <p className="mt-2.5 max-w-xl text-xs sm:text-sm leading-relaxed text-[#5A4B1A]">
            A showcase of outdoor media, transit wraps, billboard displays, and signage executions.
          </p>
        </div>

        {/* =====================================================
            WORK GRID
        ====================================================== */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6">
          {workItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedIndex(index)}
              className="
                group
                relative
                flex
                flex-col
                cursor-pointer
                overflow-hidden
                rounded-2xl
                border-2
                border-[#D1007F]/30
                bg-white
                shadow-[0_8px_30px_rgba(209,0,127,0.08)]
                transition-all
                duration-300
                hover:border-[#D1007F]
                hover:shadow-[0_15px_40px_rgba(209,0,127,0.22)]
              "
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#FFF3F9]">
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

                {/* Card Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#F2299A]">
                    Project 0{item.id}
                  </span>
                  
                  <div className="mt-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-white/70 group-hover:text-white">
                    <span>View Project</span>
                    <ExternalLink size={12} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* =====================================================
          LIGHTBOX MODAL
      ====================================================== */}
      <AnimatePresence>
        {selectedItem && (
          <div
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 backdrop-blur-md sm:p-6"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              aria-label="Close modal"
              className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-[#D1007F] text-white shadow-xl transition-transform hover:scale-110"
            >
              <X size={20} />
            </button>

            {/* Previous Button */}
            <button
              onClick={previous}
              aria-label="Previous work"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white shadow-lg transition-transform hover:scale-110 sm:left-6 sm:h-14 sm:w-14"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Next Button */}
            <button
              onClick={next}
              aria-label="Next work"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white shadow-lg transition-transform hover:scale-110 sm:right-6 sm:h-14 sm:w-14"
            >
              <ChevronRight size={28} />
            </button>

            {/* Lightbox Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[90vh] max-w-4xl flex-col overflow-hidden rounded-2xl border-2 border-[#D1007F] bg-white shadow-2xl"
            >
              {/* Image Preview */}
              <div className="flex max-h-[72vh] items-center justify-center bg-neutral-950 p-2 sm:p-4">
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="max-h-[68vh] w-auto max-w-full object-contain"
                />
              </div>

              {/* Title & Info Footer */}
              <div className="flex items-center justify-between border-t border-[#F3B4D8] bg-[#FFF3F9] px-5 py-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D1007F]">
                    Project 0{selectedItem.id}
                  </span>
                  
                </div>

                <div className="flex items-center gap-2 text-xs font-bold text-[#D1007F]">
                  <span>Quilonad Media</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D1007F]" />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}