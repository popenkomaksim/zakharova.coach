import { Fragment, useMemo } from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

const letterIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(0.4em);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledWord = styled.span`
  display: inline-block;
  white-space: nowrap;
`;

const LETTER_ANIMATION_DURATION = 0.55;
const TOTAL_ANIMATION_BUDGET = 1.2;

const StyledLetter = styled.span`
  display: inline-block;
  animation: ${letterIn} ${LETTER_ANIMATION_DURATION}s
    cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: ${({ $delay }) => $delay}s;
`;

const TypewriterText = ({
  text,
  startDelay = 0,
  step = 0.035 / 3,
  as: Component = "span",
}) => {
  const words = useMemo(() => {
    let letterIndex = 0;
    return text.split(" ").map((word) => {
      const wordStart = letterIndex;
      letterIndex += word.length;
      return { word, wordStart };
    });
  }, [text]);

  const totalLetters = useMemo(() => text.replace(/ /g, "").length, [text]);

  // Cap the last letter's delay so the whole animation always finishes
  // within TOTAL_ANIMATION_BUDGET, regardless of text length.
  const effectiveStep = useMemo(() => {
    if (totalLetters <= 1) return step;
    const budget =
      TOTAL_ANIMATION_BUDGET - startDelay - LETTER_ANIMATION_DURATION;
    if (budget <= 0) return 0;
    return Math.min(step, budget / (totalLetters - 1));
  }, [step, totalLetters, startDelay]);

  if (prefersReducedMotion()) {
    return <Component>{text}</Component>;
  }

  return (
    <Component>
      {words.map(({ word, wordStart }, wordIndex) => (
        // eslint-disable-next-line react/no-array-index-key
        <Fragment key={wordIndex}>
          {wordIndex > 0 && " "}
          <StyledWord>
            {word.split("").map((char, charIndex) => (
              <StyledLetter
                // eslint-disable-next-line react/no-array-index-key
                key={charIndex}
                $delay={startDelay + (wordStart + charIndex) * effectiveStep}
              >
                {char}
              </StyledLetter>
            ))}
          </StyledWord>
        </Fragment>
      ))}
    </Component>
  );
};

TypewriterText.propTypes = {
  text: PropTypes.string.isRequired,
  startDelay: PropTypes.number,
  step: PropTypes.number,
  as: PropTypes.elementType,
};

export default TypewriterText;
