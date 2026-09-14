import styled from "styled-components";
import "@fontsource/montserrat";
import "./App.css";

import { Col, Image } from "antd";
import { Trans, useTranslation } from "react-i18next";
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

const About = () => {
  const { t } = useTranslation();

  return (
    <PageShell>
      <StyledPageRow justify="center">
        <Col lg={8} xl={6}>
          <StyledPhoto
            src="./polina.jpg"
            preview={false}
            alt={t("about.title")}
          />
        </Col>
        <StyledPageTextCol xs={24} md={12}>
          <StyledPageTitle level={2}>{t("about.title")}</StyledPageTitle>
          <StyledPageParagraph>{t("about.p1")}</StyledPageParagraph>
          <StyledPageParagraph>{t("about.p2")}</StyledPageParagraph>
          <StyledPageParagraph>{t("about.p3")}</StyledPageParagraph>
          <StyledPageParagraph>
            <Trans i18nKey="about.achievements" components={{ b: <b /> }} />
          </StyledPageParagraph>
          <StyledPageParagraph>
            <Trans i18nKey="about.mission" components={{ b: <b /> }} />
          </StyledPageParagraph>
          <StyledPageParagraph>{t("about.p4")}</StyledPageParagraph>
        </StyledPageTextCol>
      </StyledPageRow>
    </PageShell>
  );
};

export default About;
