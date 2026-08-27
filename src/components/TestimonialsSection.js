import { Col, Row, Card, Typography, Image } from "antd";

const TestimonialsSection = () => (
  <>
    <Row style={{ margin: "2em 0" }}>
      <Col span={24}>
        <Typography.Title level={2} style={{ margin: 0, textAlign: "center" }}>
          Відгуки моїх студентів
        </Typography.Title>
      </Col>
    </Row>

    <Row justify="center" style={{ margin: "2em 0" }}>
      <Col xs={24} md={16} lg={12}>
        <Card style={{ overflow: "hidden" }} bodyStyle={{ padding: 0 }}>
          <Image
            src="./ski2.jpg"
            preview={false}
            style={{ width: "100%", display: "block" }}
          />
          <div style={{ padding: "1.5em" }}>
            <Typography.Paragraph
              italic
              style={{ fontSize: "1.2em", color: "#5a5a5a" }}
            >
              [Текст відгуку — уточнити оригінальну цитату]
            </Typography.Paragraph>
            <Typography.Text strong>
              [Ім&apos;я, посада — уточнити]
            </Typography.Text>
          </div>
        </Card>
      </Col>
    </Row>
  </>
);

export default TestimonialsSection;
