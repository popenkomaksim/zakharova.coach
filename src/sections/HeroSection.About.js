import { useState } from "react";
import styled from "styled-components";
import "@fontsource/montserrat";
import "./App.css";

import { Row, Col, Typography, Image } from "antd";
import Header from "../components/Header";
import NavModal from "../components/NavModal";
import FloatingActions from "../components/FloatingActions";
import Footer from "../components/Footer";
import useContactRedirects from "../hooks/useContactRedirects";

const StyledRow = styled(Row)`
  margin: 3em 0;
`;

const StyledPhoto = styled(Image)`
  &&& {
    border-radius: 50%;
    max-width: 75vw;
  }
`;

const StyledTextCol = styled(Col)`
  padding: 2em;
`;

const StyledTitle = styled(Typography.Title)`
  &&& {
    margin: 0 0 0.5em 0;
  }
`;

const StyledParagraph = styled(Typography.Paragraph)`
  &&& {
    font-size: 1.25em;
  }
`;

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
      <StyledRow justify="center">
        <Col lg={8} xl={6}>
          <StyledPhoto src="./polina.jpg" preview={false} />
        </Col>
        <StyledTextCol xs={24} md={12}>
          <StyledTitle level={2}>Про Поліну Захарову</StyledTitle>
          <StyledParagraph>
            Мене звати Поліна Захарова, я тренер з трейлраннінгу та
            скі-альпінізму, базуюсь у Києві, Україна.
          </StyledParagraph>
          <StyledParagraph>
            Мій шлях у спорт почався ще у 2008 році зі спортивного орієнтування
            та рогейну — з тих пір я бачила цей світ із різних ракурсів. За 18
            років я пробігла десятки тисяч кілометрів, змінила країни, рельєфи й
            формати, але залишилась вірною головному — свободі та драйву.
          </StyledParagraph>
          <StyledParagraph>
            Останні роки я багато займаюся скі-альпінізмом і допомагаю іншим
            спортсменам-аматорам знайти власний ритм і напрямок через
            персоналізовані тренувальні плани, побудовані навколо TrainingPeaks.
          </StyledParagraph>
          <StyledParagraph>
            <b>Досягнення:</b> переможниця Chornohora Sky Marathon (Україна,
            2018, 2019, 2020); переможниця в абсолюті «Bojko Trail» 46 км
            (Україна, 2018).
          </StyledParagraph>
          <StyledParagraph>
            <b>Місія:</b> я створюю програми, що розвивають не лише
            витривалість, а й усвідомлення себе через рух — бути присутнім у
            власному тілі, відчувати його силу й розум.
          </StyledParagraph>
          <StyledParagraph>
            Я працюю дистанційно з клієнтами через TrainingPeaks, тож географія
            співпраці не обмежена — головне спільна мова спілкування та
            готовність тренуватись.
          </StyledParagraph>
        </StyledTextCol>
      </StyledRow>

      <Footer />
    </>
  );
};

export default About;
