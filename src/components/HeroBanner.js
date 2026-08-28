import styled from "styled-components";
import { Image, Typography } from "antd";
import frameSvg from "./frame.svg";

const StyledComposition = styled.div`
  position: relative;
  width: 100%;
  padding-top: 74.5%;
  margin: 1em 0 4em 0;
  @media (max-width: 768px) {
    padding-top: 130%;
  }
`;

const StyledFrame = styled.div`
  position: absolute;
  // left: 5.6%;
  top: 4%;
  width: 80%;
  height: 50%;
  // margin: 0 10em;
  // padding: 2em;
  background-image: url("${frameSvg}");
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

const StyledTagBox = styled.div`
  position: absolute;
  left: 9.6%;
  top: 8.9%;
  width: 40%;
  z-index: 3;
  padding: 0 0.5em 0.5em 0;
  font-size: clamp(0.85em, 2.2vw, 1.05em);
  line-height: 1.3;
`;

const StyledMountainPhotoWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 5%;
  width: 29%;
`;

const StyledRunnerPhotoWrapper = styled.div`
  position: absolute;
  top: 30.5%;
  left: 13%;
  width: 43.5%;
`;

const StyledPlanText = styled(Typography.Title)`
  &&& {
    position: absolute;
    top: 44%;
    right: 20%;
    width: 46%;
    margin: 0;
    text-align: right;
    line-height: 1.15;
    text-underline-offset: 0.1em;
    font-size: clamp(1.1em, 4vw, 5em);
  }
`;

const StyledBodyText = styled(Typography.Title)`
  &&& {
    position: absolute;
    top: 77%;
    right: 4.5%;
    margin: 0;
    line-height: 2.05;
    white-space: nowrap;
    font-size: clamp(1.8em, 8vw, 3.4em);
  }
`;

const StyledRulesText = styled(Typography.Title)`
  &&& {
    position: absolute;
    top: 84.5%;
    right: 4%;
    margin: 0;
    line-height: 1.05;
    white-space: nowrap;
    font-size: clamp(1.8em, 8vw, 3.4em);
  }
`;

const HeroBanner = () => (
  <StyledComposition>
    <StyledFrame />
    <StyledTagBox>Українська ідентичність через спорт</StyledTagBox>
    <StyledMountainPhotoWrapper>
      <Image
        src="./photo_2025-10-23 18.36.45.png"
        preview={false}
        style={{ filter: "grayscale(1)", display: "block", width: "100%" }}
      />
    </StyledMountainPhotoWrapper>
    <StyledRunnerPhotoWrapper>
      <Image
        src="./PolinaJump.png"
        preview={false}
        style={{ filter: "grayscale(1)", display: "block", width: "100%" }}
      />
    </StyledRunnerPhotoWrapper>
    <StyledPlanText level={2}>Мій тренувальний план</StyledPlanText>
    <StyledBodyText level={1}>Твоє тіло</StyledBodyText>
    <StyledRulesText level={1}>Мої правила</StyledRulesText>
  </StyledComposition>
);

export default HeroBanner;
