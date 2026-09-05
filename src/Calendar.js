import "@fontsource/montserrat";
import "./App.css";
import styled from "styled-components";

import { Divider } from "antd";
import PageShell from "./components/PageShell";

const StyledIframe = styled.iframe`
  border: 0;
`;

const Project10 = () => (
  <PageShell>
    <StyledIframe
      title="Calendar"
      src="https://calendar.google.com/calendar/embed?src=60f2ac3e5a00a821fa841b3b4d27dbba2d162aa119a67f4b20c878195d13e8c0%40group.calendar.google.com&ctz=Europe%2FKiev"
      width="100%"
      height="600"
    />
    <Divider />
  </PageShell>
);

export default Project10;
