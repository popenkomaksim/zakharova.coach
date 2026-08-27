import { useState } from "react";
import "@fontsource/montserrat";
import "./App.css";

import { FaHeart, FaTelegram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { Row, Col, Divider, Typography, List } from "antd";
import Header from "./components/Header";
import NavModal from "./components/NavModal";
import FloatingActions from "./components/FloatingActions";
import useContactRedirects from "./hooks/useContactRedirects";

const Contact = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { redirectToTelegram } = useContactRedirects();

  return (
    <>
      <NavModal open={navOpen} onClose={() => setNavOpen(false)} />
      <FloatingActions
        redirectToTelegram={redirectToTelegram}
        onMenuClick={() => setNavOpen(true)}
      />

      <Header />
      <Row justify="center" style={{ margin: "3em 0" }}>
        <Col xs={24} md={14} style={{ padding: "2em" }}>
          <Typography.Title level={2} style={{ margin: "0 0 0.5em 0" }}>
            Контакти
          </Typography.Title>
          <Typography.Paragraph style={{ fontSize: "1.25em" }}>
            Найшвидший спосіб зв&apos;язатися зі мною — написати в Telegram або
            WhatsApp. Я особисто відповідаю на повідомлення в робочі дні.
          </Typography.Paragraph>
          <List size="large">
            <List.Item>
              <FaTelegram
                size="1.5em"
                color="#229ED9"
                style={{ marginRight: "0.5em" }}
              />
              <a href="https://telegram.me/ZakharovaPolina">
                Telegram: @ZakharovaPolina
              </a>
            </List.Item>
            <List.Item>
              <FaWhatsapp
                size="1.5em"
                color="#25D366"
                style={{ marginRight: "0.5em" }}
              />
              <a href="https://wa.me/380633862021">
                WhatsApp: +380 63 386 20 21
              </a>
            </List.Item>
            <List.Item>
              <FaEnvelope size="1.5em" style={{ marginRight: "0.5em" }} />
              <a href="mailto:polina.zakharova94@gmail.com">
                Email: polina.zakharova94@gmail.com
              </a>
            </List.Item>
          </List>
          <Typography.Paragraph style={{ fontSize: "1.25em" }}>
            Я базуюсь у Києві, Україна, але працюю з клієнтами дистанційно через
            TrainingPeaks, тож можу тренувати спортсменів незалежно від їхнього
            місця проживання.
          </Typography.Paragraph>
          <Typography.Paragraph style={{ fontSize: "1.25em" }}>
            <b>Як почати:</b> напиши мені кілька слів про свій досвід і цілі — я
            запропоную формат співпраці (BASIC, EXPERIENCED або PRO) і за
            потреби призначу відеодзвінок для знайомства.
          </Typography.Paragraph>
          <Typography.Paragraph style={{ fontSize: "1.25em" }}>
            Час відповіді: зазвичай впродовж одного робочого дня.
          </Typography.Paragraph>
        </Col>
      </Row>

      <Divider style={{ marginTop: "4em" }}>
        Made with <FaHeart style={{ top: "-0.5em" }} color="#B01E28" /> in Kyiv,
        Ukraine © {new Date().getFullYear()}
      </Divider>
    </>
  );
};

export default Contact;
