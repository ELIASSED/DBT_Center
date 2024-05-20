import React from "react";
import { Container } from "../../globalStyle";
import {
  ParagraphSec,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ParagraphColumn,
} from "./ParagraphSection.elements";

const ParagraphSection = ({
  lightBg,
  primary,
  lightTopLine,
  lightTextDesc,
  // buttonLabel,
  description,
  headline,
  lightText,
  topLine,
  alt,
  start,
}) => {
  return (
    <>
      <ParagraphSec lightBg={lightBg}>
        <Container>
          <ParagraphColumn>
          <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
              </TextWrapper>
          </ParagraphColumn>
        </Container>
      </ParagraphSec>
    </>
  );
};

export default ParagraphSection;
