import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

import hoardingImg from "../assets/HOARDING.png";
import shopbrandImg from "../assets/shopbrand.png";
import movingMediaImg from "../assets/runnig.png";
import busBrandingImg from "../assets/services/bus-branding.png";
import ksrtcBrandingImg from "../assets/pbus1.png";
import ledDisplayImg from "../assets/services/led-display.png";
import transitBrandingImg from "../assets/services/bus-shelter.png";
import printingImg from "../assets/services/highquality-printing.png";
import electronicMediaImg from "../assets/services/electronic-media.png";
import fmMarketingImg from "../assets/emedia.png";
import signBoardImg from "../assets/services/sign-board.png";
import prototypeBrandingImg from "../assets/PrototypeBRANDING.png";

// Hoarding 4-image showcase gallery
import hoardingWork1 from "../assets/work/ttto.png";
import hoardingWork2 from "../assets/work/tttt.png";
import hoardingWork3 from "../assets/work/err.png";
import hoardingWork4 from "../assets/work/efgh.png";

// =========================================================
// AUTOMATIC FOLDER IMAGE IMPORTERS (Vite import.meta.glob)
// Automatically loads all images added to public folders:
// - /public/Hoarding
// - /public/MiniHoarding
// - /public/ksrtc
// - /public/pivetbus
// - /public/transitbranding
// =========================================================
const hoardingGlob = import.meta.glob(
  "../../public/Hoarding/*.{png,jpg,jpeg,JPG,JPEG,webp,WEBP,png.jpeg,jpg.jpeg}",
  { eager: true, query: "?url", import: "default" }
);
const hoardingImages = Object.values(hoardingGlob);

const miniHoardingGlob = import.meta.glob(
  "../../public/MiniHoarding/*.{png,jpg,jpeg,JPG,JPEG,webp,WEBP,png.jpeg,jpg.jpeg}",
  { eager: true, query: "?url", import: "default" }
);
const miniHoardingImages = Object.values(miniHoardingGlob);

const ksrtcGlob = import.meta.glob(
  "../../public/ksrtc/*.{png,jpg,jpeg,JPG,JPEG,webp,WEBP,png.jpeg,jpg.jpeg}",
  { eager: true, query: "?url", import: "default" }
);
const ksrtcImages = Object.values(ksrtcGlob);

const pivetBusGlob = import.meta.glob(
  "../../public/pivetbus/*.{png,jpg,jpeg,JPG,JPEG,webp,WEBP,png.jpeg,jpg.jpeg}",
  { eager: true, query: "?url", import: "default" }
);
const privateBusImages = Object.values(pivetBusGlob);

const transitBrandingGlob = import.meta.glob(
  "../../public/transitbranding/*.{png,jpg,jpeg,JPG,JPEG,webp,WEBP,png.jpeg,jpg.jpeg}",
  { eager: true, query: "?url", import: "default" }
);
const transitBrandingImages = Object.values(transitBrandingGlob);


