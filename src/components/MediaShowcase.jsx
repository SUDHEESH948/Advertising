import { motion } from "framer-motion";

// Service Images
import ledDisplayImg from "../assets/services/led-display.png";
import busShelterImg from "../assets/services/bus-shelter.png";
import busBrandingImg from "../assets/services/bus-branding.png";
import printingImg from "../assets/services/highquality-printing.png";
import highEndMediaImg from "../assets/services/electronic-media.png";
import signBoardImg from "../assets/services/sign-board.png";
import retailPlatformImg from "../assets/services/retail-platform.png";

const services = [
  {
    id: 1,
    title: "LED DISPLAY",
    src: ledDisplayImg,
    alt: "LED Display",
  },
  {
    id: 2,
    title: "Bus Shelter & Railway Station Branding",
    src: busShelterImg,
    alt: "Bus Shelter & Railway Station Branding",
  },
  {
    id: 3,
    title: "BUS BRANDING",
    src: busBrandingImg,
    alt: "Bus Branding",
  },
  {
    id: 4,
    title: "Experience Highquality PRINTING",
    src: printingImg,
    alt: "High Quality Printing",
  },
  {
    id: 5,
    title: "High-end Electronic Media MARKETING",
    src: highEndMediaImg,
    alt: "Electronic Media Marketing",
  },
  {
    id: 6,
    title: "SIGN BOARD Authorized Agency",
    src: signBoardImg,
    alt: "Sign Board Authorized Agency",
  },
  {
    id: 7,
    title: "RETAIL PLATFORM ADVERTISING",
    src: retailPlatformImg,
    alt: "Retail Platform Advertising",
  },
];

export default function InfiniteServiceTicker() {
  // Duplicate services for seamless infinite scrolling
  const marqueeItems = [
    ...services,
    ...services,
    ...services,
  ];

  return (
    <section
      id="services-ticker"
      className="
        relative
        w-full
        overflow-hidden
        border-y-2
        border-[#D1007F]
        bg-white
        py-10
        sm:py-14
      "
    >
      {/* =====================================================
          LEFT FADE
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          bottom-0
          z-20
          w-16
          sm:w-28
          md:w-40
          bg-gradient-to-r
          from-white
          via-white/80
          to-transparent
        "
      />

      {/* =====================================================
          RIGHT FADE
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          bottom-0
          z-20
          w-16
          sm:w-28
          md:w-40
          bg-gradient-to-l
          from-white
          via-white/80
          to-transparent
        "
      />

      {/* =====================================================
          SECTION LABEL
      ====================================================== */}
      <div className="relative z-10 mx-auto mb-6 sm:mb-8 max-w-7xl px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="flex items-center gap-3">
          <span className="h-[2px] w-8 sm:w-10 bg-[#D1007F]" />

          <span
            className="
              text-[11px]
              sm:text-xs
              font-bold
              uppercase
              tracking-[0.3em]
              text-[#D1007F]
            "
          >
            Our Services
          </span>
        </div>
      </div>

      {/* =====================================================
          MOVING TRACK
      ====================================================== */}
      <motion.div
        className="flex w-max items-center gap-4 sm:gap-6"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 32,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {marqueeItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="
              group
              relative
              flex
              h-28
              w-[270px]
              sm:h-36
              sm:w-[360px]
              lg:h-44
              lg:w-[460px]
              shrink-0
              items-center
              gap-3.5
              sm:gap-4
              overflow-hidden
              rounded-xl
              sm:rounded-2xl
              border-2
              border-[#D1007F]
              bg-white
              p-3
              sm:p-4
              lg:p-5
              shadow-[0_6px_25px_rgba(209,0,127,0.08)]
              transition-all
              duration-300
              hover:border-[#F2299A]
              hover:shadow-[0_10px_35px_rgba(209,0,127,0.18)]
            "
          >
            {/* =================================================
                MAGENTA SIDE ACCENT
            ================================================== */}
            <div
              className="
                absolute
                left-0
                top-0
                h-full
                w-1
                bg-[#D1007F]
                transition-all
                duration-300
                group-hover:w-2
                group-hover:bg-[#F2299A]
              "
            />

            {/* =================================================
                IMAGE CONTAINER
            ================================================== */}
            <div
              className="
                flex
                h-20
                w-20
                sm:h-26
                sm:w-26
                lg:h-32
                lg:w-32
                shrink-0
                items-center
                justify-center
                overflow-hidden
                rounded-lg
                sm:rounded-xl
                border
                border-[#F3B4D8]
                bg-[#FFF3F9]
                p-2
                transition-all
                duration-300
                group-hover:border-[#D1007F]
                group-hover:bg-[#FDE5F1]
              "
            >
              <img
                src={item.src}
                alt={item.alt}
                className="
                  max-h-full
                  max-w-full
                  object-contain
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              />
            </div>

            {/* =================================================
                SERVICE CONTENT
            ================================================== */}
            <div className="flex min-w-0 flex-1 flex-col justify-center">
              <span
                className="
                  mb-1
                  sm:mb-2
                  text-[8px]
                  sm:text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#D1007F]
                "
              >
                Service
              </span>

              <h3
                className="
                  text-xs
                  sm:text-sm
                  lg:text-base
                  font-bold
                  leading-snug
                  text-[#1A1A1A]
                  transition-colors
                  duration-300
                  group-hover:text-[#D1007F]
                  line-clamp-2
                "
              >
                {item.title}
              </h3>

              {/* Bottom Accent */}
              <div
                className="
                  mt-2
                  sm:mt-3
                  h-[2px]
                  w-6
                  sm:w-8
                  bg-[#D1007F]
                  transition-all
                  duration-300
                  group-hover:w-12
                  group-hover:bg-[#F2299A]
                "
              />
            </div>
          </div>
        ))}
      </motion.div>

      {/* =====================================================
          BOTTOM ACCENT
      ====================================================== */}
      <div className="relative mx-auto mt-6 sm:mt-8 max-w-7xl px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <span
            className="
              text-[8px]
              sm:text-[9px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-neutral-400
            "
          >
            Quilonad Media
          </span>

          <span
            className="
              flex
              items-center
              gap-2
              text-[8px]
              sm:text-[9px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-neutral-400
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#D1007F]" />
            Complete Media Solutions
          </span>
        </div>
      </div>
    </section>
  );
}