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
  @media (max-width: 768px) {
    font-size: ${(props) => props.$fontSizeMobile};
  }
  font-weight: 900;

  padding: ${(props) => props.$padding};
  display: flex;
  justify-content: center;
  text-align: center;
`;

const StyledSpan = styled.span`
  background: url(${(props) => props.$imageUrl}) repeat;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: block;
`;

const TransparentBoxText = ({
  text,
  $padding = "0",
  $fontSize = "12vw",
  $fontSizeMobile = "12vw",
  $imageUrl = "./tibet.jpeg",
}) => (
  <StyledDiv
    $fontSize={$fontSize}
    $fontSizeMobile={$fontSizeMobile}
    $padding={$padding}
  >
    <StyledSpan $imageUrl={$imageUrl}>{text}</StyledSpan>
  </StyledDiv>
);

export default TransparentBoxText;
