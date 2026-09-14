import PropTypes from "prop-types";
import styled from "styled-components";
import TypewriterText from "./TypewriterText";

const StyledParagraph = styled.p`
  &&& {
    margin: 0 0 0.75em 0;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const StyledList = styled.ul`
  &&& {
    margin: 0 0 0.75em 0;
    padding-left: 1.25em;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const StyledListItem = styled.li`
  &&& {
    margin-bottom: 0.35em;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const LINE_START_DELAY_STEP = 0.05;

// `text` supports a light markup: blank lines separate paragraphs/lists,
// lines starting with "- " within a block become a bullet list, and
// **bold**/*italic* render as inline emphasis.
const ExpandedText = ({ text }) => {
  const blocks = text.split(/\n\n+/).map((block) => block.trim());

  let lineCounter = 0;

  return blocks.map((block, blockIndex) => {
    const lines = block.split("\n").map((line) => line.trim());
    const isList = lines.every((line) => line.startsWith("- "));

    if (isList) {
      return (
        // eslint-disable-next-line react/no-array-index-key
        <StyledList key={blockIndex}>
          {lines.map((line) => {
            const startDelay = lineCounter * LINE_START_DELAY_STEP;
            lineCounter += 1;
            return (
              <StyledListItem key={line}>
                <TypewriterText text={line.slice(2)} startDelay={startDelay} />
              </StyledListItem>
            );
          })}
        </StyledList>
      );
    }

    const startDelay = lineCounter * LINE_START_DELAY_STEP;
    lineCounter += 1;

    return (
      // eslint-disable-next-line react/no-array-index-key
      <StyledParagraph key={blockIndex}>
        <TypewriterText text={lines.join(" ")} startDelay={startDelay} />
      </StyledParagraph>
    );
  });
};

ExpandedText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ExpandedText;
