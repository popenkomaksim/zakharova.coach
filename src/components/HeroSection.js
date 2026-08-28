import PropTypes from "prop-types";
import { Col, Row, Typography, Image, Button } from "antd";
import ContactIcons from "./ContactIcons";

const HeroSection = ({ redirectToTelegram, redirectToWhatsup }) => (
  <Row justify="center" id="about" style={{ margin: "3em 0" }}>
    <Col lg={6} xl={6}>
      <Image
        src="./Polina_Casual.png"
        style={{ maxWidth: "75vw" }}
        preview={false}
      />
    </Col>
    <Col lg={12} xs={22} md={12} style={{ padding: "0 2em 0 2em" }}>
      <Typography.Title level={2} style={{ margin: "0 0 0.5em 0" }}>
        Вітаю. Я — Поліна.
      </Typography.Title>
      <Typography.Paragraph style={{ fontSize: "1.5em" }}>
        Мене неможливо уявити без гір, лісу й відкритого простору.
      </Typography.Paragraph>
      <Typography.Paragraph style={{ fontSize: "1.5em" }}>
        Мій шлях у спорт почався ще у 2008 році із спортивного орієнтування та
        рогейну — з тих пір я бачила цей світ із різних ракурсів.
      </Typography.Paragraph>
      <Typography.Paragraph style={{ fontSize: "1.5em" }}>
        За 18 років я пробігла десятки тисяч кілометрів, змінила країни, рельєфи
        й формати, але залишилась вірною головному — свободі та драйву.
      </Typography.Paragraph>
      <Typography.Paragraph style={{ fontSize: "1.5em" }}>
        Сьогодні я тренер, багато років займаюся скі-альпінізмом і допомагаю
        іншим знайти власний ритм й напрямок.
      </Typography.Paragraph>
      <Typography.Paragraph style={{ fontSize: "1.5em" }}>
        Я створюю програми, що розвивають не лише витривалість, а й усвідомлення
        себе через рух. Бути присутнім у власному тілі, відчувати його силу й
        розум.
      </Typography.Paragraph>
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
    </Col>
  </Row>
);

HeroSection.propTypes = {
  redirectToTelegram: PropTypes.func.isRequired,
  redirectToWhatsup: PropTypes.func.isRequired,
};

export default HeroSection;
