import PropTypes from "prop-types";
import styled from "styled-components";
import { FloatButton } from "antd";
import { IoMenuOutline } from "react-icons/io5";

const StyledMenuIcon = styled(IoMenuOutline)`
  font-size: 1em;
`;

const FloatingActions = ({ onMenuClick }) => (
  <FloatButton onClick={onMenuClick} icon={<StyledMenuIcon />} />
);

FloatingActions.propTypes = {
  onMenuClick: PropTypes.func.isRequired,
};

export default FloatingActions;
