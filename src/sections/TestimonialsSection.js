import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Col, Row, Typography } from "antd";
import { Trans, useTranslation } from "react-i18next";
import Testimonial from "../components/Testimonial";

const AUTO_ADVANCE_MS = 7000;

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
`;

const TESTIMONIALS_COUNT = 2;

const TestimonialsSection = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  const testimonials = [
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
  ];

  const goTo = useCallback((delta) => {
    setIndex(
      (current) => (current + delta + TESTIMONIALS_COUNT) % TESTIMONIALS_COUNT
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % TESTIMONIALS_COUNT);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[index];

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
            <StyledTestimonialWrapper>
              <Testimonial {...testimonial} />
            </StyledTestimonialWrapper>
            <StyledArrowButton
              type="button"
              aria-label={t("testimonialsSection.nextAria")}
              onClick={() => goTo(1)}
            >
              ›
            </StyledArrowButton>
          </StyledCarousel>
        </Col>
      </Row>
    </StyledSection>
  );
};

export default TestimonialsSection;
