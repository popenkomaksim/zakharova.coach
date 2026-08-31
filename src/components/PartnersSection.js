import styled from "styled-components";
import { Col, Row, Image, Typography } from "antd";

const StyledPartnerLink = styled.a`
  display: inline-block;
  padding: 0.75em;
`;

const StyledLogoTile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7em;
  height: 7em;
  padding: 1em;
  border-radius: 0.75em;
  background: #fff;
  box-shadow: 0 0.2em 1em rgba(0, 0, 0, 0.08);
  box-sizing: border-box;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

const partners = [
  {
    href: "https://www.x-zone.com.ua/ua/proizvoditeli/kailas.html",
    src: "./kailas_logo.png",
    alt: "Kailas",
  },
  {
    href: "https://travel-extreme.com.ua/torq/",
    src: "./Torq-logo-square.webp",
    alt: "Torq",
  },
  {
    href: "https://www.x-zone.com.ua/",
    src: "./xzone.png",
    alt: "X-Zone",
  },
  {
    href: "https://sprtlab.com.ua/",
    src: "./SportLab.png",
    alt: "SportLab",
  },
  {
    href: "https://travel-extreme.com.ua/",
    src: "./travelextreme.png",
    alt: "Travel Extreme",
  },
  {
    href: "https://www.facebook.com/tvoiapryhoda/",
    src: "./tvoya_prygoda.png",
    alt: "Твоя пригода",
  },
];

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
      {partners.map(({ href, src, alt }) => (
        <Col key={src}>
          <StyledPartnerLink
            target="_blank"
            rel="noopener noreferrer"
            href={href}
          >
            <StyledLogoTile>
              <Image src={src} alt={alt} preview={false} loading="lazy" />
            </StyledLogoTile>
          </StyledPartnerLink>
        </Col>
      ))}
    </Row>
  </>
);

export default PartnersSection;
