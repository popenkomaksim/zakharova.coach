import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Modal, Divider, List, Typography } from "antd";
import { useTranslation } from "react-i18next";

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

const NavModal = ({ open, onClose }) => {
  const { t } = useTranslation();

  return (
    <Modal open={open} onCancel={onClose} centered footer={null}>
      <Divider titlePlacement="left">
        <StyledText>Polina Zakharova</StyledText>
      </Divider>
      <StyledScrollArea>
        <List size="small">
          <List.Item>
            <Link to="/" onClick={onClose}>
              <StyledNavText>{t("nav.home")}</StyledNavText>
            </Link>
          </List.Item>
          <List.Item>
            <Link to="/about" onClick={onClose}>
              <StyledNavText>{t("nav.about")}</StyledNavText>
            </Link>
          </List.Item>
          <List.Item>
            <Link to="/achievements" onClick={onClose}>
              <StyledNavText>{t("nav.achievements")}</StyledNavText>
            </Link>
          </List.Item>
          <List.Item>
            <Link to="/contact" onClick={onClose}>
              <StyledNavText>{t("nav.contact")}</StyledNavText>
            </Link>
          </List.Item>
          <List.Item>
            <Link to="/races" onClick={onClose}>
              <StyledNavText>{t("nav.races")}</StyledNavText>
            </Link>
          </List.Item>
          <List.Item>
            <Link to="/formats" onClick={onClose}>
              <StyledNavText>{t("nav.formats")}</StyledNavText>
            </Link>
          </List.Item>
          <List.Item>
            <Link to="/prices" onClick={onClose}>
              <StyledNavText>{t("nav.prices")}</StyledNavText>
            </Link>
          </List.Item>
          <List.Item>
            <Link to="/additional-services" onClick={onClose}>
              <StyledNavText>{t("nav.services")}</StyledNavText>
            </Link>
          </List.Item>
          <List.Item>
            <Link to="/skitour-chechlist" onClick={onClose}>
              <StyledNavText>{t("nav.skitour")}</StyledNavText>
            </Link>
          </List.Item>
          <List.Item>
            <Link to="/calendar" onClick={onClose}>
              <StyledNavText>{t("nav.calendar")}</StyledNavText>
            </Link>
          </List.Item>
          <List.Item>
            <Link to="/privacy" onClick={onClose}>
              <StyledNavText>{t("nav.privacy")}</StyledNavText>
            </Link>
          </List.Item>
        </List>
      </StyledScrollArea>
    </Modal>
  );
};

NavModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default NavModal;
