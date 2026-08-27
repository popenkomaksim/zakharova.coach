import styled from "styled-components";
import { Col, Row, Image, Typography } from "antd";

const StyledPlaceholderLogo = styled.div`
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed #c5c5c5;
  color: #a0a0a0;
  font-size: 0.75em;
  text-align: center;
  padding: 0.25em;
`;

const PartnersSection = () => (
  <>
    <Row style={{ margin: "2em 0 1em 0" }}>
      <Col span={24}>
        <Typography.Title level={3} style={{ margin: 0, textAlign: "center" }}>
          Мої партнери:
        </Typography.Title>
      </Col>
    </Row>
    <Row
      justify="center"
      align="middle"
      gutter={[24, 24]}
      style={{ margin: "1em 0 3em 0" }}
    >
      <Col>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.x-zone.com.ua/ua/proizvoditeli/kailas.html"
        >
          <Image src="./kailas_logo.png" preview={false} width="100px" />
        </a>
      </Col>
      <Col>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://travel-extreme.com.ua/torq/"
        >
          <Image src="./Torq-logo-square.webp" preview={false} width="100px" />
        </a>
      </Col>
      <Col>
        <a target="_blank" rel="noreferrer" href="https://www.x-zone.com.ua/">
          <Image src="./xzone.png" preview={false} width="100px" />
        </a>
      </Col>
      <Col>
        <StyledPlaceholderLogo>SPRT LAB</StyledPlaceholderLogo>
      </Col>
      <Col>
        <StyledPlaceholderLogo>TRAVEL EXTREME</StyledPlaceholderLogo>
      </Col>
    </Row>
  </>
);

export default PartnersSection;
