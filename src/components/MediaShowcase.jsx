
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useAnimationControls,
} from "framer-motion";

// =========================================================
// SERVICE IMAGES
// =========================================================

import ledDisplayImg from "../assets/services/led-display.png";
import busShelterImg from "../assets/services/bus-shelter.png";
import busBrandingImg from "../assets/services/bus-branding.png";
import printingImg from "../assets/services/highquality-printing.png";
import highEndMediaImg from "../assets/services/electronic-media.png";
import signBoardImg from "../assets/services/sign-board.png";
import retailPlatformImg from "../assets/services/retail-platform.png";

// =========================================================
// SERVICES DATA
// =========================================================

const services = [
  {
    id: 1,
    title: "LED DISPLAY",
    src: ledDisplayImg,
    alt: "LED Display",
    description:
      "High-impact digital LED billboards and indoor/outdoor commercial screens providing maximum visibility day and night.",
    features: [
      "Ultra-bright panels",
      "Weather resistant",
      "Remote content management",
    ],
  },
  {
    id: 2,
    title: "Bus Shelter & Railway Station Branding",
    src: busShelterImg,
    alt: "Bus Shelter & Railway Station Branding",
    description:
      "Captive-audience commuter advertising across prime transit hubs and bus shelters with sustained daily dwell time.",
    features: [
      "Prime pedestrian footfall",
      "Backlit visibility",
      "City-wide coverage",
    ],
  },
  {
    id: 3,
    title: "BUS BRANDING",
    src: busBrandingImg,
    alt: "Bus Branding",
    description:
      "Mobile billboards delivering comprehensive cross-city impressions through full-wrap and side-panel vehicle transit media.",
    features: [
      "Dynamic route reach",
      "High recall rates",
      "Long-term durable vinyl",
    ],
  },
  {
    id: 4,
    title: "Experience Highquality PRINTING",
    src: printingImg,
    alt: "High Quality Printing",
    description:
      "Precision large-format flex, vinyl, fabric, and banner printing using industrial high-resolution pigment inks.",
    features: [
      "Vibrant color accuracy",
      "UV resistant coatings",
      "Custom substrate options",
    ],
  },
  {
    id: 5,
    title: "High-end Electronic Media MARKETING",
    src: highEndMediaImg,
    alt: "Electronic Media Marketing",
    description:
      "Multi-channel broadcast, digital screen networks, and synced audio-visual brand integration campaigns.",
    features: [
      "Synchronized playouts",
      "Targeted slots",
      "Measurable viewer analytics",
    ],
  },
  {
    id: 6,
    title: "SIGN BOARD Authorized Agency",
    src: signBoardImg,
    alt: "Sign Board Authorized Agency",
    description:
      "Compliant 3D acrylic, glow-sign, ACP, and neon architectural signage engineered for store fronts and commercial centers.",
    features: [
      "Authorized municipal compliance",
      "Energy-efficient LEDs",
      "Custom fabrication",
    ],
  },
  {
    id: 7,
    title: "RETAIL PLATFORM ADVERTISING",
    src: retailPlatformImg,
    alt: "Retail Platform Advertising",
    description:
      "In-store POS installations, aisle branding, and interactive kiosks placed directly at point-of-purchase retail zones.",
    features: [
      "Direct consumer engagement",
      "Standee & floor decals",
      "High conversion lift",
    ],
  },
];

// =========================================================
// COMPONENT
// =========================================================

