import styled from "styled-components";
import { Col, Row, Divider } from "antd";

const Text = styled.span`
  font-weight: 900;
  color: #353935;
`;

const Header = () => (
  <Divider orientation="left">
    <Text>Polina Zakharova</Text>
  </Divider>
);

export default Header;
