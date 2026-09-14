import { useRef, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Row, Button } from "antd";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import AboutSection from "./AboutSection";
import AchievementsSection from "./AchievementsSection";

const StyledFlipScene = styled.div`
  perspective: 2400px;
`;

const StyledCtaRow = styled(Row)`
  margin-top: 1.5em;
`;

const StyledCtaButton = styled(Button)`
  && {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: auto;
    padding: 0.75em 2em;
    font-size: 1.25em;
    font-weight: 600;
    letter-spacing: 0.02em;
    border-radius: 3em;
    box-shadow: 0 0.6em 1.5em rgba(255, 77, 79, 0.35);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    white-space: normal;

    &:hover,
    &:focus {
      transform: translateY(-0.1em);
      box-shadow: 0 0.8em 1.8em rgba(255, 77, 79, 0.45);
    }

    @media (max-width: 575.98px) {
      max-width: 90vw;
      padding: 0.7em 1.2em;
      font-size: 1em;
      text-align: center;
    }
  }
`;

const StyledCtaIcon = styled.span`
  margin-right: 0.5em;
  vertical-align: middle;
`;

const StyledFlipCard = styled.div`
  position: relative;
  display: grid;
  transform-style: preserve-3d;
  transition: transform 0.9s cubic-bezier(0.45, 0.05, 0.15, 1);
  transform: rotateY(${({ $flipped }) => ($flipped ? 180 : 0)}deg);

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const StyledFlipFace = styled.div`
  grid-area: 1 / 1;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  pointer-events: ${({ $active }) => ($active ? "auto" : "none")};

  ${({ $back }) =>
    $back &&
    `
      transform: rotateY(180deg);
    `}
`;

const HeroSection = ({ redirectToTelegram, redirectToWhatsup }) => {
  const [mode, setMode] = useState("about");
  const swapRef = useRef(null);
  const isTelegram = useRef(Math.random() < 0.5).current;
  const redirectToContact = isTelegram ? redirectToTelegram : redirectToWhatsup;
  const { t } = useTranslation();

  const switchMode = (nextMode) => {
    setMode(nextMode);

    const node = swapRef.current;
    if (node) {
      const top = node.getBoundingClientRect().top + window.scrollY - 16;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const flipped = mode === "achievements";

  return (
    <>
      <StyledFlipScene ref={swapRef}>
        <StyledFlipCard $flipped={flipped}>
          <StyledFlipFace $active={!flipped} aria-hidden={flipped}>
            <AboutSection
              onShowAchievements={() => switchMode("achievements")}
            />
          </StyledFlipFace>
          <StyledFlipFace $back $active={flipped} aria-hidden={!flipped}>
            <AchievementsSection onBack={() => switchMode("about")} />
          </StyledFlipFace>
        </StyledFlipCard>
      </StyledFlipScene>
      <StyledCtaRow justify="center">
        <StyledCtaButton onClick={redirectToContact} danger size="large">
          <StyledCtaIcon>
            {isTelegram ? (
              <FaTelegram size="1.2em" />
            ) : (
              <FaWhatsapp size="1.2em" />
            )}
          </StyledCtaIcon>
          {t("aboutSection.ctaButton")}
        </StyledCtaButton>
      </StyledCtaRow>
    </>
  );
};

HeroSection.propTypes = {
  redirectToTelegram: PropTypes.func.isRequired,
  redirectToWhatsup: PropTypes.func.isRequired,
};

export default HeroSection;
