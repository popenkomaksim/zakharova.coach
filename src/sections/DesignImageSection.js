import { useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Image, Row, Button } from "antd";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const StyledDesignImageWrapper = styled.div`
  position: relative;
  margin: 3vh 0 0 0;
`;

const StyledDesignImage = styled(Image)`
  &&& {
    display: block;
    width: 100%;
  }
`;

const StyledCtaRow = styled(Row)`
  position: absolute;
  top: 10%;
  left: 0;
  width: 100%;
  margin: 0;
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
    white-space: normal;

    &:hover,
    &:focus {
      transform: translateY(-0.1em);
      box-shadow: 0 0.8em 1.8em rgba(255, 77, 79, 0.45);
    }

    @media (max-width: 767.98px) {
      max-width: 90vw;
      padding: 0.7em 1.2em;
      font-size: 1em;
      text-align: center;
    }
  }
`;

const StyledCtaIcon = styled.span`
  margin-right: 0.5em;
  vertical-align: middle;
`;

const DesignImageSection = ({ redirectToTelegram, redirectToWhatsup }) => {
  const isTelegram = useRef(Math.random() < 0.5).current;
  const redirectToContact = isTelegram ? redirectToTelegram : redirectToWhatsup;
  const { t } = useTranslation();

  return (
    <StyledDesignImageWrapper>
      <StyledDesignImage
        src="./design_kazbek.jpeg"
        preview={false}
        width="100%"
        alt={t("aboutSection.ctaButton")}
      />
      <StyledCtaRow justify="center">
        <StyledCtaButton onClick={redirectToContact} danger size="large">
          <StyledCtaIcon>
            {isTelegram ? (
              <FaTelegram size="1.2em" />
            ) : (
              <FaWhatsapp size="1.2em" />
            )}
          </StyledCtaIcon>
          {t("aboutSection.ctaButton")}
        </StyledCtaButton>
      </StyledCtaRow>
    </StyledDesignImageWrapper>
  );
};

DesignImageSection.propTypes = {
  redirectToTelegram: PropTypes.func.isRequired,
  redirectToWhatsup: PropTypes.func.isRequired,
};

export default DesignImageSection;
