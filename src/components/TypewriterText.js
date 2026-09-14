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

const StyledLetter = styled.span`
  display: inline-block;
  animation: ${letterIn} 0.55s cubic-bezier(0.16, 1, 0.3, 1) both;
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
                $delay={startDelay + (wordStart + charIndex) * step}
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
