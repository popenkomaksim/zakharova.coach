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
  margin: 1em 0 clamp(4em, 16vw, 14em) 0;
  @media (max-width: 768px) {
    padding-top: 100%;
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

const StyledMountainPhotoWrapper = styled.div`
  position: absolute;
  top: -2%;
  right: 1%;
  width: 48%;
  z-index: 1;
  @media (max-width: 768px) {
    top: -0.5%;
    width: 40%;
  }
`;

const StyledRunnerPhotoWrapper = styled.div`
  position: absolute;
  top: 30.5%;
  left: 17%;
  width: 43.5%;
  max-width: 39em;
  z-index: 1;
  @media (max-width: 768px) {
    left: 5%;
    top: 45%;
    width: 49%;
  }
`;

const StyledTagBox = styled.div`
  position: absolute;
  left: clamp(5rem, 1vw, 9rem);
  top: 8.9%;
  width: 40%;
  z-index: 2;
  padding: 0 0.5em 0.5em 0;
  font-size: clamp(0.85em, 1.9vw, 4em);
  line-height: 1.3;
  @media (max-width: 768px) {
    left: 6%;
    width: 42%;
  }
`;

const StyledPlanText = styled(Typography.Title)`
  &&& {
    font-family: "Montserrat", sans-serif;
    font-weight: 900;
    position: absolute;
    top: 65%;
    right: clamp(3.5rem, 4.5vw, 15.5rem);
    width: 46%;
    margin: 0;
    z-index: 2;
    text-align: right;
    color: white;
    line-height: 1.15;
    text-underline-offset: 0.1em;
    font-size: clamp(1.1rem, 3vw, 5rem);
    @media (max-width: 768px) {
      top: 35%;
      right: 4%;
      width: 100%;
      color: #1a1a1a;
      line-height: 1;
      font-size: clamp(1.8rem, 3.7vw, 4.2rem);
    }
  }
`;

const StyledBodyText = styled(Typography.Title)`
  &&& {
    font-family: "Montserrat", sans-serif;
    font-weight: 900;
    position: absolute;
    top: 92%;
    right: 4.5%;
    margin: 0;
    z-index: 2;
    line-height: 2.05;
    white-space: nowrap;
    font-size: clamp(1.8rem, 3.7vw, 4.2rem);
    @media (max-width: 768px) {
      font-size: clamp(1.8rem, 8vw, 8.2rem);
      top: 70%;
    }
  }
`;

const StyledRulesText = styled(Typography.Title)`
  &&& {
    font-family: "Montserrat", sans-serif;
    font-weight: 900;
    position: absolute;
    top: 105%;
    right: 4%;
    margin: 0;
    z-index: 2;
    line-height: 1.05;
    white-space: nowrap;
    font-size: clamp(1.8rem, 3.7vw, 4.2rem);
    @media (max-width: 768px) {
      font-size: clamp(1rem, 6vw, 4rem);
      top: 82%;
    }
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
          src="./design2_kazbek.jpeg"
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
