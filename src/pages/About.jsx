import { img, agencyStats, notableClients } from "../data/mediaData";
import Hero from "../components/Hero";
import Eyebrow from "../components/Eyebrow";
import Fade from "../components/Fade";

export default function About() {
  return (
    <div className="bg-white">
      <Hero
        eyebrow="Who We Are"
        title={
          <>
            Kerala’s Most Trusted
            <br />
            <span className="text-[#FD3DB5]">Outdoor Infrastructure.</span>
          </>
        }
        body="Quilonad Media bridges brands and millions of daily commuters across Kerala through unmatched transit rights, prime hoardings, and in-house execution."
        image={img.hero}
      />

      {/* Manifesto / Reach */}
      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1200px]">
          <Eyebrow>01 / The Quilonad Advantage</Eyebrow>
          <h2 className="mt-4 sm:mt-6 max-w-5xl font-display text-3xl sm:text-5xl lg:text-7xl font-extrabold leading-[0.95] sm:leading-[0.92] tracking-[-0.04em]">
            Connecting 14 districts through{" "}
            <span className="text-[#FD3DB5]">16,00,000+ daily kilometers.</span>
          </h2>
          <div className="mt-8 sm:mt-12 grid md:grid-cols-2 gap-6 sm:gap-8 text-[#111820]/70 text-xs sm:text-base leading-relaxed sm:leading-8">
            <p>
              Headquartered in Kollam with operations spanning every district in
              Kerala, Quilonad Media has established itself as the state's
              undisputed transit and out-of-home advertising authority.
            </p>
            <p>
              As the sole licensee for KSRTC bus fleet branding, our mobile
              billboards travel across mountain highways, coastal corridors, and
              dense city centers every single day, delivering brand impressions
              that digital algorithms simply cannot duplicate.
            </p>
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="bg-[#FD3DB5] px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-28 text-[#111820]">
        <div className="mx-auto max-w-[1440px]">
          <Eyebrow>02 / Scale & Capacity</Eyebrow>
          <div className="mt-8 sm:mt-12 grid gap-3 sm:gap-6 grid-cols-2 lg:grid-cols-4 border-t border-[#111820]/20 pt-6 sm:pt-8">
            {agencyStats.map((stat, i) => (
              <Fade key={stat.lbl} delay={i * 0.05}>
                <div className="p-4 sm:p-6 bg-white/40 rounded-xl sm:rounded-2xl backdrop-blur-xs">
                  <div className="font-display text-2xl sm:text-4xl lg:text-5xl font-black">
                    {stat.val}
                  </div>
                  <div className="mt-1 sm:mt-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                    {stat.lbl}
                  </div>
                  <p className="mt-1 text-[10px] sm:text-xs text-[#111820]/70 line-clamp-2">
                    {stat.desc}
                  </p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Clients Featured */}
      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <Eyebrow>03 / Corporate & Government Partners</Eyebrow>
          <h2 className="mt-4 sm:mt-6 font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.04em]">
            Brands that rely on our
            <br />
            <span className="text-[#FD3DB5]">ground execution.</span>
          </h2>
          <div className="mt-8 sm:mt-12 grid gap-2.5 sm:gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {notableClients.map((client) => (
              <div
                key={client}
                className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-black/10 hover:border-[#FD3DB5] shadow-xs transition-all flex items-center justify-between"
              >
                <span className="font-display font-bold text-xs sm:text-base text-[#111820] truncate pr-1">
                  {client}
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold text-[#FD3DB5] shrink-0">
                  Partner
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
