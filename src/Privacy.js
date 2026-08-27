import { useState } from "react";
import "@fontsource/montserrat";
import "./App.css";

import { FaHeart } from "react-icons/fa";
import { Row, Col, Divider, Typography } from "antd";
import Header from "./components/Header";
import NavModal from "./components/NavModal";
import FloatingActions from "./components/FloatingActions";
import useContactRedirects from "./hooks/useContactRedirects";

const Privacy = () => {
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
        <Col xs={24} md={16} style={{ padding: "2em" }}>
          <Typography.Title level={2} style={{ margin: "0 0 0.25em 0" }}>
            Політика конфіденційності
          </Typography.Title>
          <Typography.Text type="secondary">
            Останнє оновлення: 27 серпня 2026 р.
          </Typography.Text>

          <Typography.Paragraph
            style={{ fontSize: "1.15em", marginTop: "1.5em" }}
          >
            Цей сайт (zakharova.coach) належить Поліні Захаровій і
            використовується для представлення тренерських послуг з
            трейлраннінгу та скі-альпінізму. На сайті немає форм реєстрації чи
            оформлення замовлення, тож ми не збираємо персональні дані напряму
            через сайт.
          </Typography.Paragraph>
          <Typography.Paragraph style={{ fontSize: "1.15em" }}>
            <b>Аналітика та реклама.</b> Сайт використовує Google Analytics та
            Google Ads (gtag.js) для аналізу відвідуваності й ефективності
            реклами. Ці сервіси можуть встановлювати файли cookie та обробляти
            знеособлені технічні дані (IP-адреса, тип пристрою, взаємодія зі
            сторінкою) відповідно до власної політики конфіденційності Google.
          </Typography.Paragraph>
          <Typography.Paragraph style={{ fontSize: "1.15em" }}>
            <b>Зв&apos;язок.</b> Якщо ти звертаєшся через Telegram, WhatsApp або
            електронну пошту, повідомлення обробляються відповідно до політик
            конфіденційності цих сервісів (Telegram, WhatsApp/Meta, поштового
            провайдера), а не зберігаються на цьому сайті.
          </Typography.Paragraph>
          <Typography.Paragraph style={{ fontSize: "1.15em" }}>
            <b>Тренувальні дані.</b> Якщо ти стаєш моїм клієнтом, дані про
            тренування, здоров&apos;я та цільові старти ведуться в TrainingPeaks
            — окремому сервісі зі своєю політикою конфіденційності. Цей сайт не
            має доступу до цих даних і не зберігає їх.
          </Typography.Paragraph>
          <Typography.Paragraph style={{ fontSize: "1.15em" }}>
            <b>Календар подій.</b> Сторінка /calendar відображає публічний
            Google-календар і не збирає жодних даних відвідувачів.
          </Typography.Paragraph>
          <Typography.Paragraph style={{ fontSize: "1.15em" }}>
            <b>Твої права.</b> Ти можеш у будь-який момент попросити видалити
            повідомлення чи дані, надіслані мені особисто, написавши на{" "}
            <a href="mailto:polina.zakharova94@gmail.com">
              polina.zakharova94@gmail.com
            </a>
            .
          </Typography.Paragraph>
          <Typography.Paragraph style={{ fontSize: "1.15em" }}>
            <b>Зміни політики.</b> Цю сторінку може бути оновлено з часом; дата
            останнього оновлення вказана вгорі.
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

export default Privacy;
