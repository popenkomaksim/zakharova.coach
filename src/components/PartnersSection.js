import { Col, Row, Image, Typography } from "antd";

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
        <a target="_blank" rel="noreferrer" href="https://sprtlab.com.ua/">
          <Image src="./SportLab.png" preview={false} width="100px" />
        </a>
      </Col>
      <Col>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://travel-extreme.com.ua/"
        >
          <Image src="./travelextreme.png" preview={false} width="100px" />
        </a>
      </Col>
    </Row>
  </>
);

export default PartnersSection;
