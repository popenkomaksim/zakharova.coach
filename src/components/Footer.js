import styled from "styled-components";
import { Divider } from "antd";
import { FaHeart } from "react-icons/fa";

const StyledFooterDivider = styled(Divider)`
  margin-top: 4em;

  .ant-divider-inner-text {
    white-space: normal;
    text-align: center;
  }
`;

const StyledHeart = styled(FaHeart)`
  top: -0.5em;
`;

const Footer = () => (
  <StyledFooterDivider>
    Made with <StyledHeart color="#B01E28" /> in Kyiv, Ukraine © 2023
    &mdash;&nbsp;
    {new Date().getFullYear()}
  </StyledFooterDivider>
);

export default Footer;
