import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Image } from "antd";
import styled from "styled-components";
import "@fontsource/montserrat";
import "./App.css";

import Header from "./components/Header";
import NavModal from "./components/NavModal";
import FloatingActions from "./components/FloatingActions";
import MobileCtaButton from "./components/MobileCtaButton";
import ScrollReveal from "./components/ScrollReveal";

import HeroBanner from "./sections/HeroBanner";
import HeroSection from "./sections/HeroSection";
import RacesSection from "./sections/RacesSection";
import FormatsSection from "./sections/FormatsSection";
import PatrioticBanner from "./sections/PatrioticBanner";
import TestimonialsSection from "./sections/TestimonialsSection";
import PartnersSection from "./sections/PartnersSection";
import PricingSection from "./sections/PricingSection";
import ExtraServicesSection from "./sections/ExtraServicesSection";
import ClosingSection from "./sections/ClosingSection";

import useContactRedirects from "./hooks/useContactRedirects";
import useExchangeRate from "./hooks/useExchangeRate";

const StyledDesignImage = styled(Image)`
  &&& {
    margin: 3vh 0 0 0;
  }
`;

const App = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { redirectToTelegram, redirectToWhatsup } = useContactRedirects();
  const rate = useExchangeRate();
  const { pathname } = useLocation();

  useEffect(() => {
    const sectionId = pathname.replace(/^\//, "");
    if (!sectionId) return undefined;

    const scrollToSection = () => {
      document.getElementById(sectionId)?.scrollIntoView();
    };

    if (document.readyState === "complete") {
      scrollToSection();
      return undefined;
    }

    window.addEventListener("load", scrollToSection);
    return () => window.removeEventListener("load", scrollToSection);
  }, [pathname]);

  return (
    <>
      <NavModal open={navOpen} onClose={() => setNavOpen(false)} />
      <FloatingActions
        redirectToTelegram={redirectToTelegram}
        onMenuClick={() => setNavOpen(true)}
      />

      <Header />
      <HeroBanner />

      <MobileCtaButton redirectToTelegram={redirectToTelegram} />

      <HeroSection
        redirectToTelegram={redirectToTelegram}
        redirectToWhatsup={redirectToWhatsup}
      />
      <ScrollReveal>
        <StyledDesignImage
          src="./design_kazbek.jpeg"
          preview={false}
          width="100%"
        />
      </ScrollReveal>
      <ScrollReveal>
        <RacesSection />
      </ScrollReveal>
      <ScrollReveal>
        <FormatsSection />
      </ScrollReveal>
      <PatrioticBanner />
      <ScrollReveal>
        <PricingSection
          redirectToTelegram={redirectToTelegram}
          redirectToWhatsup={redirectToWhatsup}
          rate={rate}
        />
      </ScrollReveal>
      <ScrollReveal>
        <ExtraServicesSection rate={rate} />
      </ScrollReveal>
      <ScrollReveal>
        <TestimonialsSection />
      </ScrollReveal>
      <ScrollReveal>
        <PartnersSection />
      </ScrollReveal>
      <ScrollReveal>
        <ClosingSection
          redirectToTelegram={redirectToTelegram}
          redirectToWhatsup={redirectToWhatsup}
        />
      </ScrollReveal>
    </>
  );
};

export default App;
