import { useEffect, useState } from "react";
import { Image } from "antd";
import styled from "styled-components";
import "@fontsource/montserrat";
import "./App.css";

import Header from "./components/Header";
import NavModal from "./components/NavModal";
import FloatingActions from "./components/FloatingActions";
import HeroBanner from "./components/HeroBanner";
import MobileCtaButton from "./components/MobileCtaButton";
import HeroSection from "./components/HeroSection";
// import CollaborationSection from "./components/CollaborationSection";
// import PrinciplesSection from "./components/PrinciplesSection";
import FormatsSection from "./components/FormatsSection";
// import EventsAndAchievements from "./components/EventsAndAchievements";
import TestimonialsSection from "./components/TestimonialsSection";
import PartnersSection from "./components/PartnersSection";
// import StatsSection from "./components/StatsSection";
import PricingSection from "./components/PricingSection";
import ExtraServicesSection from "./components/ExtraServicesSection";
import ClosingSection from "./components/ClosingSection";
import ScrollReveal from "./components/ScrollReveal";

import useContactRedirects from "./hooks/useContactRedirects";
import useExchangeRate from "./hooks/useExchangeRate";
// import useUpcomingEvents from "./hooks/useUpcomingEvents";

const StyledDesignImage = styled(Image)`
  &&& {
    margin: 3vh 0 0 0;
  }
`;

const StyledPatrioticText = styled.p`
  margin: 2em 0;
  padding: 0.6em 0.4em;
  background: transparent;
  color: #b01e28;
  font-weight: 900;
  font-size: clamp(1.1rem, 8vw, 2.75rem);
  white-space: nowrap;
  text-align: center;
`;

const App = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { redirectToTelegram, redirectToWhatsup } = useContactRedirects();
  const rate = useExchangeRate();
  // const events = useUpcomingEvents();

  useEffect(() => {
    const { hash } = window.location;
    if (!hash) return undefined;

    const scrollToHash = () => {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    };

    if (document.readyState === "complete") {
      scrollToHash();
      return undefined;
    }

    window.addEventListener("load", scrollToHash);
    return () => window.removeEventListener("load", scrollToHash);
  }, []);

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
      {/* <CollaborationSection /> */}
      {/* <PrinciplesSection /> */}
      <ScrollReveal>
        <FormatsSection />
      </ScrollReveal>
      {/* <EventsAndAchievements events={events} /> */}
      {/* <StatsSection redirectToTelegram={redirectToTelegram} /> */}
      <StyledPatrioticText>Хай та русня здохне</StyledPatrioticText>
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
