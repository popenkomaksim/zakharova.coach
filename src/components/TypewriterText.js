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
  font-weight: ${({ $bold }) => ($bold ? 700 : "inherit")};
  font-style: ${({ $italic }) => ($italic ? "italic" : "inherit")};
  animation: ${letterIn} ${LETTER_ANIMATION_DURATION}s
    cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: ${({ $delay }) => $delay}s;
`;

// Parses **bold** and *italic* markup out of `raw`, returning the plain
// text plus the [start, end) character ranges (positions within the plain
// text) that should render bold/italic.
const parseInlineMarkup = (raw) => {
  const markupPattern = /\*\*(.+?)\*\*|\*(.+?)\*/g;
  let clean = "";
  let lastIndex = 0;
  const boldRanges = [];
  const italicRanges = [];
  let match = markupPattern.exec(raw);
  while (match !== null) {
    clean += raw.slice(lastIndex, match.index);
    const isBold = match[1] !== undefined;
    const content = isBold ? match[1] : match[2];
    const start = clean.length;
    clean += content;
    (isBold ? boldRanges : italicRanges).push([start, clean.length]);
    ({ lastIndex } = markupPattern);
    match = markupPattern.exec(raw);
  }
  clean += raw.slice(lastIndex);
  return { clean, boldRanges, italicRanges };
};

const isWithinRanges = (index, ranges) =>
  ranges.some(([start, end]) => index >= start && index < end);

const TypewriterText = ({
  text,
  startDelay = 0,
  step = 0.035 / 3,
  as: Component = "span",
}) => {
  const { clean, boldRanges, italicRanges } = useMemo(
    () => parseInlineMarkup(text),
    [text]
  );

  const words = useMemo(() => {
    let letterIndex = 0;
    return clean.split(" ").map((word, wordIndex) => {
      const wordStart = letterIndex;
      const absoluteStart = wordStart + wordIndex;
      letterIndex += word.length;
      return { word, wordStart, absoluteStart };
    });
  }, [clean]);

  const totalLetters = useMemo(() => clean.replace(/ /g, "").length, [clean]);

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
    return (
      <Component>
        {words.map(({ word, absoluteStart }, wordIndex) => (
          // eslint-disable-next-line react/no-array-index-key
          <Fragment key={wordIndex}>
            {wordIndex > 0 && " "}
            {word.split("").map((char, charIndex) => {
              const absoluteIndex = absoluteStart + charIndex;
              const bold = isWithinRanges(absoluteIndex, boldRanges);
              const italic = isWithinRanges(absoluteIndex, italicRanges);
              if (!bold && !italic) return char;
              const emphasisStyle = {
                fontWeight: bold ? 700 : "inherit",
                fontStyle: italic ? "italic" : "inherit",
              };
              return (
                <span
                  // eslint-disable-next-line react/no-array-index-key
                  key={charIndex}
                  style={emphasisStyle}
                >
                  {char}
                </span>
              );
            })}
          </Fragment>
        ))}
      </Component>
    );
  }

  return (
    <Component>
      {words.map(({ word, wordStart, absoluteStart }, wordIndex) => (
        // eslint-disable-next-line react/no-array-index-key
        <Fragment key={wordIndex}>
          {wordIndex > 0 && " "}
          <StyledWord>
            {word.split("").map((char, charIndex) => {
              const absoluteIndex = absoluteStart + charIndex;
              return (
                <StyledLetter
                  // eslint-disable-next-line react/no-array-index-key
                  key={charIndex}
                  $delay={startDelay + (wordStart + charIndex) * effectiveStep}
                  $bold={isWithinRanges(absoluteIndex, boldRanges)}
                  $italic={isWithinRanges(absoluteIndex, italicRanges)}
                >
                  {char}
                </StyledLetter>
              );
            })}
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
