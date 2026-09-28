
import { motion } from "framer-motion";

import asianetLogo from "../assets/medialogo/asianet.png";
import asianetNewsLogo from "../assets/medialogo/asianet-news.png";

const logos = [
  {
    id: 1,
    src: asianetLogo,
    alt: "Asianet",
    blendClass: "mix-blend-screen",
  },
  {
    id: 2,
    src: asianetNewsLogo,
    alt: "Asianet News",
    blendClass: "mix-blend-screen filter contrast-125",
  },
];

export default function InfiniteLogoTicker() {
  const marqueeLogos = [
    ...logos,
    ...logos,
    ...logos,
    ...logos,
    ...logos,
    ...logos,
  ];

  return (
    <section
  id="media"
  className="relative w-full overflow-hidden bg-white py-12 border-y border-[#D1007F]"
>
      {/* =====================================================
          LEFT GRADIENT FADE
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          bottom-0
          z-20
          w-24
          bg-gradient-to-r
          from-transparent
          to-transparent
          md:w-36
        "
      />

      {/* =====================================================
          RIGHT GRADIENT FADE
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          bottom-0
          z-20
          w-24
          bg-gradient-to-l
          from-transparent
          to-transparent
          md:w-36
        "
      />

      {/* =====================================================
          CONTINUOUS LOGO TRACK
      ====================================================== */}
      <motion.div
        className="flex w-max items-center gap-8"
        animate={{
          x: ["-50%", "0%"],
        }}
        transition={{
          duration: 22,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {marqueeLogos.map((logo, index) => (
          <div
            key={`${logo.id}-${index}`}
            className="
              group
              relative
              flex
              h-68
              w-48
              shrink-0
              items-center
              justify-center
              overflow-hidden
              rounded-2xl
              border-2
              border-[#D1007F]
              bg-transparent
              p-4
              transition-all
              duration-300
              hover:border-[#F2299A]
              hover:shadow-[0_0_30px_rgba(209,0,127,0.35)]
            "
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className={`
                max-h-full
                max-w-full
                object-contain
                opacity-90
                transition-all
                duration-300
                group-hover:scale-105
                group-hover:opacity-100
                ${logo.blendClass}
              `}
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}