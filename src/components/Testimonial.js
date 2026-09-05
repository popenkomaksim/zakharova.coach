import PropTypes from "prop-types";
import styled from "styled-components";
import { Col, Row, Image, Typography } from "antd";
import RatingBadge from "./RatingBadge";

const StyledRow = styled(Row)`
  margin: 0 0 2em 0;
`;

const StyledPhotoWrapper = styled.div`
  width: 100%;
  max-width: 20em;
  border-radius: 0.5em;
  overflow: hidden;
`;

const StyledQuote = styled(Typography.Paragraph)`
  &&& {
    color: #e6e6e6;
    font-size: 1.15em;
    line-height: 1.6;
    margin-bottom: 1.5em;
  }
`;

const StyledName = styled(Typography.Text)`
  &&& {
    display: block;
    color: #fff;
    font-size: 1.1em;
  }
`;

const StyledCompany = styled(Typography.Text)`
  &&& {
    display: block;
    color: #fff;
    font-weight: 700;
  }
`;

const Testimonial = ({ photo, quote, name, role = "", company = "" }) => (
  <StyledRow gutter={[32, 24]} align="middle">
    <Col xs={24} sm={8} md={6}>
      <StyledPhotoWrapper>
        <Image src={photo} preview={false} loading="lazy" />
      </StyledPhotoWrapper>
    </Col>
    <Col xs={24} sm={16} md={18}>
      <RatingBadge rating={5} />
      <StyledQuote>{quote}</StyledQuote>
      <StyledName>
        {name}
        {role ? `, ${role}` : ""}
      </StyledName>
      {company && <StyledCompany>{company}</StyledCompany>}
    </Col>
  </StyledRow>
);

Testimonial.propTypes = {
  photo: PropTypes.string.isRequired,
  quote: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string,
  company: PropTypes.string,
};

export default Testimonial;
