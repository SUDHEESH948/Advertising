import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Button({
  children,
  to = "/contact",
  dark = false,
  className = "",
}) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center justify-center gap-3 rounded-full px-6 py-3.5 text-[10px] font-bold uppercase tracking-[.17em] transition hover:-translate-y-0.5 active:scale-95 ${
        dark
          ? "bg-[#111820] text-white hover:bg-[#FD3DB5]"
          : "bg-[#FD3DB5] text-white hover:bg-[#111820]"
      } ${className}`}
    >
      {children}
      <ArrowUpRight
        size={15}
        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}
