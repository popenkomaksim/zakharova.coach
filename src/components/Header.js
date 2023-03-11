import styled from "styled-components";
import { Divider } from "antd";

const StyledText = styled.span`
  font-weight: 900;
  color: #353935;
`;

const Header = () => (
  <Divider orientation="left">
    <StyledText>Polina Zakharova</StyledText>
  </Divider>
);

export default Header;
