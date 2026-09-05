import styled from "styled-components";
import "@fontsource/montserrat";
import "./App.css";

import { Col, Image } from "antd";
import PageShell from "./components/PageShell";
import {
  StyledPageRow,
  StyledPageTextCol,
  StyledPageTitle,
  StyledPageParagraph,
} from "./components/TextPage";

const StyledPhoto = styled(Image)`
  &&& {
    border-radius: 50%;
    max-width: 75vw;
  }
`;

const About = () => (
  <PageShell>
    <StyledPageRow justify="center">
      <Col lg={8} xl={6}>
        <StyledPhoto src="./polina.jpg" preview={false} />
      </Col>
      <StyledPageTextCol xs={24} md={12}>
        <StyledPageTitle level={2}>Про Поліну Захарову</StyledPageTitle>
        <StyledPageParagraph>
          Мене звати Поліна Захарова, я тренер з трейлраннінгу та
          скі-альпінізму, базуюсь у Києві, Україна.
        </StyledPageParagraph>
        <StyledPageParagraph>
          Мій шлях у спорт почався ще у 2008 році зі спортивного орієнтування та
          рогейну — з тих пір я бачила цей світ із різних ракурсів. За 18 років
          я пробігла десятки тисяч кілометрів, змінила країни, рельєфи й
          формати, але залишилась вірною головному — свободі та драйву.
        </StyledPageParagraph>
        <StyledPageParagraph>
          Останні роки я багато займаюся скі-альпінізмом і допомагаю іншим
          спортсменам-аматорам знайти власний ритм і напрямок через
          персоналізовані тренувальні плани, побудовані навколо TrainingPeaks.
        </StyledPageParagraph>
        <StyledPageParagraph>
          <b>Досягнення:</b> переможниця Chornohora Sky Marathon (Україна, 2018,
          2019, 2020); переможниця в абсолюті «Bojko Trail» 46 км (Україна,
          2018).
        </StyledPageParagraph>
        <StyledPageParagraph>
          <b>Місія:</b> я створюю програми, що розвивають не лише витривалість,
          а й усвідомлення себе через рух — бути присутнім у власному тілі,
          відчувати його силу й розум.
        </StyledPageParagraph>
        <StyledPageParagraph>
          Я працюю дистанційно з клієнтами через TrainingPeaks, тож географія
          співпраці не обмежена — головне спільна мова спілкування та готовність
          тренуватись.
        </StyledPageParagraph>
      </StyledPageTextCol>
    </StyledPageRow>
  </PageShell>
);

export default About;
