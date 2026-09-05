import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Col, Row, Typography } from "antd";
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

const testimonials = [
  {
    photo: "./testimonial_kyrylo.jpeg",
    quote: (
      <>
        Поліна — це тренер, яка реально допомагає досягати цілей, що здавалися
        нереальними. Цього року, завдяки її підготовці взяв участь у своєму
        першому гірському трейлі <strong>Bukotrail</strong>, на який довго не
        наважувався. Крім того, моя участь у забігах з перешкодами{" "}
        <strong>Spartan Race</strong> пройшов не на виснаження, а у по фану.
        Поліна вміє так організувати тренування так, що вони дають реальні
        результати і при цьому не в напряг. Раджу її всім, хто хоче бігати
        ефективно та у задоволення.
      </>
    ),
    name: "Кирило Псасічнюк",
    role: "СЕО продакшн студії",
    company: "Paragon Progency",
  },
  {
    photo: "./testimonial_maksym.jpeg",
    quote: (
      <>
        Тренування з Поліною — це найкраще рішення у моєму біговому шляху!
        Завдяки грамотному підходу та продуманій системі ми не лише покращили
        мої фізичні показники, а й повністю змінили підхід до трейлового бігу.
        Поліна вчить відчувати своє тіло, правильно розподіляти сили на тривалих
        дистанціях і, головне, отримувати задоволення від кожного кілометра.
        Щиро рекомендую всім, хто мріє про гори та нові вершини!
      </>
    ),
    name: "Maksym",
    role: "Software Architect",
    company: "DataArt",
  },
];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);

  const goTo = useCallback((delta) => {
    setIndex(
      (current) => (current + delta + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [index]);

  const testimonial = testimonials[index];

  return (
    <StyledSection>
      <Row justify="center">
        <Col xs={24} xl={20} xxl={16}>
          <StyledTitle level={2}>Відгуки моїх студентів</StyledTitle>
          <StyledCarousel>
            <StyledArrowButton
              type="button"
              aria-label="Попередній відгук"
              onClick={() => goTo(-1)}
            >
              ‹
            </StyledArrowButton>
            <StyledTestimonialWrapper>
              <Testimonial {...testimonial} />
            </StyledTestimonialWrapper>
            <StyledArrowButton
              type="button"
              aria-label="Наступний відгук"
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
