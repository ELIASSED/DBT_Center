import React from "react";
import { Container } from "../../globalStyle";
import {
  TherapySec,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  TherapyColumn,
  TherapyRow,
  ImgWrapper,
  Img,
} from "./TherapySection.elements";

const TherapySection = ({
  lightBg,
  // primary,
  lightTopLine,
  lightTextDesc,
  // buttonLabel,
  description,
  headline,
  lightText,
  imgStart,
  img,
  topLine,
  alt,
  start,
}) => {
  return (
    <>
      <TherapySec lightBg={lightBg}>
        <Container>
          <TherapyRow imgStart={imgStart}>
            <TherapyColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
              </TextWrapper>
            </TherapyColumn>
            <TherapyColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </TherapyColumn>
          </TherapyRow>
        </Container>
      </TherapySec>
    </>
  );
};

export default TherapySection;
