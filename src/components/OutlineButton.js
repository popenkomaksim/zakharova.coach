import styled from "styled-components";
import { Button } from "antd";

const StyledOutlineButton = styled(Button)`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    width: fit-content;
    height: auto;
    margin: 1em auto 0 auto;
    padding: 0.6em 1.4em;
    font-weight: 600;
    color: #353935;
    border: 1px solid #353935;
    border-radius: 2em;

    &:hover,
    &:focus {
      color: #b01e28;
      border-color: #b01e28;
    }
  }
`;

export default StyledOutlineButton;
