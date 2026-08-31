import styled from "styled-components";
import { Col, Row, Card, Typography, Image } from "antd";
import SectionTitle from "./SectionTitle";

const StyledRow = styled(Row)`
  margin: 2em 0;
`;

const StyledCard = styled(Card)`
  &&& {
    overflow: hidden;
  }
`;

const StyledPhoto = styled(Image)`
  &&& {
    width: 100%;
    display: block;
  }
`;

const StyledQuoteWrapper = styled.div`
  padding: 1.5em;
`;

const StyledQuote = styled(Typography.Paragraph)`
  &&& {
    font-size: 1.2em;
    color: #5a5a5a;
  }
`;

const TestimonialsSection = () => (
  <>
    <SectionTitle>Відгуки моїх студентів</SectionTitle>

    <StyledRow justify="center">
      <Col xs={24} md={16} lg={12}>
        <StyledCard styles={{ body: { padding: 0 } }}>
          <StyledPhoto src="./ski2.jpg" preview={false} />
          <StyledQuoteWrapper>
            <StyledQuote italic>
              [Текст відгуку — уточнити оригінальну цитату]
            </StyledQuote>
            <Typography.Text strong>
              [Ім&apos;я, посада — уточнити]
            </Typography.Text>
          </StyledQuoteWrapper>
        </StyledCard>
      </Col>
    </StyledRow>
  </>
);

export default TestimonialsSection;