const services = [
  {
    title: "Hoarding",
    category: "Outdoor Advertising / Billboards",
    icon: Megaphone,
    image: hoardingImages.length > 0 ? hoardingImages[0] : hoardingImg,
    gallery:
      hoardingImages.length > 0
        ? hoardingImages
        : [
            hoardingWork1,
            hoardingWork2,
            hoardingWork3,
            hoardingWork4,
            hoardingImg,
          ],
    text: "High-impact outdoor advertising positioned in strategic locations for maximum visibility.",
    detailedDescription:
      "Our large-format hoardings and unipoles command unmatched attention across high-traffic highways, busy city junctions, and commercial hotspots. Built with premium materials, weather-resistant illumination, and superior print clarity to deliver 24/7 round-the-clock brand dominance and maximum audience recall.",
    highlights: [
      "Prime High-Traffic Highway Locations",
      "Day & Night High-Lumen Illumination",
      "Massive Eye-Level Visibility & Brand Recall",
      "Pan-Kerala Strategic Media Network",
      "Heavy Daily Commuter & Footfall Impressions",
      "Full Turnkey Fabrication & 24/7 Maintenance",
    ],
    specs: [
      { label: "Format", value: "Unipoles, Gantries & Billboards" },
      { label: "Placement", value: "Highways & Prime Junctions" },
      { label: "Visibility", value: "24/7 Day & Night Illuminated" },
      { label: "Reach", value: "350,000+ Daily Impressions" },
    ],
  },
  {
    title: "Mini Hoarding",
    category: "Local & Retail Out-of-Home",
    icon: Signpost,
    image: miniHoardingImages.length > 0 ? miniHoardingImages[0] : shopbrandImg,
    gallery: miniHoardingImages.length > 0 ? miniHoardingImages : [shopbrandImg],
    text: "Targeted outdoor advertising solutions designed for high-traffic local areas.",
    detailedDescription:
      "Compact, strategically positioned mini hoardings engineered for maximum neighborhood resonance and local market dominance. Ideal for retail corridors, junction points, market entrances, and busy town centers to guide local shoppers and commuters directly to your business.",
    highlights: [
      "Hyper-Local Demographic Targeting",
      "Cost-Effective High Frequency Reach",
      "Prime Positions in Busy Commercial Corridors",
      "Vibrant Long-Lasting Vinyl Prints",
      "Flexible Sizing & Swift Installation",
      "Ideal for Retail, Healthcare & Education",
    ],
    specs: [
      { label: "Format", value: "Street-Level Mini Billboards" },
      { label: "Placement", value: "Town Centers & Market Areas" },
      { label: "Visibility", value: "Frontlit & Street-Lit Displays" },
      { label: "Target", value: "Local Footfall & Commuters" },
    ],
  },
  {
    title: "Moving Media",
    category: "Transit & Mobile Advertising",
    icon: Car,
    image: movingMediaImg,
    text: "Take your brand across the city with professionally branded moving media.",
    detailedDescription:
      "Turn commercial vehicles, delivery fleets, and mobile units into roving brand ambassadors. Moving media weaves your brand message throughout dense city streets, arterial highways, and residential neighborhoods continuously throughout the day.",
    highlights: [
      "Dynamic City-Wide Route Exposure",
      "Continuous Eye-Level Commuter Contact",
      "High-Impact Commercial Fleet Wraps",
      "3M Cast Vinyl All-Weather Durability",
      "Reaches Areas Inaccessible to Hoardings",
      "Rapid Campaign Deployment",
    ],
    specs: [
      { label: "Format", value: "Vehicle Wraps & Mobile Units" },
      { label: "Coverage", value: "City-Wide & Sub-Urban Corridors" },
      { label: "Material", value: "Premium 3M Cast Wrap Film" },
      { label: "Mobility", value: "Active Urban Travel 12+ hrs/day" },
    ],
  },
  {
    title: "Private Bus Branding",
    category: "Transit Media",
    icon: Bus,
    image: privateBusImages.length > 0 ? privateBusImages[0] : busBrandingImg,
    gallery: privateBusImages.length > 0 ? privateBusImages : [busBrandingImg],
    text: "Transform buses into powerful mobile advertising platforms.",
    detailedDescription:
      "Command the road with full-bus and side-panel transit wraps. Buses travel across the busiest commercial routes and pedestrian zones daily, transforming ordinary commutes into high-dwell brand exposures that commuters and drivers cannot ignore.",
    highlights: [
      "King-Size Side, Back & Full Wraps",
      "Prolonged Visibility in Congested Traffic",
      "Extensive Daily Distance Coverage",
      "High Brand Recall Across Commuters",
      "High-Grade One-Way Vision Perforation",
      "RTO & Transit Regulatory Compliance",
    ],
    specs: [
      { label: "Format", value: "Full Bus Wrap & Side/Back Panels" },
      { label: "Reach", value: "500,000+ Commuters Daily" },
      { label: "Routes", value: "Major City Routes & Suburbs" },
      { label: "Durability", value: "UV-Resistant Protective Cast" },
    ],
  },
  {
    title: "KSRTC Branding",
    category: "State Transit Network",
    icon: Bus,
    image: ksrtcImages.length > 0 ? ksrtcImages[0] : ksrtcBrandingImg,
    gallery: ksrtcImages.length > 0 ? ksrtcImages : [ksrtcBrandingImg],
    text: "Connect your brand with a large traveling audience through transit advertising.",
    detailedDescription:
      "Harness Kerala's premier public transportation network. KSRTC buses travel extensive interstate and interdistrict highway routes, connecting urban centers, towns, and suburban communities with immense credibility and unmatched statewide reach.",
    highlights: [
      "State-Wide Interdistrict Highway Reach",
      "High Density at Central Bus Stations",
      "Super Fast, Fast Passenger & Low-Floor Options",
      "Continuous Long-Distance Route Exposure",
      "Trusted Government Transit Platform",
      "Unrivaled Geographic Saturation",
    ],
    specs: [
      { label: "Fleet", value: "Super Fast & Low Floor Buses" },
      { label: "Coverage", value: "Pan-Kerala Highway Network" },
      { label: "Passengers", value: "Millions of Monthly Commuters" },
      { label: "Format", value: "Full Wrap & Rear Glass Panel" },
    ],
  },
  {
    title: "LED Display",
    category: "Digital Out-of-Home (DOOH)",
    icon: Monitor,
    image: ledDisplayImg,
    text: "Bright, dynamic and attention-grabbing digital display advertising.",
    detailedDescription:
      "Engage contemporary audiences with vivid motion graphics and ultra-high brightness commercial LED displays. Located at high-footfall intersections, malls, and entertainment hubs, our digital billboards deliver crystal-clear visuals day and night.",
    highlights: [
      "Ultra-High Lumen Daytime Brightness",
      "Dynamic Full-Motion Video & Animation",
      "Real-Time Remote Content Scheduling",
      "Flexible Time Slots & High Frequency",
      "Weatherproof High-Resolution Panels",
      "Striking Modern Visual Appeal",
    ],
    specs: [
      { label: "Technology", value: "Ultra-HD Outdoor P4 / P6 Panels" },
      { label: "Operation", value: "24/7 Day & Night Rotation" },
      { label: "Media Type", value: "Motion Graphics, Video & 3D Ads" },
      { label: "Locations", value: "Top Commercial Hubs & Malls" },
    ],
  },
  {
    title: "Transit Branding",
    category: "Transit Stations & Shelters",
    icon: Train,
    image: transitBrandingImages.length > 0 ? transitBrandingImages[0] : transitBrandingImg,
    gallery: transitBrandingImages.length > 0 ? transitBrandingImages : [transitBrandingImg],
    text: "Bus shelter, railway station and platform advertising solutions.",
    detailedDescription:
      "Reach commuters during high dwell times at bus shelters, railway platforms, and transit terminals. With wait times spanning 10 to 30 minutes, transit branding offers close-proximity pedestrian visibility and lasting brand impressions.",
    highlights: [
      "Extended Dwell Time (15-30 Min Average)",
      "Backlit Illumination for Night Commuters",
      "Close-Range Pedestrian Readability",
      "Key Railway Stations & Modern Bus Shelters",
      "Sustained Daily Repeat Exposure",
      "Routine Cleaning & Panel Upkeep",
    ],
    specs: [
      { label: "Format", value: "Bus Shelters, Gantries & Platforms" },
      { label: "Illumination", value: "High-Luminance LED Backlit" },
      { label: "Placement", value: "Railway Stations & Bus Terminals" },
      { label: "Audience", value: "Daily Commuters & Transit Riders" },
    ],
  },
  {
    title: "High-Quality Printing",
    category: "Large Format Print Production",
    icon: Printer,
    image: printingImg,
    text: "Sharp visuals, vibrant colors and professional large-format printing.",
    detailedDescription:
      "Our in-house large-format printing infrastructure produces vibrant colors, sharp text, and resilient finishes. Utilizing eco-solvent, UV, and pigment inks on premium flex, vinyl, mesh, and backlit films, we guarantee stunning fidelity for any scale.",
    highlights: [
      "Ultra-High DPI Resolution & Color Accuracy",
      "Industrial UV & Eco-Solvent Printing",
      "Heavy-Duty Flex, Vinyl, Fabric & Canvas",
      "UV-Resistant & Weatherproof Coatings",
      "Massive Volume Capacity & Fast Turnaround",
      "End-to-End Hemming & Grommet Finishing",
    ],
    specs: [
      { label: "Width", value: "Up to 10.5 ft Seamless Printing" },
      { label: "Inks", value: "Industrial UV & Eco-Solvent" },
      { label: "Materials", value: "Frontlit, Backlit, Vinyl, Mesh" },
      { label: "Longevity", value: "Multi-Year Fade Resistance" },
    ],
  },
  {
    title: "FM Marketing",
    category: "Audio & Broadcast Campaigns",
    icon: Radio,
    image: fmMarketingImg,
    text: "Strategic radio campaigns that put your brand directly into people's daily routines.",
    detailedDescription:
      "Connect emotionally with listeners across leading regional FM stations. Our audio campaigns feature prime morning and evening drive-time placements, RJ endorsements, engaging contests, and unforgettable jingle productions that stick.",
    highlights: [
      "Prime Morning & Evening Commute Slots",
      "RJ Mentions, Contests & On-Air Activations",
      "Professional Creative Jingle Production",
      "Multi-Station Regional Frequency",
      "High Audio Recall & Listener Trust",
      "Rapid Launch & Adaptable Messaging",
    ],
    specs: [
      { label: "Format", value: "10s, 20s, 30s Audio Commercials" },
      { label: "Slots", value: "Drive-Time & Prime Broadcasts" },
      { label: "Network", value: "Top Kerala Regional FM Stations" },
      { label: "Reach", value: "Millions of Daily Active Listeners" },
    ],
  },
  {
    title: "Electronic Media",
    category: "Television & Digital Broadcast",
    icon: Tv,
    image: electronicMediaImg,
    text: "Audio, video and digital media campaigns built for modern audiences.",
    detailedDescription:
      "Build prestige and wide regional authority with strategic placements across television news channels, digital OTT networks, and broadcast streams. We handle media planning, spot booking, L-bands, tickers, and sponsored segments for peak influence.",
    highlights: [
      "Prime Time News & Entertainment Slots",
      "Breaking News Tickers & L-Band Ads",
      "Sponsored Program Segments & Features",
      "Cross-Network Multi-Platform Buying",
      "High Brand Authority & State-Wide Reach",
      "Targeted Demographic Scheduling",
    ],
    specs: [
      { label: "Channels", value: "Leading Regional TV & News Networks" },
      { label: "Formats", value: "Commercial Spots, Tickers & L-Bands" },
      { label: "Audience", value: "Household Viewers Across Kerala" },
      { label: "Planning", value: "Full Media Buying & Broadcast Sync" },
    ],
  },
  {
    title: "Sign Board",
    category: "Signage & Architectural Displays",
    icon: Signpost,
    image: signBoardImg,
    text: "Premium LED, ACP, acrylic, glow and corporate signage solutions.",
    detailedDescription:
      "Transform commercial spaces into iconic storefronts. We manufacture 3D acrylic letters, ACP panel claddings, illuminated LED glow signs, neon accents, and corporate pylon totems engineered for aesthetic brilliance and outdoor durability.",
    highlights: [
      "Precision CNC & Laser Acrylic Letters",
      "Architectural ACP Panel Cladding",
      "High-Efficiency Waterproof LED Modules",
      "Glow Signs & Illuminated Pylons",
      "Municipal Compliance & Safe Fabrication",
      "Structural Durability with Warranty",
    ],
    specs: [
      { label: "Types", value: "3D Acrylic, ACP, Neon & Glow Sign" },
      { label: "LED Modules", value: "Samsung / Grade-A Waterproof LEDs" },
      { label: "Application", value: "Storefronts, Corporate & Showrooms" },
      { label: "Warranty", value: "Comprehensive Fabrication Guarantee" },
    ],
  },
  {
    title: "Prototype Branding",
    category: "POS & Retail Displays",
    icon: Tag,
    image: prototypeBrandingImg,
    text: "Create impactful brand visibility with professionally designed advertising prototypes that showcase your brand through attractive, high-quality, and strategically placed displays.",
    detailedDescription:
      "Custom point-of-sale display units, retail kiosk prototypes, and exhibition stands designed to make your products stand out on crowded retail floors. Engineered with creative structures, eye-catching lighting, and premium durable finishes.",
    highlights: [
      "Tailor-Made 3D Architectural Mockups",
      "Point-of-Sale (POS) & Standee Units",
      "Interactive Experience Displays",
      "Premium Materials & Modular Assemblies",
      "High Consumer Engagement at Retail Zones",
      "Turnkey Prototyping from Concept to Setup",
    ],
    specs: [
      { label: "Formats", value: "Kiosks, POS Stands & 3D Prototypes" },
      { label: "Venues", value: "Malls, Supermarkets & Exhibitions" },
      { label: "Materials", value: "Acrylic, Engineered Wood & Metal" },
      { label: "Finish", value: "Custom Illuminated & Branded" },
    ],
  },
];

