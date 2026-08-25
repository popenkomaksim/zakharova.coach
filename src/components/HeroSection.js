import PropTypes from "prop-types";
import styled from "styled-components";
import { Col, Row, Divider, Typography, Image, Button } from "antd";
import { FaInstagram } from "react-icons/fa";
import ContactIcons from "./ContactIcons";

const StyledInstagram = styled(FaInstagram)`
  margin: 0 0.5em;
  top: -0.4em;
  vertical-align: middle;
`;

const HeroSection = ({ redirectToTelegram, redirectToWhatsup }) => (
  <>
    <Row justify="center" id="about">
      <Col lg={12} xl={12}>
        <Typography.Title
          level={1}
          style={{
            margin: "0.25em",
            textAlign: "center",
            color: "rgb(59 59 59 / 88%)",
          }}
        >
          Вітання 👋
        </Typography.Title>
      </Col>
    </Row>
    <Row justify="center">
      <Col lg={8} xl={6}>
        <Image
          src="./polina.jpg"
          style={{ borderRadius: "50%", maxWidth: "75vw" }}
          preview={false}
        />
      </Col>
      <Col xs={24} md={12} style={{ padding: "2em" }}>
        <Typography.Paragraph style={{ fontSize: "1.75em" }}>
          Я Поліна Захарова &mdash; тренер та професійний атлет. І я не уявляю
          життя без лісу та гір. Значну частину своєї спортивної кар&apos;єри я
          присвятила орієнтуванню та рогейну.
        </Typography.Paragraph>
        <Typography.Paragraph style={{ fontSize: "1.75em" }}>
          Останні 6 років перелік моїх спортивних вподобань значно розширився -
          я насолождуюсь скі-альпінізмом, трейловим бігом та ділюсь цією
          пристрастю зі своіми учнями. 15 років досвіду, десятки тисяч
          кілометрів, набіганих по всьому світу, впевнили мене в тому, що трейл
          - це свобода.
        </Typography.Paragraph>
        <Divider orientation="left" id="contacts">
          Партнери:
        </Divider>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://travel-extreme.com.ua/torq/"
        >
          <Image src="./Torq-logo-square.webp" preview={false} width="100px" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.x-zone.com.ua/ua/proizvoditeli/kailas.html"
        >
          <Image src="./kailas_logo.png" preview={false} width="100px" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.x-zone.com.ua/">
          <Image src="./xzone.png" preview={false} width="100px" />
        </a>
        <Divider orientation="left" id="contacts">
          Контакти:
        </Divider>
        <ContactIcons
          redirectToTelegram={redirectToTelegram}
          redirectToWhatsup={redirectToWhatsup}
        />
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/polina.zakharova94/"
        >
          <StyledInstagram size="4em" color="#8a3ab9" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://utmb.world/runner/2176979.polina.zakharova"
          style={{ fontSize: "3.5em", position: "absolute" }}
        >
          UTMB
        </a>
      </Col>
    </Row>
    <Row justify="center" style={{ margin: "2em 1em" }}>
      <Col style={{ textAlign: "center" }}>
        <Button onClick={redirectToTelegram} danger size="large">
          Почати тренуватись зі мною
        </Button>
      </Col>
    </Row>

    <Image
      src="./Grand_Canyon_Panorama.jpeg"
      preview={false}
      style={{ margin: "3vh 0 0 0", filter: "grayscale(1)" }}
    />
  </>
);

HeroSection.propTypes = {
  redirectToTelegram: PropTypes.func.isRequired,
  redirectToWhatsup: PropTypes.func.isRequired,
};

export default HeroSection;
