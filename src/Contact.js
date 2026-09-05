import styled from "styled-components";
import "@fontsource/montserrat";
import "./App.css";

import { FaTelegram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { List } from "antd";
import PageShell from "./components/PageShell";
import {
  StyledPageRow,
  StyledPageTextCol,
  StyledPageTitle,
  StyledPageParagraph,
} from "./components/TextPage";

const StyledIcon = styled.span`
  margin-right: 0.5em;
`;

const Contact = () => (
  <PageShell>
    <StyledPageRow justify="center">
      <StyledPageTextCol xs={24} md={14}>
        <StyledPageTitle level={2}>Контакти</StyledPageTitle>
        <StyledPageParagraph>
          Найшвидший спосіб зв&apos;язатися зі мною — написати в Telegram або
          WhatsApp. Я особисто відповідаю на повідомлення в робочі дні.
        </StyledPageParagraph>
        <List size="large">
          <List.Item>
            <StyledIcon as={FaTelegram} size="1.5em" color="#229ED9" />
            <a href="https://telegram.me/ZakharovaPolina">
              Telegram: @ZakharovaPolina
            </a>
          </List.Item>
          <List.Item>
            <StyledIcon as={FaWhatsapp} size="1.5em" color="#25D366" />
            <a href="https://wa.me/380633862021">WhatsApp: +380 63 386 20 21</a>
          </List.Item>
          <List.Item>
            <StyledIcon as={FaEnvelope} size="1.5em" />
            <a href="mailto:polina.zakharova94@gmail.com">
              Email: polina.zakharova94@gmail.com
            </a>
          </List.Item>
        </List>
        <StyledPageParagraph>
          Я базуюсь у Києві, Україна, але працюю з клієнтами дистанційно через
          TrainingPeaks, тож можу тренувати спортсменів незалежно від їхнього
          місця проживання.
        </StyledPageParagraph>
        <StyledPageParagraph>
          <b>Як почати:</b> напиши мені кілька слів про свій досвід і цілі — я
          запропоную формат співпраці (BASIC, EXPERIENCED або PRO) і за потреби
          призначу відеодзвінок для знайомства.
        </StyledPageParagraph>
        <StyledPageParagraph>
          Час відповіді: зазвичай впродовж одного робочого дня.
        </StyledPageParagraph>
      </StyledPageTextCol>
    </StyledPageRow>
  </PageShell>
);

export default Contact;
