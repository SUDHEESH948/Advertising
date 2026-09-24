import { motion } from "framer-motion";
import { X } from "lucide-react";
import { work } from "../data/mediaData";

export default function ProjectModal({ index, close, change }) {
  const p = work[index];
  if (!p) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={close}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 bg-black/80 backdrop-blur-md overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.95, y: 15 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 15 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl bg-white shadow-2xl my-auto"
      >
        <div className="grid lg:grid-cols-[1.1fr_.9fr]">
          <div className="relative bg-[#111820] aspect-[16/10] sm:aspect-[4/3] lg:aspect-auto lg:min-h-[340px]">
            <img
              src={p.image}
              alt={p.title}
              className="h-full w-full object-cover"
            />
            <button
              onClick={close}
              className="absolute right-3 top-3 sm:right-4 sm:top-4 grid h-11 w-11 place-items-center rounded-full bg-white/95 shadow-lg text-[#111820] hover:text-[#FD3DB5] transition-colors active:scale-95 z-10 cursor-pointer"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
          <div className="flex flex-col justify-between p-5 sm:p-8 lg:p-12">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[.17em] text-[#FD3DB5]">
                  {p.category}
                </span>
                <span className="text-black/30">•</span>
                <span className="text-[10px] font-bold uppercase tracking-[.17em] text-black/50">
                  {p.year}
                </span>
              </div>
              <h2 className="mt-3 sm:mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-[-0.04em] text-[#111820]">
                {p.title}
              </h2>
              <p className="mt-1.5 sm:mt-2 text-xs font-bold uppercase tracking-wider text-[#111820]/60">
                Client: {p.client}
              </p>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-6 sm:leading-7 text-black/70">
                {p.text}
              </p>

              <div className="mt-5 sm:mt-6">
                <p className="text-[10px] font-bold uppercase tracking-[.15em] text-[#111820]/50 mb-2">
                  Specifications & Execution
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-[#111820] text-white px-2.5 sm:px-3 py-1 sm:py-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[.1em]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-10 flex justify-between border-t border-black/15 pt-4 sm:pt-5 text-[10px] font-bold uppercase tracking-[.14em]">
              <button
                onClick={() => change((index + work.length - 1) % work.length)}
                className="flex items-center gap-2 py-2 px-2 hover:text-[#FD3DB5] transition-colors active:scale-95 cursor-pointer"
              >
                ← Previous
              </button>
              <button
                onClick={() => change((index + 1) % work.length)}
                className="flex items-center gap-2 py-2 px-2 hover:text-[#FD3DB5] transition-colors active:scale-95 cursor-pointer"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
