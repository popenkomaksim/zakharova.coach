import { useState } from "react";
import "@fontsource/montserrat";
import "./App.css";

import Header from "./components/Header";
import NavModal from "./components/NavModal";
import FloatingActions from "./components/FloatingActions";
import HeroBanner from "./components/HeroBanner";
import HeroSection from "./components/HeroSection";
import FormatsSection from "./components/FormatsSection";
import EventsAndAchievements from "./components/EventsAndAchievements";
import TestimonialsSection from "./components/TestimonialsSection";
import PartnersSection from "./components/PartnersSection";
import StatsSection from "./components/StatsSection";
import PricingSection from "./components/PricingSection";
import ExtraServicesSection from "./components/ExtraServicesSection";
import ClosingSection from "./components/ClosingSection";

import useContactRedirects from "./hooks/useContactRedirects";
import useUpcomingEvents from "./hooks/useUpcomingEvents";

const App = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { redirectToTelegram, redirectToWhatsup } = useContactRedirects();
  const events = useUpcomingEvents();

  return (
    <>
      <NavModal open={navOpen} onClose={() => setNavOpen(false)} />
      <FloatingActions
        redirectToTelegram={redirectToTelegram}
        onMenuClick={() => setNavOpen(true)}
      />

      <Header />
      <HeroBanner />

      <HeroSection
        redirectToTelegram={redirectToTelegram}
        redirectToWhatsup={redirectToWhatsup}
      />
      <FormatsSection />
      <EventsAndAchievements events={events} />
      <TestimonialsSection />
      <PartnersSection />
      <StatsSection redirectToTelegram={redirectToTelegram} />
      <PricingSection
        redirectToTelegram={redirectToTelegram}
        redirectToWhatsup={redirectToWhatsup}
      />
      <ExtraServicesSection />
      <ClosingSection
        redirectToTelegram={redirectToTelegram}
        redirectToWhatsup={redirectToWhatsup}
      />
    </>
  );
};

export default App;
