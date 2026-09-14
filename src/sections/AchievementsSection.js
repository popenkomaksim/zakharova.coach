import PropTypes from "prop-types";
import styled from "styled-components";
import "@fontsource/montserrat";
import "../App.css";

import { Image } from "antd";
import { Trans, useTranslation } from "react-i18next";
import StyledBackButton from "../components/OutlineButton";

const StyledWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2em 1.5em 1em;
`;

const StyledFlipTriggerRow = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledTopFlipTriggerRow = styled(StyledFlipTriggerRow)`
  margin-bottom: 2em;
`;

const StyledBottomFlipTriggerRow = styled(StyledFlipTriggerRow)`
  margin-top: 2em;
`;

const StyledComposition = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2em 3em;
  align-items: start;
  padding: 0;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 0.5em 0 2em;
  }
`;

const StyledTopBracket = styled.div`
  position: absolute;
  top: -1.5em;
  left: 0;
  right: -1.5em;
  height: 52%;
  border-top: 1px solid #1a1a1a;
  border-right: 1px solid #1a1a1a;
  pointer-events: none;

  @media (max-width: 900px) {
    display: none;
  }
`;

const StyledBottomBracket = styled.div`
  position: absolute;
  bottom: -1.5em;
  left: -1.5em;
  right: 32%;
  height: 42%;
  border-bottom: 1px solid #1a1a1a;
  border-left: 1px solid #1a1a1a;
  pointer-events: none;

  @media (max-width: 900px) {
    display: none;
  }
`;

const StyledTextColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;

  @media (max-width: 900px) {
    order: 2;
  }
`;

const StyledPhotoColumn = styled.div`
  align-self: start;

  @media (max-width: 900px) {
    order: 1;
    display: flex;
    justify-content: center;
  }
`;

const StyledPhotoFrame = styled.div`
  @media (max-width: 900px) {
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
  }
`;

const StyledPhoto = styled(Image)`
  &&& {
    width: 90%;
    display: block;
    object-fit: cover;

    @media (max-width: 900px) {
      width: 100%;
      height: 100%;
      aspect-ratio: 1 / 1;
      object-fit: cover;
      object-position: 50% 22%;
      border-radius: 50%;
      box-shadow: 0 0.5em 1.5em rgba(0, 0, 0, 0.25);
    }
  }
`;

const StyledBox = styled.div`
  background: #e9e9e7;
  padding: 1.5em 1.75em;
  font-size: 1.05em;
  line-height: 1.7;
  color: #1a1a1a;

  b {
    font-weight: 700;
  }
`;

const StyledIndentBox = styled(StyledBox)`
  margin-left: 2em;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

const AchievementsSection = ({ onBack }) => {
  const { t } = useTranslation();

  return (
    <StyledWrapper>
      <StyledTopFlipTriggerRow>
        <StyledBackButton onClick={onBack}>
          {t("achievementsSection.back")}
        </StyledBackButton>
      </StyledTopFlipTriggerRow>

      <StyledComposition>
        <StyledTopBracket />
        <StyledBottomBracket />

        <StyledTextColumn>
          <StyledBox>
            <Trans
              i18nKey="achievementsSection.block1"
              components={{ b: <b />, br: <br /> }}
            />
          </StyledBox>

          <StyledIndentBox>
            <Trans
              i18nKey="achievementsSection.block2"
              components={{ b: <b />, br: <br /> }}
            />
          </StyledIndentBox>

          <StyledBox>
            <Trans
              i18nKey="achievementsSection.block3"
              components={{ b: <b />, br: <br /> }}
            />
          </StyledBox>

          <StyledBox>
            <Trans
              i18nKey="achievementsSection.block4"
              components={{ b: <b />, br: <br /> }}
            />
          </StyledBox>
        </StyledTextColumn>

        <StyledPhotoColumn>
          <StyledPhotoFrame>
            <StyledPhoto
              src="./polina_occ.jpeg"
              preview={false}
              alt={t("achievementsSection.photoAlt")}
            />
          </StyledPhotoFrame>
        </StyledPhotoColumn>
      </StyledComposition>

      <StyledBottomFlipTriggerRow>
        <StyledBackButton onClick={onBack}>
          {t("achievementsSection.back")}
        </StyledBackButton>
      </StyledBottomFlipTriggerRow>
    </StyledWrapper>
  );
};

AchievementsSection.propTypes = {
  onBack: PropTypes.func.isRequired,
};

export default AchievementsSection;
