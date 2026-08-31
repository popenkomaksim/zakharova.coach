import PropTypes from "prop-types";
import styled from "styled-components";
import { Col, Row, Typography, Image, Button } from "antd";
import ContactIcons from "./ContactIcons";

const StyledTextCol = styled(Col)`
  padding: 0 2em;
  @media (max-width: 575.98px) {
    padding: 0;
  }
`;

const StyledTextCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 1.5em;
  box-shadow: 0 0.5em 6em rgba(0, 0, 0, 0.12);
  padding: 1.5em;
`;

const StyledTextCardBackground = styled.div`
  position: absolute;
  inset: 12%;
  background: rgba(255, 255, 255, 0.85);
  filter: blur(4em);
  z-index: -1;
`;

const HeroSection = ({ redirectToTelegram, redirectToWhatsup }) => (
  <Row justify="center" id="about" style={{ margin: "3em 0" }}>
    <Col lg={6} xl={6}>
      <Image
        src="./Polina_Casual.jpeg"
        style={{ maxWidth: "80vw" }}
        preview={false}
      />
    </Col>
    <StyledTextCol lg={12} xs={22} md={12}>
      <StyledTextCard>
        <StyledTextCardBackground />
        <Typography.Title
          level={2}
          style={{ margin: "0 0 0.5em 0", fontSize: "2.25em" }}
        >
          Вітаю. Я — Поліна.
        </Typography.Title>
        <Typography.Paragraph style={{ fontSize: "1.8em" }}>
          Мене неможливо уявити без гір, лісу й відкритого простору.
        </Typography.Paragraph>
        <Typography.Paragraph style={{ fontSize: "1.8em" }}>
          Мій шлях у спорт почався ще у 2008 році із спортивного орієнтування та
          рогейну — з тих пір я бачила цей світ із різних ракурсів.
        </Typography.Paragraph>
        <Typography.Paragraph style={{ fontSize: "1.8em" }}>
          За 18 років я пробігла десятки тисяч кілометрів, змінила країни,
          рельєфи й формати, але залишилась вірною головному — свободі та
          драйву.
        </Typography.Paragraph>
        <Typography.Paragraph style={{ fontSize: "1.8em" }}>
          Сьогодні я тренер, багато років займаюся скі-альпінізмом і допомагаю
          іншим знайти власний ритм й напрямок.
        </Typography.Paragraph>
        <Typography.Paragraph style={{ fontSize: "1.8em" }}>
          Я створюю програми, що розвивають не лише витривалість, а й
          усвідомлення себе через рух. Бути присутнім у власному тілі, відчувати
          його силу й розум.
        </Typography.Paragraph>
      </StyledTextCard>
      <div id="contacts" style={{ marginTop: "1.5em" }}>
        <ContactIcons
          redirectToTelegram={redirectToTelegram}
          redirectToWhatsup={redirectToWhatsup}
        />
      </div>
      <Row justify="start" style={{ marginTop: "1.5em" }}>
        <Button onClick={redirectToTelegram} danger size="large">
          Почати тренуватись зі мною
        </Button>
      </Row>
    </StyledTextCol>
  </Row>
);

HeroSection.propTypes = {
  redirectToTelegram: PropTypes.func.isRequired,
  redirectToWhatsup: PropTypes.func.isRequired,
};

export default HeroSection;
