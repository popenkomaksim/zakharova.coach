import PropTypes from "prop-types";
import styled from "styled-components";
import { Col, Row, Typography, Image } from "antd";
import { FaArrowRightLong } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import StyledMoreButton from "../components/OutlineButton";

const StyledAboutRow = styled(Row)`
  margin: 3em 0;
`;

const StyledDesktopImage = styled(Image)`
  &&& {
    max-width: 80vw;
  }
`;

const StyledSectionTitle = styled(Typography.Title)`
  &&& {
    margin: 0 0 0.5em 0;
    font-size: 2.25em;
  }
`;

const StyledTextCol = styled(Col)`
  padding: 0 2em;
  @media (max-width: 575.98px) {
    padding: 0;
  }
`;

const StyledTextCard = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 42em;
  margin: 0 auto;
  border-radius: 1.5em;
  box-shadow: 0 0.5em 6em rgba(0, 0, 0, 0.12);
  padding: 1.5em;
`;

const StyledTextCardBackground = styled.div`
  position: absolute;
  inset: 12%;
  background: rgba(255, 255, 255, 0.85);
  filter: blur(4em);
  z-index: -1;
`;

const StyledDesktopImageCol = styled(Col)`
  @media (max-width: 991.98px) {
    display: none;
  }
`;

const StyledMobilePhotoWrapper = styled.div`
  display: none;
  @media (max-width: 991.98px) {
    display: flex;
    justify-content: center;
    margin: 0 0 1.5em 0;
  }
`;

const StyledMobilePhotoFrame = styled.div`
  position: relative;
  width: 55vw;
  max-width: 15em;
  aspect-ratio: 1 / 1;
  padding: 0.5em;
  border-radius: 50%;
  background: radial-gradient(
    circle at 22% 78%,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(255, 255, 255, 0.35) 45%,
    rgba(255, 255, 255, 0) 72%
  );
  box-shadow: -0.9em 0.9em 2.5em -0.2em rgba(0, 0, 0, 0.16),
    0 0 0 1px rgba(255, 255, 255, 0.4) inset;
`;

const StyledMobileImage = styled(Image)`
  && {
    display: block;
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    object-position: 50% 22%;
    border-radius: 50%;
    box-shadow: 0 0.5em 1.5em rgba(0, 0, 0, 0.25);
  }
`;

const StyledParagraph = styled(Typography.Paragraph)`
  &&& {
    font-size: 1.49em;
    @media (max-width: 991.98px) {
      font-size: 1.15em;
    }
  }
`;

const AboutSection = ({ onShowAchievements }) => {
  const { t } = useTranslation();

  return (
    <StyledAboutRow justify="center" id="about">
      <StyledDesktopImageCol lg={6} xl={6}>
        <StyledDesktopImage src="./polina_casual.jpeg" preview={false} />
      </StyledDesktopImageCol>
      <StyledTextCol lg={12} xs={22} md={24}>
        <StyledTextCard>
          <StyledTextCardBackground />
          <StyledSectionTitle level={2}>
            {t("aboutSection.title")}
          </StyledSectionTitle>
          <StyledMobilePhotoWrapper>
            <StyledMobilePhotoFrame>
              <StyledMobileImage
                src="./polina_casual.jpeg"
                preview={false}
                alt={t("aboutSection.photoAlt")}
              />
            </StyledMobilePhotoFrame>
          </StyledMobilePhotoWrapper>
          <StyledParagraph>{t("aboutSection.p1")}</StyledParagraph>
          <StyledParagraph>{t("aboutSection.p2")}</StyledParagraph>
          <StyledParagraph>{t("aboutSection.p3")}</StyledParagraph>
          <StyledParagraph>{t("aboutSection.p4")}</StyledParagraph>
          <StyledParagraph>{t("aboutSection.p5")}</StyledParagraph>
          <StyledMoreButton onClick={onShowAchievements}>
            {t("aboutSection.moreButton")}
            <FaArrowRightLong />
          </StyledMoreButton>
        </StyledTextCard>
      </StyledTextCol>
    </StyledAboutRow>
  );
};

AboutSection.propTypes = {
  onShowAchievements: PropTypes.func.isRequired,
};

export default AboutSection;
