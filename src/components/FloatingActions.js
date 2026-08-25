import PropTypes from "prop-types";
import styled from "styled-components";
import { FloatButton } from "antd";
import { FaTelegram } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";

const StyledTooltipTelegram = styled(FaTelegram)`
  font-size: 1em;
`;

const StyledMenuIcon = styled(IoMenuOutline)`
  font-size: 1em;
`;

const FloatingActions = ({ redirectToTelegram, onMenuClick }) => (
  <>
    <FloatButton
      style={{ right: 94 }}
      onClick={redirectToTelegram}
      badge={{ count: 1 }}
      icon={<StyledTooltipTelegram />}
    />
    <FloatButton onClick={onMenuClick} icon={<StyledMenuIcon />} />
  </>
);

FloatingActions.propTypes = {
  redirectToTelegram: PropTypes.func.isRequired,
  onMenuClick: PropTypes.func.isRequired,
};

export default FloatingActions;
