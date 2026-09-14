import { useRef, useState } from "react";
import styled from "styled-components";

import AboutSection from "./AboutSection";
import AchievementsSection from "./AchievementsSection";

const StyledFlipScene = styled.div`
  perspective: 2400px;
  -webkit-perspective: 2400px;
`;

const StyledFlipCard = styled.div`
  position: relative;
  display: grid;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  transition: transform 0.9s cubic-bezier(0.45, 0.05, 0.15, 1);
  transform: rotateY(${({ $flipped }) => ($flipped ? 180 : 0)}deg);
  -webkit-transform: rotateY(${({ $flipped }) => ($flipped ? 180 : 0)}deg);

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const StyledFlipFace = styled.div`
  grid-area: 1 / 1;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  /* isolate + own compositing layer so filtered/blurred descendants (see
     AboutSection's StyledTextCardBackground) can't escape this face's 3D
     context on iOS Safari, which otherwise renders the inactive face as a
     mirrored overlay instead of hiding it */
  isolation: isolate;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  pointer-events: ${({ $active }) => ($active ? "auto" : "none")};

  ${({ $back }) =>
    $back &&
    `
      transform: rotateY(180deg) translateZ(0);
      -webkit-transform: rotateY(180deg) translateZ(0);
    `}
`;

const HeroSection = () => {
  const [mode, setMode] = useState("about");
  const swapRef = useRef(null);

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
    <StyledFlipScene ref={swapRef}>
      <StyledFlipCard $flipped={flipped}>
        <StyledFlipFace $active={!flipped} aria-hidden={flipped}>
          <AboutSection onShowAchievements={() => switchMode("achievements")} />
        </StyledFlipFace>
        <StyledFlipFace $back $active={flipped} aria-hidden={!flipped}>
          <AchievementsSection onBack={() => switchMode("about")} />
        </StyledFlipFace>
      </StyledFlipCard>
    </StyledFlipScene>
  );
};

export default HeroSection;
