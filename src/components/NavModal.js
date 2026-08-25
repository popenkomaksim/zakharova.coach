import PropTypes from "prop-types";
import styled from "styled-components";
import { Modal, Divider, List, Typography } from "antd";

const StyledText = styled.span`
  font-weight: 900;
  color: #353935;
`;

const NavModal = ({ open, onClose }) => (
  <Modal open={open} onCancel={onClose} center footer={null}>
    <Divider orientation="left">
      <StyledText>Polina Zakharova</StyledText>
    </Divider>
    <List size="small">
      <List.Item>
        <a href="#about" onClick={onClose}>
          <Typography.Text style={{ fontSize: "1.75em" }}>
            Про мене
          </Typography.Text>
        </a>
      </List.Item>
      <List.Item>
        <a href="#contacts" onClick={onClose}>
          <Typography.Text style={{ fontSize: "1.75em" }}>
            Контакти
          </Typography.Text>
        </a>
      </List.Item>
      <List.Item>
        <a href="#desc-first" onClick={onClose}>
          <Typography.Text style={{ fontSize: "1.75em" }}>
            Приниципи і підходи до тренувань
          </Typography.Text>
        </a>
      </List.Item>
      <List.Item>
        <a href="#desc-second" onClick={onClose}>
          <Typography.Text style={{ fontSize: "1.75em" }}>
            Формати співпраці
          </Typography.Text>
        </a>
      </List.Item>
      <List.Item>
        <a href="#prices" onClick={onClose}>
          <Typography.Text style={{ fontSize: "1.75em" }}>
            Види планів
          </Typography.Text>
        </a>
      </List.Item>
      <List.Item>
        <a href="#additional-services" onClick={onClose}>
          <Typography.Text style={{ fontSize: "1.75em" }}>
            Додаткові послуги
          </Typography.Text>
        </a>
      </List.Item>
    </List>
  </Modal>
);

NavModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default NavModal;
