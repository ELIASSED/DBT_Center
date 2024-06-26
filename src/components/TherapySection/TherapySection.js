import React from "react";
import { Container } from "../../globalStyle";
import {
  TherapySec,
  TherapyRow,
  TherapyColumn,
  TherapyTextWrapper,
  TherapyTopLine,
  TherapyHeading,
  TherapySubtitle,
  TherapyImgWrapper,
  TherapyImg,
  TherapyVideoWrapper,
  TherapyVideoFrame,
} from "./TherapySection.elements";

const TherapySection = ({
  lightBg,
  imgStart,
  lightTopLine,
  lightTextDesc,
  description,

  headline,
  lightText,
  topLine,
  img,
  alt,
  start,
  videoUrl,
}) => {
  return (
    <TherapySec lightBg={lightBg}>
      <Container>
        <TherapyRow imgStart={imgStart}>
          {imgStart ? (
            <>
              <TherapyColumn>
                <TherapyVideoWrapper>
                  {videoUrl ? (
                    <TherapyVideoFrame
                      src={videoUrl}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <TherapyImgWrapper start={start}>
                      <TherapyImg src={img} alt={alt} />
                    </TherapyImgWrapper>
                  )}
                </TherapyVideoWrapper>
              </TherapyColumn>
              <TherapyColumn>
                <TherapyTextWrapper>
                  <TherapyTopLine lightTopLine={lightTopLine}>
                    {topLine}
                  </TherapyTopLine>
                  <TherapyHeading lightText={lightText}>
                    {headline}
                  </TherapyHeading>
                  <TherapySubtitle lightTextDesc={lightTextDesc}>
                    {description}
                  </TherapySubtitle>
                </TherapyTextWrapper>
              </TherapyColumn>
            </>
          ) : (
            <>
              <TherapyColumn>
                <TherapyTextWrapper>
                  <TherapyTopLine lightTopLine={lightTopLine}>
                    {topLine}
                  </TherapyTopLine>
                  <TherapyHeading lightText={lightText}>
                    {headline}
                  </TherapyHeading>
                  <TherapySubtitle lightTextDesc={lightTextDesc}>
                    {description}
                  </TherapySubtitle>
                </TherapyTextWrapper>
              </TherapyColumn>
              <TherapyColumn>
                <TherapyVideoWrapper>
                  {videoUrl ? (
                    <TherapyVideoFrame
                      src={videoUrl}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <TherapyImgWrapper start={start}>
                      <TherapyImg src={img} alt={alt} />
                    </TherapyImgWrapper>
                  )}
                </TherapyVideoWrapper>
              </TherapyColumn>
            </>
          )}
        </TherapyRow>
      </Container>
    </TherapySec>
  );
};

export default TherapySection;
