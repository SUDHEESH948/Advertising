import { motion } from "framer-motion";

// =========================================================
// 23 MALAYALAM TV & MEDIA CHANNEL LOGOS
// =========================================================

// Entertainment Channels (1-10)
import asianetLogo from "../assets/medialogo/asianet.png";
import mazhavilLogo from "../assets/medialogo/mazhavil-manorama.png";
import suryaTvLogo from "../assets/medialogo/surya-tv.jpg";
import flowersTvLogo from "../assets/medialogo/flowers-tv.png";
import zeeKeralamLogo from "../assets/medialogo/zee-keralam.svg";
import kairaliTvLogo from "../assets/medialogo/kairali-tv.svg";
import amritaTvLogo from "../assets/medialogo/amrita-tv.svg";
import jeevanTvLogo from "../assets/medialogo/jeevan-tv.jpg";
import asianetPlusLogo from "../assets/medialogo/asianet-plus.jpg";
import kaumudyTvLogo from "../assets/medialogo/kaumudy-tv.jpg";

// News Channels (11-22)
import asianetNewsLogo from "../assets/medialogo/asianet-news.png";
import manoramaNewsLogo from "../assets/medialogo/manorama-news.png";
import mathrubhumiNewsLogo from "../assets/medialogo/mathrubhumi-news.png";
import reporterTvLogo from "../assets/medialogo/reporter-tv.jpg";
import twentyFourNewsLogo from "../assets/medialogo/twentyfour-news.png";
import mediaOneLogo from "../assets/medialogo/mediaone.png";
import news18KeralaLogo from "../assets/medialogo/news18-kerala.png";
import kairaliNewsLogo from "../assets/medialogo/kairali-news.png";
import janamTvLogo from "../assets/medialogo/janam-tv.png";
import jaihindTvLogo from "../assets/medialogo/jaihind-tv.jpg";
import newsMalayalamLogo from "../assets/medialogo/news-malayalam-24x7.png";
import rajNewsLogo from "../assets/medialogo/raj-news-malayalam.png";

// Movies and Music (23)
import asianetMoviesLogo from "../assets/medialogo/asianet-movies.png";

const mediaChannels = [
  // Entertainment Channels (1 - 10)
  {
    id: 1,
    name: "Asianet",
    category: "Entertainment",
    src: asianetLogo,
  },
  {
    id: 2,
    name: "Mazhavil Manorama",
    category: "Entertainment",
    src: mazhavilLogo,
  },
  {
    id: 3,
    name: "Surya TV",
    category: "Entertainment",
    src: suryaTvLogo,
  },
  {
    id: 4,
    name: "Flowers TV",
    category: "Entertainment",
    src: flowersTvLogo,
  },
  {
    id: 5,
    name: "Zee Keralam",
    category: "Entertainment",
    src: zeeKeralamLogo,
  },
  {
    id: 6,
    name: "Kairali TV",
    category: "Entertainment",
    src: kairaliTvLogo,
  },
  {
    id: 7,
    name: "Amrita TV",
    category: "Entertainment",
    src: amritaTvLogo,
  },
  {
    id: 8,
    name: "Jeevan TV",
    category: "Entertainment",
    src: jeevanTvLogo,
  },
  {
    id: 9,
    name: "Asianet Plus",
    category: "Entertainment",
    src: asianetPlusLogo,
  },
  {
    id: 10,
    name: "Kaumudy TV",
    category: "Entertainment",
    src: kaumudyTvLogo,
  },

  // News Channels (11 - 22)
  {
    id: 11,
    name: "Asianet News",
    category: "News",
    src: asianetNewsLogo,
  },
  {
    id: 12,
    name: "Manorama News",
    category: "News",
    src: manoramaNewsLogo,
  },
  {
    id: 13,
    name: "Mathrubhumi News",
    category: "News",
    src: mathrubhumiNewsLogo,
  },
  {
    id: 14,
    name: "Reporter TV",
    category: "News",
    src: reporterTvLogo,
  },
  {
    id: 15,
    name: "24 News",
    category: "News",
    src: twentyFourNewsLogo,
  },
  {
    id: 16,
    name: "MediaOne TV",
    category: "News",
    src: mediaOneLogo,
  },
  {
    id: 17,
    name: "News18 Kerala",
    category: "News",
    src: news18KeralaLogo,
  },
  {
    id: 18,
    name: "Kairali News",
    category: "News",
    src: kairaliNewsLogo,
  },
  {
    id: 19,
    name: "Janam TV",
    category: "News",
    src: janamTvLogo,
  },
  {
    id: 20,
    name: "Jaihind TV",
    category: "News",
    src: jaihindTvLogo,
  },
  {
    id: 21,
    name: "News Malayalam 24×7",
    category: "News",
    src: newsMalayalamLogo,
  },
  {
    id: 22,
    name: "Raj News Malayalam",
    category: "News",
    src: rajNewsLogo,
  },

  // Movies & Music (23)
  {
    id: 23,
    name: "Asianet Movies",
    category: "Movies & Music",
    src: asianetMoviesLogo,
  },
];

