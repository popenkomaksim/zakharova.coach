import PropTypes from "prop-types";
import styled from "styled-components";
import { Col, Row, Typography, Image } from "antd";
import StyledCol from "./StyledCol";
import ClickableIcon from "./ClickableIcon";

const StyledCenteredCol = styled(Col)`
  padding: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledTextWrapper = styled.div`
  max-width: 400px;
`;

const StyledTitle = styled(Typography.Title)`
  &&& {
    text-align: center;
  }
`;

const StyledText = styled(Typography.Text)`
  &&& {
    font-size: 1.5em;
  }
`;

const StyledGrayscaleImage = styled(Image)`
  &&& {
    filter: grayscale(1);
  }
`;

const CollaborationSection = ({ redirectToTelegram }) => (
  <>
    <Row justify="space-around" id="desc-second">
      <StyledCenteredCol xs={24} md={12}>
        <StyledTextWrapper>
          <StyledTitle level={2}>Формати співпраці</StyledTitle>
          <StyledText>
            Мої учні, як початківці, аматори, так й про-аматори обирають різні
            формати співпраці:
            <ul>
              <li>моделювання профілю атлета</li>
              <li>довготривале стратегічне планування</li>
              <li>персональні тренування</li>
              <li>супровід на гонці</li>
              <li>навчально-тренувальні/спеціально-підготовчі збори</li>
            </ul>
          </StyledText>
        </StyledTextWrapper>
      </StyledCenteredCol>

      <Col xs={24} md={12}>
        <StyledGrayscaleImage src="./vin02.jpg" preview={false} />
      </Col>
    </Row>

    <Row justify="space-around">
      <StyledCol xs={24} md={12}>
        <StyledGrayscaleImage src="./IMG_1182.jpg" preview={false} />
      </StyledCol>
      <StyledCenteredCol xs={24} md={12}>
        <StyledTextWrapper>
          <StyledText>
            Я щиро рада працювати з усіма, хто хоче стати кращою версією
            себе.&nbsp;
            <ClickableIcon onClick={redirectToTelegram}>
              Напиши мені
            </ClickableIcon>{" "}
            вже сьогодні, і, можливо, нам з тобою по дорозі.
            <br />
            Зі мною можна домовитись.
          </StyledText>
        </StyledTextWrapper>
      </StyledCenteredCol>
    </Row>
  </>
);

CollaborationSection.propTypes = {
  redirectToTelegram: PropTypes.func.isRequired,
};

export default CollaborationSection;
