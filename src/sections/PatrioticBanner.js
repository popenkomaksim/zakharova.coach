import styled from "styled-components";

const StyledPatrioticText = styled.p`
  margin: 2em 0;
  padding: 0.6em 0.4em;
  background: transparent;
  color: #b01e28;
  font-weight: 900;
  font-size: clamp(1.1rem, 8vw, 2.75rem);
  white-space: nowrap;
  text-align: center;
`;

const PatrioticBanner = () => (
  <StyledPatrioticText>Хай та русня здохне</StyledPatrioticText>
);

export default PatrioticBanner;
