import styled from "styled-components";
import "@fontsource/montserrat";
import "./App.css";

import { FaTelegram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { List } from "antd";
import { Trans, useTranslation } from "react-i18next";
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

const Contact = () => {
  const { t } = useTranslation();

  return (
    <PageShell>
      <StyledPageRow justify="center">
        <StyledPageTextCol xs={24} md={14}>
          <StyledPageTitle level={2}>{t("contact.title")}</StyledPageTitle>
          <StyledPageParagraph>{t("contact.intro")}</StyledPageParagraph>
          <List size="large">
            <List.Item>
              <StyledIcon as={FaTelegram} size="1.5em" color="#229ED9" />
              <a href="https://telegram.me/ZakharovaPolina">
                {t("contact.telegram")}
              </a>
            </List.Item>
            <List.Item>
              <StyledIcon as={FaWhatsapp} size="1.5em" color="#25D366" />
              <a href="https://wa.me/380633862021">{t("contact.whatsapp")}</a>
            </List.Item>
            <List.Item>
              <StyledIcon as={FaEnvelope} size="1.5em" />
              <a href="mailto:polina.zakharova94@gmail.com">
                {t("contact.email")}
              </a>
            </List.Item>
          </List>
          <StyledPageParagraph>{t("contact.location")}</StyledPageParagraph>
          <StyledPageParagraph>
            <Trans i18nKey="contact.howToStart" components={{ b: <b /> }} />
          </StyledPageParagraph>
          <StyledPageParagraph>{t("contact.responseTime")}</StyledPageParagraph>
        </StyledPageTextCol>
      </StyledPageRow>
    </PageShell>
  );
};

export default Contact;
