import styled from "styled-components";
import { Col, Row, Image, Typography } from "antd";

const StyledPhotoStack = styled.div`
  position: relative;
  padding: 1em 0 3em 0;
`;

const StyledTopPhoto = styled(Image)`
  border-radius: 4px;
`;

const StyledBottomPhotoWrapper = styled.div`
  position: relative;
  margin: -4em 0 0 -1em;
  width: 65%;
  z-index: 1;
  @media (max-width: 768px) {
    margin-top: -2em;
  }
`;

const StyledTagBox = styled.div`
  position: absolute;
  right: 1em;
  bottom: 0;
  z-index: 2;
  background: #fff;
  border: 1px solid #e5e5e5;
  padding: 1em 1.25em;
  max-width: 220px;
  font-size: 1em;
  line-height: 1.3;
`;

const StyledHeadlineLine = styled(Typography.Title)`
  &&& {
    margin: 0;
    line-height: 1.05;
    text-align: right;
  }
`;

const HeroBanner = () => (
  <Row justify="center" align="middle" style={{ margin: "1em 0 3em 0" }}>
    <Col xs={24} md={11} style={{ padding: "0 2em" }}>
      <StyledPhotoStack>
        <StyledTopPhoto src="./tibet.jpeg" preview={false} />
        <StyledBottomPhotoWrapper>
          <Image
            src="./polina2.jpg"
            preview={false}
            style={{ filter: "grayscale(1)", display: "block", width: "100%" }}
          />
        </StyledBottomPhotoWrapper>
        <StyledTagBox>українська ідентичність через спорт</StyledTagBox>
      </StyledPhotoStack>
    </Col>
    <Col xs={24} md={11} style={{ padding: "0 2em" }}>
      <StyledHeadlineLine level={2} style={{ fontSize: "2.4em" }}>
        мій тренувальний план
      </StyledHeadlineLine>
      <StyledHeadlineLine level={1} style={{ fontSize: "3.4em" }}>
        твоє тіло
      </StyledHeadlineLine>
      <StyledHeadlineLine level={1} style={{ fontSize: "3.4em" }}>
        мої правила
      </StyledHeadlineLine>
    </Col>
  </Row>
);

export default HeroBanner;
