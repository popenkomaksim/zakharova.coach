import { useState } from "react";
import "@fontsource/montserrat";
import "./App.css";

import { FaHeart } from "react-icons/fa";
import { Row, Col, Divider, Typography, Image } from "antd";
import Header from "./components/Header";
import NavModal from "./components/NavModal";
import FloatingActions from "./components/FloatingActions";
import useContactRedirects from "./hooks/useContactRedirects";

const About = () => {
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
        <Col lg={8} xl={6}>
          <Image
            src="./polina.jpg"
            style={{ borderRadius: "50%", maxWidth: "75vw" }}
            preview={false}
          />
        </Col>
        <Col xs={24} md={12} style={{ padding: "2em" }}>
          <Typography.Title level={2} style={{ margin: "0 0 0.5em 0" }}>
            Про Поліну Захарову
          </Typography.Title>
          <Typography.Paragraph style={{ fontSize: "1.25em" }}>
            Мене звати Поліна Захарова, я тренер з трейлраннінгу та
            скі-альпінізму, базуюсь у Києві, Україна.
          </Typography.Paragraph>
          <Typography.Paragraph style={{ fontSize: "1.25em" }}>
            Мій шлях у спорт почався ще у 2008 році зі спортивного орієнтування
            та рогейну — з тих пір я бачила цей світ із різних ракурсів. За 18
            років я пробігла десятки тисяч кілометрів, змінила країни, рельєфи й
            формати, але залишилась вірною головному — свободі та драйву.
          </Typography.Paragraph>
          <Typography.Paragraph style={{ fontSize: "1.25em" }}>
            Останні роки я багато займаюся скі-альпінізмом і допомагаю іншим
            спортсменам-аматорам знайти власний ритм і напрямок через
            персоналізовані тренувальні плани, побудовані навколо TrainingPeaks.
          </Typography.Paragraph>
          <Typography.Paragraph style={{ fontSize: "1.25em" }}>
            <b>Досягнення:</b> переможниця Chornohora Sky Marathon (Україна,
            2018, 2019, 2020); переможниця в абсолюті «Bojko Trail» 46 км
            (Україна, 2018).
          </Typography.Paragraph>
          <Typography.Paragraph style={{ fontSize: "1.25em" }}>
            <b>Місія:</b> я створюю програми, що розвивають не лише
            витривалість, а й усвідомлення себе через рух — бути присутнім у
            власному тілі, відчувати його силу й розум.
          </Typography.Paragraph>
          <Typography.Paragraph style={{ fontSize: "1.25em" }}>
            Я працюю дистанційно з клієнтами через TrainingPeaks, тож географія
            співпраці не обмежена — головне спільна мова спілкування та
            готовність тренуватись.
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

export default About;
