import PropTypes from "prop-types";
import styled from "styled-components";

const StyledClickable = styled.span`
  cursor: pointer;
`;

const ClickableIcon = ({ onClick, children }) => (
  <StyledClickable
    onClick={onClick}
    onKeyDown={(event) => {
      if (event.key === "Enter" || event.key === " ") {
        onClick(event);
      }
    }}
    role="link"
    tabIndex="0"
  >
    {children}
  </StyledClickable>
);

ClickableIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ClickableIcon;
