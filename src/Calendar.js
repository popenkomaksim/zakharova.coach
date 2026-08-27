import { useState } from "react";
import "@fontsource/montserrat";
import "./App.css";

import { FaHeart } from "react-icons/fa";
import { Divider } from "antd";
import Header from "./components/Header";
import NavModal from "./components/NavModal";
import FloatingActions from "./components/FloatingActions";
import useContactRedirects from "./hooks/useContactRedirects";

const Project10 = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { redirectToTelegram } = useContactRedirects();

  return (
    <>
      <NavModal open={navOpen} onClose={() => setNavOpen(false)} />
      <FloatingActions
        redirectToTelegram={redirectToTelegram}
        onMenuClick={() => setNavOpen(true)}
      />

      <Header />
      <iframe
        title="Calendar"
        src="https://calendar.google.com/calendar/embed?src=60f2ac3e5a00a821fa841b3b4d27dbba2d162aa119a67f4b20c878195d13e8c0%40group.calendar.google.com&ctz=Europe%2FKiev"
        style={{ border: 0 }}
        width="100%"
        height="600"
      />
      <Divider />

      <Divider style={{ marginTop: "4em" }}>
        Made with <FaHeart style={{ top: "-0.5em" }} color="#B01E28" /> in Kyiv,
        Ukraine © {new Date().getFullYear()}
      </Divider>
    </>
  );
};

export default Project10;
