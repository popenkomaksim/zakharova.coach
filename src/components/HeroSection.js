import { useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Col, Row, Typography, Image, Button } from "antd";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";

const StyledTextCol = styled(Col)`
  padding: 0 2em;
  @media (max-width: 575.98px) {
    padding: 0;
  }
`;

const StyledTextCard = styled.div`
  position: relative;
  overflow: hidden;
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
  @media (max-width: 575.98px) {
    display: none;
  }
`;

const StyledMobilePhotoWrapper = styled.div`
  display: none;
  @media (max-width: 575.98px) {
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

const StyledCtaIcon = styled.span`
  margin-right: 0.5em;
  vertical-align: middle;
`;

const StyledCtaButton = styled(Button)`
  && {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: auto;
    padding: 0.75em 2em;
    font-size: 1.25em;
    font-weight: 600;
    letter-spacing: 0.02em;
    border-radius: 3em;
    box-shadow: 0 0.6em 1.5em rgba(255, 77, 79, 0.35);
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover,
    &:focus {
      transform: translateY(-0.1em);
      box-shadow: 0 0.8em 1.8em rgba(255, 77, 79, 0.45);
    }
  }
`;

const HeroSection = ({ redirectToTelegram, redirectToWhatsup }) => {
  const isTelegram = useRef(Math.random() < 0.5).current;
  const redirectToContact = isTelegram ? redirectToTelegram : redirectToWhatsup;

  return (
    <Row justify="center" id="about" style={{ margin: "3em 0" }}>
      <StyledDesktopImageCol lg={6} xl={6}>
        <Image
          src="./Polina_Casual.jpeg"
          style={{ maxWidth: "80vw" }}
          preview={false}
        />
      </StyledDesktopImageCol>
      <StyledTextCol lg={12} xs={22} md={12}>
        <StyledTextCard>
          <StyledTextCardBackground />
          <Typography.Title
            level={2}
            style={{ margin: "0 0 0.5em 0", fontSize: "2.25em" }}
          >
            Вітаю. Я — Поліна.
          </Typography.Title>
          <StyledMobilePhotoWrapper>
            <StyledMobilePhotoFrame>
              <StyledMobileImage
                src="./Polina_Casual.jpeg"
                preview={false}
                alt="Поліна"
              />
            </StyledMobilePhotoFrame>
          </StyledMobilePhotoWrapper>
          <Typography.Paragraph style={{ fontSize: "1.8em" }}>
            Мене неможливо уявити без гір, лісу й відкритого простору.
          </Typography.Paragraph>
          <Typography.Paragraph style={{ fontSize: "1.8em" }}>
            Мій шлях у спорт почався ще у 2008 році із спортивного орієнтування
            та рогейну — з тих пір я бачила цей світ із різних ракурсів.
          </Typography.Paragraph>
          <Typography.Paragraph style={{ fontSize: "1.8em" }}>
            За 18 років я пробігла десятки тисяч кілометрів, змінила країни,
            рельєфи й формати, але залишилась вірною головному — свободі та
            драйву.
          </Typography.Paragraph>
          <Typography.Paragraph style={{ fontSize: "1.8em" }}>
            Сьогодні я тренер, багато років займаюся скі-альпінізмом і допомагаю
            іншим знайти власний ритм й напрямок.
          </Typography.Paragraph>
          <Typography.Paragraph style={{ fontSize: "1.8em" }}>
            Я створюю програми, що розвивають не лише витривалість, а й
            усвідомлення себе через рух. Бути присутнім у власному тілі,
            відчувати його силу й розум.
          </Typography.Paragraph>
        </StyledTextCard>
        <Row justify="center" style={{ marginTop: "1.5em" }}>
          <StyledCtaButton onClick={redirectToContact} danger size="large">
            <StyledCtaIcon>
              {isTelegram ? (
                <FaTelegram size="1.2em" />
              ) : (
                <FaWhatsapp size="1.2em" />
              )}
            </StyledCtaIcon>
            Почни тренуватись ефективно
          </StyledCtaButton>
        </Row>
      </StyledTextCol>
    </Row>
  );
};

HeroSection.propTypes = {
  redirectToTelegram: PropTypes.func.isRequired,
  redirectToWhatsup: PropTypes.func.isRequired,
};

export default HeroSection;
