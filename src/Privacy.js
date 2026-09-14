import styled from "styled-components";
import "@fontsource/montserrat";
import "./App.css";

import { Typography } from "antd";
import { Trans, useTranslation } from "react-i18next";
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

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <PageShell>
      <StyledPageRow justify="center">
        <StyledPageTextCol xs={24} md={16}>
          <StyledTitle level={2}>{t("privacy.title")}</StyledTitle>
          <Typography.Text type="secondary">
            {t("privacy.lastUpdated")}
          </Typography.Text>

          <StyledFirstParagraph>{t("privacy.intro")}</StyledFirstParagraph>
          <StyledParagraph>
            <Trans i18nKey="privacy.analytics" components={{ b: <b /> }} />
          </StyledParagraph>
          <StyledParagraph>
            <Trans i18nKey="privacy.communication" components={{ b: <b /> }} />
          </StyledParagraph>
          <StyledParagraph>
            <Trans i18nKey="privacy.trainingData" components={{ b: <b /> }} />
          </StyledParagraph>
          <StyledParagraph>
            <Trans i18nKey="privacy.calendar" components={{ b: <b /> }} />
          </StyledParagraph>
          <StyledParagraph>
            <Trans
              i18nKey="privacy.rights"
              components={{
                b: <b />,
                email: (
                  <a href="mailto:polina.zakharova94@gmail.com">
                    polina.zakharova94@gmail.com
                  </a>
                ),
              }}
            />
          </StyledParagraph>
          <StyledParagraph>
            <Trans i18nKey="privacy.changes" components={{ b: <b /> }} />
          </StyledParagraph>
        </StyledPageTextCol>
      </StyledPageRow>
    </PageShell>
  );
};

export default Privacy;
