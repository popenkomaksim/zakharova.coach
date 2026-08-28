import "@fontsource/montserrat/900.css";
import styled from "styled-components";
import { Image, Typography } from "antd";
import frameSvg from "./frame.svg";

const StyledComposition = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  position: relative;
  width: 100%;
  padding-top: 49.5%;
  margin: 1em 0 4em 0;
  @media (max-width: 768px) {
    padding-top: 130%;
  }
`;

const StyledFrame = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 3%;
  background-image: url("${frameSvg}");
  background-repeat: no-repeat;
  background-origin: content-box;
  background-size: 100% 100%;
`;

const StyledTagBox = styled.div`
  position: absolute;
  left: 9.6%;
  top: 8.9%;
  width: 40%;
  z-index: 2;
  padding: 0 0.5em 0.5em 0;
  font-size: clamp(0.85em, 2.2vw, 4.05em);
  line-height: 1.3;
`;

const StyledMountainPhotoWrapper = styled.div`
  position: absolute;
  top: -2%;
  right: 5%;
  width: 48%;
  z-index: 1;
`;

const StyledRunnerPhotoWrapper = styled.div`
  position: absolute;
  top: 30.5%;
  left: 13%;
  width: 43.5%;
  max-width: 39em;
  z-index: 1;
`;

const StyledPlanText = styled(Typography.Title)`
  &&& {
    font-family: "Montserrat", sans-serif;
    font-weight: 900;
    position: absolute;
    top: 47%;
    right: 20%;
    width: 46%;
    margin: 0;
    z-index: 2;
    text-align: right;
    line-height: 1.15;
    text-underline-offset: 0.1em;
    font-size: clamp(1.1em, 4vw, 5em);
  }
`;

const StyledBodyText = styled(Typography.Title)`
  &&& {
    font-family: "Montserrat", sans-serif;
    font-weight: 900;
    position: absolute;
    top: 70%;
    right: 4.5%;
    margin: 0;
    z-index: 2;
    line-height: 2.05;
    white-space: nowrap;
    font-size: clamp(1.8em, 8vw, 3.4em);
  }
`;

const StyledRulesText = styled(Typography.Title)`
  &&& {
    font-family: "Montserrat", sans-serif;
    font-weight: 900;
    position: absolute;
    top: 84.5%;
    right: 4%;
    margin: 0;
    z-index: 2;
    line-height: 1.05;
    white-space: nowrap;
    font-size: clamp(1.8em, 8vw, 3.4em);
  }
`;

const HeroBanner = () => {
  return (
    <StyledComposition>
      <StyledFrame>
        <StyledTagBox>Українська ідентичність через спорт</StyledTagBox>
        <StyledPlanText level={2}>Наш тренувальний план</StyledPlanText>
        <StyledBodyText level={1}>Твоє тіло</StyledBodyText>
        <StyledRulesText level={1}>Мої правила</StyledRulesText>
      </StyledFrame>
      <StyledMountainPhotoWrapper>
        <Image
          src="./design_kazbek.jpeg"
          preview={false}
          style={{ display: "block", width: "100%" }}
        />
      </StyledMountainPhotoWrapper>
      <StyledRunnerPhotoWrapper>
        <Image
          src="./PolinaJump.jpeg"
          preview={false}
          style={{ display: "block", width: "100%" }}
        />
      </StyledRunnerPhotoWrapper>
    </StyledComposition>
  );
};

export default HeroBanner;
