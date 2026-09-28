import React, { useEffect, useState } from "react";

import IntroOverlay from "./components/intro/IntroOverlay";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Hero from "./components/hero/Hero";

import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Portfolio from "./components/sections/Portfolio";
import TrustedClients from "./components/sections/TrustedClients";
import News from "./components/sections/News";
import Advantages from "./components/sections/Advantages";
import FinalCTA from "./components/sections/FinalCTA";

import PortfolioLightbox from "./components/modals/PortfolioLightbox";

import { PORTFOLIO_ITEMS } from "./data/mediaData";

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [introTimer, setIntroTimer] = useState(7);

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [activeFilter, setActiveFilter] = useState("ALL");
  const [activeLightboxIndex, setActiveLightboxIndex] =
    useState(null);

  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    phone: "",
    email: "",
    service: "Out of Home (Hoarding)",
    location: "Kerala / South India",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (introFinished) return;

    const timer = setInterval(() => {
      setIntroTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIntroFinished(true);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [introFinished]);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handlePrevPortfolio = () => {
    setActiveLightboxIndex((prev) =>
      prev > 0 ? prev - 1 : PORTFOLIO_ITEMS.length - 1
    );
  };

  const handleNextPortfolio = () => {
    setActiveLightboxIndex((prev) =>
      prev < PORTFOLIO_ITEMS.length - 1 ? prev + 1 : 0
    );
  };

  return (
    <div className="min-h-screen bg-[#080812] text-white font-sans overflow-x-hidden">
      {!introFinished && (
        <IntroOverlay
          introTimer={introTimer}
          onSkip={() => setIntroFinished(true)}
        />
      )}

      <Header
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
      />

      <main>
        <Hero scrollToSection={scrollToSection} />

        <About />

        <Services
          setFormData={setFormData}
          scrollToSection={scrollToSection}
        />

        {/* Additional service-specific sections can go here */}
        {/* OutdoorBranding */}
        {/* TransitMedia */}
        {/* LEDDisplay */}
        {/* Printing */}
        {/* ElectronicMedia */}
        {/* Signage */}

        <Portfolio
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          setActiveLightboxIndex={setActiveLightboxIndex}
        />

        <TrustedClients />

        <News />

        <Advantages />

        {/* Contact component goes here */}

        <FinalCTA scrollToSection={scrollToSection} />
      </main>

      <PortfolioLightbox
        index={activeLightboxIndex}
        items={
          activeFilter === "ALL"
            ? PORTFOLIO_ITEMS
            : PORTFOLIO_ITEMS.filter(
                (item) => item.category === activeFilter
              )
        }
        onClose={() => setActiveLightboxIndex(null)}
        onPrev={handlePrevPortfolio}
        onNext={handleNextPortfolio}
        scrollToSection={scrollToSection}
      />

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}