export default function MediaShowcase() {
  const [selectedService, setSelectedService] = useState(null);

  const controls = useAnimationControls();

  // Duplicate services for seamless infinite scrolling
  const marqueeItems = [...services, ...services];

  // =========================================================
  // START / STOP MARQUEE
  // =========================================================

  useEffect(() => {
    if (selectedService) {
      // Stop ticker while modal is open
      controls.stop();
    } else {
      // Start ticker when modal is closed
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          duration: 28,
          ease: "linear",
          repeat: Infinity,
        },
      });
    }

    return () => {
      controls.stop();
    };
  }, [selectedService, controls]);

  // =========================================================
  // OPEN SERVICE
  // =========================================================

  const openService = (service) => {
    setSelectedService(service);
  };

  // =========================================================
  // CLOSE MODAL
  // =========================================================

  const closeModal = () => {
    setSelectedService(null);
  };

  // =========================================================
  // ENQUIRY
  // =========================================================

  const handleEnquiry = () => {
    const serviceName = selectedService?.title;

    setSelectedService(null);

    setTimeout(() => {
      const contactSection = document.getElementById("contact");

      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      // Send selected service to contact form
      if (serviceName) {
        window.dispatchEvent(
          new CustomEvent("serviceEnquiry", {
            detail: {
              service: serviceName,
            },
          })
        );
      }
    }, 150);
  };

  // =========================================================
  // JSX
  // =========================================================

  return (
    <section
      id="services-ticker"
      className="relative w-full overflow-hidden border-y-2 border-[#D1007F] bg-[#F4DC86] py-10 sm:py-16"
    >
      {/* =====================================================
          LEFT FADE
      ===================================================== */}

      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-12 bg-gradient-to-r from-[#F4DC86] via-[#F4DC86]/80 to-transparent sm:w-28 md:w-36" />

      {/* =====================================================
          RIGHT FADE
      ===================================================== */}

      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-12 bg-gradient-to-l from-[#F4DC86] via-[#F4DC86]/80 to-transparent sm:w-28 md:w-36" />

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="relative z-10 mx-auto mb-6 max-w-7xl px-4 sm:mb-10 sm:px-6 md:px-10 lg:px-16">
        <div className="flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#D1007F] sm:w-12" />

          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D1007F] sm:text-sm">
            Our Services • Click Any Card for Details
          </span>
        </div>
      </div>

      {/* =====================================================
          MOVING TRACK
      ===================================================== */}

      <motion.div
        className="flex w-max cursor-pointer items-center gap-6"
        animate={controls}
      >
        {marqueeItems.map((item, index) => (
          <motion.div
            key={`${item.id}-${index}`}
            onClick={() => openService(item)}
            whileHover={{
              y: -6,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="
              group
              relative
              flex
              h-[400px]
              w-[300px]
              shrink-0
              flex-col
              justify-between
              overflow-hidden
              rounded-2xl
              border-2
              border-[#D1007F]
              bg-white
              p-6
              shadow-[0_8px_30px_rgba(209,0,127,0.1)]
              transition-all
              duration-300
              hover:border-[#F2299A]
              hover:shadow-[0_12px_40px_rgba(209,0,127,0.2)]
              active:scale-[0.98]
            "
          >
            {/* LEFT ACCENT */}

            <div
              className="
                absolute
                bottom-0
                left-0
                top-0
                w-1.5
                bg-[#D1007F]
                transition-all
                duration-300
                group-hover:w-2.5
                group-hover:bg-[#F2299A]
              "
            />

            {/* CARD HEADER */}

            <div className="flex items-center justify-between pl-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D1007F]">
                Service 0{item.id}
              </span>

              <span
                className="
                  text-[11px]
                  font-semibold
                  text-[#D1007F]
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              >
                View Details →
              </span>
            </div>

            {/* IMAGE */}

            <div
              className="
                flex
                h-[210px]
                w-full
                items-center
                justify-center
                overflow-hidden
                rounded-xl
                border
                border-[#F3B4D8]
                bg-[#FFF3F9]
                p-4
                transition-all
                duration-300
                group-hover:border-[#D1007F]
                group-hover:bg-[#FDE5F1]
              "
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="
                  max-h-full
                  max-w-full
                  object-contain
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />
            </div>

            {/* CARD TITLE */}

            <div className="flex flex-col gap-2 pl-2">
              <h3
                className="
                  line-clamp-2
                  text-base
                  font-bold
                  leading-snug
                  text-[#1A1A1A]
                  transition-colors
                  duration-300
                  group-hover:text-[#D1007F]
                "
              >
                {item.title}
              </h3>

              <div
                className="
                  h-[2px]
                  w-8
                  bg-[#D1007F]
                  transition-all
                  duration-300
                  group-hover:w-16
                  group-hover:bg-[#F2299A]
                "
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* =====================================================
          MODAL
      ===================================================== */}

      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            {/* BACKDROP */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* MODAL BOX */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 20,
              }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
              }}
              className="
                relative
                z-10
                flex
                max-h-[90vh]
                w-full
                max-w-lg
                flex-col
                overflow-hidden
                rounded-2xl
                border-2
                border-[#D1007F]
                bg-white
                shadow-2xl
              "
            >
              {/* CLOSE BUTTON */}

              <button
                type="button"
                onClick={closeModal}
                aria-label="Close modal"
                className="
                  absolute
                  right-4
                  top-4
                  z-20
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-neutral-100
                  text-neutral-600
                  transition-all
                  duration-300
                  hover:rotate-90
                  hover:bg-[#D1007F]
                  hover:text-white
                "
              >
                ✕
              </button>

              {/* MODAL IMAGE */}

              <div
                className="
                  flex
                  h-56
                  w-full
                  shrink-0
                  items-center
                  justify-center
                  border-b
                  border-[#F3B4D8]
                  bg-[#FFF3F9]
                  p-6
                  sm:h-64
                "
              >
                <img
                  src={selectedService.src}
                  alt={selectedService.alt}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* MODAL CONTENT */}

              <div className="overflow-y-auto p-6 sm:p-8">
                {/* SERVICE NUMBER */}

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D1007F]">
                  Service 0{selectedService.id}
                </span>

                {/* TITLE */}

                <h2
                  className="
                    mt-1
                    pr-8
                    text-2xl
                    font-black
                    leading-tight
                    text-[#1A1A1A]
                    sm:text-3xl
                  "
                >
                  {selectedService.title}
                </h2>

                {/* DESCRIPTION */}

                <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
                  {selectedService.description}
                </p>

                {/* FEATURES */}

                <div className="mt-6 flex flex-col gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Key Highlights
                  </span>

                  <div className="flex flex-wrap gap-2">
                    {selectedService.features.map((feature, index) => (
                      <span
                        key={index}
                        className="
                          rounded-full
                          border
                          border-[#F3B4D8]
                          bg-[#FFF3F9]
                          px-3
                          py-1.5
                          text-xs
                          font-semibold
                          text-[#D1007F]
                        "
                      >
                        ✓ {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* BUTTONS */}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={handleEnquiry}
                    className="
                      flex-1
                      rounded-xl
                      bg-[#D1007F]
                      py-3
                      text-center
                      text-sm
                      font-bold
                      text-white
                      shadow-md
                      transition-all
                      duration-300
                      hover:bg-[#B0006B]
                      hover:shadow-lg
                      active:scale-[0.98]
                    "
                  >
                    Enquire About This
                  </button>

                  
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}