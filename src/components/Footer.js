import styled from "styled-components";
import { FaHeart } from "react-icons/fa";

const StyledFooterLine = styled.div`
  margin: 4em 0;
  display: flex;
  align-items: center;
  text-align: center;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.88);

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-top: 1px solid rgba(5, 5, 5, 0.06);
  }

  &::before {
    margin-right: 1em;
  }

  &::after {
    margin-left: 1em;
  }
`;

const StyledHeartIcon = styled(FaHeart)`
  vertical-align: middle;
`;

const Footer = () => (
  <StyledFooterLine>
    <span>
      Made with&nbsp;
      <StyledHeartIcon color="#B01E28" />
      &nbsp;in Kyiv, Ukraine © 2023 &mdash;&nbsp;
      {new Date().getFullYear()}
    </span>
  </StyledFooterLine>
);

export default Footer;
