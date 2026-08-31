import PropTypes from "prop-types";
import styled from "styled-components";
import { Col, Row, Typography } from "antd";
import ContactIcons from "./ContactIcons";
import LoopVideo from "./LoopVideo";
import Footer from "./Footer";
import PolinaRun from "../Polina_Altra.mp4";

const StyledQuestionText = styled(Typography.Text)`
  &&& {
    font-size: 1.75em;
    @media (max-width: 575.98px) {
      font-size: 1.15em;
    }
  }
`;

const StyledQuestionWrapper = styled.div`
  margin: 0 2em;
  text-align: center;
`;

const StyledQuestionTitle = styled(Typography.Title)`
  &&& {
    margin: 0;
    font-size: 2.25em;
  }
`;

const ClosingSection = ({ redirectToTelegram, redirectToWhatsup }) => (
  <>
    <LoopVideo src={PolinaRun} alt="Polina do running" />

    <Row justify="space-around">
      <Col xs={24} md={10}>
        <StyledQuestionWrapper>
          <StyledQuestionTitle level={3}>
            Залишились питання?
          </StyledQuestionTitle>
          <br />
          <StyledQuestionText>
            Зв&apos;яжись зі мною в робочі години.
          </StyledQuestionText>
          <br />
          <br />
          <br />
          <ContactIcons
            redirectToTelegram={redirectToTelegram}
            redirectToWhatsup={redirectToWhatsup}
          />
        </StyledQuestionWrapper>
      </Col>
    </Row>

    <Footer />
  </>
);

ClosingSection.propTypes = {
  redirectToTelegram: PropTypes.func.isRequired,
  redirectToWhatsup: PropTypes.func.isRequired,
};

export default ClosingSection;
