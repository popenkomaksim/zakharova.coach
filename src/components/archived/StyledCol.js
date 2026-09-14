import styled from "styled-components";
import { Col } from "antd";

const StyledCol = styled(Col)`
  @media (max-width: 768px) {
    order: 2;
  }
`;

export default StyledCol;
