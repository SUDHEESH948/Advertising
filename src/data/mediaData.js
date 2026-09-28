import {
  Building,
  Bus,
  Tv,
  Compass,
  Printer,
  Radio,
  Lightbulb,
} from "lucide-react";

export const SERVICES_DATA = [
  {
    id: "ooh",
    title: "OUT OF HOME BRANDING",
    tagline: "Unmissable Strategic Hoardings",
    badge: "Maximum Visibility",
    items: [
      "Hoarding",
      "Mini Hoarding",
      "Outdoor Advertising",
      "Large Format Advertising",
    ],
    icon: Building,
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80",
    description:
      "High-impact hoardings positioned at strategic locations for maximum visibility and brand recall.",
  },
  {
    id: "transit",
    title: "MOVING MEDIA & TRANSIT",
    tagline: "Your Brand Across the City",
    badge: "Dynamic Reach",
    items: [
      "Private Bus Branding",
      "KSRTC Branding",
      "Vehicle Branding",
      "Fleet Branding",
    ],
    icon: Bus,
    image:
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=900&q=80",
    description:
      "Transform daily travel routes into moving brand experiences through transit and fleet advertising.",
  },
  {
    id: "led",
    title: "LED DISPLAY NETWORKS",
    tagline: "Your Brand. Bigger. Brighter.",
    badge: "Ultra-HD Digital",
    items: [
      "Outdoor LED",
      "Indoor LED",
      "Digital Billboards",
      "Event LED Displays",
    ],
    icon: Tv,
    image:
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=900&q=80",
    description:
      "High-impact commercial LED displays for animated day-and-night advertising campaigns.",
  },
  {
    id: "shelter",
    title: "TRANSIT BRANDING & SHELTERS",
    tagline: "Captive Commuter Audience",
    badge: "Station & Stops",
    items: [
      "Bus Shelter Branding",
      "Railway Station Branding",
      "Platform Advertising",
      "Transit Advertising",
    ],
    icon: Compass,
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=900&q=80",
    description:
      "High-dwell-time transit advertising connecting brands with commuters and pedestrians.",
  },
  {
    id: "printing",
    title: "HIGH-QUALITY PRINTING",
    tagline: "Sharp Visuals. Vibrant Colors.",
    badge: "Precision Production",
    items: [
      "Flex Printing",
      "Vinyl Printing",
      "UV Printing",
      "Large Format",
    ],
    icon: Printer,
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=80",
    description:
      "Professional large-format printing for outdoor, retail, event and promotional campaigns.",
  },
  {
    id: "electronic",
    title: "ELECTRONIC MEDIA & FM",
    tagline: "High-End Broadcast Reach",
    badge: "Sonic & Video Impact",
    items: [
      "FM Marketing",
      "Radio Advertising",
      "Audio Advertising",
      "Digital Campaigns",
    ],
    icon: Radio,
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=900&q=80",
    description:
      "Radio, FM, audio and digital campaigns designed for regional audience reach.",
  },
  {
    id: "signage",
    title: "SIGN BOARD & 3D LETTERS",
    tagline: "Professional Signage Solutions",
    badge: "Illuminated Premium",
    items: [
      "LED Sign Boards",
      "Glow Sign Boards",
      "ACP & Acrylic Boards",
      "3D Lettering",
    ],
    icon: Lightbulb,
    image:
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=80",
    description:
      "Premium illuminated signage, ACP panels, acrylic letters and corporate storefront solutions.",
  },
];

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Royal Skyline Unipole",
    category: "HOARDING",
    client: "Malabar Jewellers",
    location: "MG Road Junction",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
    stats: "350,000+ Daily Footfall",
  },
  {
    id: 2,
    title: "Metro Express KSRTC Fleet Wrap",
    category: "BUS BRANDING",
    client: "Federal Bank",
    location: "South Zone Intercity Corridors",
    image:
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80",
    stats: "45 Buses",
  },
  {
    id: 3,
    title: "Curved 4K Commercial LED",
    category: "LED",
    client: "Nexus Shopping Mall",
    location: "Grand Central Plaza",
    image:
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
    stats: "P3.9 High-Nits Display",
  },
  {
    id: 4,
    title: "Ultra-Res UV Architectural Fabric",
    category: "PRINTING",
    client: "BMW Motorrad",
    location: "Coastal Highway",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80",
    stats: "3200 DPI UV Printing",
  },
  {
    id: 5,
    title: "Central Bus Shelter Glow Network",
    category: "TRANSIT",
    client: "Joyalukkas Lifestyle",
    location: "Beach Road Terminal",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=1200&q=80",
    stats: "18 Lit Shelters",
  },
  {
    id: 6,
    title: "Illuminated 3D ACP Facade",
    category: "SIGNAGE",
    client: "Kalyan Silks",
    location: "Commercial Boulevard",
    image:
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
    stats: "Premium LED Modules",
  },
  {
    id: 7,
    title: "Morning Drive FM Campaign",
    category: "FM",
    client: "Kalyan Developers",
    location: "Regional FM Network",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80",
    stats: "Regional Audio Campaign",
  },
  {
    id: 8,
    title: "Highway Gantry Mega Hoarding",
    category: "HOARDING",
    client: "Toyota Motors",
    location: "NH-66",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    stats: "Large Format Structure",
  },
];

export const TRUSTED_CLIENTS = [
  "MALABAR GOLD",
  "KALYAN SILKS",
  "FEDERAL BANK",
  "HYUNDAI",
  "TATA MOTORS",
  "LULU GROUP",
  "CHEVROLET",
  "MYG DIGITAL",
  "ASIAN PAINTS",
  "MUTHOOT FINCORP",
];

export const NEWS_ARTICLES = [
  {
    id: 1,
    category: "Advertising",
    date: "OCTOBER 14, 2026",
    headline: "The Resurgence of Static Billboards",
    snippet:
      "Exploring the continuing role of high-visibility outdoor advertising in modern campaigns.",
    readTime: "4 min read",
  },
  {
    id: 2,
    category: "Transit Media",
    date: "NOVEMBER 02, 2026",
    headline: "Moving Media & Regional Reach",
    snippet:
      "How transit advertising creates repeated exposure across busy commuter routes.",
    readTime: "3 min read",
  },
  {
    id: 3,
    category: "LED Technology",
    date: "DECEMBER 19, 2026",
    headline: "The Future of Commercial LED",
    snippet:
      "A look at high-refresh digital displays and their role in outdoor campaigns.",
    readTime: "5 min read",
  },
];