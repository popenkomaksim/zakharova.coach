import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const StyledHeaderBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5em;
  margin: 0.6em 1.5em 0.5em 1em;
  padding-bottom: 0.5em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;

const StyledLogo = styled.span`
  font-weight: 900;
  letter-spacing: 0.01em;
  color: #353935;
  white-space: nowrap;
`;

const StyledNav = styled.nav`
  display: none;

  @media (min-width: 992px) {
    display: flex;
    align-items: center;
    gap: 1.75em;
  }

  a {
    color: #353935;
    font-weight: 600;
    font-size: 0.95em;
    text-decoration: none;
    white-space: nowrap;

    &:hover {
      color: #b01e28;
    }
  }
`;

const StyledRightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.75em;
`;

const Header = () => {
  const { t } = useTranslation();

  return (
    <StyledHeaderBar>
      <StyledLogo>Polina Zakharova</StyledLogo>
      <StyledRightGroup>
        <StyledNav>
          <Link to="/formats">{t("nav.formats")}</Link>
          <Link to="/prices">{t("nav.prices")}</Link>
          <Link to="/additional-services">{t("nav.services")}</Link>
        </StyledNav>
        <LanguageSwitcher />
      </StyledRightGroup>
    </StyledHeaderBar>
  );
};

export default Header;
