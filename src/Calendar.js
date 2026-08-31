import { useState } from "react";
import styled from "styled-components";
import "@fontsource/montserrat";
import "./App.css";

import { Divider } from "antd";
import Header from "./components/Header";
import NavModal from "./components/NavModal";
import FloatingActions from "./components/FloatingActions";
import Footer from "./components/Footer";
import useContactRedirects from "./hooks/useContactRedirects";

const StyledIframe = styled.iframe`
  border: 0;
`;

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
      <StyledIframe
        title="Calendar"
        src="https://calendar.google.com/calendar/embed?src=60f2ac3e5a00a821fa841b3b4d27dbba2d162aa119a67f4b20c878195d13e8c0%40group.calendar.google.com&ctz=Europe%2FKiev"
        width="100%"
        height="600"
      />
      <Divider />

      <Footer />
    </>
  );
};

export default Project10;
