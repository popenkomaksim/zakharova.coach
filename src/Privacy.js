import styled from "styled-components";
import "@fontsource/montserrat";
import "./App.css";

import { Typography } from "antd";
import PageShell from "./components/PageShell";
import { StyledPageRow, StyledPageTextCol } from "./components/TextPage";

const StyledTitle = styled(Typography.Title)`
  &&& {
    margin: 0 0 0.25em 0;
  }
`;

const StyledParagraph = styled(Typography.Paragraph)`
  &&& {
    font-size: 1.15em;
  }
`;

const StyledFirstParagraph = styled(StyledParagraph)`
  &&& {
    margin-top: 1.5em;
  }
`;

const Privacy = () => (
  <PageShell>
    <StyledPageRow justify="center">
      <StyledPageTextCol xs={24} md={16}>
        <StyledTitle level={2}>Політика конфіденційності</StyledTitle>
        <Typography.Text type="secondary">
          Останнє оновлення: 27 серпня 2026 р.
        </Typography.Text>

        <StyledFirstParagraph>
          Цей сайт (zakharova.coach) належить Поліні Захаровій і
          використовується для представлення тренерських послуг з трейлраннінгу
          та скі-альпінізму. На сайті немає форм реєстрації чи оформлення
          замовлення, тож ми не збираємо персональні дані напряму через сайт.
        </StyledFirstParagraph>
        <StyledParagraph>
          <b>Аналітика та реклама.</b> Сайт використовує Google Analytics та
          Google Ads (gtag.js) для аналізу відвідуваності й ефективності
          реклами. Ці сервіси можуть встановлювати файли cookie та обробляти
          знеособлені технічні дані (IP-адреса, тип пристрою, взаємодія зі
          сторінкою) відповідно до власної політики конфіденційності Google.
        </StyledParagraph>
        <StyledParagraph>
          <b>Зв&apos;язок.</b> Якщо ти звертаєшся через Telegram, WhatsApp або
          електронну пошту, повідомлення обробляються відповідно до політик
          конфіденційності цих сервісів (Telegram, WhatsApp/Meta, поштового
          провайдера), а не зберігаються на цьому сайті.
        </StyledParagraph>
        <StyledParagraph>
          <b>Тренувальні дані.</b> Якщо ти стаєш моїм клієнтом, дані про
          тренування, здоров&apos;я та цільові старти ведуться в TrainingPeaks —
          окремому сервісі зі своєю політикою конфіденційності. Цей сайт не має
          доступу до цих даних і не зберігає їх.
        </StyledParagraph>
        <StyledParagraph>
          <b>Календар подій.</b> Сторінка /calendar відображає публічний
          Google-календар і не збирає жодних даних відвідувачів.
        </StyledParagraph>
        <StyledParagraph>
          <b>Твої права.</b> Ти можеш у будь-який момент попросити видалити
          повідомлення чи дані, надіслані мені особисто, написавши на{" "}
          <a href="mailto:polina.zakharova94@gmail.com">
            polina.zakharova94@gmail.com
          </a>
          .
        </StyledParagraph>
        <StyledParagraph>
          <b>Зміни політики.</b> Цю сторінку може бути оновлено з часом; дата
          останнього оновлення вказана вгорі.
        </StyledParagraph>
      </StyledPageTextCol>
    </StyledPageRow>
  </PageShell>
);

export default Privacy;
