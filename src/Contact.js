import { useState } from "react";
import styled from "styled-components";
import "@fontsource/montserrat";
import "./App.css";

import { FaTelegram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { Row, Col, Typography, List } from "antd";
import Header from "./components/Header";
import NavModal from "./components/NavModal";
import FloatingActions from "./components/FloatingActions";
import Footer from "./components/Footer";
import useContactRedirects from "./hooks/useContactRedirects";

const StyledRow = styled(Row)`
  margin: 3em 0;
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

const StyledIcon = styled.span`
  margin-right: 0.5em;
`;

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
      <StyledRow justify="center">
        <StyledTextCol xs={24} md={14}>
          <StyledTitle level={2}>Контакти</StyledTitle>
          <StyledParagraph>
            Найшвидший спосіб зв&apos;язатися зі мною — написати в Telegram або
            WhatsApp. Я особисто відповідаю на повідомлення в робочі дні.
          </StyledParagraph>
          <List size="large">
            <List.Item>
              <StyledIcon as={FaTelegram} size="1.5em" color="#229ED9" />
              <a href="https://telegram.me/ZakharovaPolina">
                Telegram: @ZakharovaPolina
              </a>
            </List.Item>
            <List.Item>
              <StyledIcon as={FaWhatsapp} size="1.5em" color="#25D366" />
              <a href="https://wa.me/380633862021">
                WhatsApp: +380 63 386 20 21
              </a>
            </List.Item>
            <List.Item>
              <StyledIcon as={FaEnvelope} size="1.5em" />
              <a href="mailto:polina.zakharova94@gmail.com">
                Email: polina.zakharova94@gmail.com
              </a>
            </List.Item>
          </List>
          <StyledParagraph>
            Я базуюсь у Києві, Україна, але працюю з клієнтами дистанційно через
            TrainingPeaks, тож можу тренувати спортсменів незалежно від їхнього
            місця проживання.
          </StyledParagraph>
          <StyledParagraph>
            <b>Як почати:</b> напиши мені кілька слів про свій досвід і цілі — я
            запропоную формат співпраці (BASIC, EXPERIENCED або PRO) і за
            потреби призначу відеодзвінок для знайомства.
          </StyledParagraph>
          <StyledParagraph>
            Час відповіді: зазвичай впродовж одного робочого дня.
          </StyledParagraph>
        </StyledTextCol>
      </StyledRow>

      <Footer />
    </>
  );
};

export default Contact;
