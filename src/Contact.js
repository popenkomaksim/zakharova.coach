import styled from "styled-components";
import "@fontsource/montserrat";
import "./App.css";

import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import { Trans, useTranslation } from "react-i18next";
import PageShell from "./components/PageShell";
import StyledOutlineButton from "./components/OutlineButton";
import useContactRedirects from "./hooks/useContactRedirects";
import {
  StyledPageRow,
  StyledPageTextCol,
  StyledPageTitle,
  StyledPageParagraph,
} from "./components/TextPage";

const StyledContactButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  margin: 1.5em 0;

  @media (max-width: 575.98px) {
    flex-direction: column;
  }
`;

const Contact = () => {
  const { t } = useTranslation();
  const { redirectToTelegram, redirectToWhatsup } = useContactRedirects();

  return (
    <PageShell>
      <StyledPageRow justify="center">
        <StyledPageTextCol xs={24} md={14}>
          <StyledPageTitle level={2}>{t("contact.title")}</StyledPageTitle>
          <StyledPageParagraph>{t("contact.intro")}</StyledPageParagraph>
          <StyledContactButtons>
            <StyledOutlineButton onClick={redirectToTelegram}>
              <FaTelegram size="1.3em" color="#229ED9" />
              {t("contact.telegram")}
            </StyledOutlineButton>
            <StyledOutlineButton onClick={redirectToWhatsup}>
              <FaWhatsapp size="1.3em" color="#25D366" />
              {t("contact.whatsapp")}
            </StyledOutlineButton>
          </StyledContactButtons>
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
