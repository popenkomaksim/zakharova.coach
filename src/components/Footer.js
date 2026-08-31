import PropTypes from "prop-types";
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

const Footer = ({ showSince2023 = false }) => (
  <StyledFooterDivider>
    Made with <StyledHeart color="#B01E28" /> in Kyiv, Ukraine ©{" "}
    {showSince2023 && <>2023 &mdash; </>}
    {new Date().getFullYear()}
  </StyledFooterDivider>
);

Footer.propTypes = {
  showSince2023: PropTypes.bool,
};

export default Footer;
