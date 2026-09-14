import PropTypes from "prop-types";
import styled from "styled-components";
import { FloatButton } from "antd";
import { IoMenuOutline } from "react-icons/io5";

const StyledMenuIcon = styled(IoMenuOutline)`
  font-size: 1em;
`;

const StyledFloatButton = styled(FloatButton)`
  @media (max-width: 575.98px) {
    right: 12px !important;
    bottom: 12px !important;
    width: 36px !important;
    height: 36px !important;
  }
`;

const FloatingActions = ({ onMenuClick }) => (
  <StyledFloatButton onClick={onMenuClick} icon={<StyledMenuIcon />} />
);

FloatingActions.propTypes = {
  onMenuClick: PropTypes.func.isRequired,
};

export default FloatingActions;
