import styled from "styled-components";
import { Row, Col, Typography } from "antd";

export const StyledPageRow = styled(Row)`
  margin: 3em 0;
`;

export const StyledPageTextCol = styled(Col)`
  padding: 2em;
`;

export const StyledPageTitle = styled(Typography.Title)`
  &&& {
    margin: 0 0 0.5em 0;
  }
`;

export const StyledPageParagraph = styled(Typography.Paragraph)`
  &&& {
    font-size: 1.25em;
  }
`;
