import PropTypes from "prop-types";
import styled from "styled-components";
import { Col, Row, Typography } from "antd";

const StyledTitleRow = styled(Row)`
  margin: ${({ $margin }) => $margin};
`;

const StyledTitle = styled(Typography.Title)`
  &&& {
    margin: 0;
    text-align: center;
  }
`;

const SectionTitle = ({ id, level = 2, margin = "2em 0", children }) => (
  <StyledTitleRow id={id} $margin={margin}>
    <Col span={24}>
      <StyledTitle level={level}>{children}</StyledTitle>
    </Col>
  </StyledTitleRow>
);

SectionTitle.propTypes = {
  id: PropTypes.string,
  level: PropTypes.oneOf([1, 2, 3, 4, 5]),
  margin: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default SectionTitle;
