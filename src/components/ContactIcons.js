import PropTypes from "prop-types";
import styled from "styled-components";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import ClickableIcon from "./ClickableIcon";

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

const ContactIcons = ({
  redirectToTelegram,
  redirectToWhatsup,
  size = "4em",
}) => (
  <>
    <ClickableIcon onClick={redirectToTelegram}>
      <StyledTelegram size={size} color="#229ED9" />
    </ClickableIcon>
    <ClickableIcon onClick={redirectToWhatsup}>
      <StyledWhatsapp size={size} color="#25D366" />
    </ClickableIcon>
  </>
);

ContactIcons.propTypes = {
  redirectToTelegram: PropTypes.func.isRequired,
  redirectToWhatsup: PropTypes.func.isRequired,
  size: PropTypes.string,
};

export default ContactIcons;
