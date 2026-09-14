import { useCallback, useEffect, useMemo, useState, useRef } from "react";
import styled from "styled-components";
import { Col, Row, Typography } from "antd";
import { Trans, useTranslation } from "react-i18next";
import Testimonial from "../components/Testimonial";

const AUTO_ADVANCE_MS = 13069;
const SWIPE_THRESHOLD_PX = 50;

const shuffle = (array) => {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

const StyledSection = styled.div`
  width: 100%;
  background: #0d0d0d;
  padding: 3em 1.5em;
  box-sizing: border-box;
  margin: 2em 0;
`;

const StyledTitle = styled(Typography.Title)`
  &&& {
    color: #fff;
    margin: 0 0 1.5em 0;
  }
`;

const StyledCarousel = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

const StyledTestimonialWrapper = styled.div`
  flex: 1;
  min-width: 0;
  display: grid;
  touch-action: pan-y;
`;

/*
 * All testimonials are stacked in the same grid cell at all times (rather
 * than swapped in/out of the DOM), so the grid track sizes to the tallest
 * one and the section never jumps when the active slide changes - it's a
 * pure CSS crossfade, not a height that has to be measured/predicted in JS.
 */
const StyledTestimonialSlide = styled.div`
  grid-area: 1 / 1;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transform: translateX(
    ${({ $active, $direction }) => ($active ? 0 : $direction * 24)}px
  );
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
  pointer-events: ${({ $active }) => ($active ? "auto" : "none")};
`;

const StyledArrowButton = styled.button`
  flex: 0 0 auto;
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: transparent;
  color: #fff;
  font-size: 1.4em;
  line-height: 1;
  cursor: pointer;
  transition: background 0.2s ease-out;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 575.98px) {
    display: none;
  }
`;

const StyledDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.6em;
  margin-top: 1.5em;
`;

const StyledDot = styled.button`
  width: 0.6em;
  height: 0.6em;
  border-radius: 50%;
  border: none;
  padding: 0;
  cursor: pointer;
  background: ${({ $active }) =>
    $active ? "#fff" : "rgba(255, 255, 255, 0.35)"};
  transition: background 0.2s ease-out;
`;

const TestimonialsSection = () => {
  const { t } = useTranslation();

  const testimonials = useMemo(
    () => [
      {
        photo: "./testimonial_kyrylo.jpeg",
        quote: (
          <Trans
            i18nKey="testimonialsSection.kyrylo.quote"
            components={{ strong: <strong /> }}
          />
        ),
        name: t("testimonialsSection.kyrylo.name"),
        role: t("testimonialsSection.kyrylo.role"),
        company: t("testimonialsSection.kyrylo.company"),
      },
      {
        photo: "./testimonial_maksym.jpeg",
        quote: (
          <Trans
            i18nKey="testimonialsSection.maksym.quote"
            components={{ strong: <strong /> }}
          />
        ),
        name: t("testimonialsSection.maksym.name"),
        role: t("testimonialsSection.maksym.role"),
        company: t("testimonialsSection.maksym.company"),
      },
    ],
    [t]
  );

  const testimonialsCount = testimonials.length;

  // Randomised once per page load, independent of language switches.
  const [order] = useState(() =>
    shuffle(Array.from({ length: testimonialsCount }, (_, i) => i))
  );
  const orderedTestimonials = useMemo(
    () => order.map((i) => testimonials[i]),
    [order, testimonials]
  );

  const [displayIndex, setDisplayIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (delta) => {
      setDirection(delta > 0 ? 1 : -1);
      setDisplayIndex(
        (current) => (current + delta + testimonialsCount) % testimonialsCount
      );
    },
    [testimonialsCount]
  );

  useEffect(() => {
    const timer = setInterval(() => goTo(1), AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [goTo]);

  const touchStartXRef = useRef(null);

  const handleTouchStart = (event) => {
    touchStartXRef.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartXRef.current === null) return;
    const deltaX = event.changedTouches[0].clientX - touchStartXRef.current;
    touchStartXRef.current = null;
    if (Math.abs(deltaX) < SWIPE_THRESHOLD_PX) return;
    goTo(deltaX < 0 ? 1 : -1);
  };

  return (
    <StyledSection>
      <Row justify="center">
        <Col xs={24} xl={20} xxl={16}>
          <StyledTitle level={2}>{t("testimonialsSection.title")}</StyledTitle>
          <StyledCarousel>
            <StyledArrowButton
              type="button"
              aria-label={t("testimonialsSection.prevAria")}
              onClick={() => goTo(-1)}
            >
              ‹
            </StyledArrowButton>
            <StyledTestimonialWrapper
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {orderedTestimonials.map((item, i) => (
                <StyledTestimonialSlide
                  key={item.name}
                  $active={i === displayIndex}
                  $direction={direction}
                  aria-hidden={i !== displayIndex}
                >
                  <Testimonial {...item} />
                </StyledTestimonialSlide>
              ))}
            </StyledTestimonialWrapper>
            <StyledArrowButton
              type="button"
              aria-label={t("testimonialsSection.nextAria")}
              onClick={() => goTo(1)}
            >
              ›
            </StyledArrowButton>
          </StyledCarousel>
          <StyledDots>
            {orderedTestimonials.map((item, i) => (
              <StyledDot
                key={item.name}
                type="button"
                $active={i === displayIndex}
                aria-label={t("testimonialsSection.dotAria", {
                  index: i + 1,
                })}
                onClick={() => goTo(i - displayIndex)}
              />
            ))}
          </StyledDots>
        </Col>
      </Row>
    </StyledSection>
  );
};

export default TestimonialsSection;
