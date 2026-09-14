import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Col, Row, Image, Typography } from "antd";
import TypewriterText from "./TypewriterText";

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1em;
  color: #878787;
  font-size: 0.9em;
`;

const StyledRow = styled(Row)`
  margin: 3em 0;

  @media (min-width: 768px) {
    flex-direction: ${({ $imageLeft }) => ($imageLeft ? "row-reverse" : "row")};
  }
`;

const StyledFormatImage = styled(Image)`
  &&& {
    width: 100%;
    max-height: 85vh;
    @media (min-width: 768px) {
      max-height: 26em;
      object-fit: cover;
    }
  }
`;

const StyledTextWrapper = styled.div`
  padding: 1em 1.5em;
  max-width: 30vw;
  @media (max-width: 991.98px) {
    max-width: 100vw;
  }
  font-size: 1.49em;
  @media (max-width: 991.98px) {
    font-size: 1.15em;
  }
`;

const StyledCardTitle = styled(Typography.Title)`
  &&& {
    margin: 0 0 0.5em 0;
  }
`;

const StyledDescription = styled(Typography.Text)`
  &&& {
    font-size: 1.1em;
    color: #5a5a5a;
  }
`;

const StyledExpandedText = styled(Typography.Text)`
  &&& {
    display: block;
    margin-top: 0.75em;
    font-size: 1.1em;
    color: #5a5a5a;
  }
`;

const StyledToggleButton = styled.button`
  &&& {
    display: block;
    margin-top: 0.75em;
    padding: 0;
    border: none;
    background: none;
    color: #1a1a1a;
    font-size: 1em;
    font-weight: 600;
    text-decoration-line: underline;
    text-decoration-style: dashed;
    text-decoration-color: #b3b3b3;
    cursor: pointer;
  }
`;

const FormatCard = ({
  title,
  description,
  expandedDescription = null,
  photo = null,
  pagination,
  imageSide = "right",
}) => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => setIsExpanded((current) => !current);

  const textBlock = (
    <Col xs={24} md={photo ? 12 : 16}>
      <StyledTextWrapper>
        <StyledCardTitle level={4}>{title}</StyledCardTitle>
        <StyledDescription>{description}</StyledDescription>
        {isExpanded && expandedDescription && (
          <StyledExpandedText>
            <TypewriterText text={expandedDescription} />
          </StyledExpandedText>
        )}
        {expandedDescription && (
          <StyledToggleButton type="button" onClick={toggleExpanded}>
            {isExpanded
              ? t("formatsSection.readLess")
              : t("formatsSection.readMore")}
          </StyledToggleButton>
        )}
        <StyledFooter>
          <span>{pagination}</span>
        </StyledFooter>
      </StyledTextWrapper>
    </Col>
  );

  const imageBlock = photo ? (
    <Col xs={24} md={10}>
      <StyledFormatImage src={photo} preview={false} loading="lazy" />
    </Col>
  ) : null;

  return (
    <StyledRow
      justify="space-around"
      align="middle"
      $imageLeft={imageSide === "left"}
    >
      {textBlock}
      {imageBlock}
    </StyledRow>
  );
};

FormatCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  expandedDescription: PropTypes.string,
  photo: PropTypes.string,
  pagination: PropTypes.string.isRequired,
  imageSide: PropTypes.oneOf(["left", "right"]),
};

export default FormatCard;
