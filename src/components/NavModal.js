import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Modal, Divider, List, Typography } from "antd";

const StyledText = styled.span`
  font-weight: 900;
  color: #353935;
`;

const StyledScrollArea = styled.div`
  position: relative;
  max-height: 70vh;
  overflow-y: auto;

  &::after {
    content: "";
    position: sticky;
    display: block;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2em;
    margin-top: -2em;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #fff);
    pointer-events: none;
  }
`;

const StyledNavText = styled(Typography.Text)`
  &&& {
    font-size: 1.75em;
  }
`;

const NavModal = ({ open, onClose }) => (
  <Modal open={open} onCancel={onClose} centered footer={null}>
    <Divider titlePlacement="left">
      <StyledText>Polina Zakharova</StyledText>
    </Divider>
    <StyledScrollArea>
      <List size="small">
        <List.Item>
          <Link to="/" onClick={onClose}>
            <StyledNavText>Головна</StyledNavText>
          </Link>
        </List.Item>
        <List.Item>
          <Link to="/about" onClick={onClose}>
            <StyledNavText>Про мене</StyledNavText>
          </Link>
        </List.Item>
        <List.Item>
          <Link to="/contact" onClick={onClose}>
            <StyledNavText>Контакти</StyledNavText>
          </Link>
        </List.Item>
        <List.Item>
          <a href="/#formats" onClick={onClose}>
            <StyledNavText>Формати співпраці</StyledNavText>
          </a>
        </List.Item>
        <List.Item>
          <a href="/#prices" onClick={onClose}>
            <StyledNavText>Види планів</StyledNavText>
          </a>
        </List.Item>
        <List.Item>
          <a href="/#additional-services" onClick={onClose}>
            <StyledNavText>Додаткові послуги</StyledNavText>
          </a>
        </List.Item>
        <List.Item>
          <Link to="/skitour-chechlist" onClick={onClose}>
            <StyledNavText>Чеклист лижного туру</StyledNavText>
          </Link>
        </List.Item>
        <List.Item>
          <Link to="/calendar" onClick={onClose}>
            <StyledNavText>Календар подій</StyledNavText>
          </Link>
        </List.Item>
        <List.Item>
          <Link to="/privacy" onClick={onClose}>
            <StyledNavText>Конфіденційність</StyledNavText>
          </Link>
        </List.Item>
      </List>
    </StyledScrollArea>
  </Modal>
);

NavModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default NavModal;
