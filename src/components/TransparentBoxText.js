/* eslint-disable */

import styled from "styled-components";

// display: inline-block;
const StyledDiv = styled.div`
  background-color: #f6f6f6;
  overflow: hidden;

  padding: 10px;
  font-weight: bold;

  color: transparent;
  font-size: ${(props) => props.$fontSize};
  font-weight: 900;

  padding: ${(props) => props.$padding};
  display: flex;
  justify-content: center;
  text-align: center;
`;

const StyledSpan = styled.span`
  background: url(${(props) => props.$imageUrl}) repeat;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  display: block;
`;

const TransparentBoxText = ({
  text,
  $padding = "0",
  $fontSize = "12vw",
  $imageUrl = "https://images.pexels.com/photos/2593143/pexels-photo-2593143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
}) => (
  <StyledDiv $fontSize={$fontSize} $padding={$padding}>
    <StyledSpan $imageUrl={$imageUrl}>{text}</StyledSpan>
  </StyledDiv>
);

export default TransparentBoxText;
