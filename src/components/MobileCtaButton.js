import PropTypes from "prop-types";
import { Button, Row } from "antd";
import styled, { keyframes } from "styled-components";

const StyledMobileCtaRow = styled(Row)`
  display: none;
  @media (max-width: 991.98px) {
    display: flex;
    margin: 1.5em 0;
  }
`;

const pulseGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0.4em 1.2em rgba(176, 30, 40, 0.35);
  }
  50% {
    box-shadow: 0 0.4em 1.8em rgba(176, 30, 40, 0.6);
  }
`;

const StyledCtaButton = styled(Button)`
  &&& {
    background: linear-gradient(135deg, #d3212c 0%, #8f1620 100%);
    border: none;
    border-radius: 2em;
    padding: 0 1.8em;
    height: 3em;
    color: #fff;
    font-size: 1.05em;
    font-weight: 700;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    text-shadow: 0 0.05em 0.15em rgba(0, 0, 0, 0.35);
    animation: ${pulseGlow} 2.4s ease-in-out infinite;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover,
    &:focus {
      background: linear-gradient(135deg, #e12a35 0%, #a11a25 100%);
      transform: translateY(-0.15em) scale(1.03);
    }

    &:active {
      transform: translateY(0) scale(0.98);
    }
  }
`;

const MobileCtaButton = ({ redirectToTelegram }) => (
  <StyledMobileCtaRow justify="center">
    <StyledCtaButton onClick={redirectToTelegram} danger size="large">
      Запишись на консультацію
    </StyledCtaButton>
  </StyledMobileCtaRow>
);

MobileCtaButton.propTypes = {
  redirectToTelegram: PropTypes.func.isRequired,
};

export default MobileCtaButton;
