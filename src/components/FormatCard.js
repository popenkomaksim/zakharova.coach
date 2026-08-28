import PropTypes from "prop-types";
import styled from "styled-components";
import { Col, Row, Image, Typography } from "antd";

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1em;
  color: #878787;
  font-size: 0.9em;
`;

const FormatCard = ({
  title,
  description,
  photo = null,
  pagination,
  imageSide = "right",
}) => {
  const textBlock = (
    <div style={{ padding: "1em 1.5em" }}>
      <Typography.Title level={4} style={{ margin: "0 0 0.5em 0" }}>
        {title}
      </Typography.Title>
      <Typography.Text style={{ fontSize: "1.1em", color: "#5a5a5a" }}>
        {description}
      </Typography.Text>
      <StyledFooter>
        <span>{pagination}</span>
      </StyledFooter>
    </div>
  );

  const imageBlock = photo ? (
    <Col xs={24} md={10}>
      <Image
        src={photo}
        preview={false}
        style={{ width: "100%", maxHeight: "69vh" }}
      />
    </Col>
  ) : null;

  return (
    <Row justify="space-around" align="middle" style={{ margin: "3em 0" }}>
      {imageSide === "left" && imageBlock}
      <Col xs={24} md={photo ? 12 : 16}>
        {textBlock}
      </Col>
      {imageSide === "right" && imageBlock}
    </Row>
  );
};

FormatCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  photo: PropTypes.string,
  pagination: PropTypes.string.isRequired,
  imageSide: PropTypes.oneOf(["left", "right"]),
};

export default FormatCard;
