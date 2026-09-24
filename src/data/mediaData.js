// Real Quilonad Media Assets from src/assets
import logoImg from "../assets/quilonad-logo.png";
import hoardingImg from "../assets/HOARDING.png";
import busImg from "../assets/pbus.png";
import busAltImg from "../assets/pbus1.png";
import runningImg from "../assets/runnig.png";
import shopBrandImg from "../assets/shopbrand.png";
import signboardImg from "../assets/singboaed.png";
import emediaImg from "../assets/emedia.png";
import promoImg from "../assets/PrototypeBRANDING.png";
import eventImg from "../assets/th.png";

// Exclusively mapped to real assets from src/assets
export const img = {
  hero: busImg,
  bus: busImg,
  busAlt: busAltImg,
  hoarding: hoardingImg,
  retail: shopBrandImg,
  shopBrand: shopBrandImg,
  ledVan: runningImg,
  running: runningImg,
  signage: signboardImg,
  signboard: signboardImg,
  emedia: emediaImg,
  promo: promoImg,
  event: eventImg,
  pavilion: eventImg,
  printing: promoImg,
  spices: eventImg,
  workspace: hoardingImg,
  logo: logoImg,
};

export {
  logoImg,
  hoardingImg,
  busImg,
  busAltImg,
  runningImg,
  shopBrandImg,
  signboardImg,
  emediaImg,
  promoImg,
  eventImg,
};

export const links = [
  ["/", "Home"],
  ["/services", "Services"],
  ["/about", "About"],
  ["/gallery", "Work / Samples"],
  ["/contact", "Contact"],
];

// Real Quilonad Media client portfolio & sample work using ONLY local assets from src/assets
export const work = [
  {
    title: "KSRTC Transit Fleet",
    client: "Wonderla & M.K. Fabrics",
    type: "Sole Licensee Transit Branding",
    year: "2026",
    image: busImg,
    category: "Transit Ads",
    text: "Sole licensee for branding across KSRTC Super Fast, Fast Passenger, Minnal, and Super Express buses covering over 16,00,000 km daily throughout Kerala.",
    tags: [
      "KSRTC Sole Licensee",
      "Super Fast & Minnal",
      "BUS-TV Ads",
      "Full Wrap",
    ],
  },
  {
    title: "Asian Granites (AGL) Transit",
    client: "Asian Granites Limited",
    type: "Statewide Transit Takeover",
    year: "2025",
    image: busAltImg,
    category: "Transit Ads",
    text: "Large-scale branding across private bus fleets and KSRTC Super Express buses with high-resolution digital print vinyl wrap.",
    tags: ["KSRTC Fleet", "Private Bus Network", "Digital Vinyl", "All-Kerala"],
  },
  {
    title: "Meditrina Hospitals Network",
    client: "Meditrina Hospitals",
    type: "Prime OOH Hoardings",
    year: "2025",
    image: hoardingImg,
    category: "Outdoor & Hoardings",
    text: "Monolithic highway hoardings and strategic mini hoardings positioned across prime arterial corridors and junction heads across Kerala.",
    tags: [
      "Prime Hoardings",
      "Highway Visibility",
      "Lighting & Care",
      "Urban Corridors",
    ],
  },
  {
    title: "RAK Ceramics Flagship",
    client: "RAK Ceramics",
    type: "In-Store & Shop Branding",
    year: "2025",
    image: shopBrandImg,
    category: "In-Store & Retail",
    text: "Complete retail visual solutions including premium architectural wall graphics, foam board with vinyl, one-way vision window films, and customized LED light boards.",
    tags: [
      "In-Store Displays",
      "LED Light Boards",
      "One-Way Vision",
      "Fabrication",
    ],
  },
  {
    title: "Kerala Police Highway Alert",
    client: "Kerala Police Department",
    type: "High-Reflective Signage Network",
    year: "2025",
    image: signboardImg,
    category: "Signboards",
    text: "Statewide highway direction and alert boards fabricated using ACP sheets, GI pipes, and 2.5mm aluminum sheets with high-grade reflective engineering film.",
    tags: [
      "Kerala Police",
      "Reflective Stickers",
      "ACP & GI Pipe",
      "Junction Heads",
    ],
  },
  {
    title: "Chungath Jewellery Roadshow",
    client: "Chungath Jewellery",
    type: "Mobile LED Video Van",
    year: "2026",
    image: runningImg,
    category: "Road Show Vehicles",
    text: "High-definition mobile LED video vans and stagecraft vehicles traversing high-footfall festival circuits and town centers with interactive audio-visual showcases.",
    tags: [
      "Mobile LED Van",
      "Stagecraft Vehicle",
      "Town Roadshows",
      "Sound System",
    ],
  },
  {
    title: "Electronic & Print Media Campaign",
    client: "Regional & National Brands",
    type: "FM Radio, Cinema Dolby & TV Network",
    year: "2026",
    image: emediaImg,
    category: "Electronic & Print",
    text: "Complete multi-channel media buying across leading Kerala FM stations (Red FM, Big FM, Club FM), cinema theaters (Dolby Atmos, Qube Cinema), Malayalam TV channels, and newspaper dailies.",
    tags: [
      "FM Radio Ads",
      "Cinema Dolby Atmos",
      "Malayalam TV Ads",
      "Regional Dailies",
    ],
  },
  {
    title: "BTL Canopies & Promotional Displays",
    client: "FMCG & Retail Activations",
    type: "Canopies, Promotables & Standees",
    year: "2025",
    image: promoImg,
    category: "BTL & Printing",
    text: "High-impact ground activation collateral including pop-up accordion walls, branded event canopies, promotional sampling tables with umbrellas, and teardrop flags.",
    tags: [
      "Event Canopies",
      "Promotables with Umbrella",
      "Roll-Up Standees",
      "Teardrop Banners",
    ],
  },
  {
    title: "National Handicrafts Fair & Chavara Fest",
    client: "Chavara Cultural Centre & Handicrafts Fair",
    type: "Exhibition & Pavilion Architecture",
    year: "2025",
    image: eventImg,
    category: "Event Pavilions",
    text: "Complete end-to-end exhibition management: venue identification, space selling, on-site booth construction, site insurance, and statutory clearances.",
    tags: [
      "Booth Construction",
      "Venue Management",
      "Licensing",
      "Fair Architecture",
    ],
  },
];

