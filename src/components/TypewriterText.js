import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledChar = styled.span`
  display: inline-block;
  white-space: pre;
  animation: ${fadeIn} 0.25s ease-out;
`;

const TypewriterText = ({ text, speed = 18, as: Component = "span" }) => {
  const initialVisibleChars = prefersReducedMotion() ? text.length : 0;
  const [visibleChars, setVisibleChars] = useState(initialVisibleChars);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setVisibleChars(text.length);
      return undefined;
    }

    setVisibleChars(0);
    intervalRef.current = setInterval(() => {
      setVisibleChars((current) => {
        if (current >= text.length) {
          clearInterval(intervalRef.current);
          return current;
        }
        return current + 1;
      });
    }, speed);

    return () => clearInterval(intervalRef.current);
  }, [text, speed]);

  if (prefersReducedMotion()) {
    return <Component>{text}</Component>;
  }

  return (
    <Component>
      {text
        .slice(0, visibleChars)
        .split("")
        .map((char, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <StyledChar key={index}>{char}</StyledChar>
        ))}
    </Component>
  );
};

TypewriterText.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number,
  as: PropTypes.elementType,
};

export default TypewriterText;
