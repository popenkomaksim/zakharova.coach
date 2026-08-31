import PropTypes from "prop-types";
import styled from "styled-components";
import { Col, Row, Typography, Divider } from "antd";
import { FaHeart } from "react-icons/fa";
import ContactIcons from "./ContactIcons";
import LoopVideo from "./LoopVideo";
import PolinaRun from "../Polina_Altra.mp4";

const StyledFooterDivider = styled(Divider)`
  .ant-divider-inner-text {
    white-space: normal;
    text-align: center;
  }
`;

const ClosingSection = ({ redirectToTelegram, redirectToWhatsup }) => (
  <>
    <LoopVideo src={PolinaRun} alt="Polina do running" />

    <Row justify="space-around">
      <Col xs={24} md={10}>
        <div style={{ margin: "0 2em", textAlign: "center" }}>
          <Typography.Title level={3} style={{ margin: 0, fontSize: "2.25em" }}>
            Залишились питання?
          </Typography.Title>
          <br />
          <Typography.Text style={{ fontSize: "1.75em" }}>
            Зв&apos;яжись зі мною в робочі години.
          </Typography.Text>
          <br />
          <br />
          <br />
          <ContactIcons
            redirectToTelegram={redirectToTelegram}
            redirectToWhatsup={redirectToWhatsup}
          />
        </div>
      </Col>
    </Row>

    <StyledFooterDivider style={{ marginTop: "4em" }}>
      Made with <FaHeart style={{ top: "-0.5em" }} color="#B01E28" /> in Kyiv,
      Ukraine © 2023 &mdash; {new Date().getFullYear()}
    </StyledFooterDivider>
  </>
);

ClosingSection.propTypes = {
  redirectToTelegram: PropTypes.func.isRequired,
  redirectToWhatsup: PropTypes.func.isRequired,
};

export default ClosingSection;
