import { useState } from "react";
import "@fontsource/montserrat";
import "./App.css";
import { Divider } from "antd";

import Header from "./components/Header";
import NavModal from "./components/NavModal";
import FloatingActions from "./components/FloatingActions";
import TransparentBoxText from "./components/TransparentBoxText";
import HeroSection from "./components/HeroSection";
import PrinciplesSection from "./components/PrinciplesSection";
import EventsAndAchievements from "./components/EventsAndAchievements";
import CollaborationSection from "./components/CollaborationSection";
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
      <a href="#prices" style={{ textDecoration: "none" }}>
        <TransparentBoxText text="Рух – це життя, а життя – це рух!" />
      </a>
      <Divider />

      <HeroSection
        redirectToTelegram={redirectToTelegram}
        redirectToWhatsup={redirectToWhatsup}
      />
      <PrinciplesSection />
      <EventsAndAchievements events={events} />
      <CollaborationSection redirectToTelegram={redirectToTelegram} />
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