const stats = [
  ["500+", "Campaigns"],
  ["100+", "Media Locations"],
  ["50+", "Brand Partners"],
  ["25+", "Years Experience"],
];

export default function AboutServices() {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isModalPaused, setIsModalPaused] = useState(false);

  const selectedService =
    selectedServiceIndex !== null ? services[selectedServiceIndex] : null;

  const currentImages = selectedService
    ? selectedService.gallery && selectedService.gallery.length > 0
      ? selectedService.gallery
      : [selectedService.image]
    : [];

  // Auto-play slideshow inside modal (moves images automatically one by one)
  useEffect(() => {
    if (selectedServiceIndex === null || currentImages.length <= 1 || isModalPaused) return;

    const timer = setInterval(() => {
      setActiveImageIndex((curr) =>
        curr === currentImages.length - 1 ? 0 : curr + 1
      );
    }, 3200);

    return () => clearInterval(timer);
  }, [selectedServiceIndex, currentImages.length, isModalPaused]);

  const handlePrevImage = (e) => {
    e?.stopPropagation();
    if (currentImages.length <= 1) return;
    setActiveImageIndex((curr) =>
      curr === 0 ? currentImages.length - 1 : curr - 1,
    );
  };

  const handleNextImage = (e) => {
    e?.stopPropagation();
    if (currentImages.length <= 1) return;
    setActiveImageIndex((curr) =>
      curr === currentImages.length - 1 ? 0 : curr + 1,
    );
  };

  const handlePrevService = (e) => {
    e?.stopPropagation();
    setSelectedServiceIndex((curr) =>
      curr === 0 ? services.length - 1 : curr - 1,
    );
    setActiveImageIndex(0);
  };

  const handleNextService = (e) => {
    e?.stopPropagation();
    setSelectedServiceIndex((curr) =>
      curr === services.length - 1 ? 0 : curr + 1,
    );
    setActiveImageIndex(0);
  };

  const closeModal = () => {
    setSelectedServiceIndex(null);
    setActiveImageIndex(0);
  };

  const scrollToContact = () => {
    setSelectedServiceIndex(null);
    setActiveImageIndex(0);
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 150);
  };

  useEffect(() => {
    if (selectedServiceIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowLeft") {
        if (currentImages.length > 1) {
          setActiveImageIndex((curr) =>
            curr === 0 ? currentImages.length - 1 : curr - 1,
          );
        } else {
          handlePrevService();
        }
      } else if (e.key === "ArrowRight") {
        if (currentImages.length > 1) {
          setActiveImageIndex((curr) =>
            curr === currentImages.length - 1 ? 0 : curr + 1,
          );
        } else {
          handleNextService();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedServiceIndex, currentImages.length]);

  const getWhatsAppLink = (service) => {
    if (!service) {
      return `https://wa.me/919497014999?text=${encodeURIComponent(
        "Hello Quilonad Media, I want to enquire about your advertising services. Please share full details."
      )}`;
    }
    const cleanTitle =
      service.title.toLowerCase().includes("advertising") ||
      service.title.toLowerCase().includes("branding") ||
      service.title.toLowerCase().includes("marketing") ||
      service.title.toLowerCase().includes("printing")
        ? service.title
        : `${service.title} Advertising`;

    const text = `Hello Quilonad Media, I want to enquire about ${cleanTitle} (${service.category}). Please share available locations, pricing, and full details.`;
    return `https://wa.me/919497014999?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F4DC86] px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-28 lg:px-16 text-[#171217]"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#F2299A]/5 blur-[120px]" />
        <div className="absolute -right-40 top-[35%] h-96 w-96 rounded-full bg-[#D1007F]/5 blur-[140px]" />
        <div className="absolute bottom-0 left-1/2 h-72 w-[60%] -translate-x-1/2 rounded-full bg-[#F2299A]/5 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <p className="mb-3 sm:mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#D1007F]">
              About Quilonad Media
            </p>
            <h2 className="max-w-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-[#60A917]">
              We make brands
              <span className="block text-[#D1007F]">visible.</span>
            </h2>
          </div>

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

        {/* Stats */}
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

        {/* Services List */}
        <div
          id="services"
          className="mt-16 sm:mt-24 md:mt-32 scroll-mt-16 sm:scroll-mt-20"
        >
          <div className="mb-8 sm:mb-12 flex flex-col justify-between gap-4 sm:gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 sm:mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#D1007F]">
                What We Do
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#60A917]">
                Complete Media
                <span className="block text-[#D1007F]">Promotion</span>
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm leading-relaxed text-[#777078]">
              One partner for outdoor advertising, transit branding, digital
              displays, printing, electronic media and professional signage.
              Click any service to view full specifications and visuals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 md:gap-5">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedServiceIndex(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedServiceIndex(index);
                    }
                  }}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{
                    delay: (index % 3) * 0.08,
                    duration: 0.6,
                  }}
                  whileHover={{ y: -6 }}
                  className="group relative cursor-pointer select-none overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E9E3E8] bg-white p-5 sm:p-6 md:p-7 shadow-[0_10px_40px_rgba(30,10,25,0.04)] transition-all duration-500 hover:border-[#D1007F]/40 hover:shadow-[0_20px_50px_rgba(209,0,127,0.12)]"
                >
                  <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#F2299A]/10 blur-[60px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative mb-5 sm:mb-7 flex items-start justify-between">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl border border-[#D1007F]/15 bg-[#FFF2FA] text-[#D1007F] transition-all duration-500 group-hover:bg-[#D1007F] group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(209,0,127,0.3)]">
                      <Icon className="h-5 w-5 sm:h-5.5 sm:w-5.5" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-[10px] font-semibold text-neutral-500 group-hover:bg-[#FFF2FA] group-hover:text-[#D1007F] transition-colors">
                        Click to view
                      </span>
                      <span className="text-xs font-semibold tracking-wider text-[#B9B1B8]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  <h3 className="relative text-lg sm:text-xl font-bold text-[#171217] transition-colors duration-300 group-hover:text-[#D1007F]">
                    {service.title}
                  </h3>

                  <p className="relative mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-[#777078] line-clamp-3">
                    {service.text}
                  </p>

                  <div className="mt-5 sm:mt-7 flex items-center justify-between pt-2 border-t border-neutral-100">
                    <div className="flex items-center gap-2">
                      <div className="h-[2px] w-6 rounded-full bg-[#D1007F]/40 transition-all duration-500 group-hover:w-12 group-hover:bg-[#D1007F]" />
                      <span className="text-[11px] font-bold text-[#D1007F] opacity-90 group-hover:opacity-100">
                        View Details & Image
                      </span>
                    </div>

                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFF2FA] text-[#D1007F] transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-[#D1007F] group-hover:text-white">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>

      {/* =====================================================
          MODAL LIGHTBOX - FULL DISPLAY IN PAGE THEME (#F4DC86)
      ====================================================== */}
      <AnimatePresence>
        {selectedService && (
          <div
            onClick={closeModal}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-3 backdrop-blur-sm sm:p-5 md:p-8"
          >
            {/* Modal Dialog Card - Full Display in Theme Color (#F4DC86) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex flex-col w-full max-w-6xl max-h-[92vh] overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-[#D1007F] bg-[#F4DC86] text-[#171217] shadow-2xl"
            >
              {/* Top Header Bar */}
              <div className="relative z-20 flex items-center justify-between border-b border-[#D1007F]/25 bg-[#F4DC86] px-4 py-3 sm:px-6 sm:py-4">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D1007F]/30 bg-white/80 px-3 py-1 text-[11px] font-bold tracking-wider text-[#D1007F] uppercase shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D1007F] animate-pulse" />
                    Service {String(selectedServiceIndex + 1).padStart(2, "0")} / {services.length}
                  </span>

                  <h3 className="text-base sm:text-xl font-black text-[#171217]">
                    {selectedService.title}
                  </h3>

                  {currentImages.length > 1 && (
                    <span className="rounded-full border border-[#D1007F]/25 bg-white/80 px-2.5 py-0.5 text-[11px] font-bold text-[#D1007F] shadow-sm">
                      {activeImageIndex + 1} / {currentImages.length}
                    </span>
                  )}
                </div>

                {/* Right controls */}
                <div className="flex items-center gap-2 sm:gap-3">
                  {/* Service switcher */}
                  <div className="hidden md:flex items-center gap-1 rounded-full border border-[#D1007F]/30 bg-white/80 p-0.5 shadow-sm">
                    <button
                      type="button"
                      onClick={handlePrevService}
                      title="Previous Service"
                      className="flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold text-[#171217] hover:bg-[#D1007F] hover:text-white transition-colors"
                    >
                      <ChevronLeft size={14} />
                      Prev
                    </button>
                    <span className="h-3 w-[1px] bg-[#D1007F]/20" />
                    <button
                      type="button"
                      onClick={handleNextService}
                      title="Next Service"
                      className="flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold text-[#171217] hover:bg-[#D1007F] hover:text-white transition-colors"
                    >
                      Next
                      <ChevronRight size={14} />
                    </button>
                  </div>

                  {/* Auto-Moving indicator badge */}
                  {currentImages.length > 1 && (
                    <span
                      title={isModalPaused ? "Hovering paused slideshow" : "Automatically moving one by one"}
                      className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-[#D1007F]/25 bg-white/80 px-2.5 py-1 text-[11px] font-bold text-[#D1007F] shadow-sm"
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${isModalPaused ? "bg-amber-500" : "bg-[#25D366] animate-pulse"}`} />
                      {isModalPaused ? "Paused" : "Auto-Moving"}
                    </span>
                  )}

                  {/* WhatsApp button */}
                  <a
                    href={getWhatsAppLink(selectedService)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] px-3 sm:px-3.5 py-1.5 text-xs font-bold text-white shadow-md transition-all active:scale-[0.98]"
                  >
                    <MessageCircle size={14} />
                    <span>WhatsApp</span>
                  </a>

                  {/* Close button */}
                  <button
                    type="button"
                    onClick={closeModal}
                    aria-label="Close modal"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D1007F]/30 bg-white text-[#171217] shadow-sm transition-all hover:rotate-90 hover:bg-[#D1007F] hover:text-white"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* =============================================
                  MAIN CENTER: FULL DISPLAY IMAGE
                  AUTOMATICALLY MOVES ONE BY ONE
              ============================================== */}
              <div
                onMouseEnter={() => setIsModalPaused(true)}
                onMouseLeave={() => setIsModalPaused(false)}
                className="relative flex-1 flex items-center justify-center overflow-hidden bg-[#F4DC86] p-2 sm:p-6 min-h-[420px] sm:min-h-[520px] md:min-h-[600px]"
              >
                {/* Background ambient glow */}
                <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#F2299A]/10 blur-[100px]" />
                <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-[#D1007F]/10 blur-[100px]" />

                {/* Move Left Button */}
                {currentImages.length > 1 && (
                  <button
                    type="button"
                    onClick={handlePrevImage}
                    aria-label="Previous image (left)"
                    className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-full border-2 border-[#D1007F] bg-white text-[#D1007F] shadow-xl transition-all hover:scale-110 hover:bg-[#D1007F] hover:text-white"
                  >
                    <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
                  </button>
                )}

                {/* Main Full Display Image */}
                <div className="relative z-10 flex h-full w-full items-center justify-center py-2 sm:py-4">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={`${selectedServiceIndex}-${activeImageIndex}`}
                      src={currentImages[activeImageIndex]}
                      alt={`${selectedService.title} - ${activeImageIndex + 1}`}
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="max-h-[65vh] sm:max-h-[74vh] md:max-h-[78vh] w-auto max-w-full rounded-xl sm:rounded-2xl object-contain drop-shadow-[0_15px_35px_rgba(209,0,127,0.18)] border border-[#D1007F]/20 bg-white/40 p-1 sm:p-2 select-none"
                    />
                  </AnimatePresence>
                </div>

                {/* Move Right Button */}
                {currentImages.length > 1 && (
                  <button
                    type="button"
                    onClick={handleNextImage}
                    aria-label="Next image (right)"
                    className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-full border-2 border-[#D1007F] bg-white text-[#D1007F] shadow-xl transition-all hover:scale-110 hover:bg-[#D1007F] hover:text-white"
                  >
                    <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
