import styled from "styled-components";
import { Link } from "react-router-dom";

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

const Header = () => (
  <StyledHeaderBar>
    <StyledLogo>Polina Zakharova</StyledLogo>
    <StyledNav>
      <Link to="/formats">Формати співпраці</Link>
      <Link to="/prices">Види планів</Link>
      <Link to="/additional-services">Додаткові послуги</Link>
    </StyledNav>
  </StyledHeaderBar>
);

export default Header;
