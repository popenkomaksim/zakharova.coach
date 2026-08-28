import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Modal, Divider, List, Typography } from "antd";

const StyledText = styled.span`
  font-weight: 900;
  color: #353935;
`;

const NavModal = ({ open, onClose }) => (
  <Modal open={open} onCancel={onClose} center footer={null}>
    <Divider titlePlacement="left">
      <StyledText>Polina Zakharova</StyledText>
    </Divider>
    <List size="small">
      <List.Item>
        <Link to="/" onClick={onClose}>
          <Typography.Text style={{ fontSize: "1.75em" }}>
            Головна
          </Typography.Text>
        </Link>
      </List.Item>
      <List.Item>
        <Link to="/about" onClick={onClose}>
          <Typography.Text style={{ fontSize: "1.75em" }}>
            Про мене
          </Typography.Text>
        </Link>
      </List.Item>
      <List.Item>
        <Link to="/contact" onClick={onClose}>
          <Typography.Text style={{ fontSize: "1.75em" }}>
            Контакти
          </Typography.Text>
        </Link>
      </List.Item>
      <List.Item>
        <a href="/#formats" onClick={onClose}>
          <Typography.Text style={{ fontSize: "1.75em" }}>
            Формати співпраці
          </Typography.Text>
        </a>
      </List.Item>
      <List.Item>
        <a href="/#prices" onClick={onClose}>
          <Typography.Text style={{ fontSize: "1.75em" }}>
            Види планів
          </Typography.Text>
        </a>
      </List.Item>
      <List.Item>
        <a href="/#additional-services" onClick={onClose}>
          <Typography.Text style={{ fontSize: "1.75em" }}>
            Додаткові послуги
          </Typography.Text>
        </a>
      </List.Item>
      <List.Item>
        <Link to="/skitour-chechlist" onClick={onClose}>
          <Typography.Text style={{ fontSize: "1.75em" }}>
            Чеклист лижного туру
          </Typography.Text>
        </Link>
      </List.Item>
      <List.Item>
        <Link to="/calendar" onClick={onClose}>
          <Typography.Text style={{ fontSize: "1.75em" }}>
            Календар подій
          </Typography.Text>
        </Link>
      </List.Item>
      <List.Item>
        <Link to="/privacy" onClick={onClose}>
          <Typography.Text style={{ fontSize: "1.75em" }}>
            Конфіденційність
          </Typography.Text>
        </Link>
      </List.Item>
    </List>
  </Modal>
);

NavModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default NavModal;
