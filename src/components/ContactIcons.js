import PropTypes from "prop-types";
import styled from "styled-components";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";

const StyledTelegram = styled(FaTelegram)`
  margin: 0 0.5em;
  top: -0.4em;
  vertical-align: middle;
`;

const StyledWhatsapp = styled(FaWhatsapp)`
  margin: 0 0.5em;
  top: -0.4em;
  vertical-align: middle;
`;

const ContactIcons = ({ redirectToTelegram, redirectToWhatsup, size }) => (
  <>
    <span
      onClick={redirectToTelegram}
      onKeyDown={redirectToTelegram}
      role="link"
      tabIndex="0"
      style={{ cursor: "pointer" }}
    >
      <StyledTelegram size={size} color="#229ED9" />
    </span>
    <span
      onClick={redirectToWhatsup}
      onKeyDown={redirectToWhatsup}
      role="link"
      tabIndex="0"
      style={{ cursor: "pointer" }}
    >
      <StyledWhatsapp size={size} color="#25D366" />
    </span>
  </>
);

ContactIcons.propTypes = {
  redirectToTelegram: PropTypes.func.isRequired,
  redirectToWhatsup: PropTypes.func.isRequired,
  size: PropTypes.string,
};

ContactIcons.defaultProps = {
  size: "4em",
};

export default ContactIcons;
