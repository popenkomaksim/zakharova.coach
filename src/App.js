import { useState } from "react";
import { Image } from "antd";
import "@fontsource/montserrat";
import "./App.css";

import Header from "./components/Header";
import NavModal from "./components/NavModal";
import FloatingActions from "./components/FloatingActions";
import HeroBanner from "./components/HeroBanner";
import HeroSection from "./components/HeroSection";
// import CollaborationSection from "./components/CollaborationSection";
// import PrinciplesSection from "./components/PrinciplesSection";
import FormatsSection from "./components/FormatsSection";
// import EventsAndAchievements from "./components/EventsAndAchievements";
// import TestimonialsSection from "./components/TestimonialsSection";
import PartnersSection from "./components/PartnersSection";
// import StatsSection from "./components/StatsSection";
import PricingSection from "./components/PricingSection";
import ExtraServicesSection from "./components/ExtraServicesSection";
import ClosingSection from "./components/ClosingSection";
import TransparentBoxText from "./components/TransparentBoxText";

import useContactRedirects from "./hooks/useContactRedirects";
// import useUpcomingEvents from "./hooks/useUpcomingEvents";

const App = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { redirectToTelegram, redirectToWhatsup } = useContactRedirects();
  // const events = useUpcomingEvents();

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
      <Image
        src="./design_kazbek.jpeg"
        preview={false}
        width="100%"
        style={{ margin: "3vh 0 0 0" }}
      />
      {/* <CollaborationSection /> */}
      {/* <PrinciplesSection /> */}
      <FormatsSection />
      {/* <EventsAndAchievements events={events} /> */}
      {/* <TestimonialsSection /> */}
      {/* <StatsSection redirectToTelegram={redirectToTelegram} /> */}
      <TransparentBoxText
        text="Хай та русня здохне"
        $padding="0.1em 0 0.2em 0"
      />
      <PricingSection
        redirectToTelegram={redirectToTelegram}
        redirectToWhatsup={redirectToWhatsup}
      />
      <ExtraServicesSection />
      <PartnersSection />
      <ClosingSection
        redirectToTelegram={redirectToTelegram}
        redirectToWhatsup={redirectToWhatsup}
      />
    </>
  );
};

export default App;