// The 11 core services provided by Quilonad Media with real assets
export const servicesData = [
  {
    id: "ooh-hoardings",
    number: "01",
    title: "Out of Home (OOH) & Hoardings",
    tagline: "Standard & mini hoardings in prime Kerala locations.",
    desc: "Strategic outdoor hoardings located along major national highways, key urban junctions, and town entry points across all 14 districts of Kerala.",
    image: hoardingImg,
    details: [
      "Prime City Hoardings",
      "Highway Monoliths",
      "Mini Hoardings in Remote Towns",
      "Illuminated & Solar Options",
      "Maintenance & Site Audit",
    ],
    icon: "Maximize2",
  },
  {
    id: "ksrtc-transit",
    number: "02",
    title: "Transit & Bus Branding",
    tagline: "Sole licensee for KSRTC buses covering 16,00,000+ km daily.",
    desc: "Kerala’s most powerful transit network. Exclusive branding rights across KSRTC Super Fast, Fast Passenger, Minnal, and Super Express buses, plus Private Buses and Auto-rickshaws.",
    image: busImg,
    details: [
      "KSRTC Sole Licensee (Super Fast, Minnal, Super Express)",
      "16 Lakh+ KM Daily Transit Footprint",
      "Private Bus Fleet Branding",
      "BUS-TV In-Bus TV Commercials & Scrolling Ads",
      "City Auto-Rickshaw Advertising",
    ],
    icon: "Bus",
  },
  {
    id: "mobile-roadshows",
    number: "03",
    title: "Mobile Advertising & Road Shows",
    tagline: "High-impact LED video vans & stage craft vehicles on hire.",
    desc: "Bring your campaign directly to the people with high-lumen mobile LED video vans and self-contained mobile stagecraft trucks designed for festivals and election rallies.",
    image: runningImg,
    details: [
      "Mobile LED Video Vans",
      "Hydraulic Stagecraft Vehicles",
      "Traveling Roadshow Logistics",
      "High-Fidelity Audio Systems",
      "On-Site Operator Support",
    ],
    icon: "Tv",
  },
  {
    id: "in-store-branding",
    number: "04",
    title: "In-Store & Shop Branding",
    tagline: "Interior and retail visual transformations.",
    desc: "Turn dealer showrooms and retail shops into magnetic brand environments with in-house fabricated light boards, wall graphics, and one-way vision films.",
    image: shopBrandImg,
    details: [
      "Retail Wall Graphics",
      "Foam Board with High-Gloss Vinyl",
      "One-Way Vision Window Films",
      "Bespoke LED Light Boards",
      "In-House Precision Fabrication",
    ],
    icon: "Layers",
  },
  {
    id: "signage-direction",
    number: "05",
    title: "Signage & Direction Boards",
    tagline: "Highway and junction direction board networks.",
    desc: "Durable, high-visibility wayfinding and junction boards built with ACP sheets, heavy GI pipes, or 2.5mm aluminum sheets fitted with high-reflectivity sticker film.",
    image: signboardImg,
    details: [
      "4-Sided Square Junction Boards",
      "Kerala Police Highway Alert Boards",
      "ACP & Aluminum Sheet Construction",
      "High-Grade Reflective Films",
      "Iron Frame 2x4 ft Square Tubes",
    ],
    icon: "MapPin",
  },
  {
    id: "exhibition-events",
    number: "06",
    title: "Exhibition & Event Management",
    tagline: "Full-scope booth construction and festival coordination.",
    desc: "Turnkey exhibition solutions from initial venue identification and space selling to customized booth design, fabrication, government clearances, and site insurance.",
    image: eventImg,
    details: [
      "Venue Identification & Space Selling",
      "Bespoke Booth Design & Construction",
      "Show & On-Site Management",
      "Licensing & Statutory Clearances",
      "Event Insurance & Safety Protocol",
    ],
    icon: "Award",
  },
  {
    id: "electronic-print",
    number: "07",
    title: "Electronic & Print Media",
    tagline: "Radio, Cinema Dolby Atmos, TV, and Regional Newspapers.",
    desc: "Complete multi-channel media buying across leading Kerala FM stations, cinema screens (Dolby Atmos, Qube Cinema, IMAX), Malayalam TV channels, and newspaper dailies.",
    image: emediaImg,
    details: [
      "FM Radio (Red FM, Big FM, Club FM)",
      "Cinema Ads (Dolby Atmos, Qube, UFO, IMAX)",
      "Malayalam TV News & Entertainment Channels (L-Shape Ads)",
      "Malayalam Regional Newspapers (Malayala Manorama, Mathrubhumi)",
      "Media Planning & Rate Optimization",
    ],
    icon: "Tv",
  },
  {
    id: "btl-displays",
    number: "08",
    title: "BTL & Promotional Displays",
    tagline: "Portable exhibition canopies, standees, and flags.",
    desc: "High-impact ground activation collateral including pop-up accordion walls, branded event canopies, promotional sampling tables with umbrellas, and teardrop flags.",
    image: promoImg,
    details: [
      "Branded Event Canopies",
      "Promotables with Umbrellas",
      "Pop-Up Backdrop Walls",
      "Heavy Roll-Up Standees",
      "Teardrop & Feather Flag Banners",
    ],
    icon: "Sparkles",
  },
  {
    id: "commercial-photo",
    number: "09",
    title: "Commercial Photography",
    tagline: "Studio and outdoor model photoshoot production.",
    desc: "Cinema-grade photoshoots for brand campaigns, product packaging, catalogs, and billboard print resolution, managed by expert commercial photographers.",
    image: shopBrandImg,
    details: [
      "Professional Model Photoshoots",
      "Studio Lighting & Set Design",
      "Outdoor On-Location Production",
      "High-End Retouching for Billboard Scale",
      "Product & Catalog Imagery",
    ],
    icon: "Camera",
  },
  {
    id: "digital-printing",
    number: "10",
    title: "Large-Format Digital Printing",
    tagline: "Eco-friendly high-volume printing: 25,00,0 sq. ft. per day.",
    desc: "Industrial-grade digital printing with evaporative drying technology. High color accuracy and weather resistance on flex cloth, vinyl stickers, and one-way vision.",
    image: promoImg,
    details: [
      "25,000 Sq. Ft. Daily Output Capacity",
      "Eco-Friendly Inks & Evaporative Drying",
      "Vinyl Stickers & Solvent Film",
      "One-Way Vision Glass Graphics",
      "High Tensile Cloth Banners",
    ],
    icon: "Printer",
  },
  {
    id: "corporate-gifts",
    number: "11",
    title: "Custom Corporate Gifts",
    tagline: "Handcrafted Kerala wooden spice gift boxes.",
    desc: "Distinctive executive gift boxes crafted from seasoned Kerala wood and packed with premium authentic spices: nutmeg, black pepper, cloves, cinnamon, and cardamom.",
    image: eventImg,
    details: [
      "Handcrafted Wooden Spice Boxes",
      "Nutmeg, Pepper, Cloves, Cinnamon, Cardamom",
      "Laser Engraved Corporate Branding",
      "Festival & Executive Gifting",
      "Custom Batch Packaging",
    ],
    icon: "Sparkles",
  },
];

