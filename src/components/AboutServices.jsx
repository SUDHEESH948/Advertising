import { motion } from "framer-motion";
import {
  Bus,
  Car,
  Megaphone,
  Monitor,
  Printer,
  Radio,
  Signpost,
  Train,
  Tv,
  Tag,
} from "lucide-react";

const services = [
  {
    title: "Hoarding",
    icon: Megaphone,
    text: "High-impact outdoor advertising positioned in strategic locations for maximum visibility.",
  },
  {
    title: "Mini Hoarding",
    icon: Signpost,
    text: "Targeted outdoor advertising solutions designed for high-traffic local areas.",
  },
  {
    title: "Moving Media",
    icon: Car,
    text: "Take your brand across the city with professionally branded moving media.",
  },
  {
    title: "Bus Branding",
    icon: Bus,
    text: "Transform buses into powerful mobile advertising platforms.",
  },
  {
    title: "KSRTC Branding",
    icon: Bus,
    text: "Connect your brand with a large traveling audience through transit advertising.",
  },
  {
    title: "LED Display",
    icon: Monitor,
    text: "Bright, dynamic and attention-grabbing digital display advertising.",
  },
  {
    title: "Transit Branding",
    icon: Train,
    text: "Bus shelter, railway station and platform advertising solutions.",
  },
  {
    title: "High-Quality Printing",
    icon: Printer,
    text: "Sharp visuals, vibrant colors and professional large-format printing.",
  },
  {
    title: "FM Marketing",
    icon: Radio,
    text: "Strategic radio campaigns that put your brand directly into people's daily routines.",
  },
  {
    title: "Electronic Media",
    icon: Tv,
    text: "Audio, video and digital media campaigns built for modern audiences.",
  },
  {
    title: "Sign Board",
    icon: Signpost,
    text: "Premium LED, ACP, acrylic, glow and corporate signage solutions.",
  },
  {
    title: "Prototype Branding",
    icon: Tag,
    text: "Create impactful brand visibility with professionally designed advertising prototypes that showcase your brand through attractive, high-quality, and strategically placed displays.",
  },
];

const stats = [
  ["500+", "Campaigns"],
  ["100+", "Media Locations"],
  ["50+", "Brand Partners"],
  ["10+", "Years Experience"],
];

export default function AboutServices() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-28 lg:px-16 text-[#171217]"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#F2299A]/5 blur-[120px]" />

        <div className="absolute -right-40 top-[35%] h-96 w-96 rounded-full bg-[#D1007F]/5 blur-[140px]" />

        <div className="absolute bottom-0 left-1/2 h-72 w-[60%] -translate-x-1/2 rounded-full bg-[#F2299A]/5 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ===================================================
            ABOUT INTRO
        ==================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-[0.8fr_1.2fr]"
        >
          {/* Left */}
          <div>
            <p className="mb-3 sm:mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#D1007F]">
              About Quilonad Media
            </p>

            <h2 className="max-w-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-[#171217]">
              We make brands
              <span className="block text-[#D1007F]">visible.</span>
            </h2>
          </div>

          {/* Right */}
          <div>
            <p className="max-w-3xl text-base sm:text-lg leading-relaxed text-[#4F4850]">
              Quilonad MEDIA provides complete media promotion solutions for
              brands looking to reach their audience through powerful outdoor,
              transit, digital, print and electronic advertising.
            </p>

            <p className="mt-4 sm:mt-6 max-w-3xl text-sm sm:text-base leading-relaxed text-[#777078]">
              From a single sign board to a complete city-wide campaign, we
              bring strategy, creative execution, production and media
              visibility together under one roof.
            </p>
          </div>
        </motion.div>

        {/* ===================================================
            STATS
        ==================================================== */}
        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E9E3E8] bg-[#E9E3E8] md:grid-cols-4">
          {stats.map(([number, label], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-4 sm:p-6 md:p-8 lg:p-10 transition-colors duration-300 hover:bg-[#FFF7FC]"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-[#171217]">
                {number}
              </div>

              <div className="mt-1 sm:mt-2 text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#8A8189]">
                {label}
              </div>

              <div className="mt-3 sm:mt-5 h-1 w-0 rounded-full bg-[#D1007F] transition-all duration-500 group-hover:w-8 sm:group-hover:w-10" />
            </motion.div>
          ))}
        </div>

        {/* ===================================================
            SERVICES
        ==================================================== */}
        <div id="services" className="mt-16 sm:mt-24 md:mt-32 scroll-mt-16 sm:scroll-mt-20">
          {/* Heading */}
          <div className="mb-8 sm:mb-12 flex flex-col justify-between gap-4 sm:gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 sm:mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#D1007F]">
                What We Do
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#171217]">
                Complete Media
                <span className="block text-[#D1007F]">Promotion</span>
              </h2>
            </div>

            <p className="max-w-md text-xs sm:text-sm leading-relaxed text-[#777078]">
              One partner for outdoor advertising, transit branding, digital
              displays, printing, electronic media and professional signage.
            </p>
          </div>

          {/* =================================================
              SERVICE CARDS
          ================================================== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 md:gap-5">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{
                    delay: (index % 3) * 0.08,
                    duration: 0.6,
                  }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E9E3E8] bg-white p-5 sm:p-6 md:p-7 shadow-[0_10px_40px_rgba(30,10,25,0.04)] transition-all duration-500 hover:border-[#D1007F]/30 hover:shadow-[0_20px_50px_rgba(209,0,127,0.10)]"
                >
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#F2299A]/10 blur-[60px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Card Top */}
                  <div className="relative mb-6 sm:mb-8 md:mb-10 flex items-start justify-between">
                    {/* Icon */}
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl border border-[#D1007F]/15 bg-[#FFF2FA] text-[#D1007F] transition-all duration-500 group-hover:bg-[#D1007F] group-hover:text-white">
                      <Icon className="h-5 w-5 sm:h-5.5 sm:w-5.5" />
                    </div>

                    {/* Number */}
                    <span className="text-xs font-semibold tracking-wider text-[#B9B1B8]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="relative text-lg sm:text-xl font-bold text-[#171217] transition-colors duration-300 group-hover:text-[#D1007F]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="relative mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-[#777078]">
                    {service.text}
                  </p>

                  {/* Bottom Line */}
                  <div className="mt-5 sm:mt-7 h-[2px] w-0 rounded-full bg-[#D1007F] transition-all duration-500 group-hover:w-12 sm:group-hover:w-14" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
