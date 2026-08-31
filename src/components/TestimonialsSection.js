import styled from "styled-components";
import { Col, Row, Typography } from "antd";
import Testimonial from "./Testimonial";

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
];

const TestimonialsSection = () => (
  <StyledSection>
    <Row justify="center">
      <Col xs={24} xl={20} xxl={16}>
        <StyledTitle level={2}>Відгуки моїх студентів</StyledTitle>
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.name} {...testimonial} />
        ))}
      </Col>
    </Row>
  </StyledSection>
);

export default TestimonialsSection;
