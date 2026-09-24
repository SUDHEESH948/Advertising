import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { work, shopBrandImg } from "../data/mediaData";
import Hero from "../components/Hero";
import ProjectModal from "../components/ProjectModal";

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);

  const list = useMemo(
    () => (filter === "All" ? work : work.filter((x) => x.category === filter)),
    [filter],
  );

  const cats = [
    "All",
    "Transit Ads",
    "Outdoor & Hoardings",
    "In-Store & Retail",
    "Signboards",
    "Road Show Vehicles",
    "Electronic & Print",
    "BTL & Printing",
    "Event Pavilions",
  ];

  return (
    <div className="bg-white">
      <Hero
        eyebrow="Work Portfolio"
        title={
          <>
            Visual Gallery &<br />
            <span className="text-[#FD3DB5]">Campaign Samples.</span>
          </>
        }
        body="Inspect sample executions across KSRTC buses, RAK Ceramics retail shops, Kerala Police signboards, and event pavilions."
        image={shopBrandImg}
      />
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          {/* Category Filter Pills (Mobile Horizontal Swipeable Bar & Desktop Wrap) */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-3 sm:pb-8 border-b border-black/15 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
            {cats.map((x) => (
              <button
                key={x}
                onClick={() => setFilter(x)}
                className={`whitespace-nowrap shrink-0 rounded-full border px-3.5 sm:px-4 py-2 sm:py-2.5 text-[10px] font-bold uppercase tracking-[.12em] transition-all cursor-pointer active:scale-95 ${
                  filter === x
                    ? "border-[#111820] bg-[#111820] text-white shadow-xs"
                    : "border-black/15 bg-white text-[#111820]/75 hover:border-[#FD3DB5] hover:text-[#FD3DB5]"
                }`}
              >
                {x}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <motion.div
            layout
            className="mt-8 sm:mt-12 grid gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
          >
            {list.map((p, i) => (
              <motion.button
                layout
                key={p.title}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => setActive(work.indexOf(p))}
                className={`group text-left cursor-pointer active:scale-[0.99] transition-transform ${
                  i === 1 ? "lg:mt-12" : ""
                }`}
              >
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-[#111820] shadow-md">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-white/90 text-[#111820] text-[8px] sm:text-[9px] font-bold uppercase tracking-wider">
                      {p.category}
                    </span>
                  </div>
                  <span className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between text-[9px] sm:text-[10px] font-bold uppercase tracking-[.17em] text-white">
                    <span className="truncate pr-2">{p.client}</span>
                    <ArrowUpRight
                      size={14}
                      className="text-[#FD3DB5] shrink-0"
                    />
                  </span>
                </div>
                <div className="mt-3 sm:mt-4 flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display text-lg sm:text-2xl font-extrabold tracking-[-0.03em] text-[#111820]">
                      {p.title}
                    </h3>
                    <p className="mt-0.5 sm:mt-1 text-xs text-[#FD3DB5] font-semibold">
                      {p.type}
                    </p>
                  </div>
                  <span className="text-xs text-black/45 shrink-0 font-mono">
                    {p.year}
                  </span>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {active !== null && (
          <ProjectModal
            index={active}
            close={() => setActive(null)}
            change={setActive}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
