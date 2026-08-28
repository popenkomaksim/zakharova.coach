import styled from "styled-components";
import { Divider } from "antd";

const StyledText = styled.span`
  display: block;
  margin: 0.6em 0 0.5em 1em;
  font-weight: 900;
  letter-spacing: 0.01em;
  color: #353935;
`;

const Header = () => (
  <Divider orientation="left">
    <StyledText>Polina Zakharova</StyledText>
  </Divider>
);

export default Header;
