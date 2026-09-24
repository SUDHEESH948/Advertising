import Eyebrow from "./Eyebrow";

// Compact framed hero header for internal pages
export default function Hero({ eyebrow, title, body, image }) {
  return (
    <section className="bg-white pt-24 pb-10 sm:pt-28 sm:pb-12 lg:pt-32 lg:pb-16 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1440px] grid lg:grid-cols-[1.3fr_0.7fr] gap-8 sm:gap-10 lg:gap-14 items-center">
        <div className="flex flex-col justify-center">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 sm:mt-7 max-w-3xl font-display text-[clamp(2.1rem,6vw,5.2rem)] font-extrabold leading-[0.96] sm:leading-[0.92] tracking-[-0.04em] text-[#111820]">
            {title}
          </h1>
          <p className="mt-4 sm:mt-6 max-w-md text-sm sm:text-base leading-relaxed sm:leading-7 text-[#111820]/70">
            {body}
          </p>
        </div>

        {/* Compact, framed editorial image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[320px] sm:max-w-[380px] aspect-[4/3] sm:aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#111820] shadow-xl">
            <img
              src={image}
              alt=""
              className="h-full w-full object-cover opacity-90"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#111820]/60 via-transparent to-[#FD3DB5]/10" />
            <div className="absolute bottom-3 left-4 sm:bottom-5 sm:left-5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[.2em] text-white/80">
              Quilonad Media / Kerala
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
