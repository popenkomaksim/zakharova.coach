import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

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

  return <Component>{text.slice(0, visibleChars)}</Component>;
};

TypewriterText.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number,
  as: PropTypes.elementType,
};

export default TypewriterText;
