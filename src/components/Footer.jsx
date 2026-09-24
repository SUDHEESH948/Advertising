import { Link } from "react-router-dom";
import { logoImg } from "../data/mediaData";
import { InstagramIcon, LinkedinIcon, YoutubeIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-[#111820] px-4 py-12 sm:px-6 sm:py-16 text-white lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link
              to="/"
              className="inline-block p-2.5 rounded-2xl bg-white shadow-md mb-5 group transition-transform hover:scale-105 active:scale-95"
            >
              <img
                src={logoImg}
                alt="Quilonad Media — Advertising, Printing & Marketing"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>
            <p className="mt-2 max-w-sm text-xs sm:text-sm leading-6 sm:leading-7 text-white/55">
              Kerala's premier transit advertising & out-of-home media network.
              Sole licensee for KSRTC bus fleet branding covering over 16,0,000
              km daily.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-wider text-white/40">
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                Kollam
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                Kochi
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                Thiruvananthapuram
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                14 Districts
              </span>
            </div>
          </div>
          <div>
            <p className="mb-4 sm:mb-5 text-[10px] font-bold uppercase tracking-[.2em] text-[#FF8ED8]">
              Media Capabilities
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/60">
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors"
                >
                  KSRTC Bus Branding
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors"
                >
                  Highway Hoardings & OOH
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors"
                >
                  Mobile LED Video Vans
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors"
                >
                  In-Store & Shop Branding
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors"
                >
                  Highway Direction Boards
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors"
                >
                  Large Format Printing (25k sq.ft/day)
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-4 sm:mb-5 text-[10px] font-bold uppercase tracking-[.2em] text-[#FF8ED8]">
              Head Office & Bookings
            </p>
            <a
              href="mailto:info@quilonadmedia.com"
              className="text-xs sm:text-sm text-white/70 hover:text-white block transition-colors"
            >
              info@quilonadmedia.com
            </a>
            <p className="mt-2 text-xs sm:text-sm text-white/50 leading-relaxed">
              Quilonad Media Towers, Beach Road, Kollam, Kerala — 691001
            </p>
            <a
              href="tel:+919447123456"
              className="mt-2 inline-block text-xs sm:text-sm text-[#FD3DB5] font-semibold hover:underline"
            >
              Tel: +91 94471 23456 / +91 474 2741122
            </a>
            <div className="mt-6 flex gap-3 text-white/70">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white/5 border border-white/10 hover:bg-[#FD3DB5] hover:text-white transition-colors active:scale-95">
                <InstagramIcon size={17} />
              </span>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white/5 border border-white/10 hover:bg-[#FD3DB5] hover:text-white transition-colors active:scale-95">
                <LinkedinIcon size={17} />
              </span>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white/5 border border-white/10 hover:bg-[#FD3DB5] hover:text-white transition-colors active:scale-95">
                <YoutubeIcon size={17} />
              </span>
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 flex flex-col justify-between gap-3 border-t border-white/15 pt-6 text-[10px] uppercase tracking-[.15em] text-white/35 sm:flex-row">
          <span>
            © {new Date().getFullYear()} Quilonad Media — Kerala Transit & OOH
            Advertising
          </span>
          <span>KSRTC Sole Licensee · All 14 Districts</span>
        </div>
      </div>
    </footer>
  );
}