// Notable corporate and government clients
export const notableClients = [
  "LuLu Mall",
  "Bhima Jewellery",
  "Chungath Jewellery",
  "Silks World",
  "Meditrina Hospitals",
  "KIMS Health",
  "Milma",
  "Kajaria Ceramics",
  "Malabar Group",
  "Manappuram Foundation",
  "VKC Footwear",
  "Ultra Bond",
  "KSACS (Kerala AIDS Control Society)",
  "Kerala Police",
];

export const processSteps = [
  {
    step: "01",
    title: "Route Audit",
    desc: "Identify prime high-traffic KSRTC routes & hoarding locations.",
  },
  {
    step: "02",
    title: "Creative Fit",
    desc: "Adapt brand artwork for maximum speed readability & angle.",
  },
  {
    step: "03",
    title: "Digital Print",
    desc: "High-volume 25,000 sq.ft evaporative printing with eco-inks.",
  },
  {
    step: "04",
    title: "Mount & Wrap",
    desc: "Expert overnight application on KSRTC fleet & hoardings.",
  },
  {
    step: "05",
    title: "Audit & Proof",
    desc: "Geotagged photo reports and continuous maintenance.",
  },
];

export const faqData = [
  {
    q: "What is Quilonad Media’s KSRTC transit coverage?",
    a: "We are the sole licensee for branding across KSRTC Super Fast, Fast Passenger, Minnal, and Super Express buses, covering over 16,00,000 km daily through every town and village in Kerala.",
  },
  {
    q: "Can we book specific districts or routes?",
    a: "Yes. Campaigns can be configured statewide (all 14 districts) or targeted to specific districts like Kollam, Thiruvananthapuram, Ernakulam/Kochi, Thrissur, or Kozhikode.",
  },
  {
    q: "What is the daily output capacity of your digital printing plant?",
    a: "Our eco-friendly evaporative drying digital printing plant delivers up to 25,000 sq. ft. per day on cloth banners, solvent vinyl stickers, and one-way vision materials.",
  },
  {
    q: "Do you offer mobile LED video vans for traveling roadshows?",
    a: "Yes. We maintain high-lumen mobile LED video trucks and hydraulic stagecraft vehicles equipped with generator backup and high-fidelity sound systems on hire.",
  },
  {
    q: "What materials are used for highway direction and alert boards?",
    a: "Our road and highway signboards (including Kerala Police Highway Alert boards) are built with ACP sheets, GI pipes, or 2.5mm aluminum sheets combined with certified high-grade reflective stickers.",
  },
];

export const agencyStats = [
  {
    val: "16,00,000+",
    lbl: "Daily KSRTC KM",
    desc: "Super Fast, Minnal & Super Express buses",
  },
  {
    val: "25,000",
    lbl: "Sq. Ft. Daily Print",
    desc: "Eco-friendly high-volume evaporative drying",
  },
  {
    val: "14",
    lbl: "Districts Covered",
    desc: "From Kasaragod to Thiruvananthapuram",
  },
  {
    val: "100%",
    lbl: "Sole Licensee",
    desc: "Exclusive KSRTC transit branding rights",
  },
];
