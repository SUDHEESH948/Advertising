import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";

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
  return (
    <section
      id="clients"
      className="relative overflow-hidden bg-[#F4DC86] px-3.5 py-12 text-[#1A1A1A] sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-16"
    >
      {/* Decorative background glows */}
      <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-[#D1007F]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#F2299A]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =====================================================
            ESTEEMED CLIENTS (MARQUEE)
        ====================================================== */}
        <div>
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
    </section>
  );
}