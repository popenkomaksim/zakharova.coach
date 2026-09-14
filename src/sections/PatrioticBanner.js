import styled from "styled-components";
import { useTranslation } from "react-i18next";

const StyledPatrioticText = styled.p`
  margin: 2em 0;
  padding: 0.6em 0.4em;
  background: transparent;
  color: #b01e28;
  font-weight: 900;
  font-size: clamp(1.1rem, 6vw, 2.75rem);
  white-space: normal;
  overflow-wrap: break-word;
  text-align: center;

  @media (max-width: 575.98px) {
    font-size: clamp(1.1rem, 8vw, 1.8rem);
  }
`;

const PatrioticBanner = () => {
  const { t } = useTranslation();

  return <StyledPatrioticText>{t("patrioticBanner.text")}</StyledPatrioticText>;
};

export default PatrioticBanner;
