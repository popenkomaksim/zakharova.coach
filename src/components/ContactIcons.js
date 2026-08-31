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

const StyledIconLink = styled.span`
  cursor: pointer;
`;

const ContactIcons = ({
  redirectToTelegram,
  redirectToWhatsup,
  size = "4em",
}) => (
  <>
    <StyledIconLink
      onClick={redirectToTelegram}
      onKeyDown={redirectToTelegram}
      role="link"
      tabIndex="0"
    >
      <StyledTelegram size={size} color="#229ED9" />
    </StyledIconLink>
    <StyledIconLink
      onClick={redirectToWhatsup}
      onKeyDown={redirectToWhatsup}
      role="link"
      tabIndex="0"
    >
      <StyledWhatsapp size={size} color="#25D366" />
    </StyledIconLink>
  </>
);

ContactIcons.propTypes = {
  redirectToTelegram: PropTypes.func.isRequired,
  redirectToWhatsup: PropTypes.func.isRequired,
  size: PropTypes.string,
};

export default ContactIcons;
