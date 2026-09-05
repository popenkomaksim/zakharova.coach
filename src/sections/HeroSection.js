import { useRef, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import AboutSection from "./AboutSection";
import Achievements from "../Achievements";

const StyledHeroSwap = styled.div`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? "0" : "16px")});
  transition: opacity 0.35s ease, transform 0.35s ease;

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;

const HERO_SWAP_TRANSITION_MS = 350;

const HeroSection = ({ redirectToTelegram, redirectToWhatsup }) => {
  const [mode, setMode] = useState("about");
  const [visible, setVisible] = useState(true);
  const swapRef = useRef(null);

  const switchMode = (nextMode) => {
    setVisible(false);
    window.setTimeout(() => {
      setMode(nextMode);
      setVisible(true);

      const node = swapRef.current;
      if (node) {
        const top = node.getBoundingClientRect().top + window.scrollY - 16;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, HERO_SWAP_TRANSITION_MS);
  };

  return (
    <StyledHeroSwap ref={swapRef} $visible={visible}>
      {mode === "about" ? (
        <AboutSection
          redirectToTelegram={redirectToTelegram}
          redirectToWhatsup={redirectToWhatsup}
          onShowAchievements={() => switchMode("achievements")}
        />
      ) : (
        <Achievements onBack={() => switchMode("about")} />
      )}
    </StyledHeroSwap>
  );
};

HeroSection.propTypes = {
  redirectToTelegram: PropTypes.func.isRequired,
  redirectToWhatsup: PropTypes.func.isRequired,
};

export default HeroSection;
