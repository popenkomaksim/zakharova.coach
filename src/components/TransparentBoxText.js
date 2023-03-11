import styled from "styled-components";

// display: inline-block;
const Div = styled.div`
  background-color: #F6F6F6;
  overflow: hidden;
  
  padding: 10px;
  font-weight: bold;
  
  color: transparent;
  font-size: ${props => props.fontSize};
  font-weight: 900;
  
  width:100%;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const Span = styled.span`
  background: url(${props => props.imageUrl})  repeat;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;  
  display: block;
`;

const TransparentBoxText = ({text, fontSize="12vw", imageUrl="https://images.pexels.com/photos/2593143/pexels-photo-2593143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}) => <>
  <Div fontSize={fontSize}>
    <Span imageUrl={imageUrl}>{text}</Span>
  </Div>
</>;

export default TransparentBoxText;