export default function InfiniteLogoTicker() {
  // Seamless loop with all 23 channels duplicated
  const marqueeLogos = [...mediaChannels, ...mediaChannels];

  const getWhatsAppLink = (channelName) => {
    const text = encodeURIComponent(
      `Hello Quilon Advertising, I would like to enquire about advertising slots and commercial placements on ${channelName}.`
    );
    return `https://wa.me/919497014999?text=${text}`;
  };

  return (
    <section
      id="media"
      className="relative w-full overflow-hidden bg-[#F4DC86] py-5 sm:py-7 md:py-8 border-y border-[#D1007F]"
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
          w-10
          sm:w-24
          md:w-36
          bg-gradient-to-r
          from-[#F4DC86]
          via-[#F4DC86]/85
          to-transparent
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
          w-10
          sm:w-24
          md:w-36
          bg-gradient-to-l
          from-[#F4DC86]
          via-[#F4DC86]/85
          to-transparent
        "
      />

      {/* =====================================================
          SINGLE-LINE CONTINUOUS MARQUEE TRACK (ALL 23 CHANNELS)
      ====================================================== */}
      <motion.div
        className="flex w-max items-center gap-3 sm:gap-5"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 48,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {marqueeLogos.map((channel, index) => (
          <a
            key={`${channel.id}-${index}`}
            href={getWhatsAppLink(channel.name)}
            target="_blank"
            rel="noreferrer"
            title={`Enquire advertising slot on ${channel.name}`}
            className="
              group
              relative
              flex
              h-28
              w-36
              sm:h-36
              sm:w-48
              md:h-40
              md:w-56
              shrink-0
              flex-col
              items-center
              justify-between
              rounded-xl
              sm:rounded-2xl
              border-2
              border-[#D1007F]/30
              bg-white/95
              p-2.5
              sm:p-3
              shadow-sm
              transition-all
              duration-300
              hover:scale-105
              hover:border-[#D1007F]
              hover:shadow-[0_12px_28px_rgba(209,0,127,0.25)]
              cursor-pointer
            "
          >
            {/* Top Micro Badges: Channel Number + Category */}
            <div className="flex w-full items-center justify-between">
              <span className="rounded bg-[#D1007F]/10 px-1.5 py-0.5 text-[9px] sm:text-[10px] font-black text-[#D1007F]">
                #{String(channel.id).padStart(2, "0")}
              </span>
              <span className="max-w-[90px] truncate text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-neutral-500">
                {channel.category}
              </span>
            </div>

            {/* Main Logo Container */}
            <div className="flex h-12 sm:h-16 md:h-20 w-full items-center justify-center p-1">
              <img
                src={channel.src}
                alt={channel.name}
                loading="lazy"
                className="max-h-full max-w-full select-none object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Channel Name */}
            <div className="w-full text-center">
              <p className="truncate text-[11px] sm:text-xs font-black leading-tight text-[#171217] transition-colors group-hover:text-[#D1007F]">
                {channel.name}
              </p>
            </div>
          </a>
        ))}
      </motion.div>
    </section>
  );
}
